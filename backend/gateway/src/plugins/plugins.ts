import { FastifyInstance } from 'fastify';
import authplugin from './authPlugin'
import proxyplugin from './proxy'

export default async function registerPlugins(app:FastifyInstance) 
{
    await proxyplugin(app);
    await authplugin(app);
}