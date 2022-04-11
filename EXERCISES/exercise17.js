/** Um funcionário irá receber um aumento de acordo com o seu plano de trabalho, de acordo com a tabela abaixo:
  Plano Aumento
  A 10%
  B 15%
  C 20%
Faça uma função que leia o plano de trabalho e o salário atual de um funcionário e calcula e imprime o seu novo salário. 

Use a estrutura switch e faça um caso default que indique que o plano é inválido. */

const imprimeSalario = function calculaNovoSalario (a, b) {
  const plano = (a.toString().toUpperCase());
  
  const salarioAtual = isNaN(b) ? 0 : b;

  let novoSalario;
  let aumento;

  switch (plano) {
    case 'A' :
      aumento = 1.1;
      break

    case 'B' :
        aumento = 1.15;
        break

    case 'C' :
        aumento = 1.2;
        break

    default:
      aumento = 0;
      break
  }

  novoSalario = Math.round(salarioAtual * aumento).toFixed(2);

  if (aumento !== 0) {
    console.log(`Novo salário R$${novoSalario}`);
  } else {
    console.log('Plano inválido!')   
  }
  
}

imprimeSalario('A',1000);
imprimeSalario('B',1000);
imprimeSalario('C',1000);
imprimeSalario(4,1000);