// This means that at any given point in time, 
// single JS thread is running at most one line of
// JS Code

console.log("Sending Req to Server!")

setTimeout(() => {
    console.log("DATA DATA INSIDE TIME OUT !!!")
},3000);


console.log(" OUTSIDE TIMEOUT !!!")