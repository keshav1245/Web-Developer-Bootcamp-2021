function changeColor(){
    red = Math.floor(Math.random() * 255)
    green = Math.floor(Math.random() * 255)
    blue = Math.floor(Math.random() * 255)

    this.style.backgroundColor = `rgb(${red},${green},${blue})`
    // heading.innerText = `rgb(${red},${green},${blue})`
}

let buts = document.querySelectorAll('button');

for (let but of buts){
    but.addEventListener('click',changeColor)
}