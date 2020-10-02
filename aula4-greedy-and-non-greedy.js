
const {html} = require('./base')
console.log(html);

const regexp = /<.+>.+<\/.+>/g //greedy

const regexp2 = /<.+?>.+?<\/.+?>/g //non-greedy


console.log(html.match(regexp2))