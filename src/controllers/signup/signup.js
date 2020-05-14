// import { create as CreateAdmin, get as GetAdmin } from '../admin';

export const signUp = async (req, res) => {
  try {
    const { userType, email } = req.body;
    if (userType === 'admin') {
    }
    res.status(200).json({ message: 'Success' });
  } catch(err) {
    res.status(500).json({ message: 'User exists', error: err });
  }
};