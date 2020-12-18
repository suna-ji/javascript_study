'use strict';
// Objects
// one of the javascript's data types
// a collection of realated data and/or functionality.
// Nearly all objects in Javascript are instances of Object
// object = {key : value}; key를 통해 접근할 수 있음
const name = 'ellie';
const age = 4;
// 변수에는 하나의 값만 들어가 있다
print(name, age); // 따라서 함수에 파라미터를 넘길 때 각각 넘겨야 한다. -> 관리 어려움 -> object로 해결
function print(name, age){
    console.log(`name: ${name} age: ${age}`);
}

const ellie = {name: 'ellie', age: 20};
printPerson(ellie); // 호출이 간편
function printPerson(person){
    console.log(`name: ${person.name} age: ${person.age}`);
}

// 1. oject 만드는 방법 2가지 (Literals and properties)
const obj1 = {}; // 1. 'object literal' syntax
const obj2 = new Object();  // 2. 'object constructor' syntax

// with Javascript magic(dynamically typed language)
// Javascript는 Runtime때 타입이 결정되는 언어 -> object에 뒤늦게 필드 추가, 삭제 가능
// can add properties later
ellie.hasJob = true;
console.log(ellie.hasJob);

// can delete properties later
delete ellie.hasJob;
console.log(ellie.hasJob);
// 유지보수 힘들기 때문에 가능하면 피할 것!

// 2. Computed properties //object는 properties를 dot 또는 computed properties를 통해 접근이 가능하다.
// key should be always string
console.log(ellie.name);
console.log(ellie['name']); // 이때 string타입으로 해야하는거 주의!!
ellie['hasJob'] = true;
console.log(ellie['hasJob']);

// key가 정해지지 않았을 경우(사용자로부터 입력 받는 경우)
function printValue(obj, key){
    console.log(obj[key]);
}
printValue(ellie, 'name');
printValue(ellie, 'age');

// 3. Property value shorthand
const person1 = {name: 'bob', age: 2};
const person2 = {name: 'steve', age: 3};
const person3 = {name: 'dave', age: 4};
const person4 = makePerson('ellie', 30);
console.log(person4);
function makePerson(name, age){
    return{
        // name: name,
        // age: age,
        name, 
        age,
    };
}
// 이전에 자바스크립트에 class가 없었을 때는 이런식으로 작성했었다.
// 📌 위의 함수처럼 다른 계산을 하지 않고 순수하게 object를 생성하는 함수들은 보통 대문자로 시작하고, return 대신 this. 를 사용하고
// 호출시에도 new 연산자를 사용한다.
// 이렇게 하면 Javascript 엔진이 알아서  object를 생성해준다.

// 4.  Constructor Function
function Person(name, age){
    // this = {};
    this.name = name;
    this.age = age;
    // return this;
}
// 결국은 위의 2개가 생략된것 (this에 오브젝트 넣고 this를 리턴)
const person5 = new Person('sss', 24);

// 5. in operator: property existence check (key in obj)
console.log('name' in ellie); // true (name 이라는 키가 있다는 뜻)

// 6. for..in vs for..of
// for(key in obj)
for(let key in ellie){
    console.log(key);
}

// for(value of iterable)
const array = [1, 2, 3, 4];
for(let value of array){
    console.log(value);
}

// 7. Fun cloning
// Object.assign(dest, [obj1, obj2, obj3...])
const user = {name: 'ellie', age: '20'};
const user2 = user;
user2.name = 'coder';
console.log(user);

// old way
const user3 = {};
for(let key in user){
    user3[key] = user[key];
}
console.log(user3);

// new way
const user4 = {};
Object.assign(user4, user);
// const user4 = Object,assign({}, user); 이렇게 줄이는것도 가능
console.log(user4);

// another example
const fruit1 = {color: 'red'};
const fruit2 = {color: 'blue', size: 'big'};
const mixed = Object.assign({}, fruit1, fruit2); // 가장 뒤의 fruit2가 덮어씌우는 방식
console.log(mixed.color);
console.log(mixed.size);







