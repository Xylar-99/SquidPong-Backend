import { FastifyInstance } from 'fastify';
import staticplugin from './staticAndBody'
import authplugin from './authPlugin'



export default async function registerPlugins(app:FastifyInstance) 
{
    staticplugin(app);
    authplugin(app);
}