const bcrypt = require('bcrypt');

const hashPassword = async(pw) => {

    const salt = await bcrypt.genSalt(10)
    const pass = await bcrypt.hash(pw,salt)
    console.log(salt)
    console.log(pass)
}

const login = async(pw, hashPass) =>{
    const result = await bcrypt.compare(pw,hashPass)
    if(result){
        console.log("Logged In")
    }else{
        console.log("Logged In failed")
    }
}

// hashPassword("Keshav@1245")

login("Keshav@1245", "$2b$10$xVZN/tI7B0s6umYr3Jkiq.HWzAoe3UUQK8oPjVkqAj4IEXxdgsMxS")