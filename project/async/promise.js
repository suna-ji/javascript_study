'use strict';

// Promise is a Javascript object for asynchronous operations.
// state: pending -> fulfilled or rejected
// Producer vs Consumer

// 1. Producer
// promise는 class -> object생성
// when new promise is created, the executor(callback function) runs automatically.s
const promise = new Promise((resolve, reject)=>{
    // doing some heavy work (network, read files)
    console.log('doing something...');
    setTimeout(()=>{
        resolve('ellie');
        // reject(new Error('no network'))
    },2000);
});
// promise 객체가 만들어지는 순간 callback함수가 실행된다.

// 2. Consumer: then, catch, finally.
promise
    .then((value) =>{
        console.log(value); // promise가 정상적으로 잘 수행되어서, 마지막으로 resolve함수에서 전달된 파라미터가 value로 들어옴
    })
    .catch((error)=>{
        console.log(error);
    })
    .finally(()=>{
        console.log('finally');
    });

// 3. Promise chaining
const fetchNumber = new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), 1000);
});

fetchNumber
    .then(num => num * 2)
    .then(num => num * 3)
    .then(num => {
        return new Promise((resolve, reject)=>{
            setTimeout(()=> resolve(num - 1), 1000);
        });
    })
    .then(num => console.log(num));


// 4. Error Handling
const getHen = () =>
    new Promise((resolve, reject)=>{
        setTimeout(() => resolve('🐓'), 1000); // 1초 후 닭 리턴
    });

const getEgg = hen =>
    new Promise((resolve, reject)=>{
        setTimeout(() => reject(new Error(`error! ${hen} => 🥚`)), 1000); // 1초 후 달걀 리턴
    });    

const cook = egg => 
    new Promise((resolve, reject) => {
        setTimeout(() => resolve(`${egg} => 🍳`), 1000);
    });

// getHen()
    // .then(hen => getEgg(hen))
    // .then(egg => cook(egg))
    // .then(meal => console.log(meal));

getHen()
    .then(getEgg)
    .catch(error => {
        return '🥖'
    })
    .then(cook)
    .then(console.log)
    .catch(console.log);
// callback함수 전달 시 받아오는 value를 바로 다른 함수에 넘겨줄 때 생략이 가능(암묵적 전달 후 호출)
