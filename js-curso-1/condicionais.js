/*Desafios*/
// 1 - Pergunte ao usuário qual é o dia da semana. Se a resposta for "Sábado" ou "Domingo", mostre "Bom fim de semana!". Caso contrário, mostre "Boa semana!".
let diaSemana = '';
diaSemana = prompt('Qual o dia da semana?');
console.log(diaSemana);
diaSemana = diaSemana.toLowerCase();
console.log(diaSemana);
if(diaSemana == 'sabado' || diaSemana == 'domingo'){
    alert('Bom final de semana');
}else{
    alert('Boa semana!');
}

// 2 - Verifique se um número digitado pelo usuário é positivo ou negativo. Mostre um alerta informando.
let numero;
numero = prompt('Digite um numero');
if (numero >= 0){
    alert('numero positivo ', numero);
}else{
    alert('numero negativo');
}

// 3 - Crie um sistema de pontuação para um jogo. Se a pontuação for maior ou igual a 100, mostre "Parabéns, você venceu!". Caso contrário, mostre "Tente novamente para ganhar.".
let pontuacao = 100;

/*
if (pontuacao >= 100){
    alert(`Parabéns, você venceu! ${pontuacao}`);
}else{
    alert('Tente novamente para ganhar.');
}*/
//EXEMPLO COM OPERADOR TERNARIO
pontuacao >=100 ? alert(`Parabéns, você venceu! ${pontuacao}`) : alert('Tente novamente para ganhar.');

// 4 - Crie uma mensagem que informa o usuário sobre o saldo da conta, usando uma template string para incluir o valor do saldo.
let saldo = 100; // Exemplo de saldo
alert(`Seu saldo é de R$${saldoConta}.`);

// 5 - Peça ao usuário para inserir seu nome usando prompt. Em seguida, mostre um alerta de boas-vindas usando esse nome.
let nome;
nome = prompt('Qual o seu nome?');
alert(`Bem-vindo, ${nome}`);

