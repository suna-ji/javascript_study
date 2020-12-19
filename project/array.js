'use strict';

// Array 🎉

// 1. Declaration
const arr1 = new Array();
const ar2 = [1, 2];

// 2. Index position
const fruits = ['🍎', '🍌'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[1]);

// 3. Looping over an array
// print all fruits
console.clear();
// a. for
for(let i = 0; i < fruits.length; i++){
    console.log(fruits[i]);
}
// b. for of
for(let fruit of fruits){
    console.log(fruit);
}
// c. for Each
/**
 * Performs the specified action for each element in an array.
 * @param callbackfn  A function that accepts up to three arguments. forEach calls the callbackfn function one time for each element in the array.
 * @param thisArg  An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
forEach(callbackfn: (value: T, index: number, array: T[]) => void, thisArg?: any): void;
 */
// fruits.forEach(function(fruit, index, array){
//     console.log(fruit, index, array);
// })
// forEach에서 보통은 array를 받아오지 않는다. 또한 anonymous function의 경우 Arrow function으로 쓰고 한줄의 경우 {}; 도 필요없음
fruits.forEach((fruit)=> console.log(fruit));
// 즉, forEach는 배열안에 들어있는 value 각각에 내가 전달한 함수를 출력한다.

// 4. Addition, Deletion, Copy
// push: add an item to the end
fruits.push('🍓', '🍑');
console.log(fruits);
// pop: remove an item from the end
fruits.pop();
fruits.pop();
console.log(fruits);

// unshift: add an item to the beginning
fruits.unshift('🍓','🍋');
console.log(fruits);
// shift: remove an item from the beginning
fruits.shift();
fruits.shift();
console.log(fruits);

// ❗️ note ❗️ shift, unshift are slower than pop, push
// splice: remove an item by index position
console.clear();
console.log(fruits.push('🍓', '🍑', '🍋'));
console.log(fruits);
fruits.splice(1,1);
console.log(fruits);
fruits.splice(1, 1, '🍏', '🍉'); // 지우고 뒤에 추가
console.log(fruits);

// combine two arrays
const fruits2 = ['🍐', '🥥'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);

// 5. Searching
// indexOf: find the index
console.log(fruits);
console.log(fruits.indexOf('🍎')); // 만약 없다면 -1 출력
console.log(fruits.indexOf('🍉'));
// includes
console.log(fruits.includes('🍉'));
console.log(fruits.includes('🥥'));

// lastIndexOf
console.clear();
fruits.push('🍎');
console.log(fruits);
console.log(fruits.indexOf('🍎'));
console.log(fruits.lastIndexOf('🍎'));






