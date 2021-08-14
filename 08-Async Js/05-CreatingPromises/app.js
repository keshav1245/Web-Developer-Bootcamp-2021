const fakeRequest = (url)=>{
    return new Promise((resolve, reject) => {

        const delay = Math.random()
        setTimeout(()=>{
            
            if(delay < 0.7){
                resolve('Resolved !')
            }
            reject('Error !!')
        }, 1000)

    })
}

fakeRequest('/getData/1').then((res)=>{
    console.log('RESOLVED !!')
    console.log(res)
})
.catch((err)=>{
    console.log('ERROR !!')
    console.error(err)
})

// let delayedColor = (newColor, delay, doNext) => {
//     setTimeout(()=>{
//         document.body.style.backgroundColor = newColor;
//         doNext && doNext();
//     },delay)

// }



// delayedColor('red', 0, 
// () => delayedColor('orange',1000, 
// () => delayedColor('yellow', 1000, 
// () => delayedColor('green', 1000, 
// () => delayedColor('blue',1000, 
// () => delayedColor('violet',1000, 
// () => delayedColor('purple',1000, ()=>{}) ))))));

const delayedColor = (color, delay) =>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log(color)
            document.body.style.backgroundColor = color;
            resolve()
        }, delay)
    })
}

delayedColor('red', 0)
.then(()=>{return delayedColor('orange',1000)})
.then(()=>{return delayedColor('yellow',1000)})
.then(()=>{return delayedColor('green',1000)})
.then(()=>{return delayedColor('blue',1000)})
.then(()=>{return delayedColor('violet',1000)})
.then(()=>{return delayedColor('purple',1000)})