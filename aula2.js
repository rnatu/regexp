
const {texto} = require('./base')
console.log(texto);

const regExp1 = /João|maria/gi;
const regex2 = /[A-Z]/g


// % a partir da string

// % match - string.método(Texto)
// console.log(texto.match(regex2))
// console.log(texto.match(regExp1))

// % replace - string.método(Texto)
// console.log(texto.replace(/(João|Maria)/gi, '<strong>$1</strong>'))
// console.log(texto.replace(/(João|Maria)/gi, function(input){
//     return '######## ' + input.toUpperCase() + ' #######';
// }))

