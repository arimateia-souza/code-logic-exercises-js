// 1 - Criar uma função que exibe "Olá, mundo!" no console.
function exibeOla() {
    console.log('Olá, Mundo');
}
exibeOla();

// 2 - Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.
function olaNome(nome) {
    console.log(`Olá, ${nome}`);
}
olaNome('Ari');

// 3 - Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.
function retornaDobro(num) {
    return num * 2;
}
numero = 2;
let dobro = retornaDobro(numero);
console.log(`O dobro de ${numero} é ${dobro}.`);

// 4 - Criar uma função que recebe três números como parâmetros e retorna a média deles.
function tresNumeros(numero1, numero2, numero3) {
    let media = ((numero1 + numero2 + numero3) / 3);
    return  media;
}
let resultado = tresNumeros(2,2,10);
console.log(`A média dos numeros é: ${resultado}`);

// 5 - Criar uma função que recebe dois números como parâmetros e retorna o maior deles.
function numeroMaior(numero1, numero2) {
    let maior;
    if (numero1 > numero2) {
       maior = numero1;
    }else{
        maior = numero2;
    }
    return  maior;
}
let result = numeroMaior(10,8);
console.log(`O numero maior é: ${result}`);

// 6 - Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo
function multiplicacao(num) {
    return  num * num;
}
let resultadoMultiplicacao = multiplicacao(2);
console.log(`A multiplicação do numero por ele mesmo é: ${resultadoMultiplicacao}`);

