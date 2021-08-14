const add = (x,y) => x+y;

const PI = 3.14159;

const square = (x) => x*x;

// module.exports.add = add
// module.exports.PI = PI
// module.exports.square = square

// OTHER WAY

const math = {
    add : add,
    PI : PI, 
    square : square
}

module.exports = math


// Thirdly we can directly add the functions or content to module exports
// Eg module.exports.add = (x,y) => x+y;