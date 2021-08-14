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


// CLASSES -> PRETTIER SYNTAX, SAME FUNCTIONALITY

class newColor {
    constructor(r,g,b, name){//Executes immediately, when a obj is created
        this.r = r
        this.g = g
        this.b = b
        this.name = name
        this.calcHSL()
    }

    greet(){
        return `Hello, I am ${this.name}!`
    }

    innerRGB(){
        const {r,g,b} = this // Destructuring
        return `${r}, ${g}, ${b}`
    }

    rgb(){
        return `rgb(${this.innerRGB()})`;
    }

    rgba(a=1){
        return `rgba(${this.innerRGB()}, ${a})`
    }

    hex(){
        const {r,g,b} = this;
        return "#" + ((1 << 24) + (r<<16) + (g << 8) + b ).toString(16).slice(1);
    }

    fullSaturation(){
        const {h, l} = this;
        return `hsl(${h}, 100%, ${l}%)`;
    }

    opposite(){
        const {h, s, l} = this;
        return `hsl(${(h+180)%360}, ${s}%, ${l}%)`;
    }

    hsl(){
        const {h, s, l} = this;
        return `hsl(${h}, ${s}%, ${l}%)`;
    }

    calcHSL() {
		let { r, g, b } = this;
		// Make r, g, and b fractions of 1
		r /= 255;
		g /= 255;
		b /= 255;

		// Find greatest and smallest channel values
		let cmin = Math.min(r, g, b),
			cmax = Math.max(r, g, b),
			delta = cmax - cmin,
			h = 0,
			s = 0,
			l = 0;
		if (delta == 0) h = 0;
		else if (cmax == r)
			// Red is max
			h = ((g - b) / delta) % 6;
		else if (cmax == g)
			// Green is max
			h = (b - r) / delta + 2;
		else
			// Blue is max
			h = (r - g) / delta + 4;

		h = Math.round(h * 60);

		// Make negative hues positive behind 360°
		if (h < 0) h += 360;
		// Calculate lightness
		l = (cmax + cmin) / 2;

		// Calculate saturation
		s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));

		// Multiply l and s by 100
		s = +(s * 100).toFixed(1);
		l = +(l * 100).toFixed(1);
		this.h = h;
		this.s = s;
		this.l = l;
	}


}
let col1  = new newColor(255,40,100, 'Smooth Pink')
let col2  = new newColor(255,255,255, 'White')
let col3  = new newColor(200,40,100, 'Maroom')


// Extends and Super


class Pet{

    constructor(name, age){
        this.name = name
        this.age = age
    }

    eat(){
        return `${this.name} is eating...`
    }

}

class Cat extends Pet{
    
    constructor(name, age, breed = 'stray'){
        super(name, age)
        this.breed = breed;
    }

    meow(){
        return "MEAAOOW"
    }
}

class Dog extends Pet{
    

    bark(){
        return "WOOFF..."
    }

    eat(){
        return `${this.name} scarfs his food..`
    }

}

