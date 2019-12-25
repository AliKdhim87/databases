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
// Create Departments Table
app.get('/createDepartments', (req, res) => {
    let sql = `CREATE TABLE departments(dept_no INT PRIMARY KEY  AUTO_INCREMENT,title VARCHAR(225) ,description VARCHAR(225) ,address VARCHAR(225))`;
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
app.get('/addForeingKeyToEmployees', (req, res) => {
    let sql = `ALTER TABLE employees ADD CONSTRAINT department_id FOREIGN KEY( department_id) REFERENCES departments(dept_no);`;
    db.query(sql, (error, result) => {
        if (error) throw error;
        console.log(result)
    });
    res.send('Table employees updated...')
})

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is runnin on port${port}`);
});