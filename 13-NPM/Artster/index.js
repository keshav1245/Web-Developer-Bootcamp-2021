const figlet = require('figlet')
const colors = require('colors')

figlet('Zukayu !!', (err, data)=>{
    if(err){
        console.log('Something went Wrong...')
        console.dir(err)
        return;
    }
    console.log(data.white)
})