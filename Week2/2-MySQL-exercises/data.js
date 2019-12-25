const employees = [
    { full_name: 'Hannah Martin', salary: 5000, address: 'Utrecht', manager: 1, department_id: 1 },
    { full_name: 'Sean Lewis', salary: 3000, address: 'Utrecht', manager: 1, department_id: 1 },
    { full_name: 'Molly Avery', salary: 4000, address: 'Utrecht', manager: 3, department_id: 2 },
    { full_name: 'Tracey May', salary: 3000, address: 'Utrecht', manager: 3, department_id: 2 },
    { full_name: 'Alan Jones', salary: 3000, address: 'Utrecht', manager: 3, department_id: 3 },
    { full_name: 'Edward Fisher', salary: 2500, address: 'Utrecht', manager: 3, department_id: 3 },
    { full_name: 'Gavin McGrath', salary: 5500, address: 'Utrecht', manager: 7, department_id: 4 },
    { full_name: 'Jane Payne', salary: 5000, address: 'Utrecht', manager: 8, department_id: 4 },
    { full_name: 'Natalie Piper', salary: 2500, address: 'Utrecht', manager: 1, department_id: 5 },
    { full_name: 'Ian Wallace', salary: 2500, address: 'Utrecht', manager: 1, department_id: 5 },
    { full_name: 'Dylan Hardacre', salary: 2500, address: 'Utrecht', manager: 8, department_id: 6 },
    { full_name: 'Sebastian Stewart', salary: 2500, address: 'Utrecht', manager: 8, department_id: 6 },
    { full_name: 'Dan Abraham', salary: 4000, address: 'Utrecht', manager: 1, department_id: 6 },
    { full_name: 'Gordon Morrison', salary: 5000, address: 'Utrecht', manager: 7, department_id: 7 },
    { full_name: 'Joanne Hill', salary: 2000, address: 'Utrecht', manager: 7, department_id: 7 },
    { full_name: 'Sam Mackenzie', salary: 3000, address: 'Utrecht', manager: 3, department_id: 7 },
    { full_name: 'Michael Davies', salary: 2300, address: 'Utrecht', manager: 1, department_id: 8 },
    { full_name: 'Megan Morrison', salary: 2500, address: 'Utrecht', manager: 1, department_id: 9 },
    { full_name: 'Carolyn Harris', salary: 2750, address: 'Utrecht', manager: 1, department_id: 9 },
    { full_name: 'Stephen Blake', salary: 3750, address: 'Utrecht', manager: 1, department_id: 10 }
];
const departments = [
    { title: 'Accounting', description: 'Part of a company administration that is responsible for preparing the financial statements', address: 'Utrecht' },
    { title: 'Administration', description: 'Administration department is backbone of an organization.', address: 'Utrecht' },
    { title: 'Customer Service', description: 'representatives help customers with complaints and questions', address: 'Utrecht' },
    { title: 'Dispatch', description: 'The purpose of a Dispatcher is to respond to a company’s emergency or non-emergency calls ', address: 'Utrecht' },
    { title: 'Finance', description: 'The part of an organization that manages its money.', address: 'Utrecht' },
    { title: 'Human Resources', description: 'Responsible for managing resources related to employees', address: 'Amsterdam' },
    { title: 'I.T(Information Technology)', description: 'responsible for the architecture, hardware, software ', address: 'Amsterdam' },
    { title: 'Maintenace', description: ' repair workers, fix and maintain mechanical equipment, buildings, and machines.', address: 'Utrecht' },
    { title: 'Marketing and Advertising', description: 'promotes your business and drives sales of its products or services.', address: 'Amsterdam' },
    { title: 'Production', description: ' responsible for the manufacture of goods', address: 'Amsterdam' },

];
module.exports = {
    employees,
    departments
};