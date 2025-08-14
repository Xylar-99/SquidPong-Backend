import { sendDataToQueue  } from '../integration/rabbitmqClient'
import { FastifyRequest } from "fastify";
import { ws } from '../server';
import app from '../app';


function getCookie(req: any, name: string)
 {
  const cookies = req.headers.cookie?.split(';').map((c:any) => c.trim()) || [];
  const match = cookies.find((c:any) => c.startsWith(name + '='));
  return match?.split('=')[1];
}


export async function handleWsConnect(ws: any, req: FastifyRequest) 
{
  try 
  {
    // (ws as any).connectionId = generateConnectionId();  later for 
    
    console.log(`User ${ws.userId} connected via WebSocket url is ${req.url}`);

    if(req.url == '/game')
      ws.on("message", onGameMessage);
    else if(req.url == '/chat')
      ws.on("message", onChatMessage);
    else if(req.url == '/notification')
      ws.on("message", onNotificationMessage);


    ws.on("close", onClientDisconnect);
    
    // ws.send(JSON.stringify({
    //   type: 'connected',
    //   userId: ws.userId,
    // }));
    
  }
  catch (error) 
  {
    console.error('WebSocket connection setup failed:', error);
    ws.close(1008, 'Connection setup failed');
  }


}

async function onGameMessage(this:WebSocket , message: any) 
{
  
    const dataString: string = Buffer.from(message).toString("utf8");
    const dataJson = JSON.parse(dataString);

    const id = (this as any).userId; 

    console.log(dataJson , id);

    if (dataJson.type == "chat")
        await sendDataToQueue(dataJson, "chat");
    if (dataJson.type == "email")
        await sendDataToQueue(dataJson, "emailhub");

}


async function onChatMessage(this:WebSocket , message: any) 
{
    const dataString: string = Buffer.from(message).toString("utf8");
    const dataJson = JSON.parse(dataString);

    const id = (this as any).userId; 

    console.log(dataJson , id);

    if (dataJson.type == "chat")
        await sendDataToQueue(dataJson, "chat");
    if (dataJson.type == "email")
        await sendDataToQueue(dataJson, "emailhub");

}


async function onNotificationMessage(this:WebSocket , message: any) 
{
    const dataString: string = Buffer.from(message).toString("utf8");
    const dataJson = JSON.parse(dataString);

    const id = (this as any).userId; 

    console.log(dataJson , id);

    if (dataJson.type == "chat")
        await sendDataToQueue(dataJson, "chat");
    if (dataJson.type == "email")
        await sendDataToQueue(dataJson, "emailhub");

}



async function onClientDisconnect() 
{
    console.log("client disconnected")
}






export function handleHttpUpgrade(req: any, socket: any, head: any) 
{
  const includesURL = ['/chat', '/game', '/notification'];


    try 
    {
      if (!includesURL.includes(req.url))
          throw new Error('No endpoint found');

      const token = getCookie(req, 'accessToken');
      console.log(token)
      if (!token) throw new Error('No accessToken found');

      const payload: any = app.jwt.verify(token);

      ws.handleUpgrade(req, socket, head, (client:any) => {
        client.userId = payload.userId;
        ws.emit('connection', client, req);
      });

    } 
    catch (err) 
    {
      console.log("not loged yet  please login first")
      socket.destroy();
    }
}

