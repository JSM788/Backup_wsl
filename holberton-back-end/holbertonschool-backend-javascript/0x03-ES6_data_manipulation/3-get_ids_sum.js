export default function getStudentIdsSum(students) {
  const result = students.reduce((accu, item) => accu + item.id, 0);
  return result;
}
