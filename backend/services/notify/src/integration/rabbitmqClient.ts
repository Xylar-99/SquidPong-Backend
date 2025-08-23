import amqp from "amqplib";

import { sendEmailMessage } from "../utils/verification_messenger";
import { createNotification , updateNotification , deleteNotification } from "../controllers/helps.controller";
let connection: any;
let channel: any;


export async function initRabbitMQ() 
{
  connection = await amqp.connect("amqp://rabbitmq:5672");
  channel = await connection.createChannel();
  
  await channel.assertQueue("emailhub");
  await channel.assertQueue("friends");
  await channel.assertQueue("test");

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

// Consumer function for RabbitMQ


export async function receiveFromQueue(queue: string) 
{
  try 
  {
    channel.consume(queue, async (msg: any) => {
      if (!msg) return;

      const data = JSON.parse(msg.content.toString());
      channel.ack(msg);

      // Example: message must have "action" field: create, update, delete
      switch (data.action) 
      {
        case 'create':
          await createNotification(data.payload);
          console.log('Notification created:', data.payload);
          break;
        case 'update':
          await updateNotification(data.payload);
          console.log('Notification updated:', data.payload);
          break;
        case 'delete':
          await deleteNotification(data.payload.id);
          console.log('Notification deleted:', data.payload.id);
          break;
        default:
          console.warn('Unknown action for notification:', data);
      }
    });
  } 
  catch (err: any) 
  {
    console.error('RabbitMQ error:', err.message);
  }
}
