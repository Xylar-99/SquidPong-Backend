import { FastifyRequest, FastifyReply } from 'fastify';
import { hashPassword , VerifyPassword } from '../utils/hashedPassword';
import prisma from '../db/database';
import { sendVerificationEmail , sendToService } from '../utils/utils';
import redis from '../utils/redis';
import { setJWT } from '../utils/2fa';
// import { subscribe , publish } from '../utils/redis';
import app from '../app';
import { authenticator2FA } from '../utils/2fa';

import { OAuth2Namespace } from '@fastify/oauth2';

declare module 'fastify' {
  interface FastifyInstance {
    googleOAuth2: OAuth2Namespace;
  }
}










export async function getRootHandler(req:FastifyRequest , res:FastifyReply)
{
    return res.type('text/html').sendFile('index.html')
}


export async function postSignupHandler(req:FastifyRequest , res:FastifyReply)
{
    const body = req.body as any;
    try
    {
        const user = await prisma.user.findUnique({ where: { email: body.email }})
        if(user && user.password)
            throw new Error("User ready exist");

        const getEmail = await redis.get(body.email);
        if(getEmail != null)
            console.log("We already sent you a code.")
    
        await sendVerificationEmail(body);
    }
    catch (error) 
    {
      return res.type('text/html').sendFile('./pages/signup.html')
    }
    return res.type('text/html').sendFile('./pages/verification.html')
}



export async function verifyEmailHandler(req:FastifyRequest , res:FastifyReply)
{
    const body = req.body as any;

    try 
    {
        const data = await redis.get(body.email);
        if(!data)
            throw new Error("user is not exist or expire verified so signup again")

        const parsed = JSON.parse(data);
        if(parsed.code != body.code)
            throw new Error("Code is incorrect")
        delete parsed.code;

        const user = await prisma.user.upsert({ where: { email: parsed.email }, update: {password:parsed.password}, create: parsed });
        await sendToService('http://user:4001/api/users/profile' , 'POST' , user)

    }
    catch (error) 
    {
      return res.type('text/html').sendFile('./pages/verification.html')
    }

    return res.type('text/html').sendFile('./pages/login.html')
}






export async function postLoginHandler(req:FastifyRequest , res:FastifyReply)
{
    const body = req.body as any;

    try 
    {
        const user = await prisma.user.findUnique({ where: { email: body.email}})
        if(!user)
          throw new Error("user is not exist")

        if(!user.password)
            throw new Error("this is user is signup using local so set new password for link user with local login")

        if(await VerifyPassword(body.password , user.password) ==  false)
          throw new Error("password incorrect")

        await setJWT(res , user.id);
    }
    catch (error) 
    {
      return res.status(400).sendFile('./pages/login.html')
    }

  return res.send({msg : true})
}





export async function postLogoutHandler(req:FastifyRequest , res:FastifyReply)
{

  res.clearCookie('accessToken', { path : '/' , httpOnly: false });
  res.clearCookie('refreshToken', { path : '/' , httpOnly: false });

  return res.send({msg : true})
}







export async function getCallbackhandler(req:FastifyRequest , res:FastifyReply) 
{
    try 
    {
    const tokengoogle:any = await app.googleOAuth2.getAccessTokenFromAuthorizationCodeFlow(req);
    const result = await fetch('https://www.googleapis.com/oauth2/v2/userinfo', { headers: { Authorization: `Bearer ${tokengoogle.token.access_token}` } });
    const data = await result.json();


    const user = await prisma.user.upsert({ where: { email: data.email }, update: {}, create: { email: data.email} });
    await sendToService('http://user:4001/api/users/profile' , 'POST' , user)
    await setJWT(res , user.id);
    
    }
    catch (error) 
    {
        
    }
    
  return res.redirect('/profile')
}



export async function getIntraCallbackhandler(req:FastifyRequest , res:FastifyReply) 
{

  const {code} = req.query as any;

  console.log(code);
  const tokenRes = await fetch('https://api.intra.42.fr/oauth/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      grant_type: 'authorization_code',
      client_id: process.env.IDINTRA,
      client_secret: process.env.SECRETINTRA,
      code: code,
      redirect_uri: 'http://localhost:4000/callback',
    }),
  });


  const data = await tokenRes.json();
  const access_token = data.access_token;

  const userRes = await fetch('https://api.intra.42.fr/v2/me', {headers: {  Authorization: `Bearer ${access_token}`,}, });

  const user = await userRes.json();


  // console.log(user.login);

//   const userCreated = await prisma.user.upsert({ where: { email: user.email }, update: {}, create: { email: user.email} });
//     await sendToService('http://user:4001/api/users/profile' , 'POST' , userCreated)

  return res.send({msg : true})
}






export async function postrefreshtokenHandler(req:FastifyRequest , res:FastifyReply)
{
    const body = req.body as any;

    const payload: any = await app.jwt.verify(body.refreshToken);
    const id: string = payload.userId;

    const newAccessToken = await app.jwt.sign({ userId: id } , { expiresIn: '1h' });

    res.send({ accessToken: newAccessToken });
}




export async function getProfileCallbackhandler(req:FastifyRequest , res:FastifyReply) 
{

  console.log('-----------------------------------------')
  console.log(req.user);
  console.log('-----------------------------------------')
  
  return res.type('text/html').sendFile('/pages/profile.html')
}
