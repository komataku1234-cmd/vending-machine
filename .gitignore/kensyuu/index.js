const name = "田中";
const age = 25;

console.log(`名前:${name}`);
console.log(`年齢:${age}`);

function greet(name){
    return `こんにちは,${name}さん!`;
}

console.log(greet("佐藤"));

const fruits = ["りんご","みかん","ぶどう"];
fruits.forEach((fruit)=>{
    console.log(`フルーツ"${fruit}`);
});

const score = 75;
if(score >=80){
    console.log("合格");
}else{
    console.log("不合格");
}

const fn3 = (name) => {
    return 'hello ' + name;
}
console.log(fn3("tako"));