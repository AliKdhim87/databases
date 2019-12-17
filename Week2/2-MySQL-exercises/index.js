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
    let sql = `CREATE TABLE employees(employee_no INT PRIMARY KEY  ,full_name VARCHAR(225) NOT NULL,salary INT ,manager INT,  department_id INT ,
    CONSTRAINT manager FOREIGN KEY(manager) REFERENCES employees(employee_no),CONSTRAINT department_id FOREIGN KEY( department_id) REFERENCES departments(dept_no))`;
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
// Create Departments Table
app.get('/createDepartments', (req, res) => {
    let sql = `CREATE TABLE departments(dept_no INT PRIMARY KEY  ,title VARCHAR(225) ,description VARCHAR(225) ,address VARCHAR(225)`;
    db.query(sql, (error, result) => {
        if (error) {
            throw error
        }
        console.log(result);
    });
    res.send('Departments Table created...')
});
// Insert some data to Dpartments table
app.get('/insertDataToDepartments', (req, res) => {
    data.departments.forEach(department => {
        db.query('INSERT INTO departments SET ?', department, (error, result) => {
            if (error) throw error
            console.log(result);
        });
    })
    res.send('Departments Inserted...')

});
//  retrieves all employees and their corresponding manager's full name.
app.get('/retrieves-all-employees-and-their-corresponding-manager-full-name', (req, res) => {
    let sql = `SELECT a.employee_no AS "Emp_ID", a.full_name AS "Employee Name",
                b.manager AS "Manager ID",b.full_name AS "Manager Name"FROM employees a, employees b WHERE a.manager = b.employee_no;`;
    db.query(sql, (error, result) => {
        if (error) throw error;
        console.log(result);
    });
    res.send('Data Fetched')
});
// all employees and their working department title. 
app.get('/all-employees-and-their-working-department-title', (req, res) => {
    let sql = `SELECT employees.employee_no AS "ID" , employees.full_name AS "Full Name", departments.title FROM employees JOIN departments ON employees.department_id = departments.dept_no;`;
    db.query(sql, (error, result) => {
        if (error) throw error;
        console.log(result);
    });
    res.send('Data Fetched')
});
// All department numbers and the number of employees working there.

app.get('/department-numbers-and-the-number-of-employees', (req, res) => {
    let sql = `SELECT dept_no AS"ID" , title, count(employee_no) AS"Employees" FROM employees JOIN departments ON dept_no = employees.department_id  GROUP BY  department_id;`
    db.query(sql, (error, result) => {
        if (error) throw error;
        console.log(result);
    });
    res.send('Data Fetched')
});

// Sum of the salaries of all employees.
app.get('/sum-salary', (req, res) => {
    let sql = `SELECT SUM(salary) AS "Total salary" FROM employees;`
    db.query(sql, (error, result) => {
        if (error) throw error;
        console.log(result);
    });
    res.send('Data Fetched')
});

// Average of the salaries of all employees.
app.get('/Average-of-the-salaries-of-all-employees', (req, res) => {
    let sql = ` select avg(salary) AS "Average Salary" from employees;`
    db.query(sql, (error, result) => {
        if (error) throw error;
        console.log(result);
    });
    res.send('Data Fetched')
});
// Sum of the salaries of the employees per department.
app.get('/Sum-of-the-salaries-of-the-employees-per-department', (req, res) => {
    let sql = `SELECT title,dept_no AS"ID" , count(employee_no) AS"Employees",SUM(salary) AS"Salary Per 
Department" from employees join departments on dept_no = employees.department_id  GROUP BY  department_id;`
    db.query(sql, (error, result) => {
        if (error) throw error;
        console.log(result);
    })
    res.send('Data Fetched...')
});
// Minimum and maximum od the salaries per department.
app.get('/Minimum-and-maximum-od-the-salaries-per-department', (req, res) => {
    let sql = `select department_id AS "Department ID", min(salary)as " Minimum Salary" ,max(salary) AS " maximum Salary" FROM employees GROUP BY department_id`;
    db.query(sql, (error, result) => {
        if (error) throw error;
        console.log(result);
    })
    res.send('Data Fetched...')
});
// For each salary value, return the number of employees paid.

app.get('/return-the-number-of-employees-paid', (req, res) => {
    let sql = `SELECT full_name, salary FROM employees  WHERE salary != 0`;
    db.query(sql, (error, result) => {
        if (error) throw error;
        console.log(result);
    });
    res.send('Data Fetched...');
});
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is runnin on port${port}`);
});