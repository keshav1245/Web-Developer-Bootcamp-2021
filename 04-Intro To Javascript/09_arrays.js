let colors = ['red', 'yellow', 'green'];
console.log(colors[0])

lottoNums = [1, 3, 5, 7, 9]
console.log(lottoNums[1])

let days = ['Mon', "Tues", "wed"]

red
09_arrays.js: 5 3
days
    (3)["Mon", "Tues", "wed"]0: "Mon"1: "Tues"2: "wed"length: 3__proto__: Array(0)
days.length
3
let litchen = [true, undefined, 12, 9.9, "Keshav]
VM163: 1 Uncaught SyntaxError: Invalid or unexpected token
let litchen = [true, undefined, 12, 9.9, "Keshav"]
undefined
litchen
        (5)[true, undefined, 12, 9.9, "Keshav"]
litchen.length
5
litchen[4]
"Keshav"
litchen[4].length
6
litchen[4][0]
"K"
parseInt(litchen[4][0])
NaN
litchen[0] = false
false
litchen
        (5)[false, undefined, 12, 9.9, "Keshav"]
litchen[7683] = "Tangri"
"Tangri"
litchen.length
7684
litchen
        (7684)[false, undefined, 12, 9.9, "Keshav", empty × 7678, "Tangri"]0: false1: undefined2: 123: 9.94: "Keshav"7683: "Tangri"length: 7684__proto__: Array(0)
litchen[5000]
undefined
litchen
    (7684)[false, undefined, 12, 9.9, "Keshav", empty × 7678, "Tangri"]

arrmain = []
[]
arrmain.push(12)
1
arrmain.push(21)
2
arrmain
    (2)[12, 21]
arrmain.push("Keshav")
3
arrmain.push("Tangri")
4
arrmain
    (4)[12, 21, "Keshav", "Tangri"]
arrmain.push("HAHAHHAHAHAHAHAH")
5
arrmain
    (5)[12, 21, "Keshav", "Tangri", "HAHAHHAHAHAHAHAH"]
arrmain.pop()
"HAHAHHAHAHAHAHAH"
arrmain.push("PIKKA", "BILLO", "RAM", "DA")
8
arrmain
    (8)[12, 21, "Keshav", "Tangri", "PIKKA", "BILLO", "RAM", "DA"]
remedItem = arrmain.pop()
"DA"
console.log(remedItem)
VM1136: 1 DA
undefined
litchen.pop()
"Tangri"
litchen.pop()
undefined
litchen.pop()
undefined
litchen
    (7681)[false, undefined, 12, 9.9, "Keshav", empty × 7676]
arrmain.pop()
"RAM"
arrmain.pop()
"BILLO"
arrmain.pop()
"PIKKA"
arrmain.pop()
"Tangri"
arrmain.pop()
"Keshav"
arrmain.pop()
21
arrmain.pop()
12
arrmain.pop()
undefined
arrmain.pop()
undefined
arrmain.pop()
undefined
arrmain
[]

let litchen = [true, undefined, 12, 9.9, "Keshav"]
undefined
let arrmin = ["a", 'b', 'c']
undefined
let arr3 = litchen.concat(arrmin)
undefined
arr3
    (8)[true, undefined, 12, 9.9, "Keshav", "a", "b", "c"]
let arr4 = arrmin.concat(litchen)
undefined
arr4
    (8)["a", "b", "c", true, undefined, 12, 9.9, "Keshav"]
arrmin
    (3)["a", "b", "c"]
BiquadFilterNode
ƒ BiquadFilterNode() { [native code] }
litchen
    (5)[true, undefined, 12, 9.9, "Keshav"]
arr3.includes("xyz")
false
arr3.includes("true")
false
arr3.includes(true)
true
arr3.includes("Keshav")
true
arr3.includes(empty)
VM852: 1 Uncaught ReferenceError: empty is not defined
at<anonymous>: 1: 15
    (anonymous) @VM852: 1
arr3.includes(undefined)
true
arr3.indexOf("Keshav")
4
arr3
    (8)[true, undefined, 12, 9.9, "Keshav", "a", "b", "c"]
arr3.reverse()
    (8)["c", "b", "a", "Keshav", 9.9, 12, undefined, true]
arr3
    (8)["c", "b", "a", "Keshav", 9.9, 12, undefined, true]
arr4.reverse()
    (8)["Keshav", 9.9, 12, undefined, true, "c", "b", "a"]0: "Keshav"1: 9.92: 123: undefined4: true5: "c"6: "b"7: "a"length: 8__proto__: Array(0)
arr3.slice(0, 4)
    (4)["c", "b", "a", "Keshav"]
arr3.slice(2, 4)
    (2)["a", "Keshav"]
arr3.slice(-3)
    (3)[12, undefined, true]
arr3
    (8)["c", "b", "a", "Keshav", 9.9, 12, undefined, true]
arr3.splice(1, "d")
[]
arr3
    (8)["c", "b", "a", "Keshav", 9.9, 12, undefined, true]
arr3.splice(1, 0, "d")
[]
arr3
    (9)["c", "d", "b", "a", "Keshav", 9.9, 12, undefined, true]0: "c"1: "d"2: "b"3: "a"4: "Keshav"5: 9.96: 127: undefined8: truelength: 9__proto__: Array(0)
arr3.splice(7, 1)
[undefined]
arr3
    (8)["c", "d", "b", "a", "Keshav", 9.9, 12, true]
arr3.splice(7, 0, "purple")
[]
arr3
    (9)["c", "d", "b", "a", "Keshav", 9.9, 12, "purple", true]
arr3.splice(7, 2, "violet")
    (2)["purple", true]
arr3
    (8)["c", "d", "b", "a", "Keshav", 9.9, 12, "violet"]
arr3.splice(0, 0, "d")
[]
arr3
    (9)["d", "c", "d", "b", "a", "Keshav", 9.9, 12, "violet"]
arr3.splice(0, 2)
    (2)["d", "c"]
arr3
    (7)["d", "b", "a", "Keshav", 9.9, 12, "violet"]
arr3.splice(0, 1)
["d"]
arr3.unshift(["d", "c"])
7
arr3
    (7)[Array(2), "b", "a", "Keshav", 9.9, 12, "violet"]0: (2)["d", "c"]1: "b"2: "a"3: "Keshav"4: 9.95: 126: "violet"length: 7__proto__: Array(0)
arr3[0][1]
"c"
arr3.splice(0, 1)
[Array(2)]
arr3.unshift("d", "c")
8
arr3
    (8)["d", "c", "b", "a", "Keshav", 9.9, 12, "violet"]
let nums = [1, 5, 2, 7, 8, 7, 0, 12434, 244, 343, 3, 3535, 131]
undefined
nums
    (13)[1, 5, 2, 7, 8, 7, 0, 12434, 244, 343, 3, 3535, 131]
nums.sort()
    (13)[0, 1, 12434, 131, 2, 244, 3, 343, 3535, 5, 7, 7, 8]0: 01: 12: 124343: 1314: 25: 2446: 37: 3438: 35359: 510: 711: 712: 8length: 13__proto__: Array(0)