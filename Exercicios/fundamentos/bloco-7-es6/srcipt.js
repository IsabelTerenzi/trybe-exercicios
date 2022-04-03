const ifScope = "Não devo ser utilizada fora do meu escopo (if)";
const elseScope = "Não devo ser utilizada fora do meu escopo (else)";
const testingScope = (escopo) =>
  escopo === true
    ? `${ifScope} ótimo, fui utilizada no escopo!`
    : `${elseScope}`;

//console.log(testingScope(true));
const oddsAndEvens = (array) => `Os números ${array.sort()} se encontram ordenados em forma crescente!`;
//console.log(oddsAndEvens([13, 3, 4, 10, 7, 2]));

const fatorial = (number) => (number > 1 ? number * fatorial(number-1) : 1); 
//console.log(fatorial(5));

