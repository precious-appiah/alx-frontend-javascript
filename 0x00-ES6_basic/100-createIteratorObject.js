export default function createIteratorObject(report) {
  const { allEmployees } = report;
  let employeeList = [];
  for (const department of Object.values(allEmployees)) {
    employeeList = employeeList.concat(department);
  }

  // Create an iterator over the collected employees
  return employeeList[Symbol.iterator]();
}
