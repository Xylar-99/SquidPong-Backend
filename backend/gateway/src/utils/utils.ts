import redis from './redis';
import amqp from 'amqplib';

async function sendDataToQueue(data: object , _queue:string) 
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



export async function sendVerificationEmail(_email:string)
{
  const code:string = await generate6DigitCode()
  await redis.set(_email, code,'EX', '60')

  const data:object = {email:_email , text:code}
  await sendDataToQueue(data , 'emailhub');
}




async function generate6DigitCode(): Promise<string> 
{
  const value:string = Math.floor(100000 + Math.random() * 900000).toString();
  return value
}
