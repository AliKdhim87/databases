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

// All department numbers and the number of employees working there.

app.get('/department-numbers-and-the-number-of-employees', (req, res) => {
    let sql = `SELECT dept_no AS"ID" , title, count(employee_no) AS"Employees" FROM employees JOIN departments ON dept_no = employees.department_id  GROUP BY  department_id;`
    db.query(sql, (error, result) => {
        if (error) throw error;
        console.log(result);
        res.send(result)
    });

});

// Sum of the salaries of all employees.
app.get('/sum-salary', (req, res) => {
    let sql = `SELECT SUM(salary) AS "Total salary" FROM employees;`
    db.query(sql, (error, result) => {
        if (error) throw error;
        console.log(result);
        res.send(result)
    });

});

// Average of the salaries of all employees.
app.get('/Average-of-the-salaries-of-all-employees', (req, res) => {
    let sql = ` select avg(salary) AS "Average Salary" from employees;`
    db.query(sql, (error, result) => {
        if (error) throw error;
        console.log(result);
        res.send(result)
    });

});
// Sum of the salaries of the employees per department.
app.get('/Sum-of-the-salaries-of-the-employees-per-department', (req, res) => {
    let sql = `SELECT title,dept_no AS"ID" , count(employee_no) AS"Employees",SUM(salary) AS"Salary Per 
Department" from employees join departments on dept_no = employees.department_id  GROUP BY  department_id;`
    db.query(sql, (error, result) => {
        if (error) throw error;
        console.log(result);
        res.send(result)
    })

});
// Minimum and maximum od the salaries per department.
app.get('/Minimum-and-maximum-od-the-salaries-per-department', (req, res) => {
    let sql = `select department_id AS "Department ID", min(salary)as " Minimum Salary" ,max(salary) AS " maximum Salary" FROM employees GROUP BY department_id`;
    db.query(sql, (error, result) => {
        if (error) throw error;
        console.log(result);
        res.send(result)
    })
});
// For each salary value, return the number of employees paid.

app.get('/return-the-number-of-employees-paid', (req, res) => {
    let sql = `SELECT full_name, salary FROM employees  WHERE salary != 0`;
    db.query(sql, (error, result) => {
        if (error) throw error;
        console.log(result);
        res.send(result)
    });

});
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is runnin on port${port}`);
});