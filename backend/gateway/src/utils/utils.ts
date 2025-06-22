import redis from './redis';
import amqp from 'amqplib';
import { hashPassword } from './hashedPassword';


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