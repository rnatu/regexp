const { cpfs2 } = require('./base');

// [^] -> Dentro de um conjunto é negação
// ^ -> Começa com
// $ -> Termina com
// m - multiline (checa por linha)

const cpf = '254.224.877-45'
const regexp = /^(\d{3}\.){2}\d{3}\-\d{2}$/g;


const regexp2 = /^(\d{3}\.){2}\d{3}\-\d{2}$/gm;

console.log(cpf.match(regexp))
console.log(cpfs2.match(regexp2))