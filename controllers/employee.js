var db = require('../core/db');
var httpMsgs = require("../core/httpMsgs");
var util = require("util");

exports.getList = function (req, res) {
    var sql = "SELECT * FROM employee";
    db.executeSql(sql, "SELECT", function (data, err) {
        if (err) {
            httpMsgs.show500(req,res,err);
        } else {
            httpMsgs.sendJson(req,res,data);
        }
    });
};

exports.get = function (req, res, empno) {
    var sql = "SELECT * FROM employee WHERE id =" +empno;
    db.executeSql(sql, "SELECT", function (data, err) {
        if (err) {
            httpMsgs.show500(req, res, err);
        } else {
            httpMsgs.sendJson(req,res,data);
        }
    });
};

exports.add = function (req, res, reqBody) {
    try {
        if (!reqBody) throw new Error("Input not valid");
        var data = JSON.parse(reqBody);
        
        if (data){
            var sql = "INSERT INTO employee (firstName, lastName, mobile, email) VALUES ";
            sql += util.format("('%s', '%s', %d, '%s')", data.firstName, data.lastName, data.mobile, data.email);
            console.log("sql",sql);
            db.executeSql(sql, "INSERT", function (data, err) {
                if (err) {
                    httpMsgs.show500(req, res, err);
                } else {
                    httpMsgs.send200(req,res);
                }
            });
        }else{
            throw new Error("Input not valid");
        }
    } catch (ex) {
        httpMsgs.show500(req, res, ex);
    }
};

exports.update = function (req, res, reqBody) {
    try {
        if (!reqBody) throw new Error("Input not valid");
        var data = JSON.parse(reqBody);

        if (data) {
            var isDataProvided = false;

            if (!data.mobile) throw new Error("Mobile no not provided");
            if (!data.email) throw new Error("Email not provided");

            var sql = "UPDATE employee SET";

            if (data.firstName) {
                sql += " firstName = '" + data.firstName + "',";
                isDataProvided = true;
            }
            if (data.lastName) {
                sql += " lastName = '" + data.lastName + "',";
                isDataProvided = true;
            }
            if (data.mobile) {
                sql += " mobile = '" + data.mobile + "',";
                isDataProvided = true;
            }
            if (data.email) {
                sql += " email = '" + data.email + "',";
                isDataProvided = true;
            }
            sql = sql.slice(0, -1); //remove last comma
            sql += " WHERE id=" + data.id;

            console.log("update_sql", sql);

            db.executeSql(sql, "UPDATE", function (data, err) {
                if (err) {
                    httpMsgs.show500(req, res, err);
                } else {
                    httpMsgs.send200(req, res);
                }
            });
        } else {
            throw new Error("Input not valid");
        }
    } catch (ex) {
        httpMsgs.show500(req, res, ex);
    }
};

exports.delete = function (req, res, reqBody) {
    try {
        if (!reqBody) throw new Error("Input not valid");
        var data = JSON.parse(reqBody);

        if (data) {
            if (!data.id) throw new Error("Employee no not provided");

            var sql = "DELETE FROM employee ";
                sql += " WHERE id=" + data.id;

            console.log("delete_sql", sql);

            db.executeSql(sql, "DELETE", function (data, err) {
                if (err) {
                    httpMsgs.show500(req, res, err);
                } else {
                    httpMsgs.send200(req, res);
                }
            });
        } else {
            throw new Error("Input not valid");
        }
    } catch (ex) {
        httpMsgs.show500(req, res, ex);
    }
};