export default function cleanSet(set, startString) {
  if (!startString || typeof startString === 'undefined' || startString.length <= 0 || startString === ' ') return '';
  const array = [...set];
  const newArray = array.filter((item) => typeof item === 'string' && item !== undefined && item !== ' ' && item && item.startsWith(startString));
  const result = newArray.map((item) => item.slice(startString.length));
  return result.join('-');
}
