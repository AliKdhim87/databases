const express = require('express');
const app = express();
const mysql = require('mysql');
// Make a Connaction from nodejs to databas
const db = mysql.createConnection({
    host: 'localhost',
    user: 'hyfuser',
    password: 'hyfpassword',
    database: 'userdb'
});
//  retrieves all employees and their corresponding manager's full name.
app.get('/retrieves-all-employees-and-their-corresponding-manager-full-name', (req, res) => {
    let sql = `SELECT a.employee_no AS "Emp_ID", a.full_name AS "Employee Name",
                b.manager AS "Manager ID",b.full_name AS "Manager Name"FROM employees a, employees b WHERE a.manager = b.employee_no;`;
    db.query(sql, (error, result) => {
        if (error) throw error;
        console.log(result);
        res.send(result)
    });

});
// all employees and their working department title. 
app.get('/all-employees-and-their-working-department-title', (req, res) => {
    let sql = `SELECT employees.employee_no AS "ID" , employees.full_name AS "Full Name", departments.title FROM departments LEFT JOIN employees ON employees.department_id = departments.dept_no;`;
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