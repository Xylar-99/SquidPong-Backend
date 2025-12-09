import app from './app'
import { WebSocket } from "ws";
import dotenv from 'dotenv'
import { handleWsConnect  , handleHttpUpgrade} from './events/websocketEvents';
import { receiveFromQueue , initRabbitMQ } from './integration/rabbitmq.integration'
import { validateEnvironmentVariables } from './utils/envValidator'
import registerPlugins from './plugins/plugins';
import { authenticateUser } from './validators/middleware';
import { errorHandler } from './utils/errorHandler';


dotenv.config()

// Validate environment variables before starting
validateEnvironmentVariables()

const port = Number(process.env.GATEWAY_PORT) // 4000
const host = process.env.GATEWAY_HOST // 0.0.0.0 




async function start() 
{
	try 
	{
		// Register all plugins first
		await registerPlugins(app);
		
		// Add hooks after plugins are registered
		app.addHook('onRequest', authenticateUser);
		app.addHook('onError', errorHandler);
		
		// Wait for everything to be ready
		await app.ready();
		
		// Start the server
		app.listen({port: port, host: host}, () => { console.log(`gateway service running at http://gateway:${port}`) })
	} 
	catch (error) 
	{
		console.log('error in server:', error)
		process.exit(1)
	}

	await initRabbitMQ()
	await receiveFromQueue()
}



export const ws = new WebSocket.Server({noServer: true})

app.server.on('upgrade',handleHttpUpgrade);
ws.on('connection', handleWsConnect);


start()
