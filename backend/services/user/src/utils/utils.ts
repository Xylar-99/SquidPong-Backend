import prisma from "../db/database";
import fs from 'fs';
import { pipeline } from 'stream/promises';
import { FastifyRequest } from 'fastify';


export async function isFriendRequestExists(friendata:any) : Promise<any>
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

    return (existing);
}






export async function convertMultipartToJson(req: FastifyRequest) : Promise<any>
{
    const parts = await req.parts() ;
  
    const data: Record<string, any> = {};
    let filePath;
  
    for await (const part of parts)
    {
        if (part.type == 'file')
        {
            filePath = `/tmp/images/${Date.now()}-${part.filename}`;
            await pipeline(part.file, fs.createWriteStream(filePath));
            data['avatar'] = `${process.env.URL}${filePath}`;
        }
        else
            data[part.fieldname] = part.value as string;
    }


    const result = {
      ...data,
    };
  
    return result;
}
