import { FastifyRequest, FastifyReply } from 'fastify';
import app from '../app';



export async function authenticateUser(req: FastifyRequest, reply: FastifyReply) 
{
  const publicURIs: string[] = [
    '/', '/favicon.ico',
    '/api/signup', '/api/login', '/api/verify-email',
    '/api/reset-password', '/api/forgot-password',
    '/api/intra', '/api/2fa/verify',
    '/auth/intra/callback',
    '/pages/signup.html', '/pages/verification.html', '/pages/login.html',
  ];

  console.log("URL : " , req.url)
  console.log(req.headers)
  const isPublic = publicURIs.includes(req.url) || req.url.startsWith('/auth/');
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