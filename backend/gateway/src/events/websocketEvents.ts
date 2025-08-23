import { sendDataToQueue  } from '../integration/rabbitmqClient'
import { FastifyRequest } from "fastify";
import { WebSocket } from "ws";

import { ws } from '../server';
import app from '../app';



async function sendSingleMultipartVoid(url: string, fieldName: string, value: string | File | Blob , userId : string )
{
  const formData = new FormData();
  formData.append(fieldName, value);

  try 
  {
    await fetch(url, { method: "PUT", body: formData , headers: { "x-user-id": userId}});
  }
  catch (err) 
  {
    console.error("Error sending multipart data:", err);
  }

}


// handel

interface UserSocket {
  socket: any;
  type: 'game' | 'chat-notification';
}

export const onlineUsers = new Map<string, UserSocket[]>();




export async function handleWsConnect(ws: any, req: FastifyRequest)
{

  try 
  {
    const type = req.url === '/game' ? 'game' : 'chat-notification';

    // added online user 
    if (!onlineUsers.has(String(ws.userId)))
      onlineUsers.set(String(ws.userId), []);
    onlineUsers.get(String(ws.userId))!.push({ socket: ws, type });
    ////////////////

    // update data in user-service  is online
    await sendSingleMultipartVoid( 'http://user:4001/api/user/me', "status", "DO_NOT_DISTURB", ws.userId );

    console.log(`User type of ${typeof ws.userId} **** ws.id :  ${ws.userId} connected via ${type} socket`);

    if (type === 'game')
      ws.on("message", onGameMessage);
    else
      ws.on("message", onChatNotificationMessage);

    ws.on("close", () => { onClientDisconnect(ws)});

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

}



async function onChatNotificationMessage(this:WebSocket , message: any)
{
    const data = JSON.parse(message.toString());
    console.log(data);

    
    if (data.type == "chat")
      await sendDataToQueue(data , 'chat');
    else if (data.type == "notification")
      console.log("handler of notification")

}





async function onClientDisconnect(ws:any) 
{

  const userId : string = ws.userId;
  const sockets = onlineUsers.get(userId);

  if (sockets)
  {
    // remove all socket first
    for (const { socket } of sockets)
    {
        if (socket.readyState === ws.OPEN) socket.close();
    }

    onlineUsers.delete(userId);
  }

  // update data in user-service  is offline
  sendSingleMultipartVoid('http://user:4001/api/user/me' , "status" , "OFFLINE" , ws.userId)
  
  console.log(`client ${ws.userId} disconnected`)
}






export function handleHttpUpgrade(req: any, socket: any, head: any) 
{
  const includesURL = ['/game', '/chat-notification'];


    try 
    {
      if (!includesURL.includes(req.url))
          throw new Error('No endpoint found');

      const token = req.headers.cookie.split('=')[1]
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












export function sendWsMessage(msg: any) 
{

  console.log(onlineUsers)
  try 
  {

    const data = JSON.parse(msg.content.toString());

    console.log("gateway service data is:", data);
    const { to } = data;
    if (!to) return;

    if (onlineUsers.size > 0) 
      console.log("There are online users:", onlineUsers.size);
    else
      console.log("No users online");

    const sockets = onlineUsers.get(to);
    if (!sockets) 
      {
      console.log(`User ${to} not online`);
      return;
    }

      const socket = sockets[0].socket;
      if (socket.readyState === WebSocket.OPEN)
        socket.send(JSON.stringify(data));


  } 
  catch (err) 
  {
    console.error("Failed to send WS message:", err);
  }
}
