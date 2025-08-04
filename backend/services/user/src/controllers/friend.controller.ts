import { FastifyRequest, FastifyReply } from 'fastify';
import prisma from '../db/database';
import { isFriendRequestExists } from '../utils/utils';
import { ApiResponse } from '../utils/errorHandler';
import { UserProfile } from '../utils/types';

export async function sendFriendInvite(data:any) 
{
    delete data.type;
    
    try 
    {
      if(!await isFriendRequestExists(data))
        await prisma.friendship.create({data : data})
    } 
    catch (error) 
    {
      console.log("error in invite friend")  
    }

}


export async function getFriendsListHandler(req:FastifyRequest , res:FastifyReply)
{
  const respond : ApiResponse<UserProfile[]> = {success : true  , message : 'user created success'}
  const headers = req.headers as any;
  const userId = Number(headers['x-user-id'])

  try 
  {

  const friendships = await prisma.friendship.findMany({
    where: 
    {
      status: 'accepted',
      OR: [
        { userId: userId},
        { friendId: userId }
        ]
    }
    });
    
    const friendIds = friendships.map((f:any) => {return (userId != f.userId) ? f.userId : f.friendId });
    const profiles = await prisma.profile.findMany({ where: { id: { in: friendIds } } })
    respond.data = profiles;
  
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


export async function getPendingRequestsHandler(req:FastifyRequest , res:FastifyReply)
{
  const respond : ApiResponse<UserProfile[]> = {success : true  , message : 'user created success'}

  const headers = req.headers as any;
  const userId = Number(headers['x-user-id'])
  
  try 
  {
    const friendships = await prisma.friendship.findMany({
      where: {friendId : userId , status: 'pending'}
    });
    
    const friendIds:any = friendships.map((arg:any) => {return arg.userId});
  
    const profiles = await prisma.profile.findMany({
      where: {
        id: { in: friendIds }
      }
    })
    respond.data  = profiles
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



export async function sendFriendRequestHandler(req:FastifyRequest , res:FastifyReply)
{
  const respond : ApiResponse<null> = {success : true  , message : 'user created success'}

  const body = req.body as any;
  const headers = req.headers as any;
  const userId = Number(headers['x-user-id'])

  const friendata:any = {};
  friendata['userId'] = userId;
  friendata['friendId'] = body.friendId;
  friendata['status'] = 'pending';


  try 
  {
    if(await isFriendRequestExists(friendata))
      throw new Error("ready exist friends")

    await prisma.friendship.create({data : friendata})
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


export async function acceptFriendRequestHandler(req:FastifyRequest , res:FastifyReply)
{
  const respond : ApiResponse<null> = {success : true  , message : 'user created success'}
  
  const body = req.body as any;
  const headers = req.headers as any;
  const userId = Number(headers['x-user-id'])

  const friendata:any = {};
  friendata['userId'] = userId;
  friendata['friendId'] = body.friendId;
  friendata['status'] = 'accepted';
  

  try 
  {
    if(await isFriendRequestExists(friendata))
      throw new Error("ready exist friends")
  
    await prisma.friendship.updateMany({
      where: {
        OR: [
          { userId: friendata.userId, friendId: friendata.friendId },
          { userId: friendata.friendId, friendId: friendata.userId }
        ]
      },
      data: { status: 'accepted' }
    });
    
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


export async function rejectFriendRequestHandler(req:FastifyRequest , res:FastifyReply)
{
  const respond : ApiResponse<null> = {success : true  , message : 'user created success'}
  const body = req.body as any;
  const headers = req.headers as any;
  const userId = Number(headers['x-user-id'])

  const friendata:any = {};
  friendata['userId'] = userId;
  friendata['friendId'] = body.friendId;
  friendata['status'] = 'pending';
  

  try 
  {
    if(!await isFriendRequestExists(friendata))
      throw new Error("ready reject friends")
  
    await prisma.friendship.deleteMany({
      where: {
        OR: [
          { userId: friendata.userId, friendId: friendata.friendId },
          { userId: friendata.friendId, friendId: friendata.userId }
        ]
      }
    });
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



export async function removeFriendHandler(req:FastifyRequest , res:FastifyReply)
{
  const respond : ApiResponse<null> = {success : true  , message : 'user created success'}

  const {friendId} = req.params as any;
  const headers = req.headers as any;
  const userId = Number(headers['x-user-id'])

  const friendata:any = {};
  friendata['userId'] = userId;
  friendata['friendId'] = friendId;
  friendata['status'] = 'accepted';
  

  try 
  {
    if(!await isFriendRequestExists(friendata))
      throw new Error("ready is not friends")
  
    await prisma.friendship.deleteMany({
      where: {
        OR: [
          { userId: friendata.userId, friendId: friendata.friendId },
          { userId: friendata.friendId, friendId: friendata.userId }
        ]
      }
    });
    
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


export async function cancelFriendRequestHandler(req:FastifyRequest , res:FastifyReply)
{
  const respond : ApiResponse<null> = {success : true  , message : 'user created success'}

  

  try 
  {
    
    
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

export async function getSentRequestsHandler(req:FastifyRequest , res:FastifyReply)
{
  const respond : ApiResponse<null> = {success : true  , message : 'user created success'}

  

  try 
  {
    
    
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


export async function getReceivedRequestsHandler(req:FastifyRequest , res:FastifyReply)
{
  const respond : ApiResponse<null> = {success : true  , message : 'user created success'}

  

  try 
  {
    
    
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
