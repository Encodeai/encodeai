import nodemailer from 'nodemailer';
function mailer(email,callback){
    const transport = nodemailer.createTransport({
        service:'gmail',
        auth:{
            user : process.env.EMAIL,
            pass : process.env.PASSWORD        
        }
    });
    const mailOption = {
        from : process.env.EMAIL,
        to : email,
        subject:'Verification Mail',
        html:`Hello ${email}<br>This is a verification mail from <b>EncodeAI Central India's Most trusted Organization</b>. You need to verify yourself by clicking on the below link. <br><a href='${process.env.BACKEND_URL}employee/verifyEmail?email=${email}'>Click Here to Verify</a>`
    }

    transport.sendMail(mailOption,(error,info)=>{
        if(error){
            console.log("Error while dealing with mail option");
            callback(false);
        }
        else{
            console.log("Mail sent notification from mailer");
            callback(info);
        }
    });
}
export default {mailer:mailer};