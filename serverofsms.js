import Fastify from 'fastify';
import { exec } from 'child_process';

const fastify = Fastify({ logger: true });

// Send SMS by calling Android 'am' shell command
fastify.post('/send-sms', async (request, reply) => {
  const { number, message } = request.body;

  if (!number || !message) {
    return reply.status(400).send({ error: 'number and message required' });
  }

  // Use Android 'service call isms' or 'am start' to send SMS (needs Termux:API)
  // For demo: use termux-sms-send command (install termux-api)
  const cmd = `termux-sms-send -n ${number} "${message}"`;

  return new Promise((resolve) => {
    exec(cmd, (error, stdout, stderr) => {
      if (error) {
        reply.status(500).send({ error: stderr || error.message });
        return resolve();
      }
      reply.send({ success: true, output: stdout });
      resolve();
    });
  });
});

// Listen on all interfaces so Ngrok can connect
fastify.listen({ port: 3000, host: '0.0.0.0' });

