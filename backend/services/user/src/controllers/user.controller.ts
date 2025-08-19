import { FastifyRequest, FastifyReply } from 'fastify';
import prisma from '../db/database';
import { convertMultipartToJson } from '../utils/utils';
import { ApiResponse } from '../utils/errorHandler';
import { Profile } from '../utils/types';

export async function createProfileHandler(req: FastifyRequest, res: FastifyReply) {
  const respond: ApiResponse<null> = { success: true, message: 'User created successfully' };
  const body = req.body as any;

  // Map input body to schema fields
  const profileData = {
    userId: body.id,
    username: body.username,
    firstName: body.fname,
    lastName: body.lname,
  };

  try 
  {


  const profileData = {
          userId: body.id,
          username: body.username,
          firstName: body.fname,
          lastName: body.lname,
      };

  await prisma.profile.create({
  data: {
    ...profileData,
    preferences: { create: {} },       // uses ProfilePreferences defaults
    playerStats: { create: {} },       // uses PlayerStats defaults
    ownedCharacters: { create: [] },   // optional: create empty array
  },
  });

  } 
  catch (error) 
  {
    respond.success = false;
    if (error instanceof Error) {
      respond.message = error.message;
      return res.status(400).send(respond);
    }
  }

  return res.send(respond);
}


export async function updateProfileHandler(req: FastifyRequest, res: FastifyReply) {
  const respond: ApiResponse<null> = { success: true, message: 'User updated successfully' };

  try 
  {

    const body = req.body as any;
    const headers = req.headers as any;
    const userId = Number(headers['x-user-id']);

    console.log("update data : " , body)
    // await prisma.profile.update({
    //   where: { userId },
    //   data: body,
    // });
  } 
  catch (error) 
  {
    respond.success = false;
    if (error instanceof Error) {
      respond.message = error.message;
      return res.status(400).send(respond);
    }
  }

  return res.send(respond);
}



export async function getAllUserHandler(req: FastifyRequest, res: FastifyReply)
{
  const headers = req.headers as any;
  const userId = Number(headers['x-user-id']);
  const respond: ApiResponse<Profile[]> = { success: true, message: 'Users fetched successfully' };

  try 
  {

    const profiles = await prisma.profile.findMany({
    include: {
      preferences: { include: { notifications: true } },
      playerStats: { include: { vsAIStats: true } },
      ownedCharacters: { include: { character: true } },
      ownedPaddles: { include: { paddle: true } },
      playerMatches: true,
      createdMatches: true,
      matchHistory: true,
      tournamentEntries: true,
      sentFriendRequests: true,
      receivedFriendRequests: true,
      selectedCharacter: true,
      selectedPaddle: true
    }
  })

  respond.data = profiles;
  
  } 
  catch (error) 
  {

    respond.success = false;
    if (error instanceof Error) {
      respond.message = error.message;
      return res.status(400).send(respond);
    }
  }

  return res.send(respond);
}



// export async function deleteProfileHandler(req: FastifyRequest, res: FastifyReply) {
//   const respond: ApiResponse<null> = { success: true, message: 'User deleted successfully' };

//   try {
//     const headers = req.headers as any;
//     const userId = Number(headers['x-user-id']);

//     await prisma.profile.delete({
//       where: { userId },
//     });
//   } catch (error) {
//     respond.success = false;
//     if (error instanceof Error) {
//       respond.message = error.message;
//       return res.status(400).send(respond);
//     }
//   }

//   return res.send(respond);
// }




export async function getCurrentUserHandler(req: FastifyRequest, res: FastifyReply)
{

  const headers = req.headers as any;
  const userId = Number(headers['x-user-id']);
  const respond: ApiResponse<Profile | any> = { success: true, message: 'Current user fetched' };

  try 
  {


  const profile =  await prisma.profile.findUnique({
    where: { userId },
    include: {
      preferences: { include: { notifications: true } },
      playerStats: { include: { vsAIStats: true } },
      ownedCharacters: { include: { character: true } },
      ownedPaddles: { include: { paddle: true } },
      playerMatches: true,
      createdMatches: true,
      matchHistory: true,
      tournamentEntries: true,
      sentFriendRequests: true,
      receivedFriendRequests: true,
      selectedCharacter: true,
      selectedPaddle: true
    }
  })

  respond.data = profile;

  }
  catch (error) 
  {
    respond.success = false;
    if (error instanceof Error) 
    {
      respond.message = error.message;
      return res.status(400).send(respond);
    }

  }

  return res.send(respond);
}



// export async function getFriendsOfUserHandler(req: FastifyRequest, res: FastifyReply) {
//   const params = req.params as any;
//   const userId = Number(params.userId);
//   const respond: ApiResponse<UserProfile[]> = { success: true, message: 'Friends fetched' };

//   try {
//     const friendships = await prisma.friendship.findMany({
//       where: {
//         status: 'ACCEPTED',
//         OR: [
//           { senderId: userId },
//           { receiverId: userId },
//         ],
//       },
//     });

//     // Extract friend IDs except the user itself
//     const friendIds = friendships.map(f =>
//       f.senderId === userId ? f.receiverId : f.senderId
//     );

//     const profiles = await prisma.profile.findMany({
//       where: { id: { in: friendIds } },
//     });

//     respond.data = profiles;
//   } catch (error) {
//     respond.success = false;
//     if (error instanceof Error) {
//       respond.message = error.message;
//       return res.status(400).send(respond);
//     }
//   }

//   return res.send(respond);
// }

// export async function getUserByIdHandler(req: FastifyRequest, res: FastifyReply) {
//   const respond: ApiResponse<UserProfile | null> = { success: true, message: 'User fetched' };
//   const { id } = req.params as any;

//   try {
//     const profile = await prisma.profile.findUnique({
//       where: { userId: Number(id) },
//     });
//     respond.data = profile;
//   } catch (error) {
//     respond.success = false;
//     if (error instanceof Error) {
//       respond.message = error.message;
//       return res.status(400).send(respond);
//     }
//   }

//   return res.send(respond);
// }

