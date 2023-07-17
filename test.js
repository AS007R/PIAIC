"use strict";
/*let car = 'subaru';

console.log("Is car == 'subaru'? I predict true.");
console.log(car == 'subaru');

console.log("Is car == 'honda'? I predict false.");
console.log(car == 'honda');

console.log("Is car === 'subaru'? I predict true.");
console.log(car === 'subaru');

console.log("Is car === 'Subaru'? I predict false.");
console.log(car === 'Subaru');

console.log("Is car != 'ford'? I predict true.");
console.log(car != 'ford');

console.log("Is car != 'subaru'? I predict false.");
console.log(car != 'subaru');

console.log("Is car !== 'subaru'? I predict false.");
console.log(car !== 'subaru');

console.log("Is car.startsWith('su')? I predict true.");
console.log(car.startsWith('su'));

console.log("Is car.includes('bar')? I predict true.");
console.log(car.includes('bar'));

console.log("Is car.length > 5? I predict true.");
console.log(car.length > 5);
*/
let car = 'subaru';
// Equality and inequality tests with strings
console.log("Is car == 'subaru'? I predict true.");
console.log(car == 'subaru');
console.log("Is car != 'honda'? I predict true.");
console.log(car != 'honda');
console.log("Is car === 'subaru'? I predict true.");
console.log(car === 'subaru');
console.log("Is car !== 'Subaru'? I predict true.");
console.log(car !== 'Subaru');
console.log("Is car != 'ford'? I predict true.");
console.log(car != 'ford');
console.log("Is car != 'subaru'? I predict false.");
console.log(car != 'subaru');
// Lowercase function tests
console.log("Is car.toLowerCase() == 'subaru'? I predict true.");
console.log(car.toLowerCase() == 'subaru');
console.log("Is car.toLowerCase() != 'SUBARU'? I predict true.");
console.log(car.toLowerCase() != 'SUBARU');
console.log("Is car.toUpperCase() == 'SUBARU'? I predict true.");
console.log(car.toUpperCase() == 'SUBARU');
// Numerical tests
let num1 = 10;
let num2 = 5;
console.log("Is num1 > num2? I predict true.");
console.log(num1 > num2);
console.log("Is num1 < num2? I predict false.");
console.log(num1 < num2);
console.log("Is num1 >= num2? I predict true.");
console.log(num1 >= num2);
console.log("Is num1 <= num2? I predict false.");
console.log(num1 <= num2);
// Logical operators
let hasCar = true;
let hasBike = false;
console.log("Do I have a car and a bike? I predict false.");
console.log(hasCar && hasBike);
console.log("Do I have a car or a bike? I predict true.");
console.log(hasCar || hasBike);
// Array tests
const fruits = ['apple', 'banana', 'orange'];
console.log("Is 'apple' in the fruits array? I predict true.");
console.log(fruits.includes('apple'));
console.log("Is 'grape' not in the fruits array? I predict true..");
console.log(!fruits.includes('grape'));
