import { FastifyRequest, FastifyReply } from 'fastify';
import app from '../app';


export async function authenticateUser(req: FastifyRequest, reply: FastifyReply)
{
  const uri:string[] = ['/pages/signup.html' , '/ws' , '/auth/intra/callback' , '/pages/verification.html' , '/pages/login.html' , '/api/signup' , '/api/login' , '/api/verify-email' , '/' , '/favicon.ico']

  if (uri.includes(req.url) == true || req.url.startsWith('/auth/') == true)
    return ;

  try 
  {
    const token:string = req.cookies['accessToken'] as string;
    const payload:any = await app.jwt.verify(token);
    (req as any).user = payload;
  }
  catch 
  {
    return reply.status(401).send('Unauthorized');
  }
}
