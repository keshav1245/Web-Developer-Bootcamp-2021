const target = document.querySelector('#target')
const score_pl1 = document.querySelector('#score_pl1')
const score_pl2 = document.querySelector('#score_pl2')
const increment_pl1 = document.querySelector('#increment_pl1')
const increment_pl2 = document.querySelector('#increment_pl2')
const reset = document.querySelector('#reset')

let targetValue = parseInt(target.options.item(target.options.selectedIndex).value)

target.addEventListener('change',function(){
    targetValue = parseInt(target.options.item(target.options.selectedIndex).value)
})


function butstate(bool){
    increment_pl1.disabled = bool
    increment_pl2.disabled = bool    
}

function setClass(forpl1, forpl2){
    score_pl1.classList.add(forpl1)
    score_pl2.classList.add(forpl2)
}

function clearScore(){
    score_pl1.setAttribute('class',"")
    score_pl2.setAttribute('class',"")
    score_pl1.innerHTML = '0'
    score_pl2.innerHTML = '0'
}

function increment(element){
    let currentVal = parseInt(element.innerText)
    if (currentVal + 1 !== targetValue){
        element.innerText = currentVal + 1
    }else{
        element.innerText = currentVal + 1
        butstate(true)
        if (score_pl1.innerText == targetValue){
            setClass('winner', 'loser')
        }else{
            setClass('loser', 'winner')
        }
    }
}

increment_pl1.addEventListener('click', function(){
    increment(score_pl1)
})

increment_pl2.addEventListener('click', function(){
    increment(score_pl2)
})

reset.addEventListener('click', function(){
    butstate(false)
    clearScore()
})