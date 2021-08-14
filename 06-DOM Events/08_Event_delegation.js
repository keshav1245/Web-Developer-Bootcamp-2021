const ourUL = document.querySelector("#tweets")

ourUL.addEventListener('click', function(evt){
    console.log(evt)
    evt.target.parentElement.remove()
})


let tform = document.querySelector('#tweetForm')

tform.addEventListener('submit', function(evt){
    console.log("SUBMITTED !")
    evt.preventDefault()

    let newLi = document.createElement("li")
    let newH3 = document.createElement('h3')
    let newP = document.createElement('p')


    newH3.innerText = tform.elements.username.value
    newP.innerText = tform.elements.comment.value

    newLi.appendChild(newH3)
    newLi.appendChild(newP)
    ourUL.appendChild(newLi)

})

