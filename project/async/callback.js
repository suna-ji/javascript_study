'use strict';
// JavaScript is synchronous.
// Execute the code block in order after hoisting // hoisting 완료 후 코드를 동기적으로 실행
// hoisting: var, function declaration goes 

console.log('1');
// setTimeout(function(){
//     console.log('2');
// }, 1000); 
// 브라우저 API setTimeOut -> 1초뒤 callback 실행시켜줘!
// 보통은 callback함수는 arrow function을 사용한다.
setTimeout(()=> console.log('2'), 1000); 
console.log('3');

// Synchronous callback
function printImmediately(print){
    print();
}
printImmediately(() => console.log('hello')); // print라는 콜백함수 전달

// Asynchronous callback 
function printWithDelay(print, timeout){
    setTimeout(print, timeout);
}
printWithDelay(()=>console.log('async callback'), 2000);


// Callback Hell example
class UserStorae{
    loginUser(id, password, onSuccess, onError){
        setTimeout(()=>{
            if(
                (id === 'ellie' && password === 'dream') ||
                (id === 'coder' && password === 'academy')
            ){
                onSuccess(id);
            }else{
                onError(new Error('not found'));
            }
        }, 2000);

    }

    getRoles(user, onSuccess, onError){
        setTimeout(()=>{
            if(user === 'ellie'){
                onSuccess({name: 'ellie', role: 'admin'});
            }else{
                onError(new Error('no access'));
            }
        }, 1000);
    }
}

const userStorage = new UserStorae();
const id = prompt('enter your id');
const password = prompt('enter your password');
userStorage.loginUser(
    id,
    password,
    user => {
        userStorage.getRoles(
            user, 
            userWithRole => {
                alert(
                    `Hello ${userWithRole.name} you have a ${userWithRole.role} role`
                );
            }, 
            error => {
                console.log(error);
            }
        );
    },
    error => {
        console.log(error);
    }
);
