
const {html} = require('./base')
console.log(html);

const regex = /<.+>.+<\/.+>/g //greedy

const regex2 = /<.+?>.+?<\/.+?>/g //non-greedy


console.log(html.match(regex2))