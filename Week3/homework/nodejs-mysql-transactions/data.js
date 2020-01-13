const employee = [
  { name: "Ali", report_to: 1, department_id: 1 },
  { name: "Kadhim", report_to: 2, department_id: 1 },
  { name: "Amouri", report_to: 3, department_id: 1 },
  { name: "Gerard", report_to: 3, department_id: 1 }
];
const department = [
  { title: "IT", manager: 1 },
  { title: "Accounting", manager: 2 },
  { title: "Marketing", manager: 3 }


];
module.exports = {
  employee,
  department
};
