
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "ksaksham39@gmail.com",
    pass: "egzx neza pzed wpoq",
  },
});

export async function sendMail(to:string, ) {
    try {
        const info = await transporter.sendMail({
            from: "vanshikakumar1910@gmail.com",
            to,
            subject : "Regarding Your Interest In My Profile",
            html: `<b>Thanks for Reaching Out, I have Recieved your message request, will reach out to you </b>`,
          });
          return true
          
    } catch (error) {
        console.log(error);
        return false
        
    }
  
}
