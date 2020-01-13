var prompt = require('prompt');
var mysql      = require('mysql');
const util = require('util');

const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'new_world',
  multipleStatements: true
});

const execQuery = util.promisify(connection.query.bind(connection))
const input = util.promisify(prompt.get.bind(this))

async function queryDatabase() {

    var input_string = ""
    prompt.start();
    try {
        const result = await input(['string']);
        input_string = result.string

        // 1. Naive way of passing the parameter to the query 
        // const select_query = `SELECT Population FROM city WHERE Name ='${input_string}'`
        // 2-SQL Injection – Solution 
        const select_query = `SELECT Population FROM city WHERE Name = ? `
        connection.connect();
        console.log(select_query);
        var results = await execQuery(select_query, input_string);
    } catch(error) {
        console.error(error);
    }
    
    for (r of results) {
        console.log(r);
    }
    connection.end();
}

queryDatabase();

//1- When you add the code in the input .you can injection the database and update if you can also do anything delete insert  
// => utrecht';UPDATE city SET Name = 'utrecht' WHERE Name ='Utrecht <=
//2- If you want to get all of the information inside the row use the query
// => 'OR 'x'='x <=