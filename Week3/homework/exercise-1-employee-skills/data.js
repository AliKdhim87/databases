const employee = [
    { emp_name: 'Ali', salary: 2500, reports_to: null },
    { emp_name: 'Kadhim', salary: 3000, reports_to: 1 },
    { emp_name: 'Mohammed', salary: 25000, reports_to: 1 },
    { emp_name: 'Hussien', salary: 25000, reports_to: 1 },
    { emp_name: 'David', salary: 25000, reports_to: 1 },

];
const departments = [
    { dept_name: 'IT', manager: 1 },
    { dept_name: 'IT', manager: 1 },
    { dept_name: 'IT', manager: 1 },
    { dept_name: 'IT', manager: 1 },
    { dept_name: 'IT', manager: 1 },
]
const skills = [
    { employee_id: 1, skills_name: 'SCRUM' },
    { employee_id: 1, skills_name: 'product' },
    { employee_id: 1, skills_name: 'management' },
    { employee_id: 2, skills_name: 'JAVA' },
    { employee_id: 2, skills_name: 'Mysql' },
    { employee_id: 2, skills_name: 'Git' },
    { employee_id: 3, skills_name: 'HTML' },
    { employee_id: 3, skills_name: 'CSS' },
    { employee_id: 3, skills_name: 'Javascript' },
    { employee_id: 4, skills_name: 'C++' },
    { employee_id: 5, skills_name: 'Nodejs' },
    { employee_id: 5, skills_name: 'sql' },
    { employee_id: 5, skills_name: 'React' },


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
    projects,
    skills
};