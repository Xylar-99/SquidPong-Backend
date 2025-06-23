import redis from './redis';
import amqp from 'amqplib';
import { hashPassword } from './hashedPassword';
import { ws } from '../server';

// rabbitmq.js

let connection:any;
let channel:any;

export async function initRabbitMQ() 
{

  connection = await amqp.connect('amqp://rabbitmq:5672');
  channel = await connection.createChannel();
  await channel.assertQueue('chat');
  await channel.assertQueue('emailhub');
  await channel.assertQueue('chatservice');

  console.log("Connected to RabbitMQ");

}



export async function sendDataToQueue(data: any  , queue:string) 
{
  try 
  {
    const msgBuffer = Buffer.from(JSON.stringify(data));
    channel.sendToQueue(queue, msgBuffer);
  } 
  catch (error) 
  {
    console.log("Error in rabbit connection:", error);
  }
}



export async function receiveFromQueue(queue:string ) 
{
  
    channel.consume(queue, (msg:any) =>{ 
    if (msg !== null) 
      {
        const data = JSON.parse(msg.content.toString());
        ws.clients.forEach((client: any) => {
        client.send(JSON.stringify(data));
        });

        channel.ack(msg);
        console.log("Message received:", data);
      }
      });
}



export async function sendVerificationEmail(data:any)
{
  const code:string = await generate6DigitCode()

  data.password = await hashPassword(data.password);
  data['code'] = code;

  console.log(code);

  await redis.set(data.email, JSON.stringify(data),'EX', '260')

  const info:object = {email:data.email , text:code}
  await sendDataToQueue(info , 'emailhub');
}




async function generate6DigitCode(): Promise<string> 
{
  const value:string = Math.floor(100000 + Math.random() * 900000).toString();
  return value
}

export async function sendToService(_url:string , _method:string , _data:any): Promise<object>
{

  let res:any ;
  if(_method === 'GET')
    res = await fetch(_url); 
  else
    res = await fetch(_url, {method: _method,headers: { 'Content-Type': 'application/json' },body: JSON.stringify(_data), });

  return await res.json();
}


