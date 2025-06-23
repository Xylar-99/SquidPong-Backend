import app from './app'
import path from 'path'
import WebSocket from 'ws'
import dotenv from 'dotenv'

import {sendDataToQueue, receiveFromQueue, initRabbitMQ} from './utils/utils'

dotenv.config({path: path.resolve(__dirname, '../.env')})

const port = Number(process.env.PORT)
const host = process.env.HOST

console.log(port, host)

async function StartServer() 
{
	try 
	{
		app.listen({port: port, host: host}, () => {
			console.log(`server listen on http://${host}:${port} ...`)
		})
	} 
	catch (error) 
	{
		console.log('error in server')
		process.exit(1)
	}
}

export const ws = new WebSocket.Server({noServer: true})



ws.on('connection', async (ws: any, req: any) => {

	const token = req.headers.cookie.split(" ")[0].split("=")[1].slice(0 , -1)
    const payload: any = await app.jwt.verify(token);
	console.log(payload);

	(ws as any).userId = payload.userId;

	ws.on('message', async (message: any) => {
		const dataString: string = Buffer.from(message).toString('utf8')
		const dataJson = JSON.parse(dataString)

		if (dataJson.type == 'chat') 
			await sendDataToQueue(dataJson, 'chat')

	})

	ws.on('close', () => {
		console.log('Client disconnected')
	})
})










app.server.on('upgrade', (request: any, socket: any, head: any) => {
	
	if (request.url === '/ws') 
		{
		ws.handleUpgrade(request, socket, head, (client: any) => {
			ws.emit('connection', client, request)
		})
		} 
	else 
		socket.destroy()
})



async function start() {
	StartServer()
	await initRabbitMQ()
	await receiveFromQueue('chatservice')
}

start()
