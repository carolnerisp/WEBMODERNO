/* Criar uma função para calcular o valor a ser pago de anuidade de uma associação. 

A função recebe como parâmetro um inteiro que representa o mês (1 - janeiro, 2 - fevereiro…) que foi paga e o valor da anuidade. 

A anuidade deve ser paga no mês de janeiro. 

Por mês, é cobrado 5% de juros (sob o regime de juros compostos). O retorno deve ser o valor a ser pago para o respectivo mês escolhido.*/

function calculaAnuidade(num1, num2){
  const mes = isNaN(num1) ? 0 : num1;
  const anuidade = isNaN(num2) ? 0 : num2;
  let valorAnuidade = anuidade;
  
  if (mes >= 1 && mes <= 12){

    if (mes > 1) {
      valorAnuidade = anuidade * Math.pow((1 + 0.05), mes);
      valorAnuidade = (Math.round(valorAnuidade * 100) / 100).toFixed(2);
    }

    return `Valor da anuidade R$${valorAnuidade}`
  } else {
    console.error('Mês inválido!');
  }

}


console.log(calculaAnuidade(1,100));
console.log(calculaAnuidade(2,100));
console.log(calculaAnuidade(3,100));
console.log(calculaAnuidade(4,100));
console.log(calculaAnuidade(5,100));
console.log(calculaAnuidade(6,100));
console.log(calculaAnuidade(7,100));
console.log(calculaAnuidade(8,100));
console.log(calculaAnuidade(9,100));
console.log(calculaAnuidade(10,100));
console.log(calculaAnuidade(11,100));
console.log(calculaAnuidade(12,100));