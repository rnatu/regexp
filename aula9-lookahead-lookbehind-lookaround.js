const { lookahead } = require('./base');


console.log(lookahead)
// console.log(lookahead.match(.+[^in]active$/gim)) 

// % Positive lookahead
// Positive lookahead (Frases que tem active (sem retornar o active na resposta))
// console.log(lookahead.match(/.+(?=[^in]active)/gim))

// Positive lookahead (Frases que tem active (sem retornar o inactive na resposta))
// console.log(lookahead.match(/.+(?=\s+inactive)/gim))

// % Negative lookahead
// Positive lookahead (Frases que NÃO tem active)
// console.log(lookahead.match(/^(?!.+[^in]active).+$/gim))

// Positive lookahead (Frases que NÃO tem inactive)
// console.log(lookahead.match(/^(?!.+inactive).+$/gim))



// % Positive lookbehind
// Positive lookbehind (Frases que começam com ONLINE (sem retornar o online na resposta))
// console.log(lookahead.match(/(?<=ONLINE\s+)\S.*/gim))

// % Negative lookbehind
// Negative lookbehind (Frases que NÃO começam com ONLINE)
// console.log(lookahead.match(/^.+(?<!ONLINE.+)$/gim))

const cpf = `
012.250.796-10
111.111.111-11
147.285.963-10
999.999.999-99
aaa.bbb.ccc-dd
`

console.log(cpf.match(/^(?!^(\d)\1{2}\.\1{3}\.\1{3}\-\1{2}$)(\d{3}\.){2}\d{3}\-\d{2}$/gm))