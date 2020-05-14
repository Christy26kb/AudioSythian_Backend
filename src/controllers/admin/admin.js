import {
  createAdminUser,
  getAdminUser,
  getAdminUsers,
  updateAdminUser,
  deleteAdminUser
} from '../../services/admin';

export const create = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const result = await createAdminUser({ name, email, password });
    res.status(200).json({ message: 'Success' });
  } catch(err) {
    res.status(500).json({ message: 'Failure', error: err });
  }
};

export const get = async (req, res) => {
  try {
    const id = req.query.id && req.query.id;
    const result = id ? await getAdminUser({ id }) : await getAdminUsers();
    res.status(200).json({ message: 'Success', data: result });
  } catch(err) {
    res.status(500).json({ message: 'Failure', error: err });
  }
};

export const update = async (req, res) => {
  try {
    const { id, name, email, password } = req.body;
    const result = await updateAdminUser({ id, name, email, password });
    res.status(200).json({ message: 'Success' });
  } catch(err) {
    res.status(500).json({ message: 'Failure', error: err });
  }
};

export const remove = async (req, res) => {
  try {
    const { id } = req.query;
    const result = await deleteAdminUser({ id });
    res.status(200).json({ message: 'Success' });
  } catch(err) {
    res.status(500).json({ message: 'Failure', error: err });
  }
};