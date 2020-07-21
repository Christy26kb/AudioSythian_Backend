import { getCandidateByField } from '../../services/candidates';
import { getAdminUserByField } from '../../services/admin';

export const login = async (req, res) => {
  try {
    const { type, email } = req.body;
    const clientPassword = req.body.password;
    let data;
    
    if (type === 'admin') {
      // Admin login
      data = await getAdminUserByField({ field: 'email', value: email });
      if (data) {
        const { email, name, id, password } = data;
        if (data.password === clientPassword) {
          res.status(200).json({ message: 'Login Successful', result: { email, name, id, password } });
        }
        else {
          res.status(400).json({ message: 'Password does not match' });
        }
      } else {
        res.status(400).json({ message: 'User does not exist' });
      }
    } else if (type === 'candidate') {
      // Candidate login
      data = await getCandidateByField({ field: 'email', value: email });
      if (data) {
        if (data.password === clientPassword) {
          res.status(200).json({ message: 'Login Successful', result: data });
        } else {
          res.status(400).json({ message: 'Password does not match' });
        }
      } else {
        res.status(400).json({ message: 'User does not exist' });
      }
    } else {
      // Candidate voice login
      const userEmail = 'milshakaitharan@gmail.com'
      const isMatch = true;
      data = await getCandidateByField({ field: 'email', value: userEmail });
      if (data) {
        if (isMatch) {
          res.status(200).json({ message: 'Login Successful', result: data });
        } else {
          res.status(400).json({ message: 'Audio sample does not match' });
        }
      } else {
        res.status(400).json({ message: 'User does not exist' });
      }
    }
  } catch(err) {
    res.status(500).json({ message: 'Failure', error: err });
  }
}
