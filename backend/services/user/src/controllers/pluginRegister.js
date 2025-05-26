const fastify = require('../server')



const multipart_config = {
  limits: {
    fileSize: 5 * 1024 * 1024,
    files: 1 
  }
}


async function registerPlugins()
{

}

module.exports = registerPlugins;