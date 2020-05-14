import { getCandidateByField } from '../../services/candidates';
import { getAdminUserByField } from '../../services/admin';

export const login = async (req, res) => {
  try {
    const { type, email, password } = req.body;
    let data;
    
    if (type === 'admin') {
      // Admin login
      data = await getAdminUserByField({ field: 'email', value: email });
      if (data) {
        const { email, name, id } = data;
        if (data.password === password) {
          res.status(200).json({ message: 'Login Successful', result: { email, name, id } });
        }
        else {
          res.status(400).json({ message: 'Password does not match' });
        }
      } else {
        res.status(400).json({ message: 'User does not exist' });
      }
    } else {
      // Candidate login
      data = await getCandidateByField({ field: 'email', value: email });
      if (data) {
        if (data.password === password) {
          res.status(200).json({ message: 'Login Successful', result: data });
        } else {
          res.status(400).json({ message: 'Password does not match' });
        }
      } else {
        res.status(400).json({ message: 'User does not exist' });
      }
    }
  } catch(err) {
    res.status(500).json({ message: 'Failure', error: err });
  }
}
