import { mutations, queries } from '../../config/database';

export const createAdminUser = async (params) => {
  try {
    const { name, email, password } = params;
    const sql = `INSERT INTO admin_users(name, email, password) VALUES(?, ?, ?)`;
    const sqlParams = [name, email, password];
    return await mutations({ sql, sqlParams });
  } catch (err) {
    console.log('Failed to create admin user', err);
  }
};

export const getAdminUser = async (params) => {
  try {
    const { id } = params;
    const sql = `SELECT * FROM admin_users WHERE id = ?`;
    const sqlParams = [id];
    const operation = 'get';
    return await queries({ sql, sqlParams, operation });
  } catch (err) {
    console.log('Failed to fetch admin user', err);
  }
};

export const getAdminUserByField = async (params) => {
  try {
    const { field, value } = params;
    const sql = `SELECT * FROM admin_users WHERE ${field} = ?`;
    const sqlParams = [value];
    const operation = 'get';
    return await queries({ sql, sqlParams, operation });
  } catch (err) {
    console.log('Failed to fetch admin user', err);
  }
};

export const getAdminUsers = async () => {
  try {
    const sql = `SELECT * FROM admin_users`;
    const sqlParams = [];
    const operation = 'all';
    return await queries({ sql, sqlParams, operation });
  } catch (err) {
    console.log('Failed to fetch admin users', err);
  }
};

export const updateAdminUser = async (params) => {
  try {
    const { id, name, email, password } = params;
    const sql = `UPDATE admin_users SET name = ?, email = ?, password = ? WHERE id = ?`;
    const sqlParams = [name, email, password, id];
    return await mutations({ sql, sqlParams });
  } catch (err) {
    console.log('Failed to update admin user', err);
  }
};

export const deleteAdminUser = async (params) => {
  try {
    const { id } = params;
    const sql = `DELETE FROM admin_users WHERE id = ?`;
    const sqlParams = [id];
    return await mutations({ sql, sqlParams });
  } catch (err) {
    console.log('Failed to remove admin user', err);
  }
}