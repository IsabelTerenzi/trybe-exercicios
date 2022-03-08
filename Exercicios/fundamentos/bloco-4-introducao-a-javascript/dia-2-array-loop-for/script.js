let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//exercício 1 percorra o array imprimindo todos os valores nele contidos com a função console.log()
console.log(numbers);

//exercício 2 some todos os valores contidos no array e imprima o resultado
let soma = 0;

for (let i = 0; i < numbers.length; i += 1) {
    soma += numbers[i];
}
console.log(soma); //fora do for, porque senão ele fica percorrendo o array todo.

//exercício 3 calcule e imprima a média aritmética dos valores contidos no array
let somaAritmetica = 0

for (let i = 0; i < numbers.length; i += 1) {
    somaAritmetica = soma / numbers.length;
}
console.log(somaAritmetica);

//exercício 4 caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20"
if (somaAritmetica > 20) {
    console.log('valor maior que 20');
}
else {
    console.log('valor menos ou igual a 20');
}

//exercício 5 Utilizando for , descubra qual o maior valor contido no array e imprima-o
let maiorValor = numbers[0];

for (let i = 0; i < numbers.length; i += 1) {
    if (maiorValor < numbers[i]) {
        maiorValor = numbers[i];
    }
}
console.log(maiorValor);

//exercício 6 Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado
let valoresImpares = 0;

for (let i = 0; i < numbers.length; i += 1) {
    if (valoresImpares = (numbers[i] % 2 !== 0)) {
        valoresImpares = numbers[i];
        console.log(valoresImpares);
    }  
    else {
        console.log ("nenhum valor ímpar encontrado")
    }
}


//exercício 7 Utilizando for , descubra qual o menor valor contido no array e imprima-o
let menorValor = numbers[0];

for (let i = 0; i < numbers.length; i += 1) {
    if (menorValor > numbers[i]) {
        menorValor = numbers[i];
    }
}
console.log(menorValor);

//exercício 8 Utilizando for , crie um array que vá de 1 até 25 e imprima o resultado
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];

for (let x = 0; x < numeros.length; x += 1) {
}
console.log(numeros);

//exercício 9 Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2
let divisao = 0
for (let x = 0; x < numeros.length; x += 1) {
    divisao = numeros[x] / 2;
    console.log(divisao);
}