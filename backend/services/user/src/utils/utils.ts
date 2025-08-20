import prisma from "../db/database";
import fs from 'fs';
import { pipeline } from 'stream/promises';
import { FastifyRequest } from 'fastify';


// export async function isFriendRequestExists(friendata:any) : Promise<any>
// {
//     const existing = await prisma.friendship.findFirst({
//         where: {
//           status: friendata.status,
//           OR: [
//             { userId: friendata.userId, friendId: friendata.friendId },
//             { userId: friendata.friendId, friendId: friendata.userId }
//           ]
//         }
//       });

//     return (existing);
// }






export async function convertParsedMultipartToJson(req: FastifyRequest): Promise<any> {
  const rawBody = req.body as any;
  const data: Record<string, any> = {};
  let filePath: string | undefined;

  for (const key in rawBody) {
    const field = rawBody[key];

    if (field?.type === 'file') {
      // Save file to tmp folder
      filePath = `/tmp/images/${Date.now()}-${field.filename}`;
      await pipeline(field.file, fs.createWriteStream(filePath));
      data[key] = `${process.env.URL}${filePath}`;
    } else if (field?.type === 'field') {
      data[key] = field.value;
    }
  }

  return { ...data };
}