import { FastifyRequest, FastifyReply } from 'fastify';
import prisma from '../db/database';
import { Editprofile } from '../utils/utils';

export async function createProfileHandler(req:FastifyRequest , res:FastifyReply)
{
    const body = req.body as any;
    const profile = {userId : body.id , fname : body.fname , lname : body.lname  , username : body.username  , bio : body?.bio ?? 'Ready to play. Ready to win.'  , avatar: body.avatar }
    
    try 
    {
        await prisma.profile.create({data : profile})
    } 
    catch (error)
    {
        return res.status(400).send({msg : false})
    }
    return res.send({msg : true})
}



export async function updateProfileHandler(req:FastifyRequest , res:FastifyReply)
{
    console.log("heeeeleellllllllllllllllllllllllllllll")
    const body = await Editprofile(req);
    console.log('bodyyyyyy' ,   body)
    const headers = req.headers as any;
    const userId = Number(headers['x-user-id'])

    await prisma.profile.update({where : {userId : userId} , data : body })
    return res.send({msg : true})
}


export async function getAllUserHandler(req:FastifyRequest , res:FastifyReply)
{
    const headers = req.headers as any;
    const userId = Number(headers['x-user-id'])


    const friendships = await prisma.friendship.findMany();
    const friendIds =  [...new Set(friendships.flatMap((f:any) => {return [f.userId, f.friendId]}))] as any;
    if (!friendIds.includes(userId))
        friendIds.push(userId);

    const profile = await prisma.profile.findMany({where : {userId : {notIn: friendIds}}});
    return res.send(profile)
}


export async function deleteProfileHandler(req:FastifyRequest , res:FastifyReply)
{
    const headers = req.headers as any;
    const userId = Number(headers['x-user-id'])

    return res.send(req.body)
}

export async function getCurrentUserHandler(req:FastifyRequest , res:FastifyReply)
{
    const headers = req.headers as any;
    const userId = Number(headers['x-user-id'])

    const profile = await prisma.profile.findUnique({where : {userId : userId}})
    return res.send(profile)
}


export async function getUserByIdHandler(req:FastifyRequest , res:FastifyReply)
{
    const { id } = req.params as any;

    const profile = await prisma.profile.findUnique({where : {userId : Number(id)}})
    return res.send(profile)
}
