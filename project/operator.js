// 1. String concatenation
console.log('my' + 'cat'); // mycat
console.log('1' + 2); // 12 
console.log(`string literals: 1 + 2 = ${1 + 2}`);
console.log("ellie\'s \nbook");

// 2. Numeric operators
console.log(1+1); // add 
console.log(1-1);
console.log(1/1);
console.log(1*1);
console.log(5%2);
console.log(2 ** 3); // exponentiation

// 3. Increment and decrement operator
let counter = 2;
const preIncrement = ++counter;
console.log(preIncrement);
// 먼저, counter = counter + 1;
// 그 다음, preIncrement = counter;

const postIncrement = counter++;
console.log(postIncrement);
// 먼저, postIncrement = counter
// 그 다음, counter = counter + 1;

// 4. Assignment operators
let x = 3;
let y = 6;
x += y;
x -= y;
x *= y;
x /= y;

// 5. comparision operators

// 6. Logical operators: || && !
const value1 = true;
const value2 = 4 < 2; // false
// || (or), finds the first truthy value
console.log(`or: ${value1 || value2 || check()}`); // 셋중에 하나만 true면 true check가 true리턴해서 true
// 연산시간이 오래 걸리는 건 뒤로!!
// true가 먼저 나오면 끝나기 때문에

// && (and), finds the first falsy value
console.log(`and: ${value1 && value2 && check()}`);
// often used to compress long if-statement
// nullableObject && nullableObject.something 

function check(){
    for(let i = 0; i < 10; i++){
        // wasting time
        console.log('🐰');
    }
    return true;
}

// !(not)

// 7. Equality
const stringFive = '5';
const numberFive = 5;
// == loose equality, with type conversion
console.log(stringFive == numberFive);
console.log(stringFive != numberFive);

// === strict equality, no type conversion
console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);

// object equality by reference
const ellie1 = {name: 'ellie'};
const ellie2 = {name: 'ellie'};
const ellie3 = ellie1;

console.log(ellie1 == ellie2); // false
console.log(ellie1 === ellie2); // false
console.log(ellie1 === ellie3); // true

//8. Conditional operators: if
// if, else if. else

const name = 'ellie';
if(name === 'ellie'){
    console.log('Welcome, Ellie!')
} else if(name === 'coder'){
    console.log('You are amazing coder');
}else{
    console.log('unkown');
}

// 9. Ternary operator: ?
// condition ? value1 : value2;
// 가독성때문에 간단할때만 사용!

// 10. Swith statement
// use for multiple if checks
// use for enum-like value check
// use for multiple type checks in TS
const browser = 'IE';
switch(browser){
    case 'IE':
        console.log('go away');
        break;
    case 'chrome':
    case 'Firefox':
        console.log('love you');
        break;
    default:
        console.log('same all');
        break;
}


// 11. Loops
// while loop, while the condition is truthy
// body code is executed.