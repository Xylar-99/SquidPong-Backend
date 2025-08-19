// import { FastifyRequest, FastifyReply } from 'fastify';
// import prisma from '../db/database';
// import { isFriendRequestExists } from '../utils/utils';

// import { UserProfile } from '../utils/types';
// import { ApiResponse } from '../utils/errorHandler';



  


// export async function blockUserHandler(req:FastifyRequest , res:FastifyReply)
// {
//   const respond : ApiResponse<null> = {success : true  , message : 'user created success'}

//   const headers = req.headers as any;
//   const {blockId} = req.params as any;
//   const userId = Number(headers['x-user-id'])

//   let friendata:any = {};
//   friendata['userId'] = userId;
//   friendata['friendId'] = Number(blockId);
//   friendata['status'] = 'accepted';
  

//   try 
//   {

//     friendata = await isFriendRequestExists(friendata);
//     if(!friendata)
//       throw new Error("ready unblocked")
    
//     const userId = friendata.userId;
//     if(friendata.friendId == headers.id)
//     {
//       friendata.userId = friendata.friendId;
//       friendata.friendId = userId;
//       friendata.status = 'blocked'
//     }
    

//     await prisma.friendship.updateMany({
//       where: {
//         OR: [
//           { userId: friendata.userId, friendId: friendata.friendId },
//           { userId: friendata.friendId, friendId: friendata.userId }
//         ]
//       },
//       data: friendata
//     });
    
//   }
//   catch (error) 
//   {
//     respond.success = false;
//     if (error instanceof Error)
//       {
//         respond.message = error.message;
//         return res.status(400).send(respond)
//       }
//   }
  
//   return res.send(respond)
// }



// export async function unblockUserHandler(req:FastifyRequest , res:FastifyReply)
// {
//   const respond : ApiResponse<null> = {success : true  , message : 'user created success'}

//   const {blockId} = req.params as any;
//   const headers = req.headers as any;
//   const userId = Number(headers['x-user-id'])

//   let friendata:any = {};
//   friendata['userId'] = userId;
//   friendata['friendId'] = Number(blockId);
//   friendata['status'] = 'blocked';
  

//   try 
//   {

//     friendata = await isFriendRequestExists(friendata);
//     if(!friendata)
//       throw new Error("ready unblocked")
    
//     if(friendata.userId != headers.id)
//       throw new Error("not have pers for unblocked user not block him")

//     await prisma.friendship.updateMany({
//       where: {
//         OR: [
//           { userId: friendata.userId, friendId: friendata.friendId },
//           { userId: friendata.friendId, friendId: friendata.userId }
//         ]
//       },
//       data: {status : 'accepted'}
//     });
    
//   }
//   catch (error) 
//   {
//     respond.success = false;
//     if (error instanceof Error)
//       {
//         respond.message = error.message;
//         return res.status(400).send(respond)
//       }
//   }
  
//   return res.send(respond)
// }


// export async function getBlockedUsersHandler(req:FastifyRequest , res:FastifyReply)
// {
//   const respond : ApiResponse<UserProfile[]> = {success : true  , message : 'user created success'}

//   const headers = req.headers as any;
//   const userId = Number(headers['x-user-id'])

//   try 
//   {
//   const blockedusers = await prisma.friendship.findMany({where: {userId : userId , status: 'blocked'}});
//   const friendIds = blockedusers.map((f:any) => f.friendId);

//   const profiles = await prisma.profile.findMany({
//     where: {
//       id: { in: friendIds }
//     }
//   })
//   respond.data = profiles;
//   } 
//   catch (error) 
//   {
//     respond.success = false;
//     if (error instanceof Error)
//       {
//         respond.message = error.message;
//         return res.status(400).send(respond)
//       }
//   }
  
//   return res.send(respond)
  
// }


