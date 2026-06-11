// const list = [10, 20, 30];
// const [x, y, z] = list; // x=10, y=20, z=30
// const [a, b] = list; // a=10, b=20
// const [i, j, k, l] = list; // i=10, j=20, k=30, l=undefined
// const [m, , n] = list; // m=10, n=30
// const [one, ...rest1] = list; // one=10, rest=[20, 30]

// const member1 = {
//     name: 'Tom',
//     gender: 'male',
//     age: 20,
// };

// const { name1, gender, memo = '---' } = member1; // name='Tom', gender='male', memo='---'

// // 1. 異なる名前の変数に代入する
// const { gender: sex } = member1; // sex='male'

// // 2. 残りのプロパティを取得する
// const { name2, ...rest2 } = member1; // name='Tom', rest={ gender: 'male', age: 20 };

// // 3. 入れ子のオブジェクトを分割する
// const member2 = {
//     name: 'Tom',
//     address: {
//         prefecture: '東京都',
//         city: '江東区',
//     },
// };
// const { address, address: { city } } = member2;
// console.log(address); // { prefecture: '東京都', city: '江東区' }
// console.log(city); // '江東区'


// function sum(...nums) {
//     let result = 0;
//     for (const num of nums) {
//         result += num;
//     }
//     return result;
// }
// console.log(sum(10, 25, 5)); // 40
// const nums = [10, 25, 5];
// console.log(sum(nums)); // 意図した結果にならない
// console.log(sum(...nums)) // 40

// function greet({ name, age }) {
//     console.log(`Hello my name is ${name}, ${age} years old.`);
// }

// // function greet(obj) {
// //     console.log(`Hello my name is ${obj.name}, ${obj.age} years old.`);
// // }

// const member = { name: 'Tom', gender: 'male', age: 20 };
// greet(member);

// const str = "hello";
// //console.log(str.substring(1)); // null
// // 単純なnull/undefined判定
// if (str !== null && str !== undefined) {
//     console.log(str.substring(1));
// }
// // Optional Chaining演算子(strが空ではないか)
// console.log(str?.substring(1)); // undefined

// let value = null;
// console.log(value ?? '既定値'); // 既定値

// let value = null;
// value ??= '既定値';
// console.log(value); // 既定値

// let obj = {
//     property1: 'Hello',
//     property2: function() {
//         console.log(this.property1 + ' zzz')
//     },
//     property3: {
//         bye: 'Bye'
//     }
// }

// console.log(obj.property3.bye);

//  配列の宣言（空で宣言）
// const fruits = [];         // 空の配列（constでも中身は変えられる）
// let numbers = new Array(); // newキーワードでもOK（あまり使われない）

// // 初期化（値を入れて宣言）
// const colors = ["Red", "Green", "Blue"]; // 配列リテラルで宣言＆初期化

// // 値の代入・変更
// const fruits1 = ["Apple", "Banana"];
// fruits1[1] = "Orange"; // インデックス指定で代入
// console.log(fruits1); // → ["Apple", "Orange"]

// fruits1.push("Melon"); // 最後に追加
// console.log(fruits1); // → ["Apple", "Orange", "Melon"]

// const fruits = ["Apple", "Banana", "Orange"];
// // 方法1
// for (let i = 0; i < fruits.length; i++) {
//   console.log(fruits[i]);
// }
// // 方法2
// fruits.forEach((fruit,index,) => {
//   console.log(index, fruit);
// });
// // 方法3
// for (const fruit of fruits) {
//   console.log(fruit);
// }

// // map: 各要素を変換して新しい配列を作る
// const numbers = [1, 2, 3];
// const doubled = numbers.map(num => num * 2);
// console.log(doubled); // → [2, 4, 6]

// // filter: 条件に合うものだけ残す
// const numbers1 = [1, 2, 3, 4, 5];
// const even = numbers1.filter(num => num % 2 === 0);
// console.log(even); // → [2, 4]

// // 配列を1つの値にまとめる
// const numbers2 = [1, 2, 3, 4];
// const sum = numbers2.reduce((accumulator, current) => accumulator + current, 0);
// console.log(sum); // → 10

// let a = 2;
// function fn1() {
//     let b = 1;
//     function fn2() {
//         let c = 3;
//     }
//     fn2();
// }
// fn1();

// let a = 1;
// function fn1() {
//     let a = 2;
//     function fn2() {
//         let a = 3;
//         console.log(a);
//     }
//     fn2();
// }
// fn1();
// // 3と出力される

// let result = (function(name) {
//     return "こんにちわ"+name;
// })("tako");
// console.log(result);

// let a = (function() {
//     let privateVal = 0;
//     let publicVal = 10;
//     function privateFunction() {
//         console.log('private function is called.')
//     }
//     function publicFunction() {
//         console.log('public function is called.')
//     }
//     // return {publicVal: publicVal, publicFunction: publicFunction}
//     return {publicVal, publicFunction} // 上記と同じ内容
// })();

// a.publicFunction();
// console.log(a.publicVal);

// function printTypeAndValue(val) {
//     console.log(typeof val, val);
// }
// let a = 0;
// printTypeAndValue(a); // number 0
// let b = '1' + a;
// printTypeAndValue(b); // string 10
// let c = 15 - b;
// printTypeAndValue(c); // number 5
// let d = c - null;
// printTypeAndValue(d); // number 5
// let e = d - true;
// printTypeAndValue(e); // number 4

// let a = 0;
// console.log(Boolean(a));
// let b = '';
// console.log(Boolean(b));
// let c = 0n;
// console.log(Boolean(c));
// let d = null;
// console.log(Boolean(d));
// let e = parseInt(""); // NaN
// console.log(Boolean(e));
// let f;
// console.log(Boolean(f));

