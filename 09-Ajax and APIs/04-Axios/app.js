//axios is built on top of fetch


// axios.get('https://api.cryptonator.com/api/ticker/btc-usd')
// //resolved promise already have data and that is parsed !!
// .then((res)=>{console.log(res.data)})
// .catch((err)=>{console.log(err)})

const fetchBcoin = async () => {
    try{
        let res = await axios.get('https://api.cryptonator.com/api/ticker/btc-usd')
        console.log(res.data)
    }catch(e){

    }
}
const addNewJoke = async () =>{
    const joke = await getDadJoke()
    let newLI = document.createElement('li')
    newLI.innerText = joke
    document.querySelector("#jokes").appendChild(newLI)
}


let but = document.querySelector('#myJoke');
but.addEventListener('click',addNewJoke)


const getDadJoke = async () => {
    try{
        let headers = {'Accept':"application/json"}
        let res = await axios.get('https://icanhazdadjoke.com/', {headers})
        // console.log(res.data.joke)
        return res.data.joke
    }catch(e){
        console.log("Error : "+e)
    }
}