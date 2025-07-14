import prisma from '../db/database';
import { sendToService } from '../integration/api_calls';



export async function   createAccount(data:any): Promise<any>
{
    let password:string = data?.password ?? null;
    let isExist = false;
    {
        const user = await prisma.user.findUnique({where : {email : data.email}})
        if(!user)
            return;
        if(user.password)
            password = user.password;
        isExist = true;
    }

    const dataUser = {email : data.email , password : password , username : data.username }
    const Created = await prisma.user.upsert({ where: { email: data.email }, update: {password : dataUser.password}, create: dataUser });

    if(!isExist)
    {
        const profile  = {...Created , ...data }
        await sendToService('http://user:4001/api/users/profile' , 'POST'  , null , profile)
    }

    return Created;
}