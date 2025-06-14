import { FastifyRequest, FastifyReply } from 'fastify';





async function proxyToUserService(req:FastifyRequest , res:FastifyReply)
{
    return res.type('text/html').sendFile('index.html')
}




async function proxyToChatService(req:FastifyRequest , res:FastifyReply)
{
    return res.type('text/html').sendFile('index.html')
}



async function proxyToGameService(req:FastifyRequest , res:FastifyReply)
{
    return res.type('text/html').sendFile('index.html')
}




async function proxyToNotifyService(req:FastifyRequest , res:FastifyReply)
{
    return res.type('text/html').sendFile('index.html')
}



export {proxyToNotifyService , proxyToChatService , proxyToGameService , proxyToUserService}