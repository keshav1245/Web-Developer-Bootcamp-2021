// alert("HI THERE !!!")
// console.warn("UHHHHH!!!!")
// console.error("EHHH EHHH EHHH !!!")

// let num = prompt("Please enter a number")

// num = parseInt(num)
// console.log(num)

let rating = 3

if (rating === 3) {
    console.log("Great App, needs Improvement!")
}


let rn = Math.random();
if (rn < 0.5) {
    console.log("Number is less than 0.5")
    console.log(rn)
}

if (rn >= 0.5) {
    console.log("Number is greater than 0.5")
    console.log(rn)
}

if (rating >= 3) {
    console.log("Good App")
} else if (rating < 3) {
    console.log("Ned Improvemen")
}

let age = 8;

if (age < 5) {
    console.log("You are a child, get into free")
} else if (age < 10) {
    console.log("Pay your bill!!!")
}

let phrase = 'SOMETHING'
if (phrase === 'stop') {
    console.log("red")
} else if (phrase === 'slow') {
    console.log("yellow")
} else if (phrase === 'go') {
    console.log("green")
} else {
    console.log("purple")
}

// Truthy and Falsey

// const uinp = prompt("Enter Something")

if (" ") {
    console.log("Truthy")
} else {
    console.log("Falsy")
}

// Logical Operators



// && || ! and or not

// const password  = prompt("Enter password...");
password = 'TARATRAskvnnr';
if (password.length >= 6 && password.indexOf(" ") === -1) {
    console.log("Valid Password")
} else {
    console.log("Invalid")
}

const mystery = 'Pabcde7'; //CHANGE THIS VALUE TO MAKE THE CONDITIONAL BELOW TRUE
// LEAVE THIS CODE ALONE! (pretty please)
if (mystery[0] === 'P' && mystery.length > 5 && mystery.indexOf('7') !== -1) {
    console.log("YOU GOT IT!!!");
}

1 !== 1 || 10 == 10
true
10 / 2 == 5 || env
true
true || true
true
true || false
true
false || true
true
false || false
false

let age_p = -1;

if (age_p > 0) {
    if ((age_p < 5) || age_p >= 65) {
        console.log("FREEEEE...!!!")
    } else if (age_p < 10) {
        console.log("$10")
    } else if (age_p < 65) {
        console.log("$20")
    }
}else{
    console.log("Enter Correct Age !!")
}

// NOT

! null
true
!undefined
true
!0
true
!""
true
!false
true



// let fname = prompt("Enter First name");
fname = "Keshav Tangri"
if (!fname){
    console.log("No Data entered");
}else{
    console.log(fname);
}

age_p = 8

if (!(age_p>0 && age_p<5 || age_p >=65)){
    console.log("Pay for your ticket!")
}