                                          // {n, m} -> n é o minimo e o m é o max de vezes
// * (opicionais) 0 ou n    ou o mesmo que-> {0,}
// + (obrigatório) 1 ou n   ou o mesmo que-> {1,}
// ? (opicionais) 0 ou 1    ou o mesmo que-> {0,1}
// \. Caractere de escape

const {texto, arquivos} = require('./base')
// console.log(texto);

// +
// const regexp = /Jo+ão/gi
// console.log(texto.match(regexp))


const regexp2 = /\.(jp|JP)(e|E)?(g|G)|\.png/g
for (const arquivo of arquivos) {
    const valid = arquivo.match(regexp2)

    // if(!valid) continue;

    console.log(valid)
}
