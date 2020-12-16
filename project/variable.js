// 1. Use Strict
// added in ES5
// use this for valina Javascript
'use strict';

// 2. Variable, rw(read/write)
// let (added in ES6)
let globalName = 'global name';
{
    let name = 'ellie';
    console.log(name);
    
    name = 'hello';
    console.log(name);
}

console.log(name);
console.log(globalName);
// 글로벌 변수는 애플리케이션이 끝날때까지 메모리에 탑재 -> 최소한으로 써야함

// var (don't even use this!)
// var hoisting(move declaration from bottom to top)
// 어디에 선언했는지에 상관없이 제일 위로 끌어올려주는것!
// hoisting: 끌어 올리기
// has no block scope => 블록 무시
console.log(age);
age = 4;
var age;


// 3. contant, r(read only)
// use const whenever possible.
// only use let if variable needs to change.
const daysInWeek = 7;
const maxNumber = 5;

//  Note!
// Immutable data types: primitive types, frozen obejects(i.e. object.freeze()) // 값 변경 불가
// Mutable data types: all objects by default are mutable in JS 
// favor immutable data type always for a few reasons:
// security, thread safety, reduce human mistakes



// 4. Variable types
// primitive(single item): number, string, boolean, number, null, undefined, symbol
// primitive의 경우 값 자체가 메모리에 올라감
// object(box container)
// object는 너무 커서 메모리에 한번에 못올라감 -> ref통해서 메모리에 접근
// function, first-class function : function도 변수에 할당이 가능함 따라서 인자로도 전달가능하고 return 가능함

// number - special numeric values: infinity, -infinity, Nan
const infinity = 1/0;
const negativeInfinity = -1 / 0;
const nAn = 'not a Number' / 2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

// bigInt (fairly new, don't use it yet) // 아직 모든 브라우저에서 지원 안함
const bigInt = 11275675757657657676657575757657657657657657656753333333765765n; // 범위 넘어감
console.log(`value: ${bigInt}, type: ${typeof bigInt}`);


//string
const char = 'c';
const brendan = 'brendan';
const greeting = 'hello' + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`); // 더해도 여전히 string
const helloBob = `hi ${brendan}!`;  // template literals (string) 변수를 스트링 안에 넣을 수 있음
console.log(`value: ${helloBob}, type: ${typeof helloBob}`); 


// boolean
const canRead = true;
const test = 3 < 1;
console.log(`value: ${canRead}, type: ${typeof canRead}`); 
console.log(`value: ${test}, type: ${typeof test}`); 

// null
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`); 

// undefined
let x = undefined;
console.log(`value: ${x}, type: ${typeof x}`); 

// symbol, 고유한 식별자가 필요할때!
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 == symbol2); // false
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`);

// object -> real-life object, data structure
const ellie = { name: 'ellie', age: 20 }; // ellie.name 이렇게 접근 가능


// 5. Dynamic typing: dynamically typed language
let text = 'hello';
console.log(text.charAt(0)); // h출력
console.log(`value: ${text}, type: ${typeof text}`); // type -> string
text = 5;
console.log(`value: ${text}, type: ${typeof text}`); // type -> number
text = '7' + 5;
console.log(`value: ${text}, type: ${typeof text}`);
text = '8' / '2';
console.log(`value: ${text}, type: ${typeof text}`);
console.log(text.charAt(0)); // 이미 number로 타입 변해서 런타임 에러


