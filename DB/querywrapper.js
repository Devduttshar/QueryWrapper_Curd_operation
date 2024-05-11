const connection = require("./connection");
function executeThisQuery(sql, values) {
    return new Promise((resolve, reject) => {
      connection.query(sql, values, function (err, results, fields) {
        if (!err) {
          resolve([results, fields]);
        } else {
          reject(err);
        }
      });
     
    });
  }
  
  module.exports = executeThisQuery;