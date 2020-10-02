// g - global (encontra todas as ocorrencias)
// i - insensitive (tanto maiusculo quanto minusculo)
// () - groups
// | - ou


const { texto } = require('./base');

const regexp1 = /(maria|joão|luiz)(, hoje sua esposa)/gi; 

// % a partir da expressão regular

//% test - expressãoRegular.test(string)
// console.log(regexp1.test(texto))

//% exec - expressãoRegular.test(string)
// console.log(regexp1.exec(texto))
// console.log(regexp1.exec(texto)[0])
// console.log(regexp1.exec(texto).index)

const found = regexp1.exec(texto);
if(found) {
console.log(found[0]);
console.log(found[1]);
console.log(found[2]);
}