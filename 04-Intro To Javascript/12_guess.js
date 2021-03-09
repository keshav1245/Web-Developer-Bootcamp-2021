let max_num = parseInt(prompt("Enter Your Number"))
while (true){

    if (max_num === NaN){
        max_num = parseInt(prompt("Enter Your Number"))
    }else{
        break
    }
}

let target = Math.floor(Math.random() * max_num + 1)

let nog = 0
let guess = parseInt(prompt("Make your Guess : "))

while(true){   
    if (guess === target){
        nog++
        alert(`You Got your Number in ${nog} Guesses`)
        break
    }else if(guess > target){
        nog++
        guess = parseInt(prompt("Too HIGH !, Make your Guess : "))
    }else{
        nog++
        guess = parseInt(prompt("Too LOW !, Make your Guess : "))
    }
}
