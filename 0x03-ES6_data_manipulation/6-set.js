// const fruits = ['apple', 'orange', 'banana'];

// // forEach method
// const forEachFruit = (value, index) => {
//   console.log(`${index} - ${value}`)
// }
// const result = fruits.forEach(forEachFruit);

// // map method
// const mapFruitToUppercase = (value, index) => {
//   console.log(`${index} - ${value.toUpperCase()}`)
// }
// const result2 = fruits.map(mapFruitToUppercase);

// // every method
// const everyFruit = (value, index) => {
//   return value.length > 3;
// }
// const result3 = fruits.every(everyFruit);
// console.log(result3)
export default function setFromArray(array) {
  return new Set(array);
}
