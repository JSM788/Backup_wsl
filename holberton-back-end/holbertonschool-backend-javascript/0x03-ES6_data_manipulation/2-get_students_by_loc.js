export default function getStudentsByLocation(array, param) {
  const result = array.filter((item) => item.location === param);
  return result;
}
