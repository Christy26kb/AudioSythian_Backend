
import { mutations, queries } from '../../config/database';

export const createCandidate = async (params) => {
  try {
    const { name, email, password, audio = null } = params;
    const sql = `INSERT INTO candidates(name, email, password, audio_path) VALUES(?, ?, ?, ?)`;
    const sqlParams = [name, email, password, audio];
    return await mutations({ sql, sqlParams });
  } catch (err) {
    console.log('Failed to create candidate', err);
  }
};

export const getCandidate = async (params) => {
  try {
    const { id } = params;
    const sql = `SELECT * FROM candidates WHERE id = ?`;
    const sqlParams = [id];
    const operation = 'get';
    return await queries({ sql, sqlParams, operation });
  } catch (err) {
    console.log('Failed to fetch candidate', err);
  }
};

export const getCandidateByField = async (params) => {
  try {
    const { field, value } = params;
    const sql = `SELECT * FROM candidates WHERE ${field} = ?`;
    const sqlParams = [value];
    const operation = 'get';
    return await queries({ sql, sqlParams, operation });
  } catch (err) {
    console.log('Failed to fetch candidate', err);
  }
};

export const getCandidates = async () => {
  try {
    const sql = `SELECT * FROM candidates`;
    const sqlParams = [];
    const operation = 'all';
    return await queries({ sql, sqlParams, operation });
  } catch (err) {
    console.log('Failed to fetch candidates', err);
  }
};

export const updateCandidate = async (params) => {
  try {
    const { id, name, email, password } = params;
    const sql = `UPDATE candidates SET name = ?, email = ?, password = ? WHERE id = ?`;
    const sqlParams = [name, email, password, id];
    return await mutations({ sql, sqlParams });
  } catch (err) {
    console.log('Failed to update candidate', err);
  }
};

export const deleteCandidate = async (params) => {
  try {
    const { id } = params;
    const sql = `DELETE FROM candidates WHERE id = ?`;
    const sqlParams = [id];
    return await mutations({ sql, sqlParams });
  } catch (err) {
    console.log('Failed to remove candidate', err);
  }
}