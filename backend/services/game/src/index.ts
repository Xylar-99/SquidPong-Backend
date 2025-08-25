import Fastify from "fastify";
import { matchRoutes } from "./routes/matchRoutes";
import { invitationRoutes } from "./routes/invitationRoutes";

const server = Fastify({ logger: true });

const start = async () => {
  try {
    // Register CORS plugin inside the async function
    await server.register(import("@fastify/cors"), {
      origin: true,
    });

    // Then register your routes
    server.register(matchRoutes);
    server.register(invitationRoutes);

    await server.listen({ port: 3000, host: "0.0.0.0" });
    console.log("✅ Server ready at http://localhost:3000");
  } catch (err) {
    server.log.error(err);
    process.exit(1);
  }
};

start();
