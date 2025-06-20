import dotenv from 'dotenv';
import http = require('http');
import app from './app'

import { Server } from 'socket.io';


dotenv.config();

const port = Number(process.env.PORT);
const host = process.env.HOST;





// socket.io 
const server = http.createServer(app);
const io = new Server(server);


io.on('connection', (socket:any) => {
  console.log('User connected:', socket.id);

  socket.on('chat message', (msg:any) => {
    console.log('Message:', msg);
    io.emit('chat message', msg);
  });

  socket.on('disconnect', () => {
    console.log('User disconnected:', socket.id);
  });
});


// server fastify

async function StartServer()
{
    try 
    {
        app.listen({port : port , host : host} , () => {console.log(`server listen on http://${host}:${port} ...`)})
    } 
    catch (error) 
    {
        console.log("error in server")
        process.exit(1);
    }
}


StartServer();


// chat-service/index.js

// const serverhttp:any = http.createServer(app.server);
// const io = new Server(serverhttp, {
//   cors: { origin: "*" }, // You can restrict this to your frontend
// });

// io.on("connection", (socket:any) => {
//   console.log("🟢 User connected to Chat Service");

//   socket.on("chat message", (msg:any) => {
//     console.log("Message:", msg);
//     io.emit("chat message", msg);
//   });
// });

// serverhttp.listen(port, () => { console.log("Chat Service running on port 3000"); });

