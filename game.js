
let coinDisplay = document.querySelector('.coins-cost');
let parsedCoin = parseFloat(coinDisplay.innerHTML);

let clickerCost = document.querySelector('.clicker-cost');
let parsedClickerCost = parseFloat(clickerCost.innerHTML);

// função para fazer a imagem do gato mudar e gerar dinheiro ao click

function incrementCoin() {
    parsedCoin += 1;
    coinDisplay.innerHTML = parsedCoin;
}

function buyClicker() {
    if (parsedCoin >= parsedClickerCost) {
        parsedCoin -= parsedClickerCost;
        coinDisplay.innerHTML = parsedCoin;
    } else {
        // O alert cria uma janela visível para o jogador
        alert("Moedas insuficientes para comprar o Clicker!"); 
    }
}
