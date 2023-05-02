export default function createReportObject(employeesList) {
  const report = {
    allEmployees: employeesList,
    getNumberOfDepartments: (obj) => Object.keys(obj).length,
  };
  return report;
}
