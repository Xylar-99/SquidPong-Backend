import { FastifyRequest, FastifyReply } from 'fastify';
import prisma from '../db/database';
import { Editprofile } from '../utils/utils';
import { ApiResponse } from '../utils/errorHandler';
import { UserProfile } from '../utils/types';

export async function createProfileHandler(req:FastifyRequest , res:FastifyReply)
{
    const respond : ApiResponse<null > = {success : true  , message : 'user created success'}
    const body = req.body as any;
    const profile = {userId : body.id , fname : body.fname , lname : body.lname  , username : body.username  , bio : body?.bio ?? 'Ready to play. Ready to win.'  , avatar: body.avatar }
    
    try 
    {
      await prisma.profile.create({data : profile})
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



export async function updateProfileHandler(req:FastifyRequest , res:FastifyReply)
{
  
  console.log("updae scooooooooooooooooooooooooooooooop")
    const respond : ApiResponse<null > = {success : true  , message : 'user created success'}

    try 
    {

    const body = await Editprofile(req);
    console.log('bodyyyyyy' ,   body)
    const headers = req.headers as any;
    const userId = Number(headers['x-user-id'])

    await prisma.profile.update({where : {userId : userId} , data : body })
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


export async function getAllUserHandler(req:FastifyRequest , res:FastifyReply)
{
    const respond : ApiResponse<UserProfile[]> = {success : true  , message : 'user created success'}

    try 
    {
        const headers = req.headers as any;
        const userId = Number(headers['x-user-id'])
    
    
        const friendships = await prisma.friendship.findMany();
        const friendIds =  [...new Set(friendships.flatMap((f:any) => {return [f.userId, f.friendId]}))] as any;
        if (!friendIds.includes(userId))
            friendIds.push(userId);
    
        const profile = await prisma.profile.findMany({where : {userId : {notIn: friendIds}}});
        respond.data = profile;
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


export async function deleteProfileHandler(req:FastifyRequest , res:FastifyReply)
{
    const respond : ApiResponse<null> = {success : true  , message : 'user created success'}

    try 
    {
    // const headers = req.headers as any;
    // const userId = Number(headers['x-user-id'])
        
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

export async function getCurrentUserHandler(req:FastifyRequest , res:FastifyReply)
{

    const respond : ApiResponse<UserProfile | null> = {success : true  , message : 'user created success'}

    try 
    {
        const headers = req.headers as any;
        const userId = Number(headers['x-user-id']) as number;
        console.log('userIduserId: ', userId);
        const profile = await prisma.profile.findUnique({where : {userId : userId}})
        respond.data = profile;
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


export async function getUserByIdHandler(req:FastifyRequest , res:FastifyReply)
{
    const respond : ApiResponse<UserProfile | null> = {success : true  , message : 'user created success'}
    const { id } = req.params as any;

    try 
    {
        const profile = await prisma.profile.findUnique({where : {userId : Number(id)}})
        respond.data = profile;
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
