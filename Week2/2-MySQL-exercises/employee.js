const express = require('express');
const app = express();
const mysql = require('mysql');
const data = require('./data');
// Make a Connaction from nodejs to databas
const db = mysql.createConnection({
    host: 'localhost',
    user: 'hyfuser',
    password: 'hyfpassword',
    database: 'userdb'
});
// Create table Employees
app.get('/createEmployees', (req, res) => {
    let sql = `CREATE TABLE employees(employee_no INT PRIMARY KEY AUTO_INCREMENT ,full_name VARCHAR(225) NOT NULL,salary INT,address VARCHAR(225) ,manager INT,  department_id INT )`;
    db.query(sql, (error, result) => {
        if (error) {
            throw error
        }
        console.log(result);
    });
    res.send('Employees Table created...')

});
// Insert some data to Employees table
app.get('/insertDataToEmployees', (req, res) => {
    data.employees.forEach(employee => {
        db.query('INSERT INTO employees SET ?', employee, (error, result) => {
            if (error) throw error
            console.log(result);
        });
    })
    res.send('Employees Inserted...')

});
app.get('/modifyEmployees', (req, res) => {
    let sql = `ALTER TABLE employees ADD  CONSTRAINT manager FOREIGN KEY(manager) REFERENCES employees(employee_no)ON UPDATE CASCADE `;
    db.query(sql, (error, result) => {
        if (error) throw error;
        console.log(result)
    })
})
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is runnin on port${port}`);
});