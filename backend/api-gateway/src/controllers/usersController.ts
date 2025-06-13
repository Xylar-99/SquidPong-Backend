import { FastifyRequest, FastifyReply } from 'fastify';


// get method controllers
async function getRootHandler(req:FastifyRequest , res:FastifyReply)
{
    return res.send({msg : "hello ts"})
}



// post method controllers
async function postSignupHandler(req:FastifyRequest , res:FastifyReply)
{

    return res.send(req.body)
}


async function postLoginHandler(req:FastifyRequest , res:FastifyReply)
{
    return res.send(req.body)
}




export {postLoginHandler , getRootHandler , postSignupHandler}