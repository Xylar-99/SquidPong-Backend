import { FastifyRequest, FastifyReply } from 'fastify';
import { sendVerificationEmail } from '../utils/verification_messenger';
import { OAuth2Namespace } from '@fastify/oauth2';
import { isUserVerified , isResetCodeValid , isUserAlreadyRegistered  , isUserAllowedToLogin} from '../validators/userStatusCheck';
import { createAccount } from '../utils/utils';
import { isTwoFactorEnabled } from '../validators/2faValidator';
import { ApiResponse } from '../utils/errorHandler';
import { VerifyPassword } from '../utils/hashedPassword';
import { hashPassword } from '../utils/hashedPassword';
import { sendDataToQueue } from '../integration/rabbitmqClient';

import redis from '../integration/redisClient';
import prisma from '../db/database';
import app from '../app';
import { PasswordMessage ,EmailMessage , AuthError, UserProfileMessage } from '../utils/messages';



declare module 'fastify' {
  interface FastifyInstance {
    googleOAuth2: OAuth2Namespace;
  }
}




export async function getRootHandler(req:FastifyRequest , res:FastifyReply)
{
    return res.send({msg : "hello ft_trandandan"})
}


export async function postSignupHandler(req:FastifyRequest , res:FastifyReply)
{
    const respond : ApiResponse<null > = {success : true  , message : UserProfileMessage.EMAIL_ALREADY_USED}
    const body = req.body as any;

    try
    {
      await isUserAlreadyRegistered(body);
      await sendVerificationEmail(body);
    }
    catch (error) 
    {
      respond.success = false;
      if (error instanceof Error)
        {
          respond.message = error.message;
          return res.status(400).send(respond)
        }
    }
    
  return res.send(respond)
}



export async function verifyEmailHandler(req:FastifyRequest , res:FastifyReply)
{
  const respond : ApiResponse<null > = {success : true  , message : EmailMessage.EMAIL_VERIFIED_SUCCESSFULLY}
    const body = req.body as any;

    try 
    {
      await isUserVerified(body);
      const data = await redis.get(body.email);
      if(!data)
          throw new Error(AuthError.VALIDATION_ERROR)
      const parsed = JSON.parse(data);
      await createAccount(parsed);
    }
    catch (error) 
    {
      respond.success = false;
      if (error instanceof Error)
        {
          respond.message = error.message;
          return res.status(400).send(respond)
        }
    }
    
  return res.send(respond)
}



export async function postLoginHandler(req:FastifyRequest , res:FastifyReply)
{
    const body = req.body as any;
    const respond : ApiResponse<{is2FAEnabled : boolean , token : string} > = {success : true  , message : 'login success'}
    respond.data = {is2FAEnabled : false , token : ''}

    try 
    {
      const user = await prisma.user.findUnique({ where: { email: body.email}})
      if(!user)
        throw new Error(UserProfileMessage.USER_NOT_FOUND)

      await isUserAllowedToLogin(body , user);
      await isTwoFactorEnabled(res , user , respond);
    }
    catch (error) 
    {
      respond.success = false;
      if (error instanceof Error)
        {
          respond.message = error.message;
          return res.status(400).send(respond)
        }
    }
    
  return res.send(respond)
}



export async function postLogoutHandler(req:FastifyRequest , res:FastifyReply)
{
  const respond : ApiResponse<null > = {success : true  , message : 'logout success'}

  res.clearCookie('accessToken', { path : '/' , httpOnly: true });
  res.clearCookie('refreshToken', { path : '/' , httpOnly: true });

  return res.send(respond)
}






export async function getGooglCallbackehandler(req:FastifyRequest , res:FastifyReply) 
{
  const respond : ApiResponse<{is2FAEnabled : boolean , token : string} > = {success : true  , message : 'login success'}

  respond.data = {is2FAEnabled : false , token : ''}
  try 
  {
    const tokengoogle:any = await app.googleOAuth2.getAccessTokenFromAuthorizationCodeFlow(req);
    const result = await fetch('https://www.googleapis.com/oauth2/v2/userinfo', { headers: { Authorization: `Bearer ${tokengoogle.token.access_token}` } });
    const data = await result.json();

    data['avatar'] = data.picture
    data['username'] = data.email.split('@')[0];
    data['fname'] = data.given_name;
    data['lname'] = data.family_name;
    
    const user = await createAccount(data);
    await isTwoFactorEnabled(res , user , respond);

  }
  catch (error) 
  {
    respond.success = false;
    if (error instanceof Error)
      {
        respond.message = error.message;
        return res.status(400).send(respond)
      }
  }
  
  if(respond.data?.is2FAEnabled)
    return res.redirect(`http://localhost:8080/pages/2faEnable.html?token=${respond.data?.token}`)

  return res.redirect(`http://localhost:8080/pages/profile.html`)
}



