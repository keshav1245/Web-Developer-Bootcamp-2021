const franc = require('franc')
const langs = require('langs')
const colors = require('colors')
const inp = process.argv[2]
let iso = franc(inp)

if(iso === 'und'){
    console.log('Sorry Coulnt figure out the language'.red)
    return    
}

console.log(langs.where("3",iso)['name'].green)

