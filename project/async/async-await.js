// async & await
// clear style of using promise
// syntatic sugar

// 1. async
async function fetchUser(){
    return 'ellie';
}
// 아래 promise와 같은 기능
// function fetchUser(){
//     return new Promise((resolve, reject)=>{
//         resolve('ellie');
//     })
// }

const user = fetchUser();
user.then(console.log);
console.log(user);


// 2. await ✨
function delay(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function getApple(){
    await delay(1000);
    return '🍎'; 
    // 3초후 사과를 리턴하는 promise가 만들어진다. (async가 앞에 붙었으니까! promise만든다.)
}

async function getBanana(){
    await delay(1000);
    return '🍌';
}
/**
    funtion getBanana(){
        return delay(3000)
        .then(()=>'🍌')
    }
 */


// function pickFruits(){
//     return getApple()
//     .then(apple => {
//         return getBanana()
//         .then(banana => `${apple} + ${banana}`);
//     });
// }

async function pickFruits(){
    const bananaPromise = getBanana();
    const applePromise = getApple();
    const banana = await bananaPromise;
    const apple = await applePromise;
   
    return `${apple} + ${banana}`;
}

pickFruits().then(console.log);

// 3. useful promise APIs
function pickAllFruits(){
    return Promise.all([getApple(), getBanana()])
    .then(fruits => fruits.join(' + '));
}
pickAllFruits().then(console.log);

function pickOnlyOne(){
    return Promise.race([getApple(), getBanana()]);
}
pickOnlyOne().then(console.log);
