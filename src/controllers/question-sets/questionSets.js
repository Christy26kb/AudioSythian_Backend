import {
  createQuestionSet,
  getQuestionSet,
  getQuestionSets,
  updateQuestionSet,
  deleteQuestionSet
} from '../../services/question-sets';
      
export const create = async (req, res) => {
  try {
    const { title, time, score } = req.body;
    const questions = JSON.stringify(req.body.questions).toString();

    const result = await createQuestionSet({ title, questions, time, score });
    res.status(200).json({ message: 'Success' });
  } catch(err) {
    res.status(500).json({ message: 'Failure', error: err });
  }
};

export const get = async (req, res) => {
  try {
    const id = req.query.id && req.query.id;

    const result = id ? await getQuestionSet({ id }) : await getQuestionSets();
    let modifiedResult; 
    if (id) {
    modifiedResult = { ...result, questions: JSON.parse(result.questions) };
    } else {
    modifiedResult = result.map(questionSet => ({ ...questionSet, questions: JSON.parse(questionSet.questions) }));
    }
    res.status(200).json({ message: 'Success', result: modifiedResult });
  } catch(err) {
    res.status(500).json({ message: 'Failure', error: err });
  }
};

export const update = async (req, res) => {
  try {
    const { id, title, time, score } = req.body;
    const questions = JSON.stringify(req.body.questions).toString();

    const result = await updateQuestionSet({ id, title, questions, time, score });
    res.status(200).json({ message: 'Success' });
  } catch(err) {
    res.status(500).json({ message: 'Failure', error: err });
  }
};

export const remove = async (req, res) => {
  try {
    const { id } = req.query;

    const result = await deleteQuestionSet({ id });
    res.status(200).json({ message: 'Success' });
  } catch(err) {
    res.status(500).json({ message: 'Failure', error: err });
  }
};