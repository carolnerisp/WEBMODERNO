/**Escreva um algoritmo que leia o código de um aluno e suas três notas. 
 * 
 * Calcule a média ponderada do aluno, considerando que o peso para a maior nota seja 4 e para as duas restantes, 3. 
 * 
 * Mostre o código do aluno, suas três notas, a média calculada e uma mensagem "APROVADO" se a média for maior ou igual a 5 e
"REPROVADO" se a média for menor que 5. 

Repita a operação até que o código lido seja negativo. */

function geraCodigo( { min = -1, max = 100} ) {
  const valor = Math.random() * (max - min) + min;
  return Math.floor(valor);
}

function geraNotas( { min = 0, max = 10} ) {
  const valor = Math.random() * (max - min) + min;
  return Math.floor(valor);
}

function calculaMediaPonderada (codigo, n1, n2, n3){
  let mediaPonderada;
  let notas = [n1, n2, n3];
  let retorno;

  const notasOrdenadas = notas.sort(function(a, b){
    return a - b;
  });

  mediaPonderada = ( (notasOrdenadas[0] * 3) + (notasOrdenadas[1] * 3) + (notasOrdenadas[2]*4) ) / 10; 

  retorno = `Código do Aluno: ${codigo}; Notas: ${notasOrdenadas}; Média Ponderada: ${mediaPonderada}`;

  if (mediaPonderada >= 5) {
    return retorno + ' APROVADO';
  } else {
    return retorno + ' REPROVADO';
  }   

}

let codigoAluno = 1;

while (codigoAluno > 0) {
  codigoAluno = geraCodigo({});

  const n1 = geraNotas({});
  const n2 = geraNotas({});
  const n3 = geraNotas({});

  console.log(calculaMediaPonderada(codigoAluno, n1, n2, n3));
}  

console.log('Fim dos alunos');




