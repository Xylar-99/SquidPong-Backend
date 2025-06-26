import amqp from 'amqplib';
import { ws } from '../server';
import prisma from '../db/database';
import { sendToService } from '../integration/api_calls';



export async function createAccount(data:any): Promise<any>
{
    const dataUser = {email : data.email , password : data?.password ?? null , username : data.username }
    console.log(dataUser)

    const user = await prisma.user.upsert({ where: { email: data.email }, update: {username : dataUser.username}, create: dataUser });
    
    const profile  = {...user , avatar : data.avatar }
    await sendToService('http://user:4001/api/users/profile' , 'POST' , profile)
    
    return user;
}