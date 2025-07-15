import { FastifyRequest, FastifyReply } from 'fastify';
import { sendToService } from '../integration/api_calls';
import * as fs from 'fs';
import pump from 'pump';


async function Editprofile(req: FastifyRequest) : Promise<any>
{
    const parts = req.parts();
  
    const data: Record<string, string> = {};
    let avatarFile: any = null;
  
    for await (const part of parts) 
    {
      if (part.file) 
        {
        if (part.fieldname === 'avatar') {
          avatarFile = part;
        }
      } 
      else 
        data[part.fieldname] = part.value;
    }
  

    // if (!avatarFile) 
    //   return res.status(400).send({ error: 'Avatar file is required' });
    
    const filePath = `/tmp/images/${avatarFile.filename}`;
    await pump(avatarFile.file, fs.createWriteStream(filePath));
  
    const result = {
      ...data,
      avatar: filePath,
    };
  
    return result;
}


    
  


async function proxyToUserService(req:FastifyRequest , res:FastifyReply)
{
    let body = req.body as any;
    if(req.url == '/api/users/profile' && req.method == 'PUT')
        body = await Editprofile(req)
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