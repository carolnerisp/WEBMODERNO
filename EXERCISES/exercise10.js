/**​Crie uma função que verifica se um número inteiro passado como parêmetro é divisível por 3 e retorne true
ou false. */

function divisivelPor3 (num, div) {

  if (! Number.isInteger(num)) {
    return 'Esse não é um número inteiro!';
  } else if (num % div == 0){
    return `Esse número é divisível por ${div}` ;
  } else {
    return `Esse número não é divisível por ${div}`;
  }
}

console.log(divisivelPor3(81,3));
console.log(divisivelPor3(17,4));
console.log(divisivelPor3('a',5));
console.log(divisivelPor3('81',7));