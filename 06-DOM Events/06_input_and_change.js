const inp = document.querySelector('input')

// inp.addEventListener('change', function(evt){
//     console.log(evt)
// })

//change is when we leave the input box !
// Now if we dont want this to happen only when we leave out of the input field, 
// we can use : 

inp.addEventListener('input', function(evt){
    console.log(evt)
})


// Assessment code below

// const inp = document.querySelector('#username')
// const head = document.querySelector('h1')

// inp.addEventListener('input', function(){
//     if (inp.value === ""){
//         head.innerText = 'Enter Your Username'
//     }else{
//         head.innerText = "Welcome, "+inp.value   
//     }
// })