import { FastifyRequest, FastifyReply } from 'fastify';
import prisma from '../db/database';
import redis from '../utils/redis';



export async function createProfileHandler(req:FastifyRequest , res:FastifyReply)
{
    const body = req.body as any;

    console.log("hello")

    


    const profile = {userId : body.id  , name : `player${body.id}` , bio : `full stack ${body.id}` , avatarUrl:`../images/profile${body.id}.png`}
    
    console.log(profile);
    try 
    {
        await prisma.profile.upsert({where : {userId : body.id} , update:{} , create:profile})    
    } 
    catch (error)
    {
        console.log("not store profile" , error);    
    }
    return res.send({msg : true})
}



export async function updateProfileHandler(req:FastifyRequest , res:FastifyReply)
{
    return res.send(req.body)
}


export async function deleteProfileHandler(req:FastifyRequest , res:FastifyReply)
{
    return res.send(req.body)
}



export async function getCurrentUserHandler(req:FastifyRequest , res:FastifyReply)
{
    return res.send(req.body)
}




export async function getUserByIdHandler(req:FastifyRequest , res:FastifyReply)
{
    return res.send(req.body)
}
