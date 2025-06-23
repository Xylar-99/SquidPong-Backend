import dotenv from 'dotenv';
import path from 'path'
// import app from './app'

dotenv.config({ path: path.resolve(__dirname, '../.env') });

// const port = Number(process.env.PORT);
// const host = process.env.HOST;


// async function StartServer()
// {
//     try 
//     {
//         app.listen({port : port , host : host} , () => {console.log(`server listen on http://${host}:${port} ...`)})
//     } 
//     catch (error) 
//     {
//         console.log("error in server")
//         process.exit(1);
//     }
// }




import { sendEmailMessage } from './utils/utils';
import amqp from 'amqplib';

let connection:any;
let channel:any;

export async function initRabbitMQ() 
{
  connection = await amqp.connect('amqp://rabbitmq:5672');
  channel = await connection.createChannel();
  await channel.assertQueue('emailhub');

  console.log("Connected to RabbitMQ");
  
  return { connection, channel };
}



export async function sendDataToQueue(data: any) 
{
  try {

    const queue = 'chat';

    const msgBuffer = Buffer.from(JSON.stringify(data));
    channel.sendToQueue(queue, msgBuffer);
  } 
  catch (error) 
  {
    console.log("Error in rabbit connection:", error);
  }
}



export async function receiveFromQueue() 
{
  const queue:string = 'chat';

  try 
  {
    channel.consume(queue, sendEmailMessage); // problem remove message from queue

  } 
  catch (err:any) 
  {
    console.error('RabbitMQ error:', err.message);
  }
}

initRabbitMQ();
receiveFromQueue();