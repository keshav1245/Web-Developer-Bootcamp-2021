document.querySelector("button").addEventListener('click',function(evt){
    console.log(evt)
}) 

let inp = document.querySelector('input');

inp.addEventListener('keydown', function(evt){
    console.log(evt)
})

// inp.addEventListener('keyup', function(evt){
//     console.log("Key Up")
// })