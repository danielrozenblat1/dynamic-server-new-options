

const nodemailer = require('nodemailer');
exports.gettingLead=async(req,res,next)=>{

if(!req.body.name){
    const error=new Error("משהו השתבש, בדוק את האינטרנט שלך");
    error.statusCode=401;
throw error;
}
if(!req.body.phone){
    const error=new Error("משהו השתבש, בדוק את האינטרנט שלך");
    error.statusCode=401;
throw error;
}
if(!req.body.reciver){
    const error=new Error("משהו השתבש, בדוק את האינטרנט שלך");
    error.statusCode=401;
throw error;
}




const name=req.body.name;
const phone=req.body.phone;
const email=req.body.email ;

const reciver=req.body.reciver


 

    try {
    
        // Send email with attached PDF
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'drbusiness12345@gmail.com',
                pass: 'wjlcfbbovwyordfn'
            }
        });
    //
    const mailOptions = {
      from: "drbusiness12345@gmail.com",
      to: reciver,
      subject: ' ! מישהו חדש השאיר פרטים באתר ',
      text: `שם מלא : ${name}\nמייל ${email}\nמספר טלפון ${phone}`,

  };
  if (req.body.reason) {
    mailOptions.text += `\nסיבה: ${req.body.reason}`;
  }
 
    
        await transporter.sendMail(mailOptions);
      
    
        return res.status(201).json({ message: "We got the info, email sent " });
      } catch (error) {
        console.error('Error saving lead or sending email:', error.message);
        return res.status(500).json({ error: 'Internal server error' });
      }
    };

