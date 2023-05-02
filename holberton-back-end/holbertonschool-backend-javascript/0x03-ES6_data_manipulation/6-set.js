export default function setFromArray(array) {
  const set1 = new Set();
  for (let i = 0; i < array.length; i += 1) {
    set1.add(array[i]);
  }
  return set1;
}
