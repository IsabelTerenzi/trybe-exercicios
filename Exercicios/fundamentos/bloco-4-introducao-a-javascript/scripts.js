// exercicio 1
let a = 2;
let b = 6;
console.log (a + b);
console.log (a - b);
console.log (a * b);
console.log (a / b);
console.log (a % b);

//exercicio 2
const c = 5;
const d = 8;

if (c > d) {
    console.log(c);
}
else {
    console.log(d);
}

//exercicio 3
const e = 9;
const f = 20;
const g = 30;

if (e > f && e > g) {
    console.log(e);
}
else if (f > e && f > g) {
    console.log(f);
}
else {
    console.log(g);
}

//exercicio 4
const h = -10;

if (h > 0) {
    console.log("positive");
}
else if (h < 0) {
    console.log("negative");
}
else {
    console.log("zero");
}

//exercicio 5
const tri1 = 60;
const tri2 = 80;
const tri3 = 40;

if (tri1 + tri2 + tri3 === 180) {
    console.log("true");
}
else if (tri1 + tri2 + tri3 !== 180) {
    console.log("false");
}
else {
    console.log("invalido");
}

//exercicio 6
let movimento = "peao";

switch (movimento) {
    case "cavalo":
        console.log("em L");
        break;

    case "bispo":
        console.log("diagonais");
        break;

    case "peao":
        console.log("uma casa");
        break;

    case "torre":
        console.log("varias casas");
        break;

    default:
        console.log("erro");
}

//exercicio 7
let nota = 90;

if(nota >= 90) {
    console.log("A");
}
else if (nota >= 80) {
    console.log("B");
}
else if (nota >= 70) {
    console.log("C");
}
else if (nota >=60) {
    console.log("D");
}
else if (nota >=50) {
    console.log("E");
}
else if (nota < 0 || nota > 100) {
    console.log("erro");
}
else {
    console.log("F");
}

//exercicio 8
const x = 25;
const y = 35;
const w = 75;

if (x % 2 === 0 || y % 2 === 0 || w % 2 === 0) {
    console.log("true");
}
else {
    console.log("false");
}

//exercicio 9
const p = 25;
const q = 30;
const v = 70;

if (p % 2 !== 0 || q % 2 !== 0 || v % 2 !==0) {
    console.log("true");
}
else {
    console.log("false");
}

//exercicio 10
const custo = 10 + 20/100*10;
const valorVenda = 20;
const lucro = valorVenda - custo;

console.log(lucro*1000);

//exercicio 11
const salarioBruto = 3000;
const aliquota = salarioBruto

if (salarioBruto <= 1556.94) {
    console.log(salarioBruto - 8/100*salarioBruto);
}
else if (salarioBruto >= 1556.95 && salarioBruto <= 2594.92) {
    console.log(salarioBruto - 9/100*salarioBruto);
}
else if (salarioBruto >= 2594.93 && salarioBruto <= 5189.82) {
    console.log(salarioBruto - 11/100*salarioBruto);
}
else {
    console.log(salarioBruto + 570.88);
}





