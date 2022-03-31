/*function Pessoa(){
  this.idade = 0;

  setInterval(() => {
    this.idade ++;
    console.log(this.idade);
  }, 1000)
}

new Pessoa;*/

function Pessoa(){
  let idade = 0;

  setInterval(() => {
    idade ++;
    console.log(idade);
  }, 1000)
}

new Pessoa;