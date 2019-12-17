const employees = [
    { employee_no: 1, full_name: 'Hannah Martin', salary: 5000, manager: 1, department_id: 1 },
    { employee_no: 2, full_name: 'Sean Lewis', salary: 3000, manager: 1, department_id: 1 },
    { employee_no: 3, full_name: 'Molly Avery', salary: 4000, manager: 3, department_id: 2 },
    { employee_no: 4, full_name: 'Tracey May', salary: 3000, manager: 3, department_id: 2 },
    { employee_no: 5, full_name: 'Alan Jones', salary: 3000, manager: 3, department_id: 3 },
    { employee_no: 6, full_name: 'Edward Fisher', salary: 2500, manager: 3, department_id: 3 },
    { employee_no: 7, full_name: 'Gavin McGrath', salary: 5500, manager: 7, department_id: 4 },
    { employee_no: 8, full_name: 'Jane Payne', salary: 5000, manager: 8, department_id: 4 },
    { employee_no: 9, full_name: 'Natalie Piper', salary: 2500, manager: 1, department_id: 5 },
    { employee_no: 10, full_name: 'Ian Wallace', salary: 2500, manager: 1, department_id: 5 },
    { employee_no: 11, full_name: 'Dylan Hardacre', salary: 2500, manager: 8, department_id: 6 },
    { employee_no: 12, full_name: 'Sebastian Stewart', salary: 2500, manager: 8, department_id: 6 },
    { employee_no: 13, full_name: 'Dan Abraham', salary: 4000, manager: 1, department_id: 6 },
    { employee_no: 14, full_name: 'Gordon Morrison', salary: 5000, manager: 7, department_id: 7 },
    { employee_no: 15, full_name: 'Joanne Hill', salary: 2000, manager: 7, department_id: 7 },
    { employee_no: 16, full_name: 'Sam Mackenzie', salary: 3000, manager: 3, department_id: 7 },
    { employee_no: 17, full_name: 'Michael Davies', salary: 2300, manager: 1, department_id: 8 },
    { employee_no: 18, full_name: 'Megan Morrison', salary: 2500, manager: 1, department_id: 9 },
    { employee_no: 19, full_name: 'Carolyn Harris', salary: 2750, manager: 1, department_id: 9 },
    { employee_no: 20, full_name: 'Stephen Blake', salary: 3750, manager: 1, department_id: 10 }
];
const departments = [
    { dept_no: 1, title: 'Accounting', description: 'Part of a company administration that is responsible for preparing the financial statements', address: 'Utrecht' },
    { dept_no: 2, title: 'Administration', description: 'Administration department is backbone of an organization.', address: 'Utrecht' },
    { dept_no: 3, title: 'Customer Service', description: 'representatives help customers with complaints and questions', address: 'Utrecht' },
    { dept_no: 4, title: 'Dispatch', description: 'The purpose of a Dispatcher is to respond to a company’s emergency or non-emergency calls ', address: 'Utrecht' },
    { dept_no: 5, title: 'Finance', description: 'The part of an organization that manages its money.', address: 'Utrecht' },
    { dept_no: 6, title: 'Human Resources', description: 'Responsible for managing resources related to employees', address: 'Amsterdam' },
    { dept_no: 7, title: 'I.T(Information Technology)', description: 'responsible for the architecture, hardware, software ', address: 'Amsterdam' },
    { dept_no: 8, title: 'Maintenace', description: ' repair workers, fix and maintain mechanical equipment, buildings, and machines.', address: 'Utrecht' },
    { dept_no: 9, title: 'Marketing and Advertising', description: 'promotes your business and drives sales of its products or services.', address: 'Amsterdam' },
    { dept_no: 10, title: 'Production', description: ' responsible for the manufacture of goods', address: 'Amsterdam' },

];


module.exports = {
    employees,
    departments
};