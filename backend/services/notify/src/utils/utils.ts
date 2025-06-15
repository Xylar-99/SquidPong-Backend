  
import nodemailer from 'nodemailer';
        

const mailOptions = {
  from: 'abdelbassat ',
  to: 'aquaoubai@gmail.com',
  subject: 'ft_trandandan',
  text: '455',
};


const transporter = nodemailer.createTransport({
  service: 'gmail', 
  auth: {
      user: process.env.USER,
      pass: process.env.PASS, 
  },
});


export async function sendEmailMessage(info:any)
{
  if(!info)
    return;
  
  const data = JSON.parse(info.content.toString());
  mailOptions.to = data.email;
  mailOptions.text = data.text;
        
  transporter.sendMail(mailOptions)
  console.log("done send message to email");
    
}
