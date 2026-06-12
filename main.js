const moneyText = document.querySelector('#money');
const box = document.querySelector('.box');

let money = 0;

const menus = {
    mizu: 100,
    otya: 150,
    kora: 200
};

updateMoney();


// ====================
// 飲み物ボタン
// ====================

Object.keys(menus).forEach(name => {
    document.querySelector(`#${name}`)
        .addEventListener('click', () => buy(name));
});

function buy(name) {

    const price = menus[name];

    if (money >= price) {

        money -= price;

        console.log(`${name}を購入`);
        console.log(`残高：${money}`);

        updateMoney();

    } else {

        console.log(`${price - money}円足りなくて買えない`);

    }
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