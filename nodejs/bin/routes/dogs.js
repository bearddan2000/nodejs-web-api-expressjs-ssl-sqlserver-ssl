const express = require('express');
const router = express.Router();
const sql = require("mssql");

const sqlConfig = {
  user: 'sa',
  password: 'z!x<?oB1ab',
  //database: process.env.DB_NAME,
  server: 'db',
  pool: {
    max: 10,
    min: 0,
    idleTimeoutMillis: 30000
  },
  options: {
    encrypt: true, // for azure
    trustServerCertificate: true // change to true for local dev / self-signed certs
  }
};

//const pool = mssql.connect(sqlConfig);

/* GET programming languages. */
router.get('/', (req, res, next) => {
    sql.connect(sqlConfig, function (err) {
      
      if (err) console.log(err);

      // create Request object
      var request = new sql.Request();
        
      // query to the database and get the records
      request.query('select * from dog', function (err, recordset) {
          
          if (err) console.log(err)

          // send records as a response
          res.json(recordset.recordset);
          
      });
  });
});

module.exports = router;
