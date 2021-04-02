let banner = document.getElementById('banner')
console.dir(banner)

let allimg = document.getElementsByTagName('img')


for(let img of allimg){
    console.log(img.src)
    // img.src = "https://images.unsplash.com/photo-1563281577-a7be47e20db9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80"
}

let classSquareEle = document.getElementsByClassName('square')
console.log(classSquareEle)

document.querySelector("h1")
document.querySelector("#banner")
document.querySelector(".square")
document.querySelectorAll(".square")
console.log(document.querySelector('a[title="Java"]'))
document.querySelectorAll("p a") 

// classList
// getAttribute()
// setAttribute()
// appendChild()
// append()
// prepend()
// removeChild()
// removeEventListener()
// createElement()

// innerText
// innerContent
// innerHTML
// value
// parentElement
// children
// nextSibling
// previousSibling
// style

let firstH1 = document.querySelector("h1")

let allLinks = document.querySelectorAll('a')

// for (let link of allLinks){
//     link.innerText = "I am a Link!!!"
// }

firstH1.style.fontSize = '50px'; // only have inline styles and not in css file.
firstH1.style.border = "2px solid olive"

for (let link of allLinks){
    link.style.color = '#006c86';
    link.style.textDecorationColor = 'red';
    link.style.textDecorationStyle = 'wavy';
}

console.log(window.getComputedStyle(firstH1))


let firstH2 = document.querySelector("h2")

//firstH2.setAttribute('class','purple')
// //One Way for setting mutiple classes
// let currClass = firstH2.getAttribute('class')
// firstH2.setAttribute('class',`${currClass} border`)

firstH2.classList.add('purple')
firstH2.classList.add('border')
firstH2.classList.remove('border')
console.log(firstH2.classList.contains('purple'))

console.log(firstH2.classList.toggle('purple'))


let bold = document.querySelector('b')
bold.parentElement.parentElement.parentElement

bold.parentElement.childElementCount
bold.parentElement.children // Returns HTML Collection


let newImg = document.createElement('img')
newImg.classList.add('square')
newImg.src = 'https://images.unsplash.com/photo-1617289749213-c2a7b44f6523?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1014&q=80'

document.body.appendChild(newImg)
// document.body.prepend(newImg)

let newH2 = document.createElement('h2')
newH2.append("Are Adorable Chickens")

firstH1.insertAdjacentElement('afterend', newH2)