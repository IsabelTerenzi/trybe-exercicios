//exercício 1 crie um algoritmo que retorne o fatorial de 10
let fatorial = 1;

for (let i=1; i <=10; i += 1) {
    fatorial = fatorial * i;
}
console.log(fatorial);

//exercicio 2 desenvolva um algoritmo que é capaz de inverter uma palavra.
let word = 'tryber';
let newWord = '';

for (let z = word.length -1; z >= 0; z -=1) {
    newWord += word[z];
}
console.log(newWord);

//exercicio 3 escreva dois algoritmos: um que retorne a maior palavra deste array e outro que retorne a menor.
let array = ['java', 'javascript', 'phyton', 'html', 'css'];

let maiorPalavra = '';
let menorPalavra = '';

for (let x = 0; x < array.length; x +=1) {
    if (maiorPalavra < array[x]) {
        maiorPalavra = array[x];
    }
}
console.log(maiorPalavra);

//exercicio 4 escreva um algoritmo que retorne o maior número primo entre 0 e 50
let numerosPrimos = 0;
let maiorPrimo = 0;

for (w = 0; w <= 50; w += 1) {
    if (numeroPrimos = numerosPrimos % 1 === 0 && numerosPrimos % 0 === 0){

    }
}