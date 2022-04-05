var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : '127.0.0.1',
  user     : 'root',
  password : '1234',
  database : 'memo'
});

module.exports = {
    async run(query,params){ //prevent sql injection using params
        return new Promise((resolve)=>{
 
        connection.query(query, params, function (error, results, fields) {
          if (error) throw error;

          resolve(results);
        });
        });
        
    }
}
 
