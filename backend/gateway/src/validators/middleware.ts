import { FastifyRequest, FastifyReply } from 'fastify';
import app from '../app';



export async function authenticateUser(req: FastifyRequest, reply: FastifyReply) 
{
  console.log(req.url)
  const publicURIs: string[] = [
    '/', '/favicon.ico',
    '/api/auth/signup', '/api/auth/login', '/api/auth/verify-email',
    '/api/auth/reset-password', '/api/auth/forgot-password',
    '/api/auth/intra', '/api/2fa/verify',
    '/api/auth/intra/callback',
    '/pages/signup.html', '/pages/verification.html', '/pages/login.html',
  ];

  const isPublic = publicURIs.includes(req.url) || req.url.startsWith('/docs') || req.url.startsWith('/api/auth/');
  if (isPublic) return;

  try
  {

    const cookie = req.headers.cookie;
    if(!cookie)
        throw new Error("not allowed")

    const token = cookie.split('=')[1].split(';')[0]
    if (!token) 
      return reply.status(401).send({ message: 'Missing access token' });

    const payload:any = await app.jwt.verify(token);

    console.log( 'url : '  , req.url , 'userId : ', payload.userId);
    req.id = payload.userId;

  } 
  catch (err) 
  {
    return reply.status(401).send({ message: 'Unauthorized' });
  }
}