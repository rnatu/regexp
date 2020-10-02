const { alfabeto } = require('./base')
console.log(alfabeto);

// % [abc] -> Conjunto [^] Negação
// console.log(alfabeto.match(/[^abc123]/g))



// % [min-max] -> Range (sempre mandar do menor para o maior)
// % o + aqui age como sequencia, achando 1 ou n sequencias contendo o range

//* range de 0-9
// console.log(alfabeto.match(/[0-9]+/g))
//  ou
// console.log(alfabeto.match(/\d+/g))
// console.log(alfabeto.match(/\D+/g)) // Negação

//* range de a-z A-Z e 0-9
console.log(alfabeto.match(/[a-zA-Z0-9]+/g))
// console.log(alfabeto.match(/[^a-zA-Z0-9]+/g)) // Negação
//  ou
console.log(alfabeto.match(/\w+/g))
// console.log(alfabeto.match(/\W+/g)) // Negação -> tudo que não for letra ou numero nem underline

//* caractere especial (unicode)
// console.log(alfabeto.match(/[\u00A0-\u00BA]+/g))

//* range para encontrar somente os espaços
// console.log(alfabeto.match(/\s+/g))
// console.log(alfabeto.match(/\S+/g)) // Negação

