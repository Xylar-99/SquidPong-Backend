import { FastifyRequest, FastifyReply } from 'fastify';
import prisma from '../db/database';





export async function createProfileHandler(req:FastifyRequest , res:FastifyReply)
{
    const body = req.body as any;
    const profile = {userId : body.userID  , name : "abdelbassat" , bio : "full stack" , avatarUrl:"../images/profile.png"}
    
    console.log(profile);
    try 
    {
        await prisma.profile.create({data : profile})    
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
