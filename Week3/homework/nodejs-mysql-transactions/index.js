const util = require('util');
const mysql = require('mysql');
const data = require("./data");
var connection = mysql.createConnection({
    host: "localhost",
    user: "hyfuser",
    password: "hyfpassword",
    database: "userdb"
});
connection.connect(function (err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

const CREATE_EMPLOYEE_TABLE = `
CREATE TABLE IF NOT EXISTS employee (
  employee_no INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(50),
  report_to INT,
  department_id int
);`;

const CREATE_DEPARTMENT_TABLE = `
CREATE TABLE IF NOT EXISTS department (
  dept_no INT PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(50),
  manager INT
);`;
connection.query(CREATE_EMPLOYEE_TABLE, function (error, results, fields) {
    if (error) {
        throw error;
    }
    console.log("the reply is ", results[0]);
});
connection.query(CREATE_DEPARTMENT_TABLE, function (error, results, fields) {
    if (error) {
        throw error;
    }
    console.log("the reply is ", results[0]);
});

data.employee.forEach( employee => {
    connection.query('INSERT INTO employee SET ?', employee, (error, results, fields) => {
        if (error) {
            throw error;
        }
        console.log("the reply is ", results);
    });
});

data.department.forEach(async department => {

    connection.query('INSERT INTO department SET ?', department, (error, result, fields)=>{
        if(error){
            throw error
        }
        console.log(result);
    });
});

connection.end();