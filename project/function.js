// Function
// -fundamental building block in the program
// -subprogram can be used multiple times
// -performs a task or calculate a values

// 1. Function Declaration
// function name(param1, param2) {body...return;}
// one function === one thing
// naming: doSomething, command, verb
// e.g. (exempli gratia 예를들면) createCardAndPoint -> createCard, createProject
// e.i. (id est 다시말해서)
// function is object in JS
function printHello() {
    console.log('Hello');
}
printHello();

function log(message) {
    console.log(message);
}
log('hihi!');
log(122);

// 2. Parameters
// primitive parameters: passed by value
// object parameters: passed by reference
function changeName(obj) {
    obj.name = 'coder';
}
const ellie = { name: 'ellie' };
changeName(ellie);
console.log(ellie); // ellie -> changeName -> coder

// 3. Default parameters (added in ES6)
function showMessage(message, from = 'unkown') {
    console.log(`${message} from ${from}`);
}
showMessage("hi");
showMessage("hi", "ellie");

// 4. Rest parameters (added in ES6)
function printAll(...args) {
    for (let i = 0; i < args.length; i++) {
        console.log(args[i]);
    }
    // 또는
    for (const arg of args) {
        console.log(arg);
    }
    // 또는
    args.forEach((arg) => console.log(arg));
}
printAll('a', 'b', 'c');

// 5. Local scope
let globalMessage = 'global'; // global variable
function printMessage() {
    let message = 'hello'; // local variable
    console.log(message);
    console.log(globalMessage);

    function printAnother() {
        console.log(message);
        let childMessage = 'hello';
    }
    // console.log(childMessage); // 지역변수 밖에서 호출 -> 에러
}
printMessage();

// 6. Return a value
function sum(a, b) {
    return a + b;
}
const result = sum(1, 2);
console.log(`sum : ${sum(1, 2)}`);

// 7. Early return, early exit
// bad
function upgradeUser(user) {
    if (user.point > 10) {
        // long upgrade logic...
    }
}

// good
function upgradeUser(user) {
    if (user.point <= 10) {
        exit;
    }
    // long upgrade logic...
}

// First-class function
// functions are treated like any other variable
// can be assigned as a value to variable
// can be passed as an argument to other functions.
// can be returned by another function

// 1. Function expression
// a function declaration can be called earlier than it is defined (hoisted)
// a function expression is created when the execution reaches it
const print = function () {
    // anonymous function
    console.log('print');
}; // assinged as a value to variable
print();
const printAgain = print; //  assigned as a value to variable
printAgain();
const sumAgain = sum;
console.log(sumAgain(1, 3));

// 2. callback function using function expression
function randomQuiz(answer, printYes, printNo) { // passed as an argument to other functions.
    if (answer == 'love you') {
        printYes(); // hoisted
    } else {
        printNo(); // hoisted
    }
}
// anonymous funciton
const printYes = function () {
    console.log('yes');
};

const printNo = function () {
    console.log('no');
};

randomQuiz('wrong', printYes, printNo);
randomQuiz('love you', printYes, printNo);


// Arrow function
// always anonymous 
// * An anonymous function is a function without a function name 
// const simplePrint = function(){
//    console.log('simplePrint!');
// };
console.clear();
const simplePrint = () => console.log('simplePrint!');
const add = (a, b) => { return a + b; }
// const add = (a, b) => a + b;
const simpleMultiply = (a, b) => {
    // do something more 
    return a * b;
};
const sum_result = add(1, 3);
console.log(sum_result);


// IIFE : Immediately Invoked Function Expression (바로 실행)
(
    function hello() {
        console.log('IIFE');
    }
)();

// Fun QUIZ time 🐰
// function calculate(command, a, b)
// command: add, substract, divide, multiply, remainder

// 1. named function
function calculate1(command, a, b) {
    switch (command) {
        case 'add':
            console.log(`a + b = ${a + b}`);
            break;
        case 'substract':
            console.log(`a - b = ${a - b}`);
            break;
        case 'divide':
            console.log(`a / b = ${a / b}`);
            break;
        case 'multiply':
            console.log(`a * b = ${a * b}`);
            break;
        case 'remainder':
            console.log(`a % b = ${a % b}`);
            break;
        default:
            throw Error('unkown command');
    }
}
// 2. Arrow function
const calculate2 = (command, a, b) => {
    switch (command) {
        case 'add':
            console.log(`a + b = ${a + b}`);
            break;
        case 'substract':
            console.log(`a - b = ${a - b}`);
            break;
        case 'divide':
            console.log(`a / b = ${a / b}`);
            break;
        case 'multiply':
            console.log(`a * b = ${a * b}`);
            break;
        case 'remainder':
            console.log(`a % b = ${a % b}`);
            break;
        default:
            throw Error('unkown command');
    }
}

calculate1('add', 2, 3);
calculate2('add', 2, 5);
