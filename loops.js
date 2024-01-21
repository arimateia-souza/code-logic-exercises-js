/*Desafios*/
// 1 - Crie um contador que comece em 1 e vá até 10 usando um loop while. Mostre cada número.
let contador = 1; 
while (contador <= 10) {
    console.log('contador é', contador);
    //alert(contador);
    contador++;
}
// 2 - Crie um contador que começa em 10 e vá até 0 usando um loop while. Mostre cada número.
contador = 10;
console.log('questao 2');
while (contador >= 0) {
    console.log('contador é', contador);
    //alert(contador);
    contador--;
}
// 3 - Crie um programa de contagem regressiva. Peça um número e conte deste número até 0, usando um loop while no console do navegador.
console.log('questao 3');
contador = 0;
contador = parseInt(prompt('digite um numero para contagem REGRESSIVA'), 10);
while (contador >= 0) {
    console.log(typeof contador, contador)
    //console.log('contador é', contador);
    //alert(contador);
    contador--;
}
// 4 - Crie um programa de contagem progressiva. Peça um número e conte de 0 até esse número, usando um loop while no console do navegador.
console.log('questao 4');
numero = parseInt(prompt('digite um numero para contagem PROGRESSIVA'));
contador = 0;
while (contador <= numero) { 

    console.log(typeof contador, contador)
    //console.log('contador é', contador);
    //alert(contador);
    contador++;
}



