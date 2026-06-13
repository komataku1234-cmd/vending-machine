const moneyText = document.querySelector('#money');
const box = document.querySelector('.box');
const cancel = document.querySelector(`#cancel`);

let money = 0;
let result = []

const menus = {
    mizu: {
        price: 100,
        stock: 3
    },
    otya: {
        price: 150,
        stock: 2
    },
    kora: {
        price: 200,
        stock: 1
    }
};

updateMoney();

cancel.addEventListener('click', () => {
    cancel1();
});

// ====================
// 飲み物ボタン
// ====================

Object.keys(menus).forEach(name => {
    document.querySelector(`#${name}`)
        .addEventListener('click', () => buy(name));
});

function buy(name) {

    const item = menus[name];

    // 在庫チェック
    if (item.stock <= 0) {

        console.log(`${name}は売り切れです`);
        return;

    }

    // お金チェック
    if (money >= item.price) {

        money -= item.price;
        item.stock--;

        console.log(`${name}を購入`);
        console.log(`残高：${money}`);
        console.log(`在庫：${item.stock}`);

        updateMoney();
        
        result.push(name);
        console.log(result);

    } else {

        console.log(`${item.price - money}円足りなくて買えない`);

    }
}


function cancel1(){
    console.log(`${result.at(-1)}を返金します`);
    money+= menus[result.at(-1)].price;
    result.pop();
    console.log(result);
    updateMoney();
}


// ====================
// コイン生成
// ====================

createCoinSpawner('coin10', '10yen.png', 10);
createCoinSpawner('coin50', '50yen.png', 50);
createCoinSpawner('coin100', '100yen.png', 100);
createCoinSpawner('coin500', '500yen.png', 500);

function createCoinSpawner(id, image, value) {

    const originalCoin = document.querySelector(`#${id}`);

    originalCoin.draggable = false;

    originalCoin.addEventListener('mousedown', e => {

        const coin = createCoin(image, value);

        moveCoin(coin, e);

        function move(event) {
            moveCoin(coin, event);
        }

        document.addEventListener('mousemove', move);

        document.addEventListener('mouseup', () => {

            document.removeEventListener('mousemove', move);

            checkHit(coin);

        }, { once: true });

    });
}

function createCoin(image, value) {

    const coin = document.createElement('img');

    coin.src = image;
    coin.width = 100;
    coin.style.position = 'absolute';
    coin.draggable = false;
    coin.dataset.value = value;

    document.body.appendChild(coin);

    makeDraggable(coin);

    return coin;
}

function moveCoin(coin, event) {

    coin.style.left = event.pageX - 50 + 'px';
    coin.style.top = event.pageY - 50 + 'px';

}


// ====================
// 生成済みコイン移動
// ====================

function makeDraggable(coin) {

    coin.addEventListener('mousedown', () => {

        function move(event) {

            moveCoin(coin, event);

        }

        document.addEventListener('mousemove', move);

        document.addEventListener('mouseup', () => {

            document.removeEventListener('mousemove', move);

            checkHit(coin);

        }, { once: true });

    });

}


// ====================
// 投入判定
// ====================

function checkHit(coin) {

    const boxRect = box.getBoundingClientRect();
    const coinRect = coin.getBoundingClientRect();

    const hit =
        coinRect.left < boxRect.right &&
        coinRect.right > boxRect.left &&
        coinRect.top < boxRect.bottom &&
        coinRect.bottom > boxRect.top;

    if (!hit) return;

    money += Number(coin.dataset.value);

    coin.remove();

    updateMoney();

}


// ====================
// 表示更新
// ====================

function updateMoney() {

    moneyText.textContent = `お金: ${money}円`;

}