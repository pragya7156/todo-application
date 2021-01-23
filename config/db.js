//require('dotenv').config();
const mysql = require('mysql');
const util = require('util');

const pool = mysql.createPool({
    host: 'bnlsbx80qyb77rfhg83i-mysql.services.clever-cloud.com',
    user: 'ua6ifiidy4w6lb9g',
    password: 'Fm7MkKaTYBBfjCZaSPHz',
    database: 'bnlsbx80qyb77rfhg83i'
});

pool.getConnection((err, connection) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Connected to Database");
  }
  if (connection) connection.release();
  return;
});
  
pool.query = util.promisify(pool.query);
module.exports = pool;
