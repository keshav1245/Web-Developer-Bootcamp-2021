let heading  = document.querySelector("h1")
let but = document.querySelector("button")


function changeColor(){
    red = Math.floor(Math.random() * 255)
    green = Math.floor(Math.random() * 255)
    blue = Math.floor(Math.random() * 255)

    document.body.style.backgroundColor = `rgb(${red},${green},${blue})`
    heading.innerText = `rgb(${red},${green},${blue})`
}

but.addEventListener('click', changeColor)