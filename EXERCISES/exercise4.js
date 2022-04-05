/*Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado
e o resto da divisão destes dois valores.*/

function divisao (a, b){
  const valorA = isNaN(a) ? 0 : a;
  const valorB = isNaN(b) ? 0 : b;

  if ((valorA === 0) || (valorB === 0)) {
    console.log('Favor inserir números válidos');
  } else {
  const divisao = valorA / valorB;
  const resto =  valorA % valorB;

  console.log(`Resultado da divisão ${divisao} \nResto da divisão ${resto}`);
}
  
}

divisao(5, 2);
divisao(5, 0);
divisao('r', 2);