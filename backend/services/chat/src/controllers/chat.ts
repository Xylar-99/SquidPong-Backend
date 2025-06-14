import { FastifyRequest, FastifyReply } from 'fastify';


async function getChatRoomsHandler(req:FastifyRequest , res:FastifyReply)
{
    return res.send(req.body)
}




async function postCreateRoomHandler(req:FastifyRequest , res:FastifyReply)
{
    return res.send(req.body)
}



async function getRoomByIdHandler(req:FastifyRequest , res:FastifyReply)
{
    return res.send(req.body)
}



async function postSendMessageHandler(req:FastifyRequest , res:FastifyReply)
{
    return res.send(req.body)
}



async function getMessagesHandler(req:FastifyRequest , res:FastifyReply)
{
    return res.send(req.body)
}



export { getChatRoomsHandler, postCreateRoomHandler, getRoomByIdHandler, postSendMessageHandler, getMessagesHandler };
