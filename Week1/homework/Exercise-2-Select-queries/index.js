const express = require('express');
const mysql = require('mysql');
const app = express();

const db = mysql.createConnection({
    host: 'localhost',
    user: 'hyfuser',
    password: 'hyfpassword',
    database: 'new_world'
});

db.connect(err => {
    if (err) {
        throw err;
    }
    console.log('mysql connected....')
});
// 1-What are the names of countries with population greater than 8 million?
app.get('/countries-with-population-greater-than-8million', (req, res) => {
    let sql = 'SELECT name,Population  FROM Country WHERE Population > 8000000 ORDER BY Population DESC;';
    db.query(sql, (err, result) => {
        console.log(result);
    });
    res.send('Data Fetched...');
});

//2- What are the names of countries that have “land” in their names?
app.get('/countries-that-have-land', (req, res) => {
    let sql = `SELECT Name FROM Country WHERE Name LIKE '%land'`;
    db.query(sql, (err, result) => {
        console.log(result);
    });
    res.send('Data Fetched...');
});

//3-What are the names of the cities with population in between 500,000 and 1 million?
app.get('/cities-with-population-in-between-500,000-and-1million', (req, res) => {
    let sql = `SELECT Name,Population FROM city WHERE Population BETWEEN 500000 AND 1000000 ORDER BY Population ASC;`;
    db.query(sql, (err, result) => {
        console.log(result);
    });
    res.send('Data Fetched...');
});

//4-What's the name of all the countries on the continent ‘Europe’?
app.get('/countries-on-the-continent-Europe', (req, res) => {
    let sql = `SELECT Name FROM country WHERE Continent = 'Europe'`;
    db.query(sql, (err, result) => {
        console.log(result);
    });
    res.send('Data Fetched...');
});

//-5List all the countries in the descending order of their surface areas.
app.get('/countries-in-the-descending-order-of-their-surface-areas', (req, res) => {
    let sql = `SELECT Name,SurfaceArea FROM country ORDER BY SurfaceArea DESC`;
    db.query(sql, (err, result) => {
        console.log(result);
    });
    res.send('Data Fetched...');
});

//6-What are the names of all the cities in the Netherlands?
app.get('/names-of-all-the-cities-in-the-Netherlands', (req, res) => {
    let sql = `SELECT Name FROM city WHERE CountryCode = 'NLD'`;
    db.query(sql, (err, result) => {
        console.log(result);
    });
    res.send('Data Fetched...');
});

//7-What is the population of Rotterdam?
app.get('/What-is-the-population-of-Rotterdam', (req, res) => {
    let sql = `SELECT Population FROM city WHERE Name = 'Rotterdam'`;
    db.query(sql, (err, result) => {
        console.log(result);
    });
    res.send('Data Fetched...');
});

//8-What's the top 10 countries by Surface Area?
app.get('/top-10-countries-by-Surface-Area', (req, res) => {
    let sql = `SELECT Name,SurfaceArea FROM country ORDER BY SurfaceArea DESC LIMIT 10;`;
    db.query(sql, (err, result) => {
        console.log(result);
    });
    res.send('Data Fetched...');
});

//9-What's the top 10 most populated cities?
app.get('/top-10-most-populated-cities', (req, res) => {
    let sql = `SELECT Name,Population FROM city ORDER BY Population DESC LIMIT 10;`;
    db.query(sql, (err, result) => {
        console.log(result);
    });
    res.send('Data Fetched...');
});


//10-What is the population number of the world?
app.get('/population-number-of-the-world', (req, res) => {
    let sql = `SELECT Name,Population FROM Country ORDER BY Population DESC LIMIT 1;`;
    db.query(sql, (err, result) => {
        console.log(result);
    });
    res.send('Data Fetched...');
});




const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}...`);
});