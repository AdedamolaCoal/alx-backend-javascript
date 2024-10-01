export default function appendToEachArrayValue(arr, appendString) {
  const newArray = [];
  for (const idx of arr) {
    newArray.push(appendString + idx);
  }
  return newArray;
}
