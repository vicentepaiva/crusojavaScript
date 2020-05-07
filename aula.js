//como alterar a ordem das cores 'a' e 'b' usando 
//somente variáveis.

let a = 'vermelho';
let b = 'azul';

let c = a;
a = b;
b = c;

console.log(a);
console.log(b);


//for impriminto no console os numeros ímpares entre 0 e 5.

for(let i = 0; i < 5; i++) {
    if(i % 2 !== 0) {
        console.log(i)
    }
}

// wile diferença que a variável fica fora. Verifica depois
//executa.

let i = 5;

while(i >= 1) {
    if(i % 2 !== 0) {
        console.log(i);
    }
    i--;
}

// Do..while (variável declarada fora do loop) diferença 
//para o while é que ele executa primeiro uma vez e verifica
//depois. sempre tem que colocar o incremento (i++) caso não
// faça o loop vai ficar infinito. na pratica é pouco usado.

let i1 = 0;
do {
    console.log('Digitando!', i1);
    i1++;
  }  while (i1 < 10)

  // for-in

  const pessoa = {
      nome: 'vicente',
      idade: 40
  };
  // key-value (nome-valor)

  for(let chave in pessoa) {
      console.log(chave, pessoa[`nome`]);
  }

  const cores = ['vermelho', 'azul', 'verde'];

  for (let indice in cores) {
      console.log(indice, cores[indice])
  }

  //for-of

  for(let cor of cores) {
      console.log(cor);
  }

  // escrever uma função que usa dois numereos e retorna 
  // o maior entre eles

  let valorMaior = max(5,9);
  console.log(valorMaior);

 // function max(numero1, numero2) {
    //  if(numero1 > numero2)
      //return nomero1;
      //else return numero2;
  //}

//da forma acima ou

  function max(numero1, numero2) {
      return numero1 > numero2 ? numero1 : numero2 ;
  }

//fizzBuzz
// Divisível por 3 = fizz Divisível pode 5 = Buzz
//divisível por 3 e 5 = fizzBuzz
//não divisível por 3 ou 5 = entrada
// valor que não é um número = 'não é um número'

const resultado = fizzBuzz(7);
console.log(resultado);

function fizzBuzz(entrada) {
    if (typeof entrada !== 'number')
        return 'Não é um número';
    if (entrada % 3 === 0 && entrada % 5 === 0)
        return 'FizzBuzz';
    if (entrada % 3 === 0)
        return 'Fizz';
    if (entrada % 5 === 0)
        return 'Buzz';
   
    return entrada;
};

//medidor de velocidade
//velocidade máxima até 70km
// a cada 5km acima do limite acrescenta 1 ponto na carteira
//Math.flor arredonda para o decimal mais proximo
//caso os pontos sejam maior que 12 a carteira é suspensa

verificarVelocidade(130)

function verificarVelocidade(velocidade) {
    const velocidadeMaxima = 70;
    const kmPorPonto = 5;
    if ( velocidade <= velocidadeMaxima ) 
        console.log('Ok');
    else {
        const pontos = Math.floor((velocidade - velocidadeMaxima) / kmPorPonto);
        if ( pontos >= 12)
            console.log('Carteira suspensa');
        else 
            console.log('Pontos', pontos);
    }
};

//receber uma quantidade de valores para avaliar
//função exibe se cada valor é par ou impar

exibirTipo(10);

function exibirTipo(valor) {
    if ( valor % 2 === 0 )
        console.log('Esse valor é par');
    else {
            console.log('Esse valor é impar');
    }
}

// outra forma exibindo vários numeros

exibirValor(5);

function exibirValor(limite) {
    for (let i = 0; i <= limite; i++)
    if ( i % 2 === 0 )
        console.log(i,'Par');
    else {
            console.log(i,'Impar');
    }
}

// criar um método para ler propriedades de um objeto e
// exibir somente as propriedades do tipo string que estao esse objeto

const filme = {
    titulo: 'vinhagores',
    ano: 2018,
    diretor: 'robin',
    personagem: 'thor'
};

exibirPropriedades(filme);

