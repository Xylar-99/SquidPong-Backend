import prisma from "../db/database";
import { FastifyRequest } from 'fastify';




export async function convertMultipartToJson(req: FastifyRequest) : Promise<any>
{
    console.log('chnage later')
    return {username : "testiiiiing"};
}
