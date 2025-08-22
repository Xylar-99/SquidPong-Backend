import { FastifyRequest, FastifyReply } from 'fastify';
import prisma from '../db/database';

import { Profile } from '../utils/types';
import { ApiResponse } from '../utils/errorHandler';
import { getProfileId } from '../utils/utils';

enum FriendshipStatus {
  PENDING = "PENDING",
  ACCEPTED = "ACCEPTED",
  DECLINED = "DECLINED",
  BLOCKED = "BLOCKED",
}

const { BLOCKED , ACCEPTED} = FriendshipStatus;


// ----------------- BLOCK USER -----------------
export async function blockUserHandler(req: FastifyRequest, res: FastifyReply)
{

  console.log("hello i am here blocker handler ")
  const respond: ApiResponse<null> = { success: true, message: 'User blocked successfully' };
  const headers = req.headers as any;
  const { blockId: blockUserId } = req.params as any;

  try 
  {
    const userId = await getProfileId(Number(headers['x-user-id']));
    const friendId = await getProfileId(Number(blockUserId));

    const friendship = await prisma.friendship.findFirst({
      where: {
        OR: [
          { senderId: userId, receiverId: friendId, status: ACCEPTED },
          { senderId: friendId, receiverId: userId, status: ACCEPTED },
        ],
      },
    });

    if (!friendship) throw new Error('You can only block existing friends');

    await prisma.friendship.update({
      where: { id: friendship.id },
      data: { status: BLOCKED },
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

// ----------------- UNBLOCK USER -----------------
export async function unblockUserHandler(req: FastifyRequest, res: FastifyReply)
{
  const respond: ApiResponse<null> = { success: true, message: 'User unblocked successfully' };
  const headers = req.headers as any;
  const { blockId: blockUserId } = req.params as any;

  try 
  {
    const userId = await getProfileId(Number(headers['x-user-id']));
    const friendId = await getProfileId(Number(blockUserId));

    const friendship = await prisma.friendship.findFirst({
      where: {
        OR: [
          { senderId: userId, receiverId: friendId, status: BLOCKED },
          { senderId: friendId, receiverId: userId, status: BLOCKED },
        ],
      },
    });

    if (!friendship) throw new Error('No blocked friendship found to unblock');

    await prisma.friendship.update({
      where: { id: friendship.id },
      data: { status: ACCEPTED },
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

// ----------------- GET BLOCKED USERS -----------------
export async function getBlockedUsersHandler(req: FastifyRequest, res: FastifyReply)
{
  const respond: ApiResponse<Profile[]> = { success: true, message: 'get blocked users success' };
  const headers = req.headers as any;

  try 
  {
    const userId = await getProfileId(Number(headers['x-user-id']));

    const profile = await prisma.profile.findUnique({
      where: { id: userId },
      include: {
        sentFriendRequests: {
          where: { status: BLOCKED },
          include: { receiver: true },
        },
        receivedFriendRequests: {
          where: { status: BLOCKED },
          include: { sender: true },
        },
      },
    });

    if (!profile) throw new Error('Profile not found');

    const blockedUsers = [
      ...profile.sentFriendRequests.map((f:any) => f.receiver),
      ...profile.receivedFriendRequests.map((f:any) => f.sender),
    ];

    respond.data = blockedUsers;

  } 
  catch (error) 
  {
    respond.success = false;
    respond.message = error instanceof Error ? error.message : 'Unknown error';
    return res.status(400).send(respond);
  }

  return res.send(respond);
}
