// Factory Functions

function hex(r, g, b){
    return "#" + ((1 << 24) + (r<<16) + (g << 8) + b ).toString(16).slice(1);
}

function rgb(r ,g ,b){
    return `rgb(${r}, ${g}, ${b})`
}


// Two functions they are perfect on their own
// but if we want to make a nice object where we can convert back and forth from RGB to HEX
// without having to pass in the numbers each time, We can use a FACTORY FUNCTION
// will will already have hex and rgb methods and will store the values of r, g and b
// as values or properties on the object
// 


function makeColor (r, g, b){
    const color = {}

    color.r = r
    color.g = g
    color.b = b

    color.rgb = function(){
        const {r,g,b} = this // Destructuring
        return `rgb(${r}, ${g}, ${b})`;
    }

    color.hex = function(){
        const {r,g,b} = this;
        return "#" + ((1 << 24) + (r<<16) + (g << 8) + b ).toString(16).slice(1);
    }
    
    return color
}

let fColor = makeColor(255,100,25);


//Shortcomings of Factory Functions

// 1. Whenever a new obj is created, the uniques properties are fine but
//    the functions are recreated for each object.
//    obj1.hex === obj2.hex (It will give false because new copies in separate objs)
//    "hi".slice === "bye".slice (true) Because slice is not defined on every single string
//    The Methods are not defined on individual objects, Instead they are defined on PROTOTYPES
//    Every String gets its built in string methods from one prototype String object



// NEW OPERATOR & CONSTRUCTOR FUNCTIONS: 

function Color(r, g, b){ // this is now constructor function for Color
    this.r = r
    this.g = g
    this.b = b
    // console.log(this)
}
// DONOT USE AERO FUNCTIONS AS THEY PERFORM DIFFERENTLY WITH this KEYWORD
Color.prototype.rgb = function(){
    const {r,g,b} = this // Destructuring
    return `rgb(${r}, ${g}, ${b})`;
}

Color.prototype.rgba = function(a=1){
    const {r,g,b} = this // Destructuring
    return `rgba(${r}, ${g}, ${b}, ${a})`;
}

Color.prototype.hex = function(){
    const {r,g,b} = this;
    return "#" + ((1 << 24) + (r<<16) + (g << 8) + b ).toString(16).slice(1);
}

let color1 = new Color(255,40,100)
let color2 = new Color(0,0,0)

// Creates a blank, plain JavaScript object.
// Adds a property to the new object (__proto__) that links to the constructor function's prototype object
// Note: Properties/objects added to the construction function prototype are therefore accessible to all instances created from the constructor function (using new).

// Binds the newly created object instance as the this context (i.e. all references to this in the constructor function now refer to the object created in the first step).
// Returns this if the function doesn't return an object.

// Now we can add methods not to instances but prototypes