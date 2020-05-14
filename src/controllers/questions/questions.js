import {
  createQuestion,
  getQuestion,
  getQuestions,
  updateQuestion,
  deleteQuestion
} from '../../services/questions';
    
export const create = async (req, res) => {
  try {
    const { title, question, answer, time } = req.body;
    const options = JSON.stringify(req.body.options).toString();

    const result = await createQuestion({ title, question, options , answer, time });
    res.status(200).json({ message: 'Success' });
  } catch(err) {
    res.status(500).json({ message: 'Failure', error: err });
  }
};

export const get = async (req, res) => {
  try {
    const id = req.query.id && req.query.id;

    const result = id ? await getQuestion({ id }) : await getQuestions();
    let modifiedResult; 
    if (id) {
      modifiedResult = { ...result, options: JSON.parse(result.options) };
    } else {
      modifiedResult = result.map(question => ({ ...question, options: JSON.parse(question.options) }));
    }
    res.status(200).json({ message: 'Success', result: modifiedResult });
  } catch(err) {
    res.status(500).json({ message: 'Failure', error: err });
  }
};

export const update = async (req, res) => {
  try {
    const { id, title, question, answer, time } = req.body;
    const options = JSON.stringify(req.body.options).toString();
  
    const result = await updateQuestion({ id, title, question, options , answer, time });
    res.status(200).json({ message: 'Success' });
  } catch(err) {
    res.status(500).json({ message: 'Failure', error: err });
  }
};

export const remove = async (req, res) => {
  try {
    const { id } = req.query;

    const result = await deleteQuestion({ id });
    res.status(200).json({ message: 'Success' });
  } catch(err) {
    res.status(500).json({ message: 'Failure', error: err });
  }
};