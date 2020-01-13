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


/* Begin transaction */
function flatify(dept_no, employee_no) {
    connection.beginTransaction(function (err) {
        if (err) throw err;
        connection.query('UPDATE employee SET report_to = ? WHERE  department_id = ?;', [employee_no,dept_no], function (err, result) {
            if (err) {
                connection.rollback(function () {
                    throw err;
                });
            }
            connection.query(
                'UPDATE employee SET report_to = NULL WHERE employee_no = ?;',
                employee_no,
                function (err, result) {
                    if (err) {
                        connection.rollback(function () {
                            throw err;
                        });
                    }
                    connection.commit(function (err) {
                        if (err) {
                            connection.rollback(function () {
                                throw err;
                            });
                        }
                        console.log("Transaction Complete.");
                        connection.end();
                    });
                }
            );
        });
    });

}
flatify(1, 1)
/* End transaction */