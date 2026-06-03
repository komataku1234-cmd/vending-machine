//npm install prompt-sync ターミナルでこれを入力してインストールする.  

const merchandise = [
  ["水", 100],
  ["お茶", 120],
  ["コーヒー", 150]
];
const prompt = require("prompt-sync")();
const money = prompt("投入金額を入力してください: ");
console.log(`${money}円を入れました`);
for(let i = 0; i < merchandise.length; i++) {
  console.log(i+":"+merchandise[i][0] + "：" + merchandise[i][1] + "円");
}
const buy = prompt("何を買いますか?番号でお願いします");
console.log(buy);
if(merchandise[buy][1]<money){
    console.log(`${merchandise[buy][0]}を購入しました`);
}else{
    console.log(`お金が足りないので${merchandise[buy][0]}買えませんでした`);
}