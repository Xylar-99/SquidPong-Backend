import { FastifyRequest, FastifyReply } from 'fastify';
import prisma from '../db/database';


async function isFriendRequestExists(friendata:any) : Promise<boolean>
{
    const existing = await prisma.friendship.findFirst({
        where: {
          status: friendata.status,
          OR: [
            { userId: friendata.userId, friendId: friendata.friendId },
            { userId: friendata.friendId, friendId: friendata.userId }
          ]
        }
      });

    return (existing ? true : false);
}



export async function sendFriendInvite(data:any) 
{

    const friendata:any = {};
    friendata['userId'] = data.from;
    friendata['friendId'] = data.to;
    friendata['status'] = data.status;
    
    console.log(await isFriendRequestExists(friendata))

    if(!await isFriendRequestExists(friendata))
        await prisma.friendship.create({data : friendata})

}






export async function getFriendsListHandler(data:any) 
{

    const friendata:any = {};
    friendata['userId'] = data.from;
    friendata['friendId'] = data.to;
    friendata['status'] = data.status;
    
    console.log(await isFriendRequestExists(friendata))

    if(!await isFriendRequestExists(friendata))
        await prisma.friendship.create({data : friendata})

}




export async function sendFriendRequestHandler(req:FastifyRequest , res:FastifyReply)
{
    
}


export async function acceptFriendRequestHandler(req:FastifyRequest , res:FastifyReply)
{
    
}


export async function rejectFriendRequestHandler(req:FastifyRequest , res:FastifyReply)
{
    
}


export async function removeFriendHandler(req:FastifyRequest , res:FastifyReply)
{
    
}


export async function cancelFriendRequestHandler(req:FastifyRequest , res:FastifyReply)
{
    
}

export async function getSentRequestsHandler(req:FastifyRequest , res:FastifyReply)
{
    
}


export async function getReceivedRequestsHandler(req:FastifyRequest , res:FastifyReply)
{
    
}