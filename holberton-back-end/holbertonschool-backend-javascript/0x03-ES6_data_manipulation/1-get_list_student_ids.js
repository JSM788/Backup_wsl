export default function getListStudentIds(param) {
  if (!Array.isArray(param)) return [];
  const result = param.map((item) => item.id);
  return result;
}
