import { FastifyRequest, FastifyReply } from 'fastify';
import { hashPassword , VerifyPassword } from '../utils/hashedPassword';
import prisma from '../db/database';
import { sendVerificationEmail , sendToService } from '../utils/utils';
import redis from '../utils/redis';
import app from '../app';



async function getRootHandler(req:FastifyRequest , res:FastifyReply)
{
    console.log(req.headers)
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

        await sendVerificationEmail(body.email);
    }
    catch (error) 
    {
        return res.status(400).send({success:error})
    }
    return res.send({msg:"done"})
}






async function postLoginHandler(req:FastifyRequest , res:FastifyReply)
{
    const body = req.body as any;

    try 
    {
        const user = await prisma.user.findUnique({ where: { email: body.email , is_verified: true }})
        if(!user)
            throw new Error("user is exist or not verify")

        if(await VerifyPassword(body.password , user.password) == false)
            throw new Error("password incorrect")

        const accessToken = await app.jwt.sign({ userId: user.id } , { expiresIn: '1h' });
        const refreshToken = await app.jwt.sign({ userId: user.id } , { expiresIn: '7d' });


        res.setCookie('accessToken', accessToken, { httpOnly: true });
        res.setCookie('refreshToken', refreshToken, { httpOnly: true, maxAge: 7 * 24 * 60 * 60,});

    } 
    catch (error) 
    {
        return res.status(400).send({msg : error})
    }
    
    return res.send({msg:"done"})
}





async function postLogoutHandler(req:FastifyRequest , res:FastifyReply)
{
    return res.send(req.body)
}



async function verifyEmailHandler(req:FastifyRequest , res:FastifyReply)
{
    const body = req.body as any;

    console.log("hello")
    try 
    {
        const user = await prisma.user.findUnique({ where: { email: body.email}})
        if(!user)
            throw new Error("user is not exist")

        const code = await redis.get(body.email);
        if(code != body.code)
            throw new Error("Code is incorrect")

        await prisma.user.update({where : {email : body.email} , data:{is_verified : true}})
        await sendToService('http://user:4001/api/users/profile' , 'POST' , {userID : user.id})
    } 
    catch (error) 
    {
        console.log("error" , error)
        return res.status(400).send({msg : error})
    }

    return res.send({msg:"done"})
}




async function postrefreshtokenHandler(req:FastifyRequest , res:FastifyReply)
{
    const body = req.body as any;
    console.log(body.refreshToken);

    const payload: any = await app.jwt.verify(body.refreshToken);
    const id: string = payload.userId;

    const newAccessToken = await app.jwt.sign({ userId: id } , { expiresIn: '1h' });

    res.send({ accessToken: newAccessToken });
}


export {postLoginHandler   , verifyEmailHandler , postLogoutHandler , getRootHandler , postSignupHandler , postrefreshtokenHandler}