// 1 - Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, a partir de sua altura, em metros, e peso, em quilogramas, que serão recebidos como parâmetro.
function caculaIMC(altura, peso) {
    let imc = peso / (altura * altura);
}
caculaIMC(1.65,75);

// 2 - Crie uma função que calcule o valor do fatorial de um número passado como parâmetro.
function calcularFatorial(numero) {
    if (numero === 0 || numero === 1) {
      return 1;
    }
  
    let fatorial = 1;
    for (let i = 2; i <= numero; i++) {
      fatorial *= i;
    }
  
    return fatorial;
  }
let numero = 3;
let resultado = calcularFatorial(numero);
console.log(`O fatorial de ${numero} é ${resultado}`);

// 3 - Crie uma função que converte um valor em dólar, passado como parâmetro, e retorna o valor equivalente em reais. Para isso, considere a cotação do dólar igual a R$4,80.
function caculaDolar(dolar) {
    let cotacaoDolar = 4.80;
    let reais = dolar * cotacaoDolar;
    return reais.toFixed(2);
}
let dolar = 1;
let valorEmReais = caculaDolar(dolar);
let palavraDolar = dolar > 1 ? 'dólares equivalem' : 'dolar equivale' ;
console.log(`${dolar} ${palavraDolar} a R$ ${valorEmReais}`);

// 4 - Crie uma função que mostre na tela a área e o perímetro de uma sala retangular, utilizando altura e largura que serão dadas como parâmetro.
function calculaArea(altura, largura) {
    let area = altura * largura;
    let perimetro = 2 * (altura + largura)
    console.log(`valor da area: ${area}`);
    console.log(`valor do perimetro: ${perimetro}`);
}
resultado = calculaArea(2,2);

// 5 - Crie uma função que mostre na tela a área e o perímetro de uma sala circular, utilizando seu raio que será fornecido como parâmetro. Considere Pi = 3,14.
function calcularAreaPerimetro(raio) {
    let area = Math.PI * raio * raio;
    let perimetro = 2 * Math.PI * raio;
    console.log(`Área: ${area.toFixed(2)}`);
    console.log(`Perímetro: ${perimetro.toFixed(2)}`);
  }
calcularAreaPerimetro(4);

// 6 - Crie uma função que mostre na tela a tabuada de um número dado como parâmetro.
function tabuada(numero) {
    for (let i = 1; i <= 10; i++) {
        let resultado = numero * i;
        console.log(`${numero} * ${i} = ${resultado}`);
    }
  }
tabuada(4);



