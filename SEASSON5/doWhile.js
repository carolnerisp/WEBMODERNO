function getInteiroAleatorioEntre(min, max){
    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor);
}

let opcao = -1;

do {
    opcao = getInteiroAleatorioEntre(-2,5);
    console.log(opcao);
} while (opcao != - 1)

console.log('Até a próxima!');

//console.log(getInteiroAleatorioEntre(10,50));