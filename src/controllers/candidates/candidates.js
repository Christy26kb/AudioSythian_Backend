import {
  createCandidate,
  getCandidate,
  getCandidateByField,
  getCandidates,
  updateCandidate,
  deleteCandidate
} from '../../services/candidates';

import {
  enrollSpeaker
} from '../../services/speakers';

export const create = async (req, res) => {
  try {
    const { name, email, password, audio } = req.body;
    const userData = await getCandidateByField({ field: 'email', value: email });
    if (!userData) {
      const candidateResult = await createCandidate({ name, email, password, audio: audio });
      res.status(200).json({ message: 'Success' });
    } else {
      res.status(400).json({ message: 'Candidate already exists!' });
    }
  } catch(err) {
    res.status(500).json({ message: 'Failure', error: err });
  }
};

export const get = async (req, res) => {
  try {
    const id = req.query.id && req.query.id;
    const result = id ? await getCandidate({ id }) : await getCandidates();
    res.status(200).json({ message: 'Success', result });
  } catch(err) {
    res.status(500).json({ message: 'Failure', error: err });
  }
};

export const update = async (req, res) => {
  try {
    const { id, name, email, password } = req.body;
    const result = await updateCandidate({ id, name, email, password });
    res.status(200).json({ message: 'Success' });
  } catch(err) {
    res.status(500).json({ message: 'Failure', error: err });
  }
};

export const remove = async (req, res) => {
  try {
    const { id } = req.query;
    const result = await deleteCandidate({ id });
    res.status(200).json({ message: 'Success' });
  } catch(err) {
    res.status(500).json({ message: 'Failure', error: err });
  }
};