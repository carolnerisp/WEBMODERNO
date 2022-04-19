/*Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração,
multiplicação e divisão desses valores.*/

function operacoes (num1, num2){
  const soma = num1 + num2;
  const sub = num1 - num2;
  const mult = num1 * num2;
  const div = num1 / num2;

  console.log(`Soma = ${soma} \nSubtração = ${sub} \nMultiplicação = ${mult} \nDivisão = ${div}`);
}

operacoes(10, 20);