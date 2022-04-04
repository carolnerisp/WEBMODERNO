//Factory
function criarProduto(nome, preco){
  return {
    nome,
    preco
  }
}

console.log(criarProduto('Smartphone',1500))
