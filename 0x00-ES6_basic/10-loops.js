export default function appendToEachArrayValue(array, appendString) {
  const newArray = [];
  for (const x of array) {
    newArray.push(appendString + x);
  }

  return newArray;
}
