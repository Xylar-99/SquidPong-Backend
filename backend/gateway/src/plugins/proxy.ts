import { FastifyInstance, FastifyRequest, FastifyReply } from 'fastify';
import httpProxy from 'http-proxy';

const proxy = httpProxy.createProxyServer();

export default function registerPlugins(app: FastifyInstance) 
{

  app.all('/api/user/*', (req: FastifyRequest, reply: FastifyReply) => {
    req.headers['x-user-id'] = req.id ?? 'anonymous';

    proxy.on('proxyRes', (proxyRes:any, req:any, res:any) => {

      res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');
      res.setHeader('Access-Control-Allow-Credentials', 'true');
      res.setHeader('Access-Control-Expose-Headers', 'x-user-id');
    });

    proxy.web(req.raw, reply.raw, {
      target: 'http://user:4001',
      changeOrigin: true,
    }, (err:any) => {
      if (err) {
        reply.status(502).send('Bad Gateway: user service unreachable');
      }
    });
    return;
  });

}
