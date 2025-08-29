import amqp from "amqplib";

let connection: any;
let channel: any;


export async function initRabbitMQ() 
{
  connection = await amqp.connect("amqp://rabbitmq:5672");
  channel = await connection.createChannel();
  
  await channel.assertQueue("game");

  console.log("Connected to RabbitMQ");
}


export async function sendDataToQueue(data: any, queue: string) 
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




export async function receiveFromQueue(queue: string) 
{
  channel.consume(queue, receiveAndDeliver);
}


function receiveAndDeliver(msg: any) 
{

  const userIdTo = '1' // this id is default  important add him ni sendDataToQueue

  console.log("i call him from gateway ")
  if (msg !== null) 
  {
  const data = JSON.parse(msg.content.toString());  // here recive data  check game.html  how send data using socket
  console.log(data);
  channel.ack(msg);
  sendDataToQueue({...data , userIdTo} , 'test') //  this important    for send data to gateway for send to user online
  }
}


