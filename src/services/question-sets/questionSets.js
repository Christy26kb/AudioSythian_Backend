
import { mutations, queries } from '../../config/database';

export const createQuestionSet = async (params) => {
  try {
    const { title, questions, time, score } = params;

    const sql = `INSERT INTO question_sets(title, questions, time, score) VALUES(?, ?, ?, ?)`;
    const sqlParams = [title, questions, time, score];
    return await mutations({ sql, sqlParams });
  } catch (err) {
    console.log('Failed to create question set', err);
  }
};

export const getQuestionSet = async (params) => {
  try {
    const { id } = params;

    const sql = `SELECT * FROM question_sets WHERE id = ?`;
    const sqlParams = [id];
    const operation = 'get';
    return await queries({ sql, sqlParams, operation });
  } catch (err) {
    console.log('Failed to fetch question set', err);
  }
};

export const getQuestionSets = async () => {
  try {
    const sql = `SELECT * FROM question_sets`;
    const sqlParams = [];
    const operation = 'all';
    return await queries({ sql, sqlParams, operation });
  } catch (err) {
    console.log('Failed to fetch question sets', err);
  }
};

export const updateQuestionSet= async (params) => {
  try {
    const { id, title, questions, time, score } = params;

    const sql = `UPDATE question_sets SET title = ?, questions = ?, time = ?, score = ? WHERE id = ?`;
    const sqlParams = [title, questions, time, score, id];
    return await mutations({ sql, sqlParams });
  } catch (err) {
    console.log('Failed to update question set', err);
  }
};

export const deleteQuestionSet = async (params) => {
  try {
    const { id } = params;

    const sql = `DELETE FROM question_sets WHERE id = ?`;
    const sqlParams = [id];
    return await mutations({ sql, sqlParams });
  } catch (err) {
    console.log('Failed to remove question set', err);
  }
}