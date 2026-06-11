const merchandise = [
  ["水", 100],
  ["お茶", 120],
  ["コーヒー", 150]
];

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("投入金額を入力してください: ", (money) => {
    console.log(`${money}円を入れました`);
    for(let i = 0; i < merchandise.length; i++) {
    console.log(i+":"+merchandise[i][0] + "：" + merchandise[i][1] + "円");
    }
    rl.question("何を買いますか?番号でお願いします", (buy) => {
        if(merchandise[buy][1]<money){
            console.log(`${merchandise[buy][0]}を購入しました`);
            console.log(`残り${money-merchandise[buy][1]}円です`);
        }else{
            console.log(`お金が足りないので${merchandise[buy][0]}買えませんでした`);
        }
        rl.close();
    });
});