/**​Crie uma função que verifica se um número inteiro passado como parêmetro é divisível por 3 e retorne true
ou false. */

function divisivelPorX (num, div) {

  if (! Number.isInteger(num)) {
    return 'Esse não é um número inteiro!';
  } else if (num % div == 0){
    return `Esse número é divisível por ${div}` ;
  } else {
    return `Esse número não é divisível por ${div}`;
  }
}

console.log(divisivelPorX(81,3));
console.log(divisivelPorX(17,4));
console.log(divisivelPorX('a',5));
console.log(divisivelPorX('81',7));