export async function getIntrahandler(req:FastifyRequest , res:FastifyReply) 
{

  const client_id = process.env.IDINTRA;
  const url =  `https://api.intra.42.fr/oauth/authorize?client_id=${client_id}&redirect_uri=http%3A%2F%2Flocalhost%3A4000%2Fauth%2Fintra%2Fcallback&response_type=code`;

 return  res.redirect(url)
}





export async function getIntracallbackhandler(req:FastifyRequest , res:FastifyReply) 
{

  const respond : ApiResponse<{is2FAEnabled : boolean , token : string} > = {success : true  , message : 'login success'}
  const {code} = req.query as any;
  
  respond.data = {is2FAEnabled : false , token : ''}

  const body:object = {
      grant_type: 'authorization_code',
      client_id: process.env.IDINTRA,
      client_secret: process.env.SECRETINTRA,
      code: code,
      redirect_uri: `${process.env.URL}/auth/intra/callback`,
    }


    try 
    {
      const tokens = await fetch('https://api.intra.42.fr/oauth/token', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });
    
    
      const tokensJSON = await tokens.json();
      const access_token = tokensJSON.access_token;
    
      const user = await fetch('https://api.intra.42.fr/v2/me', {headers: {  Authorization: `Bearer ${access_token}`,}, });
      const userJSON = await user.json();
    
      
      userJSON['fname'] = userJSON.first_name;
      userJSON['lname'] = userJSON.last_name;
      userJSON['avatar'] = userJSON.image.link;
      userJSON['username'] = userJSON.login;
    
      const account = await createAccount(userJSON);
      await isTwoFactorEnabled(res , account , respond);
      
    } 
    catch (error) 
    {
      respond.success = false;
      if (error instanceof Error)
        {
          respond.message = error.message;
          return res.status(400).send(respond)
        }
    }


  
  if(respond.data?.is2FAEnabled)
    return res.redirect(`http://localhost:8080/pages/2faEnable.html?token=${respond.data.token}`)

  return res.redirect(`http://localhost:8080/pages/profile.html`)
}





export async function postrefreshtokenHandler(req:FastifyRequest , res:FastifyReply)
{
    const body = req.body as any;

    const payload: any = await app.jwt.verify(body.refreshToken);
    const id: string = payload.userId;

    const newAccessToken = await app.jwt.sign({ userId: id } , { expiresIn: '1h' });

    res.send({ accessToken: newAccessToken });
}




export async function postForgotPasswordHandler(req: FastifyRequest, res: FastifyReply) 
{
  const respond : ApiResponse<null > = {success : true  , message : 'login success'}
  const {email} = req.body as any;

  try 
  {
    const user = await prisma.user.findFirst({ where: { email: email , password : {not : null} }})
    if(!user)
      throw new Error("user not found")
    await sendDataToQueue({email}, "emailhub");

  } 
  catch (error) 
  {
    respond.success = false;
    if (error instanceof Error)
      {
        respond.message = error.message;
        return res.status(400).send(respond)
      }
  }

  return res.send(respond);
}




export async function postChangePasswordHandler(req: FastifyRequest, res: FastifyReply) 
{
  const respond : ApiResponse<null > = {success : true  , message : 'login success'}
  const id = req.id as any;
  const {oldPassword , newPassword} = req.body as any;

  try 
  {
    const user = await prisma.user.findFirst({ where: { id: Number(id) , password : {not : null} }})
    
    if(!user)
      throw new Error(UserProfileMessage.USER_NOT_FOUND)
    if(await VerifyPassword(oldPassword , user.password) == false)
      throw new Error(PasswordMessage.PASSWORD_SAME_AS_OLD)

    await prisma.user.update({ where: { id: Number(id)}  , data : {password : await hashPassword(newPassword)} })

  } 
  catch (error) 
  {
    respond.success = false;
    if (error instanceof Error)
      {
        respond.message = error.message;
        return res.status(400).send(respond)
      }
  }

  return res.send(respond);
}



export async function postResetPasswordHandler(req: FastifyRequest, res: FastifyReply) 
{
  const respond : ApiResponse<null > = {success : true  , message : 'login success'}
  const {confirmPassword , newPassword , code , email} = req.body as any;

  try 
  {
    const user = await prisma.user.findFirst({ where: { email , password : {not : null} }})
    if(!user)
      throw new Error(UserProfileMessage.USER_NOT_FOUND)

    isResetCodeValid(code , confirmPassword , newPassword , user);
    await prisma.user.update({ where: { email}  , data : {password : await hashPassword(newPassword)} })

  } 
  catch (error) 
  {
    respond.success = false;
    if (error instanceof Error)
      {
        respond.message = error.message;
        return res.status(400).send(respond)
      }
  }
  
  return res.send(respond);
}