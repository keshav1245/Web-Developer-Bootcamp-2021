const btn = document.querySelector('#divbtn')
const divi = document.querySelector('#container')

function changeColor(){
    red = Math.floor(Math.random() * 255)
    green = Math.floor(Math.random() * 255)
    blue = Math.floor(Math.random() * 255)

    return `rgb(${red},${green},${blue})`
    // heading.innerText = `rgb(${red},${green},${blue})`
}


btn.addEventListener('click', function(evt){
    divi.style.backgroundColor = changeColor()
    evt.stopPropagation()
})

divi.addEventListener('click', function(){
    divi.classList.toggle('hide')
})