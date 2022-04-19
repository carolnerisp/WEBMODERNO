function Pessoa(nome) {
    this.nome = nome

  this.falar = function(){
    console.log(`Meu nome é ${this.nome}`);
  }
}

const p1 = new Pessoa('João');
p1.falar(); 

/*const Pessoa = nome => {
  return {
    falar: () => console.log(`Meu nome é ${nome}`)
  }
}

const p1 = Pessoa('Ana Júlia'); 
p1.falar();*/