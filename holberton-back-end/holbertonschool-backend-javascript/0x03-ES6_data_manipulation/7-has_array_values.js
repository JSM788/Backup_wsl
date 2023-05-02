export default function hasValuesFromArray(set, array) {
  const result = [];

  for (let i = 0; i < array.length; i += 1) {
    if (set.has(array[i])) {
      result.push(true);
    }
  }
  if (result.length === array.length) return true;
  return false;
}
