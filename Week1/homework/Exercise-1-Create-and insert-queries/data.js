const employee = [
    { emp_no: 1, emp_name: 'Ali', salary: 2500, reports_to: 106 },
    { emp_no: 2, emp_name: 'Kadhim', salary: 3000, reports_to: 105 },
    { emp_no: 3, emp_name: 'Mohammed', salary: 25000, reports_to: 109 },
    { emp_no: 4, emp_name: 'Hussien', salary: 25000, reports_to: 107 },
    { emp_no: 5, emp_name: 'David', salary: 25000, reports_to: 101 },
    { emp_no: 6, emp_name: 'Jan', salary: 25000, reports_to: 102 },
    { emp_no: 7, emp_name: 'Michael', salary: 25000, reports_to: 104 },
    { emp_no: 8, emp_name: 'Angela', salary: 25000, reports_to: 103 },
    { emp_no: 9, emp_name: 'Kelly', salary: 25000, reports_to: 106 },
    { emp_no: 10, emp_name: 'Stanley', salary: 25000, reports_to: 105 }
];
const departments = [
    { dept_no: 200, dept_name: 'Accounting', manager: 100 },
    { dept_no: 201, dept_name: 'Administration', manager: 101 },
    { dept_no: 202, dept_name: 'Customer Service', manager: 102 },
    { dept_no: 203, dept_name: 'Dispatch', manager: 103 },
    { dept_no: 204, dept_name: 'Finance', manager: 104 },
    { dept_no: 205, dept_name: 'Human Resources', manager: 105 },
    { dept_no: 206, dept_name: 'I.T(Information Technology)', manager: 106 },
    { dept_no: 207, dept_name: 'Maintenace', manager: 107 },
    { dept_no: 208, dept_name: 'Marketing and Advertising', manager: 108 },
    { dept_no: 209, dept_name: 'Production', manager: 109 },

]
const projects = [
    { proj_no: 'PC010', proj_name: 'Reservation System', starting_date: '2019-12-22', ending_date: '2020-02-22' },
    { proj_no: 'PC010', proj_name: 'Reservation System', starting_date: '2020-01-12', ending_date: '2020-04-22' },
    { proj_no: 'PC010', proj_name: 'Reservation System', starting_date: '2020-2-22', ending_date: '2020-06-22' },
    { proj_no: 'PC020', proj_name: 'HR System', starting_date: '2020-03-12', ending_date: '2020-05-22' },
    { proj_no: 'PC020', proj_name: 'HR System', starting_date: '2020-04-22', ending_date: '2020-06-22' },
    { proj_no: 'PC020', proj_name: 'HR System', starting_date: '2020-07-22', ending_date: '2020-09-22' },
    { proj_no: 'PC030', proj_name: 'Attendance System', starting_date: '2019-08-22', ending_date: '2020-02-22' },
    { proj_no: 'PC030', proj_name: 'Attendance System', starting_date: '2019-09-22', ending_date: '2020-03-22' },
    { proj_no: 'PC030', proj_name: 'Attendance System', starting_date: '2020-01-12', ending_date: '2020-04-22' },
    { proj_no: 'PC030', proj_name: 'Attendance System', starting_date: '2020-02-22', ending_date: '2020-05-22' },
];
module.exports = {
    employee,
    departments,
    projects
};