function exibirPropriedades(obj) {
    for (prop in obj)
        if (typeof obj[prop] === 'string')
            console.log(prop,obj[prop])
}

//criar função somar que retorna 
// soma de todos os multuplos de 3 e 5
// multiplos de 3 (3,6,9)
// pultiplos de 5 (5,10)
//somando os multiplos

somar(10);

function somar(limite) {
    let multiplosTres = 0;
    let multiplosCinco = 0;
  

    for (i = 0; i <= limite; i++){
        if(i % 3 === 0)
        multiplosTres += i;
        if(i % 5 === 0)
        multiplosCinco += i;
    }
    console.log(multiplosTres + multiplosCinco);

}

//Exercício nota escolar
//Obter a média a partir de uma array
// 0-59 : F
// 60-69: D
// 70-79: C
// 80-89: D
// 90-100: A

const array = [70,70,80];

console.log(mediaDoAluno(array));

function mediaDoAluno(notas) {
    const media = calcularMedia(notas);

    if (media < 59) return 'F';
    if (media < 69) return 'D';
    if (media < 79) return 'C';
    if (media < 89) return 'B';
    return 'A'
    
}

function calcularMedia(array) {
    let soma = 0;
    for (let valor of array) {
        soma += valor;
    }
    return  soma/(array.length);
}

// pode ser feito assim também

//function mediaDoAluno(notas) {
  //  let soma = 0;
    //for (let nota of notas) {
      //  soma += nota;
    //}
    //const media = soma/(notas.length)

    //if (media < 59) return 'F';
    //if (media < 69) return 'D';
    //if (media < 79) return 'C';
    //if (media < 89) return 'B';
    //return 'A'
    
//}

// criar uma funcçã que exibe a quantidade de *
// que aquela linha possui

exibirAsteriscos(10);

//function exibirAsteriscos(linhas) {
//    let padrao = '';
//    for(let linha = 1; linha <= linhas; linha++) {
//        padrao += '*';
//        console.log(padrao);
//    }
//}

function exibirAsteriscos(linhas) {
    for(linha = 1; linha <= linhas; linha++) {
        let padrao = '';
        for(let i = 0; i < linha; i++) {
            padrao += '*';
        }
        console.log(padrao);
    }

}

// criar funçao para mostrar os numeros primos
//primos 11
//compostos 10
//Ex: 10, 11

exibirNumeroPrimo(15);

//function exibirNumeroPrimo(limite) {
//    for(let numero = 2; numero <= limite; numero++) {
//        let ePrimo = true;
//
//       for(let divisor = 2; divisor < numero; divisor++) {
//            if(numero % divisor === 0) {
//                ePrimo = false;
//                break;
//            }
//            if (ePrimo) console.log(numero);
//        }
//    }
//}

function exibirNumeroPrimo(limite) {
    for(let numero = 2; numero <= limite; numero++) {
        if(numeroPrimo(numero)) console.log(numero);
    }
}
function numeroPrimo(numero) {
    for (let divisor = 2; divisor < numero; divisor++) {
        if(numero % divisor === 0) {
            return false;
        }
    }
    return true;
}

// factory functions
//camelCase
//function criarCelular(marcaCelular,tamanhoTela,capacidadeBateria) {
//    return {
//        marcaCelular,
//        tamanhoTela,
//       capacidadeBateria,
//        ligar() {
//            console.log("Fazendo ligação...")
//        } 
//        
//    }
//}

//const celular1 = criarCelular('Iphone', 5.0, 3000);
//console.log(celular1)



//constructor fctions

//Pascal case - UmDoisTresQuatro


function criarAparelho(marcaAparelho,telaAparelho,capacidadeAparelho) {
    this.marcaAparelho = marcaAparelho,
    this.telaAparelho = telaAparelho,
    this.capacidadeAparelho = capacidadeAparelho,
    this.ligar = function() {
        console.log("Fazendo ligação...");
    }
}

const novoAparelho = new novoAparelho('iphonex', 5.2, 3600);
console.log(novoAparelho);


//mudança github
