import amqp from "amqplib";
import {
  giveUp,
  startGame,
  toggleReadyStatus,
} from "../controllers/matchController";

let connection: any;
let channel: any;

export async function initRabbitMQ() {
  try {
    const rabbitmqUrl = process.env.RABBITMQ_URL || "amqp://rabbitmq:5672";
    connection = await amqp.connect(rabbitmqUrl);
    channel = await connection.createChannel();

    // Assert queues that this service will use
<<<<<<< HEAD
    await channel.assertQueue("game", { durable: true });
    // await channel.assertQueue("test", { durable: true }); // Gateway queue
    
=======
    await channel.assertQueue("game");
    // await channel.assertQueue("test", { durable: true }); // Gateway queue

>>>>>>> 55b8a486fda67abb1529294c480c39908acdd4a1
    // Add connection error handling
    connection.on("error", (err: any) => {
      console.error("RabbitMQ connection error:", err);
    });

    connection.on("close", () => {
      console.log("RabbitMQ connection closed");
    });

    console.log("✅ Game Service connected to RabbitMQ");
  } catch (error) {
    console.error("❌ Failed to connect to RabbitMQ:", error);
    throw error;
  }
}

export async function sendDataToQueue(data: any, queue: string) {
  try {
    if (!channel) {
      console.error("RabbitMQ channel not available");
      return;
    }

    const msgBuffer = Buffer.from(JSON.stringify(data));
    channel.sendToQueue(queue, msgBuffer, { persistent: true });
    console.log(`📤 Sent message to ${queue}:`, data);
  } catch (error) {
    console.error("Error sending to queue:", error);
  }
}

// export async function receiveFromQueue(queue: string) {
//   try
//   {
//     if (!channel) {
//       console.error("RabbitMQ channel not available");
//       return;
//     }

//     await channel.consume(queue, receiveAndDeliver, { noAck: false });
//     console.log(`🎧 Listening for messages on queue: ${queue}`);
//   } catch (error) {
//     console.error("Error setting up consumer:", error);
//   }
// }

// function receiveAndDeliver(msg: any)
// {
//   if (msg === null) return;

//   try
//   {
//     const data = JSON.parse(msg.content.toString());
//     console.log("📥 Received game message:", data);

//   }
//   catch (error)
//   {
//     console.error("Error processing message:", error);
//     // Reject message and don't requeue on parsing errors
//     channel.nack(msg, false, false);
//   }
// }

export async function receiveFromQueue(queue: string) {
  channel.consume(queue, recieveHandler);
}

function recieveHandler(msg: any) {
  if (msg === null) return;

  try {
    const data = JSON.parse(msg.content.toString());
    const response = processMacthMessage(data.data);

    channel.ack(msg);
  } catch (error) {
    console.error("Error processing message:", error);
    // Reject message and don't requeue on parsing errors
    channel.nack(msg, false, false);
  }
}

async function processMacthMessage(data: any) {
  if (!data.event) {
    console.error("Invalid message format: missing type");
    return;
  }
  switch (data.event) {
    case "match-player-update":
      return toggleReadyStatus(data.matchId, data.playerId);
    case "match-give-up":
      return giveUp(data.matchId, data.playerId);
    case "match-start": {
      try {
        const updatedMatch = await startGame(data.matchId, data.playerId);

        sendDataToQueue(
          {
            to: data.senderGMid, // send only to the starter
            event: "match-started",
            data: { match: updatedMatch },
          },
          "test"
        ); // TODO : THE GOAL FOR TOMORROW IS TO REFAC THAT SHIT, A CLEAR USER ID TO SEND DATA WITH IN THE RMQ
      } catch (error) {
        sendDataToQueue(
          {
            to: data.senderGMid, // send back only to the starter
            event: "match-error",
            data: {
              message: (error as Error).message || "Failed to start match",
            },
          },
          "test"
        );
      }
      break;
    }

    default:
      console.error("Unknown event type:", data.event);
      return;
  }
}

// Game logic handlers
function handlePlayerMove(data: any) {
  // Process player move logic
  const result = {
    type: "move_result",
    gameId: data.gameId,
    playerId: data.playerId,
    userIdTo: data.playerId, // Send back to the player who made the move
    success: true,
    newPosition: data.position,
    timestamp: Date.now(),
  };

  console.log("🎯 Player move processed");
  return result;
}
function handleGameStart(data: any) {
  // Initialize game state
  const result = {
    type: "game_started",
    gameId: data.gameId,
    userIdTo: data.playerId, // or broadcast to all players
    gameState: {
      status: "active",
      startTime: Date.now(),
      players: data.players || [],
    },
    message: "Game has started!",
  };

  console.log("🚀 Game started");
  return result;
}
function handleGameEnd(data: any) {
  // Process game end logic
  const result = {
    type: "game_ended",
    gameId: data.gameId,
    userIdTo: "broadcast", // Send to all players in the game
    winner: data.winner,
    finalScore: data.score,
    timestamp: Date.now(),
    message: `Game ended! Winner: ${data.winner}`,
  };

  console.log("🏁 Game ended");
  return result;
}
function handlePlayerInvitation(data: any) {
  // Process invitation logic
  const result = {
    type: "invitation_received",
    gameId: data.gameId,
    userIdTo: data.invitedPlayerId, // Send to invited player
    fromPlayer: data.fromPlayer,
    gameType: data.gameType,
    message: `${data.fromPlayer} invited you to play ${data.gameType}`,
    timestamp: Date.now(),
  };

  console.log("💌 Invitation processed");
  return result;
}
// Graceful shutdown
export async function closeRabbitMQ() {
  try {
    if (channel) await channel.close();
    if (connection) await connection.close();
    console.log("✅ RabbitMQ connection closed gracefully");
  } catch (error) {
    console.error("Error closing RabbitMQ:", error);
  }
}
