import amqp from "amqplib";

let connection: any;
let channel: any;

export async function initRabbitMQ() {
  try {
    const rabbitmqUrl = process.env.RABBITMQ_URL || "amqp://rabbitmq:5672";
    connection = await amqp.connect(rabbitmqUrl);
    channel = await connection.createChannel();
    
    // Assert queues that this service will use
    await channel.assertQueue("game", { durable: true });
    await channel.assertQueue("test", { durable: true }); // Gateway queue
    
    // Add connection error handling
    connection.on('error', (err: any) => {
      console.error('RabbitMQ connection error:', err);
    });
    
    connection.on('close', () => {
      console.log('RabbitMQ connection closed');
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



export async function receiveFromQueue(queue: string) 
{
  channel.consume(queue, receiveAndDeliver);
}


function receiveAndDeliver(msg: any) 
{

  const userIdTo = '1'

  if (msg !== null) 
  {
  const data = JSON.parse(msg.content.toString());  // here recive data  check game.html  how send data using socket
  channel.ack(msg);
  sendDataToQueue({...data , userIdTo} , 'test') //  this important    for send data to gateway for send to user online
    // Process the game logic here
    const processedData = processGameMessage(data);
    
    // Send processed result back to gateway for WebSocket delivery
    if (processedData) {
      sendDataToQueue(processedData, 'test');
    }
    
    // Acknowledge the message
    channel.ack(msg);
  
}
}

// Game-specific message processing
function processGameMessage(data: any) {
  try {
    // Extract necessary info
    const { type, gameId, playerId, ...gameData } = data;
    
    console.log(`🎮 Processing ${type} for game ${gameId}, player ${playerId}`);
    
    // Process based on message type
    switch (type) {
      case 'player_move':
        return handlePlayerMove(data);
      
      case 'game_start':
        return handleGameStart(data);
        
      case 'game_end':
        return handleGameEnd(data);
        
      case 'player_invitation':
        return handlePlayerInvitation(data);
        
      default:
        console.log(`⚠️ Unknown message type: ${type}`);
        return null;
    }
  } catch (error) {
    console.error("Error in processGameMessage:", error);
    return null;
  }
}

// Game logic handlers
function handlePlayerMove(data: any) {
  // Process player move logic
  const result = {
    type: 'move_result',
    gameId: data.gameId,
    playerId: data.playerId,
    userIdTo: data.playerId, // Send back to the player who made the move
    success: true,
    newPosition: data.position,
    timestamp: Date.now()
  };
  
  console.log("🎯 Player move processed");
  return result;
}

function handleGameStart(data: any) {
  // Initialize game state
  const result = {
    type: 'game_started',
    gameId: data.gameId,
    userIdTo: data.playerId, // or broadcast to all players
    gameState: {
      status: 'active',
      startTime: Date.now(),
      players: data.players || []
    },
    message: 'Game has started!'
  };
  
  console.log("🚀 Game started");
  return result;
}

function handleGameEnd(data: any) {
  // Process game end logic
  const result = {
    type: 'game_ended',
    gameId: data.gameId,
    userIdTo: 'broadcast', // Send to all players in the game
    winner: data.winner,
    finalScore: data.score,
    timestamp: Date.now(),
    message: `Game ended! Winner: ${data.winner}`
  };
  
  console.log("🏁 Game ended");
  return result;
}

function handlePlayerInvitation(data: any) {
  // Process invitation logic
  const result = {
    type: 'invitation_received',
    gameId: data.gameId,
    userIdTo: data.invitedPlayerId, // Send to invited player
    fromPlayer: data.fromPlayer,
    gameType: data.gameType,
    message: `${data.fromPlayer} invited you to play ${data.gameType}`,
    timestamp: Date.now()
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