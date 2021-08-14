console.log('Hello Args file')
const args = process.argv.slice(2)

for (let arg of args){
    console.log(arg)
}