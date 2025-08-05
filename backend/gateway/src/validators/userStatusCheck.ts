
import prisma from "../db/database";
import redis from "../integration/redisClient";
import { VerifyPassword } from "../utils/hashedPassword";
import { UserProfileMessage ,EmailMessage } from "../utils/messages";


export async function isUserVerified(body:any)
{
    const userdb = await prisma.user.findUnique({ where: { email: body.email }})
    if(userdb && userdb.password)
      throw new Error(EmailMessage.EMAIL_ALREADY_VERIFIED);

    const code = await redis.get(`2fa:${body.email}`);
    if(!code)
        throw new Error(EmailMessage.VERIFICATION_TOKEN_EXPIRED)

    if(code != body.code)
      throw new Error(EmailMessage.INVALID_VERIFICATION_TOKEN)
}





export async function isUserAllowedToLogin(body:any , user:any | null)
{
    if(!user)
      throw new Error(UserProfileMessage.USER_NOT_FOUND)

    if(!user.password)
        throw new Error(UserProfileMessage.OAUTH_LOGIN_REQUIRED)

    if(await VerifyPassword(body.password , user.password) ==  false)
      throw new Error(UserProfileMessage.INVALID_CREDENTIALS)

}



export async function isUserAlreadyRegistered(body:any)
{
    const user = await prisma.user.findUnique({ where: { email: body.email , username : body.username}})

    if(!user)
      return;

    if(user.password)
      throw new Error(UserProfileMessage.USER_ALREADY_EXISTS);

}




export async function isResetCodeValid(code:string , confirmPassword:string , newPassword:string , user:any)
{
    
    if(code != '999999')  
      throw new Error("user not found")
      
    if(confirmPassword != newPassword)
      throw new Error("confirmPassword != newPassword")
      
    if(await VerifyPassword(newPassword , user.password) == false)
      throw new Error("please change password is ready used write new password")
    
}
