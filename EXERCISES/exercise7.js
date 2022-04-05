/**Uma das vantagens da programação é a automatização de tarefas que não gostamos de realizar. Dito isto,
elabore uma função cujo objetivo é resolver a fórmula de Bhaskara. Para isso, sua função deve receber três
parâmetros, “ax2”, “bx” e “c”, de tal modo que na equação: 3x² - 5x + 12 os valores seriam respectivamente: 3,
-5, 12. Como retorno deve ser passado um vetor que tem 2 valores um para cada possível resultado, mesmo
que os resultados sejam iguais. Caso o delta seja negativo, retorne, ao invés do vetor, um string com a frase:
“Delta é negativo”. */

function bhaskara(ax2, bx, c){
  const valorA = isNaN(ax2) ? 0 : ax2;
  const valorB = isNaN(bx) ? 0 : bx;
  const valorC = isNaN(c) ? 0 : c;

  const delta = Math.pow(valorB, 2) - (4 * valorA * valorC);

  if (delta < 0) {
    return 'Delta é negativo';
  } else {
    const x1 = ((- valorB + Math.sqrt(delta)) / (2 * valorA));
    const x2 = ((- valorB - Math.sqrt(delta)) / (2 * valorA)); 

    return [x1, x2]
  }
}

console.log(bhaskara(3, -5, 12));

console.log(bhaskara(1, -5, 6));