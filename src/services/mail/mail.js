const nodemailer = require('nodemailer');

export const sendMail = async (params) => {
  try {
      const { questionSet,
        totalScore,
        candidateScore,
        adminEmail,
        candidateEmail } = params;

      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'christybabu26@gmail.com',
          pass: 'jessybabu'
        }
      });

      const mailOptions = {
        from: 'Mock Test Runner',
        to: `${adminEmail}, ${candidateEmail}`,
        subject: 'Exam completed successfully',
        text: `${candidateEmail ? `User ${candidateEmail}` : ''}
          Successfully completed the examination.
          Score ${candidateScore} out of ${totalScore}.
          QuestionSet id: ${questionSet}
          Our team will be in touch with you.`
      };

      return await new Promise((resolve, reject) => {
        transporter.sendMail(mailOptions, function(error, info){
          if (error) {
            console.log(error);
            reject(error);
          } else {
            console.log('Email sent: ' + info.response);
            resolve(info);
          }
        });
      });
    } catch (err) {
      console.log('Failed to send the email', err);
    }
};



