import { sendMail } from '../../services/mail';

export const mail = async (req, res) => {
  try {
    const {
      questionSet,
      totalScore,
      candidateScore,
      adminEmail,
      candidateEmail } = req.body;
    const params = { 
      questionSet,
      totalScore,
      candidateScore,
      adminEmail,
      candidateEmail
    };
    const mailResponse = await sendMail(params);
    res.status(200).json({ message: 'Success' });
  } catch(err) {
    res.status(500).json({ message: 'Sending failed', error: err });
  }
};