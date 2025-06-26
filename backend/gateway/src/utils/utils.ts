import amqp from 'amqplib';
import { ws } from '../server';
import prisma from '../db/database';
import { sendToService } from '../integration/api_calls';



export async function createAccount(data:any): Promise<any>
{

    const user = await prisma.user.upsert({ where: { email: data.email }, update: {password:data.password}, create: data });
    await sendToService('http://user:4001/api/users/profile' , 'POST' , user)

    return user;
}