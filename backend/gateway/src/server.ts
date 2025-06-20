import app from './app'
import path from 'path';
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

StartServer();









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

