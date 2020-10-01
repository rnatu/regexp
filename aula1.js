// g - global (encontra todas as ocorrencias)
// i - insensitive (tanto maiusculo quanto minusculo)
// () - groups
// | - ou


const { texto } = require('./base');

const regExp1 = /(maria|joão|luiz)(, hoje sua esposa)/gi; 

//% test
// console.log(regExp1.test(texto))

//% exec
// console.log(regExp1.exec(texto))
// console.log(regExp1.exec(texto)[0])
// console.log(regExp1.exec(texto).index)

const found = regExp1.exec(texto);
if(found) {
console.log(found[0]);
console.log(found[1]);
console.log(found[2]);
}