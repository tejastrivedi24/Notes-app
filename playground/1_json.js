const fs=require('fs')
const book={
    title:'Ego is the enemy',
    author:'Ryan Holiday'
}

const bookJSON=JSON.stringify(book)
console.log(bookJSON)
parsedData=JSON.parse(bookJSON)
console.log(parsedData.author)

const abc=fs.readFileSync('1-json.json')
abcFin=abc.toString()
abcParse=JSON.parse(abcFin)
abcParse.name="Tejas"
abcParse.age="22"
fs.writeFileSync('1-json.json',JSON.stringify(abcParse))
console.log(abcFin)