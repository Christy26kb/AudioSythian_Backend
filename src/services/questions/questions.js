
import { mutations, queries } from '../../config/database';

export const createQuestion = async (params) => {
  try {
    const { title, question, options, answer, time } = params;

    const sql = `INSERT INTO questions(title, question, options, answer, time) VALUES(?, ?, ?, ?, ?)`;
    const sqlParams = [title, question, options, answer, time];
    return await mutations({ sql, sqlParams });
  } catch (err) {
    console.log('Failed to create question', err);
  }
};

export const getQuestion = async (params) => {
  try {
    const { id } = params;

    const sql = `SELECT * FROM questions WHERE id = ?`;
    const sqlParams = [id];
    const operation = 'get';
    return await queries({ sql, sqlParams, operation });
  } catch (err) {
    console.log('Failed to fetch question', err);
  }
};

export const getQuestions = async () => {
  try {
    const sql = `SELECT * FROM questions`;
    const sqlParams = [];
    const operation = 'all';
    return await queries({ sql, sqlParams, operation });
  } catch (err) {
    console.log('Failed to fetch questions', err);
  }
};

export const updateQuestion = async (params) => {
  try {
    const { id, title, question, options, answer, time } = params;

    const sql = `UPDATE questions SET title = ?, question = ?, options = ?, answer = ?, time = ? WHERE id = ?`;
    const sqlParams = [title, question, options, answer, time, id];
    return await mutations({ sql, sqlParams });
  } catch (err) {
    console.log('Failed to update question', err);
  }
};

export const deleteQuestion = async (params) => {
  try {
    const { id } = params;

    const sql = `DELETE FROM questions WHERE id = ?`;
    const sqlParams = [id];
    return await mutations({ sql, sqlParams });
  } catch (err) {
    console.log('Failed to remove question', err);
  }
}