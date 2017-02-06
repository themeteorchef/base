import mysql from 'mysql';

const MySQL = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'mysql',
  database: 'graphql_test',
});

MySQL.connect();

export const sql = query =>
new Promise((resolve, reject) => {
  MySQL.query(query, (error, results, fields) => {
    if (error) reject(error);
    if (results) resolve({ results, fields });
  });
});
