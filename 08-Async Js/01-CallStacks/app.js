// Call Stack is the mechanism that JS interpreter uses
// to keep track of its place in a script that calls multiple 
// functions.


const multiply = (x,y) => x * y;

const square = (x) => multiply(x,x)

function isRightTriangle(a, b, c) {
    return square(a) + square(b) === square(c)
}

//loupe -> website to see callback stack 