const fakeRequestCallback = (url, success, failure) => {
    const delay = Math.floor(Math.random() * 4500 ) + 500;

    setTimeout(()=>{
        if(delay > 4000){
            failure('Connection TimeOut :( ')
        }else{
            success(`Here is your fake data from ${url}`)
        }
    }, delay)
}

//PROMISES : PENDING, RESOLVED, REJECTED
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



// THE BELOW CODE IS WHAT WE SAY CALLBACK HELL !!!!
// BUT THEN CAME PROMISES !!
// fakeRequestCallback('books.com/page1', (res)=>{
//     console.log('Success Worked !')
//     console.log(res)
//     fakeRequestCallback('books.com/page2', 
//         (res)=>{
//             console.log('It worked Again!');console.log(res)
            
//             fakeRequestCallback('books.com/page3', 
//                 (res)=>{console.log('It worked for the third time');console.log(res)},
//                 (err)=>{console.error('Error in Third Req');console.error(err)}
//             )
        
//         }, 
//         (err)=>{console.error("Second fails");console.error(err)}
        
//     )

// }, (err)=>{
//     console.error('Error')
//     console.error(err)
// })

//PROMISE BASICS (CORE CONCEPTS)
// fakeRequestPromise('maestra.com/api/get/req1').then((res)=>{
//     console.log("RESOLVED !!!");
//     console.log(res)

//     fakeRequestPromise('maestra.com/api/get/req2').then((res)=>{
//         console.log("RESOLVED REQ 2!!!");
//         console.log(res)

//         fakeRequestPromise('maestra.com/api/get/req3').then((res)=>{
//             console.log("RESOLVED REQ 3!!!");
//             console.log(res)
//         }).catch((err)=>{
//             console.log('ERROR REQ 3!!!')
//             console.error(err)
//         })

//     }).catch((err)=>{
//         console.log('ERROR REQ 2!!!')
//         console.error(err)
//     })

// }).catch((err)=>{
//     console.log('ERROR !!!')
//     console.error(err)
// })


//MAGIC OF PROMISES !!!

fakeRequestPromise('api/call/get1')
    .then((res)=>{
        console.log('RESOLVED 1')
        console.log(res)
        return fakeRequestPromise('api/call/get2')
    })
    .then((res)=>{
        console.log('RESOLVED 2')
        console.log(res)
        return fakeRequestPromise('api/call/get3')
    })
    .then((res)=>{
        console.log('RESOLVED 3')
        console.log(res)
    })
    .catch((err)=>{
        console.log("ERROR GENERIC !")
        console.error(err)
    })