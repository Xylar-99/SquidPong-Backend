import { sendDataToQueue  } from '../integration/rabbitmqClient'
import { FastifyRequest } from "fastify";
import { ws } from '../server';
import app from '../app';


export async function handleWsConnect(ws: any, req: FastifyRequest) 
{
    try 
    {
    const cookieHeader = req.headers.cookie;
    if (!cookieHeader)
      throw new Error('No cookie header found');

    const token = cookieHeader.split(" ")[0].split("=")[1].slice(0, -1);
    const payload: any = await app.jwt.verify(token);
    console.log(payload);
    
    (ws as any).userId = payload.userId;
    
    ws.on("message",onClientMessage);
    
    ws.on("close", onClientDisconnect);

    }
    catch{}
}


async function onClientMessage(message: any) 
{
    const dataString: string = Buffer.from(message).toString("utf8");
    const dataJson = JSON.parse(dataString);

    if (dataJson.type == "chat") 
        await sendDataToQueue(dataJson, "chat");

}




async function onClientDisconnect() 
{
    console.log("client disconnected")
}




export function handleHttpUpgrade(request: any, socket: any, head: any) 
{
    if (request.url === '/ws') 
        {
        ws.handleUpgrade(request, socket, head, (client: any) => {
            ws.emit('connection', client, request)
        })
        } 
    else 
        socket.destroy()
}

