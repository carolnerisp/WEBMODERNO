/**Utilizando a estrutura do Switch faça um programa que simule uma calculadora básicaO programa recebe
como parâmetros dois valores numéricos e uma string referente à operação e a realize com os valoresnuméricos na ordem que foram inseridos. Por exemplo: calculadora (2, ‘+’, 3). A função efetuará a soma de 2 e
3. Dica: Os sinais das operações são: ‘+’. ‘-’, ‘*’ e ‘/’. Crie um caso default para operações inválidas. */

const calculadora = function calcular(num1, num2, operacao){
  const numero1 = isNaN(num1) ? 0 : num1;
  const numero2 = isNaN(num2) ? 0 : num2;
  const operador = operacao.toString();

  switch(operador){
    case '+': 
     console.log(numero1 + numero2);
     break

    case '-': 
     console.log(numero1 - numero2);
     break

    case '*': 
     console.log(numero1 * numero2);
     break
     
    case '/': 
     console.log(numero1 / numero2);
     break

    default:
      console.error('Operador inválido')
      break
  }
}

calculadora(1,3,'+');
calculadora(1,3,'-');
calculadora(1,3,'/');
calculadora(1,3,'*');
calculadora(1,3,'h');
calculadora(1,0,'/');