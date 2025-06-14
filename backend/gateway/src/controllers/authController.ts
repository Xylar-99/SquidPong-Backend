import { FastifyRequest, FastifyReply } from 'fastify';


async function getRootHandler(req:FastifyRequest , res:FastifyReply)
{
    return res.type('text/html').sendFile('index.html')
}






async function postSignupHandler(req:FastifyRequest , res:FastifyReply)
{
    return res.send(req.body)
}



async function postLoginHandler(req:FastifyRequest , res:FastifyReply)
{
    return res.send(req.body)
}



async function postLogoutHandler(req:FastifyRequest , res:FastifyReply)
{
    return res.send(req.body)
}




export {postLoginHandler , postLogoutHandler , getRootHandler , postSignupHandler}