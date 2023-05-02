export default function createIteratorObject(report) {
  const { allEmployees } = report;
  const values = Object.values(allEmployees);
  return (values.toString().split(','));
}
