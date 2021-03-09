function rollDie(side = 1){
    return Math.floor(Math.random()* side + 1)
}

function greet(person){

    console.log(`Hi ${person}`)

}

function greet2(person,lname){

    console.log(`Hi ${person} ${lname[0]}`)

}

function rep(str, num){

    console.log(str.repeat(num))

}

// define isSnakeEyes below:
function isSnakeEyes(d1,d2){
    if (d1 === d2 && d1 === 1){
        console.log("Snake Eyes!")
    }else{
        console.log("Not Snake Eyes!")
    }
}

function lastElement(arr){
    if (arr.length !== 0){
        return arr[arr.length-1]
    }else{
        return null
    }
}

// DEFINE YOUR FUNCTION BELOW:
function capitalize(str){
    // f = str[0]
    return str[0].toUpperCase() + str.slice(1)
}

// DEFINE YOUR FUNCTION BELOW:
function returnDay(day){
    
    if (day < 1 || day > 7){
        return null
    }
    
    const dow = [
        "Monday", 
        "Tuesday", 
        "Wednesday", 
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
        ]
        
        return dow[day-1]
    
}