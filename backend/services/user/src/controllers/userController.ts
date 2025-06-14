import { FastifyRequest, FastifyReply } from 'fastify';



async function patchCurrentUserHandler(req:FastifyRequest , res:FastifyReply)
{
    return res.send(req.body)
}


async function getCurrentUserHandler(req:FastifyRequest , res:FastifyReply)
{
    return res.send(req.body)
}


async function getUserByIdHandler(req:FastifyRequest , res:FastifyReply)
{
    return res.send(req.body)
}



export {patchCurrentUserHandler , getCurrentUserHandler , getUserByIdHandler}