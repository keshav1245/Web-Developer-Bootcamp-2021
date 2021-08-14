const math = require('./math')
//When we create that file, the contents are not automatically available everywhere when we require the file
// unless we explicitly say in math file what we want to export
console.log(math)

console.log(math.square(9))


const shelters = require('./shelter')
console.log(shelters)