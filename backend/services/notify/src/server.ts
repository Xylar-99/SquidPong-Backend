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






      
import amqp from 'amqplib';
import { sendEmailMessage } from './utils/utils';


async function receiveRabbitMQ() {

  try {
    const connection = await amqp.connect('amqp://rabbitmq:5672');
    const channel = await connection.createChannel();

    const queue = 'emailhub';
    await channel.assertQueue(queue);

    console.log('Waiting for messages in %s. To exit press CTRL+C', queue);
    channel.consume(queue, sendEmailMessage);

  } 
  catch (err:any) 
  {
    console.error('RabbitMQ error:', err.message);
  }
}


receiveRabbitMQ();
// StartServer();
