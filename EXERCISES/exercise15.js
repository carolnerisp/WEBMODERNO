/**Um homem decidiu ir à uma revenda comprar um carro. Ele deseja comprar um carro hatch, e a revenda possui, além de carros hatch, sedans, motocicletas e caminhonetes. 

Utilizando uma estrutura switch, caso o comprador queira o hatch, retorne: “Compra efetuada com sucesso”. 

Nas outras opções, retorne: “Tem certeza que não prefere este modelo?”. 

Caso seja especificado um modelo que não está disponível, retorne no console: “Não trabalhamos com este tipo de automóvel aqui”. */

const compraCarro = function validarCarro(x){
  const carro = (x.toString().toUpperCase());

  switch (carro){
    case 'HATCH' :
      console.log('Compra efetuada com sucesso');
      break
    
      case 'SEDAN': case 'MOTOCICLETA' : case 'CAMINHONETE':
        console.log('Tem certeza que não prefere este modelo?');
        break
      
      default:
        console.log('Não trabalhamos com este tipo de automóvel aqui');
  }
}

compraCarro('sedan');
compraCarro('SedaN');
compraCarro('hatch');
compraCarro('Caminhonete');
compraCarro('motocicleta');
compraCarro('SUV');
