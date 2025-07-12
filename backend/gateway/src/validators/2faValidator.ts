import {FastifyReply } from "fastify";
import app from "../app";
import prisma from "../db/database";
import { sendDataToQueue } from "../integration/rabbitmqClient";

export async function setJwtTokens(res: FastifyReply, user: any | null) 
{


  const accessToken = await app.jwt.sign({ userId: user.id }, { expiresIn: "1h" });
  const refreshToken = await app.jwt.sign({ userId: user.id }, { expiresIn: "7d" });

  res.setCookie("accessToken", accessToken, { httpOnly: true, path: "/" });
  res.setCookie("refreshToken", refreshToken, {
    httpOnly: true,
    path: "/",
    maxAge: 7 * 24 * 60 * 60,
  }); 
}






export async function is_2fa_enabled(res: FastifyReply, user: any | null)
{
  const data = await prisma.twofactorauth.findUnique({ where: { userId: user.id}})

  if(!data || !data.enabled)
  {
    await setJwtTokens(res , user);
    return ;
  }

}



















