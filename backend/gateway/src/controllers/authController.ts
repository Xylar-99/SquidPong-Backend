import { FastifyRequest, FastifyReply } from 'fastify';
import { hashPassword , VerifyPassword } from '../utils/hashedPassword';
import prisma from '../db/database';
import { sendmsg_to_rabbitmq } from '../utils/utils';





async function getRootHandler(req:FastifyRequest , res:FastifyReply)
{

    return res.type('text/html').sendFile('index.html')
}






async function postSignupHandler(req:FastifyRequest , res:FastifyReply)
{
    const body = req.body as any;
    const msgemail = {email:body.email , text:"434"}
    try 
    {
        const user = await prisma.user.findUnique({ where: { email: body.email }})
        if(user)
            throw new Error("User ready exist");

        body.password = await hashPassword(body.password);
        await prisma.user.create({data: body});
        await sendmsg_to_rabbitmq(msgemail);
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

    return res.send(body)
}



async function postLogoutHandler(req:FastifyRequest , res:FastifyReply)
{
    return res.send(req.body)
}




export {postLoginHandler , postLogoutHandler , getRootHandler , postSignupHandler}