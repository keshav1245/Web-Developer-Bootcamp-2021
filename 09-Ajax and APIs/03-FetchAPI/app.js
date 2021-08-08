//fetch resolves the promise as soon as it receives the headers coming from this api
//so it doesnt wait for all the data and body to be returned, only as soon as headers are returned.
// fetch('https://api.cryptonator.com/api/ticker/btc-usd')
// .then((res)=>{
//     console.log("Response waiting to be parsed !")
//     return res.json() // return promise
// })
// .then((data)=>{
//     console.log(data)
// })
// .catch((err)=>{
//     console.log(err)
// })


const fetchBitcoinPrice = async () =>{
    try{
        const res = await fetch('https://api.cryptonator.com/api/ticker/btc-usd')
        let data = await res.json()
        console.log(data)
    }catch(e){
        console.log("ERROR !"+e)
    }
}