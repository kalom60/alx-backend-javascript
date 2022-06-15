export default function createIteratorObject(report) {
  const empName = [];
  for (const dept in report.allEmployees) {
    if (report.allEmployees[dept].length > 0) {
      for (const name of report.allEmployees[dept]) {
        empName.push(name);
      }
    } else {
      return empName;
    }
  }

  return empName;
}
