import amqp from 'amqplib';

export async function sendmsg_to_rabbitmq(data: object) {
  try {
    const connection = await amqp.connect('amqp://rabbitmq:5672');
    const channel = await connection.createChannel();

    const queue = 'emailhub';
    const msgBuffer = Buffer.from(JSON.stringify(data));

    await channel.assertQueue(queue);
    channel.sendToQueue(queue, msgBuffer);

    await channel.close();
    await connection.close();
  } 
  catch (error) 
  {
    console.log("Error in rabbit connection:", error);
  }
}

