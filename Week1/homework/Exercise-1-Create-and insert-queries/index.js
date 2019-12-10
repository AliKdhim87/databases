const express = require('express');
const mysql = require('mysql');
const data = require('./data');
// const departments = require('./data')

const app = express();

// Make connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'hyfuser',
    password: 'hyfpassword',
    database: 'company'
});

db.connect(err => {
    if (err) {
        throw err;
    }
    console.log('mysql connected....')
});

// Create Database company
app.get('/createdatabase', (req, res) => {
    let sql = 'CREATE database company';
    db.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send('Database company created...');
    });

});
// Create Table Employees 
app.get('/createtableemployee', (req, res) => {
    let sql = `CREATE TABLE employee(emp_no INT NOT NULL, emp_name VARCHAR(50) NOT NULL, salary INT NOT NULL,reports_to INT )`;
    db.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send('Table Employees Created...')
    });

});
// Create Table departments 
app.get('/createtabledepartments', (req, res) => {
    let sql = `CREATE TABLE departments(dept_no INT NOT NULL, dept_name VARCHAR(50) NOT NULL, manager INT)`;
    db.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send('Table Departments Created...')
    });

});

// Create Table Projects  
app.get('/createtableprojects', (req, res) => {
    let sql = `CREATE TABLE projects(proj_no VARCHAR(50) NOT NULL, proj_name VARCHAR(50) NOT NULL, starting_date DATE, ending_date DATE)`;
    db.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send('Table Projects Created...')
    });

});
// Insert values into employee table
app.get('/insertintoeemployee', (req, res) => {
    data.employee.forEach(employee => {
        db.query('INSERT INTO employee SET ? ', employee, (err, result) => {
            if (err) throw err;
            console.log(result);
        });

    })
    res.send('Data inserted')
});

// Insert values into departments table
app.get('/insertintodepartments', (req, res) => {
    data.departments.forEach(department => {
        db.query('INSERT INTO departments SET ? ', department, (err, result) => {
            if (err) throw err;
            console.log(result);
        });

    })
    res.send('Data inserted')
});

// Insert values into Projects table
app.get('/insertintoprojects', (req, res) => {
    data.projects.forEach(project => {
        db.query('INSERT INTO projects SET ? ', project, (err, result) => {
            if (err) throw err;
            console.log(result);
        });

    })
    res.send('Data inserted')
});
// Get the Data from employee table
app.get('/fetchemployee', (req, res) => {
    let sql = `SELECT * FROM employee`;
    db.query(sql, (err, result) => {
        console.log(result);
    });
    res.send('Data Fetched...');
});

// Get the Data from departments table
app.get('/fetchdepartments', (req, res) => {
    let sql = `SELECT * FROM departments`;
    db.query(sql, (err, result) => {
        console.log(result);
    });
    res.send('Data Fetched...');
});

// Get the Data from projects table
app.get('/fetchprojects', (req, res) => {
    let sql = `SELECT * FROM projects`;
    db.query(sql, (err, result) => {
        console.log(result);
    });
    res.send('Data Fetched...');
});




app.listen(3000, _ => {
    console.log('server is running on port 3000')
})