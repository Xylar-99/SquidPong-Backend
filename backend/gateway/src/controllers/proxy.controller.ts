import { FastifyRequest, FastifyReply } from 'fastify';
import { sendToService } from '../integration/api_calls';
import { Multipart } from 'fastify-multipart';
import fs from 'fs';
import pump from 'pump';


async function Editprofile(req: FastifyRequest) : Promise<any>
{
    const parts = await req.parts() as AsyncIterable<any>;

  
    const data: Record<string, any> = {};
    let avatarFile: any = null;
  
    console.log("hiiiiiiiiiiiiiii")
    for await (const part of parts) 
    {
        console.log("hello")
        if (part.type == 'file')
            avatarFile = part;
        else
        data[part.fieldname] = part.value as string;
    }

    console.log("kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk")
    const filePath = `/tmp/images/${avatarFile.filename}`;
    await pump(avatarFile.file, fs.createWriteStream(filePath));
    
    const result = {
      ...data,
      avatar: filePath,
    };
  
    console.log(result)
    return result;
}


    
  


async function proxyToUserService(req:FastifyRequest , res:FastifyReply)
{
    let body = req.body as any;
    if(req.url == '/api/users/me' && req.method == 'POST')
        body = await Editprofile(req)
    console.log(req.method , req.url);
    const data:any =  await sendToService(`http://user:4001${req.url}` , req.method , req.id , body)
    return res.send(data)
}




async function proxyToChatService(req:FastifyRequest , res:FastifyReply)
{
    const method = req.method;
    const url = req.url;

    const data:any =  await sendToService(`http://chat:4002${url}` , method , req.body)
    return res.send(data)
}



async function proxyToGameService(req:FastifyRequest , res:FastifyReply)
{
    const method = req.method;
    const url = req.url;

    const data:any =  await sendToService(`http://game:4001${url}` , method , req.body)
    return res.send(data)
}




async function proxyToNotifyService(req:FastifyRequest , res:FastifyReply)
{
    const method = req.method;
    const url = req.url;

    const data:any =  await sendToService(`http://notify:4004${url}` , method , req.body)
    return res.send(data)
}



export {proxyToNotifyService , proxyToChatService , proxyToGameService , proxyToUserService}