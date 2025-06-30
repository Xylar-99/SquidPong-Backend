import prisma from "../db/database";

export async function isFriendRequestExists(friendata:any) : Promise<boolean>
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

