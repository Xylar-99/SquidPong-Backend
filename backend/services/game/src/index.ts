import dotenv from "dotenv";
import Fastify from "fastify";
import { matchRoutes } from "./routes/matchRoutes";
import { invitationRoutes } from "./routes/invitationRoutes";
import { initRabbitMQ, receiveFromQueue } from "./integration/rabbitmqClient";
import fastifyjwt from "@fastify/jwt";


dotenv.config();

const port = Number(process.env.PORT) || 3000;
const host = process.env.HOST || "0.0.0.0";
const server = Fastify({ logger: true });

const start = async () => {
  try {
    // Register CORS plugin
    await server.register(import("@fastify/cors"), {
      origin: true,
    });

    // Register routes
    server.register(matchRoutes);
    server.register(invitationRoutes);
    
    // Initialize RabbitMQ before starting server
    await initRabbitMQ();
    await receiveFromQueue("game");
    
    // Start server
    await server.listen({ port, host });
    console.log(`✅ Game Service ready at http://${host}:${port}`);
    
  } catch (err) {
    server.log.error(err);
    process.exit(1);
  }
};

// Graceful shutdown
process.on('SIGINT', async () => {
  console.log('Received SIGINT, shutting down gracefully...');
  await server.close();
  process.exit(0);
});

process.on('SIGTERM', async () => {
  console.log('Received SIGTERM, shutting down gracefully...');
  await server.close();
  process.exit(0);
});

start();