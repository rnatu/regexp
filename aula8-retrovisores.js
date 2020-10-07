const { html2 } = require('./base');

//$1 $2 $3 <- Retrovisores $1 -> \1
//Usados para referenciar um grupo usado em uma expressão
// . não representa quebra de linha
// \s <- espaço
// \S <- não é um espaço
// [\s\S] <- seleciona tudo que houver, com quebra de linha ou não


// console.log(html2)
// console.log(html2.match(/<(\w+)[\s\S]*?>[\s\S]*?<\/\1>/gm))


console.log(html2.replace(/(<(\w+)[\s\S]*?>)([\s\S]*?)(<\/\2>)/gm, '$1 HAHA $3 HAHA $4'))
