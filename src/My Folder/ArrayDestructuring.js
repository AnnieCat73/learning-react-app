//ARRAY DESTRUCTURING in JS

//1) Normal
//const snacks = ["popcorn", "pretzels", "pineapple"];
//console.log(snacks[0]);//popcorn

//2) Destructured
const [first, second, third] = [
  "popcorn", "pretzels", "pineapple"];
console.log(first);
console.log(second);
console.log(third);//OR

const [, , fruit] = [
  "popcorn", "pretzels", "pineapple"];
console.log(first);
console.log(second);
console.log(fruit);