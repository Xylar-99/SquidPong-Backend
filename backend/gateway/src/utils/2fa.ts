import twilio from 'twilio';
import { FastifyRequest, FastifyReply } from 'fastify';
import app from '../app';
// const accountSid = process.env.SID ;
// const authToken = process.env.AUTH_TOKEN;
// const client = twilio(accountSid, authToken);

// const optionOfTwilio = {
//     body: 'Hello! This is a test message from Fastify app 😊',
//     from: '+14799776885', 
//     to: '+447577205770'
//   }


// export async function sendToPhone()
// {
//    client.messages.create(optionOfTwilio)
// }






// import { Vonage } from '@vonage/server-sdk';
// import { Auth } from '@vonage/auth';

// const auth = new Auth({
//   apiKey: '32f87c1a',
//   apiSecret: 'wzMqke1XxRlMWmfW',
// });


// const vonage = new Vonage(auth);

// const from = 'VonageTest';      
// const to = '+212715822574';       
// const text = 'Hello from Vonage via Node.js!';

// export async function sendToPhone() {
//   try {
//     const res = await vonage.sms.send({ to, from, text });
//     console.log('SMS sent:', res);
//   } catch (err) {
//     console.error('Error:', err);
//   }
// }





import QRCode from 'qrcode';
import { authenticator } from 'otplib';


export function authenticator2FA() 
{
  const secret = authenticator.generateSecret();
  const username = 'abdelbassat';
  const serviceName = 'ft_trandandan';
  
  const otpauth = authenticator.keyuri(username, serviceName, secret);
  
  QRCode.toDataURL(otpauth, function (err:any, url:any) 
  {
    if (err) {
      console.error(err);
      return;
    }
    console.log(url);
  });

}

export function Verifyauthenticator2FA(secret:any , userInput:any) 
{
  
  // const token = authenticator.generate(secret);
  
  const isValid = authenticator.check(userInput, secret);
  console.log('Is token valid?', isValid);
  
}







export async function setJWT(res:FastifyReply , id:any) 
{
  // res
  // .header('Cache-Control', 'no-store')
  // .header('Pragma', 'no-cache')
  // .header('Expires', '0');


  const accessToken = await app.jwt.sign({ userId: id } , { expiresIn: '1h' });
  const refreshToken = await app.jwt.sign({ userId: id } , { expiresIn: '7d' });

  res.setCookie('accessToken', accessToken, { httpOnly: false , path : '/' });
  res.setCookie('refreshToken', refreshToken, { httpOnly: false , path : '/', maxAge: 7 * 24 * 60 * 60,});
}








