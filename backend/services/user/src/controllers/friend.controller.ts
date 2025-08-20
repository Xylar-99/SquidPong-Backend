import { FastifyRequest, FastifyReply } from 'fastify';
import prisma from '../db/database';
import { ApiResponse } from '../utils/errorHandler';
import { Profile } from '../utils/types';

enum FriendshipStatus {
  PENDING = "PENDING",
  ACCEPTED = "ACCEPTED",
  DECLINED = "DECLINED",
  BLOCKED = "BLOCKED",
}

const {PENDING , BLOCKED , ACCEPTED , DECLINED} = FriendshipStatus;




export async function getFriendsListHandler(req: FastifyRequest, res: FastifyReply)
{

  const respond: ApiResponse<Profile[]> = { success: true, message: 'get friends success' };
  const headers = req.headers as any;
  const userId = Number(headers['x-user-id']);

  try 
  {

    const profile = await prisma.profile.findUnique({
      where: { userId },
      include: {
        sentFriendRequests: {
          where: { status: ACCEPTED },
          include: { receiver: true },
        },
        receivedFriendRequests: {
          where: { status: ACCEPTED },
          include: { sender: true },
        },
      },
    });


    if (!profile) throw new Error('Profile not found');

    const friends = [
      ...profile.sentFriendRequests.map((f:any) => f.receiver),
      ...profile.receivedFriendRequests.map((f:any) => f.sender),
    ];

    respond.data = friends;
  } 
  catch (error) 
  {
    respond.success = false;
    respond.message = error instanceof Error ? error.message : 'Unknown error';
    return res.status(400).send(respond);
  }

  return res.send(respond);
}








export async function getPendingRequestsHandler(req:FastifyRequest , res:FastifyReply)
{
  const respond: ApiResponse<Profile[]> = { success: true, message: 'get friends success' };
  const headers = req.headers as any;
  const userId = Number(headers['x-user-id']);

  try 
  {

    const profile = await prisma.profile.findUnique({
      where: { userId },
      include: {
        sentFriendRequests: {
          where: { status: PENDING },
          include: { receiver: true },
        },
        receivedFriendRequests: {
          where: { status: PENDING },
          include: { sender: true },
        },
      },
    });


    if (!profile) throw new Error('Profile not found');

    const friends = [
      ...profile.sentFriendRequests.map((f:any) => f.receiver),
      ...profile.receivedFriendRequests.map((f:any) => f.sender),
    ];

    respond.data = friends;
  } 
  catch (error) 
  {
    respond.success = false;
    respond.message = error instanceof Error ? error.message : 'Unknown error';
    return res.status(400).send(respond);
  }

  return res.send(respond);
}











export async function sendFriendRequestHandler(req: FastifyRequest, res: FastifyReply)
{

  const respond: ApiResponse<null> = { success: true, message: 'friend request sent' };
  const headers = req.headers as any;

  const {receiverId} = (req.body as any);
  const senderId = (headers['x-user-id']);

  try 
  {
    const exists = await prisma.friendship.findFirst({
      where: {
        OR: [
          { senderId, receiverId },
          { senderId: receiverId, receiverId: senderId  , status: PENDING },
        ],
      },
    });

    if (exists) throw new Error('Friend request already exists');

    await prisma.friendship.create({
      data: { senderId, receiverId, status: PENDING },
    });
  } 
  catch (error) 
  {
    respond.success = false;
    respond.message = error instanceof Error ? error.message : 'Unknown error';
    return res.status(400).send(respond);
  }

  return res.send(respond);
}










export async function acceptFriendRequestHandler(req:FastifyRequest , res:FastifyReply)
{

 const respond: ApiResponse<null> = { success: true, message: 'friend request sent' };
  const headers = req.headers as any;

  const {receiverId} = (req.body as any);
  const senderId = (headers['x-user-id']);

  try 
  {
    const exists = await prisma.friendship.findFirst({
      where: {
        OR: [
          { senderId, receiverId },
          { senderId: receiverId, receiverId: senderId , status: ACCEPTED },
        ],
      },
    });

    if (exists) throw new Error('Friend request already exists');

    await prisma.friendship.create({ data: { senderId, receiverId, status: PENDING } });
  
    } 
  catch (error) 
  {
    respond.success = false;
    respond.message = error instanceof Error ? error.message : 'Unknown error';
    return res.status(400).send(respond);
  }

  return res.send(respond);
}






export async function rejectFriendRequestHandler(req: FastifyRequest, res: FastifyReply)
{

  const respond: ApiResponse<null> = { success: true, message: 'Friend request rejected' };
  
  const body = req.body as any;
  const headers = req.headers as any;
  const receiverId = (headers['x-user-id']);
  const senderId = (body.senderId);

  try 
  {
    const exists = await prisma.friendship.findFirst({
    where: {
    senderId,
    receiverId,
    status: PENDING,
    },
    });

    if (!exists) throw new Error('No pending friend request found to reject');

    await prisma.friendship.delete({
        where: { id: exists.id },
        });

  } 
  catch (error)
  {
    respond.success = false;
    respond.message = error instanceof Error ? error.message : 'Unknown error';
    return res.status(400).send(respond);
  }

  return res.send(respond);
}












export async function removeFriendHandler(req: FastifyRequest, res: FastifyReply)
{
  const respond: ApiResponse<null> = { success: true, message: 'Friend removed successfully' };
  
  const { senderId } = req.params as any;
  const headers = req.headers as any;
  const receiverId = (headers['x-user-id']);

  try 
  {
    const friendship = await prisma.friendship.findFirst({
      where: {
        OR: [
          { senderId, receiverId, status: ACCEPTED },
          { senderId: receiverId, receiverId: senderId, status: ACCEPTED },
        ],
      },
    });

    if (!friendship)
      throw new Error('You are not friends with this user');

    await prisma.friendship.delete({ where: { id: friendship.id }});

  } 
  catch (error) 
  {
    respond.success = false;
    respond.message = error instanceof Error ? error.message : 'Unknown error';
    return res.status(400).send(respond);
  }

  return res.send(respond);
}











export async function cancelFriendRequestHandler(req: FastifyRequest, res: FastifyReply) 
{
  const respond: ApiResponse<null> = { success: true, message: 'Friend request canceled' };
  
  const headers = req.headers as any;
  const senderId = (headers['x-user-id']);
  const { receiverId } = req.body as any;

  try 
  {
    const friendship = await prisma.friendship.findFirst({
      where: {
        senderId,
        receiverId,
        status: PENDING,
      },
    });

    if (!friendship)
      throw new Error('No pending friend request found to cancel');

    await prisma.friendship.delete({ where: { id: friendship.id }});

  } 
  catch (error) 
  {
    respond.success = false;
    respond.message = error instanceof Error ? error.message : 'Unknown error';
    return res.status(400).send(respond);
  }

  return res.send(respond);
}


