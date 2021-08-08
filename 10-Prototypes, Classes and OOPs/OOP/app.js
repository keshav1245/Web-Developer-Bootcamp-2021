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