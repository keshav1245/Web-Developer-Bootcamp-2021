// clicks
// drags
// drops
// hovers
// scrolls
// form submission
// key presses
// focus/blur
// mouse wheel
// double clicks
// copying
// pasting
// audio start
// screen resize 
// printing 
// etc ...


let but = document.querySelector("#btn")

but.onclick = function(){
    console.log("You Click Me !")
    console.log("Have a Great Day !")
}

but.onmouseenter = function(){
    console.log("Mouse is all overrrrr meeee!!!!")
}


// addEventListenersssssssssssss

let but3 = document.querySelector("#btn__")

but3.addEventListener('click', function(){
    alert("Clicked !")
})

function twist(){
    console.log("TWIST")
}

function shout(){
    console.log("SHOUT")
}
let tas = document.querySelector("#tas")

tas.addEventListener("click", twist, {once : true})
tas.addEventListener("click", shout)

