//https://www.npmjs.com/package/sqlite3
var sqlite3 = require('sqlite3').verbose();
//var settings = require("../settings");
var util = require('util');
var path = require('path');

var dbPath = path.resolve(__dirname, 'employee.db');

var db = new sqlite3.Database(dbPath);

db.run("CREATE TABLE IF NOT EXISTS employee (id	INTEGER PRIMARY KEY AUTOINCREMENT,firstName	TEXT,lastName	INTEGER,mobile	INTEGER UNIQUE,email	TEXT UNIQUE)");
var msg = {};

exports.executeSql = function (sql, action, callback) {

  db.serialize(function () {

    if(action == "SELECT"){

      db.all(sql, function(err, rows) {  
        if (err) {
          msg = {
            "error_no": err.errno,
            "error_code": err.code,
            "error_message": err.message
          };
          console.log(msg);
          callback(null, msg);
        } else {
          console.log(rows);
          callback(rows);
        }
      });

    }else{

        db.run(sql, function(err, rows) {  
        if (err) {
          msg = {
            "error_no": err.errno,
            "error_code": err.code,
            "error_message": err.message
          };
          console.log(msg);
          callback(null, msg);
        } else {
          msg = {
            "rows_affected": (this.changes == 1 ) ? 1 : 0,
            "last_record_id": (this.lastID == 1 ) ? this.lastID : 0,
            "statement": util.inspect(this, { showHidden: false, depth: null }),
            "data": (rows) ? rows : 0,
          };
          console.log(msg);
          callback(rows);
        }
      });
    }


  });

};

//db.close();