// let a = 10;
// let b = 2;
// let c = 3;
// console.log(a || b || c);

// function fn(a, b=1) {
//     console.log(arguments);
//     console.log(a,b)
// }
// fn(1,2,3); // 「0」のみでデフォルト引数はない

// function fn(...args) {
//     console.log(args);
// }
// fn('a', 'b');

// function fn() {
//     console.log('fn!');
// }
// fn.prop = 0;
// fn.method = function() {
//     console.log('method!');
// }
// fn(); // fn!
// fn.method(); // method!
// console.log(fn.prop); // 0

// function hello() {
//     console.log('HELLO');
// }
// function fn(callback) {
//     // 何らかの処理
//     callback('Tom');
// }
// fn(hello);
// fn(function(name) {
//     console.log('Hello ' + name);
// });
// setTimeout(hello, 3000); // JSエンジンによって用意されるもの

// const person = {
//     name: 'Tom',
//     hello: function() {
//         console.log('Hello ' + this.name);
//     }
// }
// person.hello(); // Hello Tom

//window.name = 'Bob'; node.jsだと使えない
// const person = {
//     name: 'Tom',
//     hello: function() {
//         console.log('Hello ' + this.name);
//     }
// }
// function fn(callback) {
//     callback(); // 関数として実行される
// }
// fn(person.hello); //「Hello Bob」と出力される

// global.name = 'Bob';
// const person = {
//     name: 'Tom',
//     hello: function() {
//         console.log('Hello ' + this.name);
//     }
// }
// const helloTom = person.hello.bind(person);
// function fn(callback) {
//     callback();
// }
// fn(helloTom); //「Hello Tom」と出力される

// const tim = {name: 'Tim'}
// function a() {
//     console.log('Hello ' + this.name);
// }
// const b = a.bind(tim);
// b(); //「Hello Tim」と出力される
// a.call(tim); //「Hello Tim」と出力される
// a.apply(tim); //「Hello Tim」と出力される

// const tim = {name: 'Tim'}
// function a(name) {
//     console.log('Hello ' + name);
// }
// a.call(tim, 'Tom'); //「Hello Tom」と出力される

// const tim = {name: 'Tim'}
// function a(name1, name2) {
//     console.log('Hello ' + name1 + ',' + name2);
// }
// a.apply(tim, ['Tom', 'Bob']); //「Hello Tom,Bob」と出力される

// window.name = 'Bob';
// const person = {
//     name: 'Tom',
//     hello: function() {
//         console.log('Hello ' + this.name);
//     }
// }
// person.hello(); // 「Hello Tom」メソッドとして実行
// const hello = person.hello;
// hello(); // 「Hello Bob」関数として実行
// const helloTom = person.hello.bind(person);
// helloTom(); // 「Hello Tom」thisの束縛 ＊関数として実行
// person.hello.call(person); // 「Hello Tom」thisの束縛 ＊関数として実行
// person.hello.apply(person); // 「Hello Tom」thisの束縛 ＊関数として実行

// window.name = 'Bob';
// const person = {
//     name: 'Tom',
//     hello: function() {
//         console.log('Hello ' + this.name);
//     },
//     hi: () => {
//         console.log('Hello ' + this.name);
//     }
// }
// person.hello(); //「Hello Tom」と出力される
// person.hi(); //「Hello Bob」と出力される

// window.name = 'Bob';
// const a = () => console.log('Bye' + this.name);
// const person = {
//     name: 'Tom',
//     hello() {
//         console.log('Hello ' + this.name); //「Hello Tom」と出力される
//         a(); //「Bye Bob」と出力される
//     }
// }
// person.hello();

// window.name = 'Bob';
// const person = {
//     name: 'Tom',
//     hello() {
//         console.log('Hello ' + this.name);
//         const a = () => console.log('Bye ' + this.name);
//         a(); //「Bye Tom」と出力される
//     }
// }
// person.hello();

// function Person(name, age) {
//     this.name = name;
//     this.age = age;
// }
// const bob = new Person('Bob', 20);
// console.log(bob);

// // クラス表記
// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//     hello() {
//         console.log('Hello ' + this.name);
//     }
// }
// class Japanese extends Person {
//     constructor(name, age, gender) {
//         super(name, age); // プロパティ
//         this.gender = gender; // プロパティ
//     }
//     hi() { // prototype
//         console.log('Hi ' + this.name);
//     }
//     bye() { // prototype
//         console.log('Bye ' + this.name);
//     }
// }
// const person1 = new Japanese('Bob', 30, 'Male');
// const person = new Person('Bob', 30);
// console.log(person);
// console.log(person1);

// class Person {
//     constructor(name, age) {
//         this._name = name;
//         this._age = age;
//     }
//     get name() {
//         return this._name + '!!';
//     }
//     set name(value) {
//         this._name = value;
//     }
// }
// const person = new Person('Bob', 30);
// console.log(person.name);

// const array = [1, 2, 3, 4, 5];
// for(let i = 0; i < array.length; i++) {
//     console.log(array[i]);
// }
// let v, i = 0;
// while(v = array[i++]) {
//     console.log(v);
// }

// const obj = {
//     prop1: 'value1',
//     prop2: 'value2',
//     prop3: 'value3'
// }
// Object.prototype.method = function() {}
// for(let key in obj) {
//     console.log(key, obj[key]);
// }

const obj = { "国語": 100, "数学": 20, "理科": 30 };

for (let key in obj) {
  console.log(key);  // "a", "b", "c"
  console.log(obj[key]); // 1, 2, 3
}