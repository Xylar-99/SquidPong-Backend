import { FastifyInstance } from 'fastify';
import authplugin from './authPlugin'
import proxyplugin from './proxy'
import corsPlugin from './cors'

export default async function registerPlugins(app:FastifyInstance) 
{
    await corsPlugin(app); // Register CORS first before other plugins
    await authplugin(app);
    
    await proxyplugin(app);
}