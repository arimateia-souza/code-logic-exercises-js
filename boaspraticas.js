/*Desafios finais*/
// 1 - Crie um programa que utilize o console.log para exibir uma mensagem de boas-vindas.
/*let nome = prompt('qual seu nome? \nFn + F12 (Abra o console e tenha mais informaçoes)');
console.log(`${nome}, seja bem-vindo!!`);
console.log(`seu nome possui ${nome.length} letras`);

// 2 - Crie uma variável chamada "nome" e atribua a ela o seu nome. Em seguida, utilize o console.log para exibir a mensagem "Olá, [seu nome]!" no console do navegador.
console.log('QUESTÃO 2');
nome = 'Ari';
console.log(`Olá, ${nome}!`);

// 3 - Crie uma variável chamada "nome" e atribua a ela o seu nome. Em seguida, utilize o alert para exibir a mensagem "Olá, [seu nome]!" .
alert(`QUESTÃO 3\nOlá, ${nome}!`);

// 4 - Utilize o prompt e faça a seguinte pergunta: Qual a linguagem de programação que você mais gosta?. Em seguida, armazene a resposta em uma variável e mostre no console do navegador.
console.log('QUESTÃO 4');
let resposta = prompt('Qual a linguagem de programação que você mais gosta?');
console.log(resposta);
// 5 - Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de sua escolha. Em seguida, realize a soma desses dois valores e armazene o resultado em uma terceira variável chamada "resultado". Utilize o console.log para mostrar a mensagem "A soma de [valor1] e [valor2] é igual a [resultado]." no console.
console.log('QUESTÃO 5');
let valor1 = 5, valor2 = 10;
resultado = valor1 + valor2;
console.log(`A soma de ${valor1} e ${valor2} é igual a ${resultado}.`);

// 6 - Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de sua escolha. Em seguida, realize a subtração desses dois valores e armazene o resultado em uma terceira variável chamada "resultado". Utilize o console.log para mostrar a mensagem "A diferença entre [valor1] e [valor2] é igual a [resultado]." no console.
console.log('QUESTÃO 6');
valor1 = 10, valor2 = 10;
resultado = valor1 - valor2;
console.log(`A diferença entre ${valor1} e ${valor2} é igual a ${resultado}.`);
// 7 - Peça ao usuário para inserir sua idade com prompt. Com base na idade inserida, utilize um if para verificar se a pessoa é maior ou menor de idade, exibindo uma mensagem apropriada no console.
console.log('QUESTÃO 7');
let idade = prompt('insira sua idade');
idade >=18 ? console.log('Maior de idade') : console.log('Menor de idade');

// 8 - Crie uma variável "numero" e peça um valor com prompt verifique se é positivo, negativo ou zero. Use if-else para imprimir a respectiva mensagem.
console.log('QUESTÃO 8');
let numero = prompt('Digite um numero positivo ou negativo');
if (numero >= 1) {
    console.log('numero POSITIVO');
}else if(numero < 0){
    console.log('numero NEGATIVO');
}else{
    console.log('numero ZERO');
}
// 9 - Use um loop while para imprimir os números de 1 a 10 no console.
console.log('QUESTÃO 9');
let contador = 1;
while(contador < 11 ){
    console.log(contador);
    contador++;
}
// 10 - Crie uma variável "nota" e atribua um valor numérico a ela. Use if-else para determinar se a nota é maior ou igual a 7 e exiba "Aprovado" ou "Reprovado" no console.
console.log('QUESTÃO 10');
let nota = 9.0;
nota >= 7 ? console.log('APROVADO') : console.log('REPROVADO');*/
// 11 - Use o Math.random para gerar qualquer número aleatório e exiba esse número no console.
console.log('QUESTÃO 11');
let numeroAleatorio = parseFloat(( Math.random() * 200 + 1).toFixed(2));
console.log(numeroAleatorio);
// 12 - Use o Math.random para gerar um número inteiro entre 1 e 10 e exiba esse número no console.
console.log('QUESTÃO 12');
let numeroAleatorioInt = parseInt(Math.random() * 10 + 1);
console.log(numeroAleatorioInt);
// 13 - Use o Math.random para gerar um número inteiro entre 1 e 1000 e exiba esse número no console.
console.log('QUESTÃO 13');
let numeroAleatorioInt1a1000 = parseInt(Math.random() * 1000 + 1);
console.log(numeroAleatorioInt1a1000);



