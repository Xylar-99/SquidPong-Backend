import { FastifyRequest, FastifyReply } from 'fastify';
import prisma from '../db/database';
import redis from '../utils/redis';



export async function createProfileHandler(req:FastifyRequest , res:FastifyReply)
{
    const body = req.body as any;
    console.log(body);
    const profile = {userId : body.id  , username : body?.username ?? `player${body.id}` , bio : body?.bio ?? 'Ready to play. Ready to win.'  , avatarUrl: body?.avatar ?? 'default.png'}
    
    try 
    {
        await prisma.profile.upsert({where : {userId : body.id} , update:profile , create:profile})
    } 
    catch (error)
    {
        return res.status(400).send({msg : false})
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
