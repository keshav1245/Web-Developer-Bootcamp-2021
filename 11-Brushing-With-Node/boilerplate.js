const fs = require ('fs')

//async way
// fs.mkdir('testing',{recursive :true},(err)=>{
//     console.log('IN CALLBACK')
//     if(err) throw err;
// })

// fs.mkdirSync('testingSync') 
// Synchronous, We dont have to pass a callback in this case

// console.log("HELLO")

const folderName = process.argv[2] || "Project"
try{

    fs.mkdirSync(folderName)
    fs.writeFileSync(`${folderName}/index.html`)
    fs.writeFileSync(`${folderName}/app.js`)
    fs.writeFileSync(`${folderName}/styles.css`)

} catch(e){
    console.log('Error : '+e)
}