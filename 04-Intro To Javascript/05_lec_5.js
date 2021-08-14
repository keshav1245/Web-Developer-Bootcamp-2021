VM1283: 1 Console was cleared
undefined
let username = "Zukayu"
undefined
username
"Zukayu"
"aenvkvasnkjnlkaw vkjw evklhaw rlkhkh wrwkjg k.rgk.jwr g.knw rgkw wrrvk"
"aenvkvasnkjnlkaw vkjw evklhaw rlkhkh wrwkjg k.rgk.jwr g.knw rgkw wrrvk"
"'HELLO'"
"'HELLO'"
" "GO AWAY!!!" "
VM1406: 1 Uncaught SyntaxError: Unexpected identifier
" \"GO AWAY!!!\" "
" "GO AWAY!!!" "
let myString = "Hello World !"
undefined
myString["length"]]
VM1577: 1 Uncaught SyntaxError: Unexpected token ']'
myString
"Hello World !"
myString[0]
"H"
myString[1]
"e"
myString[2]
"l"
myString[3]
"l"
myString[4]
"o"
myString.length
13
myString.anchor
ƒ anchor() { [native code] }
myString.big
ƒ big() { [native code] }
myString.indexOf("l")
2
1 + "HELLO"
"1HELLO"


FullName_Upper = FullName.toUpperCase()
"KESHAV TANGRI"
testTrim = "               SPACES    SPACES             "
"               SPACES    SPACES             "
testTrim.trim()
"SPACES    SPACES"
testTrim.trim().toLowerCase()
"spaces    spaces"
FullName.indexOf("a")
4
FullName.lastIndexOf("a")
8
FullName.indexOf("z")
    - 1
FullName.indexOf("TANG")
    - 1
FullName.indexOf("T")
7
FullName
"Keshav Tangri"
FullName.indexOf('Tan')
7
// SLICE
undefined
FullName.slice(0, 6)
"Keshav"
FullName.slice(-6)
"Tangri"
FullName.replaceAll('a', 'A')
"KeshAv TAngri"
FullName.repeat(10)
"Keshav TangriKeshav TangriKeshav TangriKeshav TangriKeshav TangriKeshav TangriKeshav TangriKeshav TangriKeshav TangriKeshav Tangri"

// STRING TEMPLATE LITERALS
undefined
let product = "La'pinoz Pizza"
undefined
price = '719'
"719"
price = 719
719
let qty = 8;
undefined
"You bought "+qty+" " + product + ". Total is : " + price *qty 
"You bought 8 La'pinoz Pizza. Total is : 5752"
template = `You Bought ${qty} ${product}. Total is : ${price * qty}`
"You Bought 8 La'pinoz Pizza. Total is : 5752"
qty = 1
1
template = `You Bought ${qty} ${product}. Total is : ${price * qty}`
"You Bought 1 La'pinoz Pizza. Total is : 719"
qty = 8
8
let product = "Mangoes"
undefined
template = `You Bought ${qty} ${product}. Total is : ${price * qty}`
"You Bought 8 Mangoes. Total is : 5752"