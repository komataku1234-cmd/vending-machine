// function sleep(ms) {
//     const startTime = new Date();
//     while(new Date() - startTime < ms);
//     console.log('sleep done');
// }
// const btn = document.querySelector('button');
// btn.addEventListener('click', function() {
//     console.log('button clicked');
// });

// setTimeout(function() {
//     sleep(5000);
// }, 2000);

// const btn = document.querySelector('button');
// btn.addEventListener('click', function task2() {
//     console.log('task2 done');
// });
// function a() {
//     setTimeout(function task1() {
//         console.log('task1 done');
//     }, 4000);
//     const startTime = new Date();
//     while(new Date() - startTime < 5000);
//     console.log('fn a done');
// }
// a();

// function a() {
//     setTimeout(function task1() {
//         console.log('task1 done');
//         b();
//     });
//     console.log('fn a done');
// }
// function b() {
//     console.log('fn b done');
// }
// a();

// function sleep(callback) {
//     setTimeout(function() {
//         console.log('hello');
//         callback();
//     }, 1000);
// }
// sleep(function() {
//     console.log('callback done');
// });

// function sleep(callback, val) {
//     setTimeout(function() {
//         console.log(val++);
//         callback(val);
//     }, 1000);
// }
// sleep(function(val) {
//     sleep(function(val) {
//         sleep(function(val) {
//         }, val)
//     }, val)
// }, 0);

// new Promise(function(resolve, reject) {
//     resolve('hello'); // -> then実行
//     reject('bye'); // -> catch実行
// }).then(function(data) {
//     console.log(data); // -> 'hello'
// }).catch(function(data) {
//     console.log(data) // -> 'bye'
// }).finally(function() {
//     console.log('終了処理');
// });

// new Promise(function(resolve, reject) {
//     console.log('promise');
//     reject();
// }).then(function() {
//     console.log('then1');
// }).then(function() {
//     console.log('then2');
// }).then(function() {
//     console.log('then3');
// }).catch(function(){
//     console.log('catch');
// });
// console.log('global end');

// new Promise(function(resolve, reject) {
//     console.log('promise');
//     resolve();
// }).then(function() {
//     console.log('then1');
//     throw new Error();
// }).then(function() {
//     console.log('then2');
// }).catch(function(){
//     console.log('catch');
// });
// console.log('global end');

// new Promise(function(resolve, reject) {
//     console.log('promise');
//     setTimeout(function() {
//         resolve('hello');
//     }, 1000);
// }).then(function(data) {
//     console.log('then1: ' + data);
//     return 'bye';
// }).then(function(data) {
//     console.log('then2: ' + data);
// }).catch(function(data){
//     console.log('catch: ' + data);
// }).finally(function() {
//     console.log('finally');
// });
// console.log('global end');

// function sleep(val) {
//     return new Promise(function(resolve) {
//         setTimeout(function() {
//             console.log(val++);
//             resolve(val);
//         }, val * 500);
//     })
// }
// Promise.all([sleep(2), sleep(3), sleep(4)]).then(function() {
//     console.log('end');
// });

// function sleep(val) {
//     return new Promise(function(resolve) {
//         setTimeout(function() {
//             console.log(val++);
//             resolve(val);
//         }, val * 500);
//     })
// }
// Promise.race([sleep(2), sleep(3), sleep(4)]).then(function(data) {
//     console.log(data);
// })

// function sleep(val) {
//     return new Promise(function(resolve, reject) {
//         setTimeout(function() {
//             console.log(val++);
//             resolve(val);
//             // reject(val);
//         }, val * 500);
//     })
// }
// Promise.allSettled([sleep(2), sleep(3), sleep(4)]).then(function(data) {
//     console.log('--- allSettled ---');
//     console.log(data);
// })

// setTimeout(function task1() {
//     console.log('task1');
// });

// new Promise(function promise(resolve) {
//     console.log('promise');
//     resolve();
// }).then(function job1() {
//     console.log('job1');
// });
// console.log('global end');

// new Promise(function promise(resolve) {
//     console.log('promise');

//     setTimeout(function task1() {
//         console.log('task1');
//         resolve();
//     });
// }).then(function job1() {
//     console.log('job1');
//     setTimeout(function task2() {
//         console.log('task2');
//     });

//     queueMicrotask(function job4() {
//         console.log('job4');
//     });
// }).then(function job2() {
//     console.log('job2');
// }).then(function job3() {
//     console.log('job3');
// });
// console.log('global end');

// function sleep(val) {
//     return new Promise(function(resolve) {
//         setTimeout(function() {
//             console.log(val++);
//             resolve(val);
//         }, 1000);
//     });
// }
// async function init() {
//     let val = await sleep(0);
//     console.log(val);
// }
// init(); // 「0, 1」と表示される

// console.log(fetch('users.json')); // Promiseが返ってくる

// function sleep(ms) {
//     return new Promise(resolve => {
//         setTimeout(resolve, ms);
//     });
// }

// async function init() {
//     console.log("start");

//     await sleep(1000);
//     console.log("1秒後");

//     await sleep(2000);
//     console.log("さらに2秒後");

//     console.log("end");
// }

// init();

function task(name, ms) {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log(name + "完了");
            resolve();
        }, ms);
    });
}
async function init(){
    await Promise.all([task("A", 3000),
    task("B", 1000),
    task("C", 2000)]);
    console.log("全部終了");
    }
init();

// function fetchUser() {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve({
//                 id: 1,
//                 name: "Taro"
//             });
//         }, 1000);
//     });
// }

// async function init(){
//     let val = await fetchUser();
//     console.log(`ユーザー名：${val.name}`);
//     console.log("取得完了");
// }
// init();

// function fetchData() {
//     return new Promise((resolve, reject) => {
//         const success = false;

//         setTimeout(() => {
//             if (success) {
//                 resolve("データ取得成功");
//             } else {
//                 reject("通信エラー");
//             }
//         }, 1000);
//     });
// }
// async function init(){
//     try{
//         let val = await fetchData();
//         console.log(val);
//     }catch(err){
//         console.log(err);
//     }
// }
// init();
