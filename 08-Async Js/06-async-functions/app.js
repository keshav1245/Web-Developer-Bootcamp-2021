//Async returns a promise !!

//If the async function returns a value,
//then the promise is resolved with that value 
// async function hello(){
//     throw new Error("Ohh No!")
//     return "Hello There !"
// }

// hello()
// .then((data)=>{console.log(`RESOLVED! with : ${data}`)})
// .catch((err)=>{console.log('ERROR!!'); console.error(err)})



const login = async (username, password) => {
    if (!username || !password ){
        throw "Missing Credentials !"
    }

    if (password === 'corgifeetarecute'){
        return "Welcome !"
    }

    throw 'Invalid Password !'
} 

login('jkfnlg','corgifeetarecute')
.then((msg)=>{console.log(`Logged In, ${msg}`)})
.catch((err)=>{console.error(err)})

//In Async functions, if we return a value, promise is resolved !
// If we throw an error, promise will be rejected !

const delayedColor = (color, delay) =>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log(color)
            document.body.style.backgroundColor = color;
            resolve()
        }, delay)
    })
}

async function rainbow(){
    await delayedColor('red', 0)
    await delayedColor('orange', 1000)
    await delayedColor('yellow', 1000)
    await delayedColor('green', 1000)
    await delayedColor('blue', 1000)
    await delayedColor('violet', 1000)
    await delayedColor('purple', 1000)
    return "All done !"
}

// rainbow().then(() => console.log('END OF RAINBOW !!!'))

async function printRainbow(){
    await rainbow()
    console.log('All Done Rainbow !!!!')
}

printRainbow()

const fakeRequestPromise = (url) =>{
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * 4500) + 500;

        setTimeout(() => {
            if(delay > 4000){
                reject('Connection Error :( ')
            }else{
                resolve(`Here is your data from ${url}`)
            }
        },delay)
    })
}

async function makeTwoReqs(){
    try{
        let data1 = await fakeRequestPromise('books/page1')
        console.log(data1)
        let data2 = await fakeRequestPromise('books/page2')
        console.log(data2)
    }catch(e){
        console.error(e)
    }
}