
import {FastifyReply } from "fastify";
import app from "../app";
import { sendVerificationEmail } from "../utils/verification_messenger";

import QRCode from "qrcode";
import { authenticator } from "otplib";
import { errorHandler } from "../utils/errorHandler";

export function authenticator2FA() {
  const secret = authenticator.generateSecret();
  const username = "abdelbassat";
  const serviceName = "ft_trandandan";

  const otpauth = authenticator.keyuri(username, serviceName, secret);

  QRCode.toDataURL(otpauth, function (err: any, url: any) {
    if (err) {
      console.error(err);
      return;
    }
    console.log(url);
  });
}




export function Verifyauthenticator2FA(secret: any, userInput: any) {
  // const token = authenticator.generate(secret);

  const isValid = authenticator.check(userInput, secret);
  console.log("Is token valid?", isValid);
}



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



export async function verifyTwoFactorAuth(method:string) 
{
  // if(method == 'email')
  //   sendVerificationEmail()

}
























