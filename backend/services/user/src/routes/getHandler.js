
const dataUser = require('../utils/fetchUser')
const prisma = require('../db/db')


// get my user
async function getUserHandler(req , res) 
{
  const me = await dataUser.getUserByToken(req);
  const profile = await prisma.account_details.findUnique({where: {user_id : me.id} })
  profile.name = me.name;
  
  return res.send(profile);
}


module.exports = {getUserHandler };