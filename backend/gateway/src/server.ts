import app from './app'
import path from 'path';
import WebSocket from 'ws'
import dotenv from 'dotenv';
dotenv.config({ path: path.resolve(__dirname, '../.env') });


const port = Number(process.env.PORT);
const host = process.env.HOST;

console.log(port , host)

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

const ws = new WebSocket.Server({ noServer: true });

ws.on('connection', (ws:any, request:any) => {
  console.log('WebSocket client connected');

  ws.on('message', (message:any) => {

    const msgString: string = Buffer.from(message).toString('utf8');
    const msgJson = JSON.parse(msgString);  
    console.log('Received:', msgJson);     
    ws.send(`hello ${msgJson.type}`);
  });

  ws.on('close', () => {
    console.log('Client disconnected');
  });
});



app.server.on('upgrade', (request:any, socket:any, head:any) => {
  if (request.url === '/ws')
    {
    ws.handleUpgrade(request, socket, head, (client:any) => {
      ws.emit('connection', client, request);
    });
  } 
  else 
    socket.destroy();
});


StartServer();






