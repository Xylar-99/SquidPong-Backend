import dotenv from 'dotenv';
import app from './app'
import redis from './utils/redis';

dotenv.config();

const port = Number(process.env.PORT);
const host = process.env.HOST;


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
async function subscriberedis() 
{
    
    await redis.subscribe('user');
    
    redis.on('message', (channel:any, message:any) => {
        console.log("hello from redis on");
        console.log(channel)
        if (channel == 'user') 
            console.log('News:', message);
        
    });
    
}

StartServer();
subscriberedis();