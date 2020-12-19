// JSON
// Javascript Object Notation

// 1. Object to JSON
// stringify(obj)
'use strict';
let json = JSON.stringify(true); // boolean과 같은 primitive type도 JSON으로 변환이 가능
console.log(json);

json = JSON.stringify(['apple', 'banana']);
console.log(json); 

const rabbit = {
    name: 'tori',
    color: 'white',
    size: null,
    birthDate: new Date(),
    jump : () => {
        console.log(`${this.name} can jump!`);
    },
}; // 토끼 object
// 자바스크립트에만 있는 특별한 데이터는 json에 포함되지 않고 함수도 포함되지 않는다.


json = JSON.stringify(rabbit, ['name', 'color']);
console.log(json); 
// stringify(value: any, replacer?: (this: any, key: string, value: any) => any, space?: string | number): string;
json = JSON.stringify(rabbit, (key, value) => {
    return key === 'name' ? 'ellie' : value;   
});
console.log(json); 



// 2. JSON to Object
// parse(json)
//console.clear();
json = JSON.stringify(rabbit);
// const obj = JSON.parse(json);
const obj = JSON.parse(json, (key, value) => {
    console.log(`key: ${key}, value: ${value}`);
    return key === 'birthDate' ? new Date(value) : value; // key가 birthDate면 value를 Date object로 만들고 아니면 그냥 value 
    return value;
    
});
console.log(obj);
rabbit.jump();
// obj,jump();

console.log(rabbit.birthDate.getDate());
console.log(obj.birthDate.getDate()); // json으로 변환하는 과정에서 string으로 바뀌었음! -> parse함수의 콜백함수로 해결해보자!




