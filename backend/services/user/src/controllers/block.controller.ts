import { FastifyRequest, FastifyReply } from 'fastify';
import prisma from '../db/database';
import { isFriendRequestExists } from '../utils/utils';




export async function blockUserHandler(req:FastifyRequest , res:FastifyReply)
{
    const body = req.body as any;
    const headers = req.headers as any;

    const friendata:any = {};
    friendata['userId'] = Number(headers.id);
    friendata['friendId'] = body.friendId;
    friendata['status'] = 'accept';
    

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
        data: { status: 'blocked' }
      });
      
    }
    catch
    {
      return res.status(400).send({msg : false})
    }
    
    return res.send({msg : true})
}



export async function unblockUserHandler(req:FastifyRequest , res:FastifyReply)
{
    const {blockId} = req.query as any;
    const headers = req.headers as any;

    const friendata:any = {};
    friendata['userId'] = Number(headers.id);
    friendata['friendId'] = blockId;
    friendata['status'] = 'blocked';
    

    try 
    {
      if(await isFriendRequestExists(friendata))
        throw new Error("ready unblocked")
    
      await prisma.friendship.updateMany({
        where: {
          OR: [
            { userId: friendata.userId, friendId: friendata.friendId },
            { userId: friendata.friendId, friendId: friendata.userId }
          ]
        },
        data: { status: 'accept' }
      });
      
    }
    catch
    {
      return res.status(400).send({msg : false})
    }
    
    return res.send({msg : true})
}


export async function getBlockedUsersHandler(req:FastifyRequest , res:FastifyReply)
{
    
  const headers = req.headers as any;
  const blockedusers = await prisma.friendship.findMany({
    where: {userId : Number(headers.id) , status: 'blocked'}
  });

  const friendIds = blockedusers.map((f:any) => f.friendId);

  const profiles = await prisma.profile.findMany({
    where: {
      id: { in: friendIds }
    }
  })
  
  return res.send(profiles);
}
