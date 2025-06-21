import amqp from 'amqplib';

export async function sendDataToQueue(data: object , _queue:string) 
{
  try {
    const connection = await amqp.connect('amqp://rabbitmq:5672');
    const channel = await connection.createChannel();

    const msgBuffer = Buffer.from(JSON.stringify(data));
    const queue = _queue;
    
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




export async function receiveFromQueue() {

  try {
    const connection = await amqp.connect('amqp://rabbitmq:5672');
    const channel = await connection.createChannel();

    const queue = 'chat';
    await channel.assertQueue(queue);

    console.log('Waiting for messages in %s. To exit press CTRL+C', queue);
    channel.consume(queue, (data:any , err:any) =>{

    });

  } 
  catch (err:any) 
  {
    console.error('RabbitMQ error:', err.message);
  }
}
