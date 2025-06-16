import { FastifyRequest, FastifyReply } from 'fastify';
import { hashPassword , VerifyPassword } from '../utils/hashedPassword';
import prisma from '../db/database';
import { sendVerificationEmail } from '../utils/utils';
import redis from '../utils/redis';
import app from '../app';



async function getRootHandler(req:FastifyRequest , res:FastifyReply)
{

    return res.type('text/html').sendFile('index.html')
}






async function postSignupHandler(req:FastifyRequest , res:FastifyReply)
{
    const body = req.body as any;
    try 
    {
        const user = await prisma.user.findUnique({ where: { email: body.email }})
        if(user)
            throw new Error("User ready exist");

        body.password = await hashPassword(body.password);
        await prisma.user.create({data: body});
        await redis.set('user:123', 'rediiiiiiiiis work', 'EX', 120);
        
        await sendVerificationEmail(body.email);


    }
    catch (error) 
    {
        console.log("msg : " , error);
        return res.status(400).send({success:false})
    }
    return res.send({success:true})
}



async function postLoginHandler(req:FastifyRequest , res:FastifyReply)
{
    const body = req.body as any;
    const accessToken = await app.jwt.sign({ userId: 4 } , { expiresIn: '1h' });
    const refreshToken = await app.jwt.sign({ userId: 4 } , { expiresIn: '7d' });
  

    return res.setCookie('accessToken', accessToken, { httpOnly: true})
                .setCookie('refreshToken', refreshToken, { httpOnly: true, maxAge: 7 * 24 * 60 * 60 })
                .send({body:accessToken})
}



async function postLogoutHandler(req:FastifyRequest , res:FastifyReply)
{
    return res.send(req.body)
}







async function postrefreshtokenHandler(req:FastifyRequest , res:FastifyReply)
{
    return res.send(req.body)
}


export {postLoginHandler , postLogoutHandler , getRootHandler , postSignupHandler , postrefreshtokenHandler}