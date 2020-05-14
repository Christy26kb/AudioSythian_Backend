import appConfig from './appConfig';
import sqlite3 from 'sqlite3';

// DB Services.
const queries = (params) => {
  const { sql, sqlParams, operation } = params;
  const sqlite = sqlite3.verbose();

  return new Promise((resolve, reject) => {
    const db = new sqlite.Database(appConfig.dbConfig.env.connect, sqlite3.OPEN_READONLY, (err) => {
      if (err) console.error(err.message);
      else console.log('Connected to database');
    });

      db[operation](sql, sqlParams, (err, rows) => {
          if (err) {
            // Closing DB after completing the operations.
            db.close((err) => {
              if (err) console.error(err.message);
              else console.log('Close the database connection.');
            });
            reject(err);
          } else {
            // Closing DB after completing the operations.
            db.close((err) => {
              if (err) console.error(err.message);
              else console.log('Close the database connection.');
            });
            resolve(rows);
          }
      });

  });

};

const mutations = (params) => {
  const { sql, sqlParams } = params;
  const sqlite = sqlite3.verbose();

  return new Promise((resolve, reject) => {
    const db = new sqlite.Database(appConfig.dbConfig.env.connect, sqlite3.OPEN_READWRITE, (err) => {
      if (err) console.error(err.message);
      else console.log('Connected to database');
    });

      db.run(sql, sqlParams, function(err) {
          if (err) {
            // Closing DB after completing the operations.
            db.close((err) => {
              if (err) console.error(err.message);
              else console.log('Close the database connection.');
            });
            reject(err);
          } else {
            // Closing DB after completing the operations.
            db.close((err) => {
              if (err) console.error(err.message);
              else console.log('Close the database connection.');
            });
            resolve(this);
          }
      });

  });

};

export { queries, mutations };
