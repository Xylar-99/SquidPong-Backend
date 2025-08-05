import { FastifyRequest, FastifyReply  } from 'fastify';
import { sendToService } from '../integration/api_calls';


async function proxyToUserService(req: FastifyRequest, res: FastifyReply) 
{
  const userId = req.id;
  console.log('proxy id : ' ,  userId)
  return res.from(`http://user:4001${req.url}`, {

  rewriteRequestHeaders: (reqq:any, headers:any) => {
  headers['x-user-id'] = userId;
  return headers;

  }
  });

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