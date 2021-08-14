for (let i = 25; i >= 0; i = i - 5) {
    console.log(i)
}

ani = [
    "Aardvark",
    "Albatross",
    "Alligator",
    "Alpaca",
    "Ant",
    "Anteater",
    "Antelope",
    "Ape",
    "Armadillo",
    "Donkey",
    "Baboon",
    "Badger",
    "Barracuda",
    "Bat",
    "Bear",
    "Beaver",
    "Bee",
    "Bison",
    "Boar",
    "Buffalo",
    "Butterfly",
    "Camel",
    "Capybara",
    "Caribou",
    "Cassowary",
    "Cat",
    "Caterpillar",
    "Cattle",
    "Chamois",
    "Cheetah",
    "Chicken",
    "Chimpanzee",
    "Chinchilla",
    "Chough",
    "Clam",
    "Cobra",
    "Cockroach",
    "Cod",
    "Cormorant",
    "Coyote",
    "Crab",
    "Crane",
    "Crocodile",
    "Crow",
    "Curlew",
    "Deer",
    "Dinosaur",
    "Dog",
    "Dogfish",
    "Dolphin",
    "Dotterel",
    "Dove",
    "Dragonfly",
    "Duck",
    "Dugong",
    "Dunlin",
    "Eagle",
    "Echidna",
    "Eel",
    "Eland",
    "Elephant",
    "Elk",
    "Emu",
    "Falcon",
    "Ferret",
    "Finch",
    "Fish",
    "Flamingo",
    "Fly",
    "Fox",
    "Frog",
    "Gaur",
    "Gazelle",
    "Gerbil",
    "Giraffe",
    "Gnat",
    "Gnu",
    "Goat",
    "Goldfinch",
    "Goldfish",
    "Goose",
    "Gorilla",
    "Goshawk",
    "Grasshopper",
    "Grouse",
    "Guanaco",
    "Gull",
    "Hamster",
    "Hare",
    "Hawk",
    "Hedgehog",
    "Heron",
    "Herring",
    "Hippopotamus",
    "Hornet",
    "Horse",
    "Human",
    "Hummingbird",
    "Hyena",
    "Ibex",
    "Ibis",
    "Jackal",
    "Jaguar",
    "Jay",
    "Jellyfish",
    "Kangaroo",
    "Kingfisher",
    "Koala",
    "Kookabura",
    "Kouprey",
    "Kudu",
    "Lapwing",
    "Lark",
    "Lemur",
    "Leopard",
    "Lion",
    "Llama",
    "Lobster",
    "Locust",
    "Loris",
    "Louse",
    "Lyrebird",
    "Magpie",
    "Mallard",
    "Manatee",
    "Mandrill",
    "Mantis",
    "Marten",
    "Meerkat",
    "Mink",
    "Mole",
    "Mongoose",
    "Monkey",
    "Moose",
    "Mosquito",
    "Mouse",
    "Mule",
    "Narwhal",
    "Newt",
    "Nightingale",
    "Octopus",
    "Okapi",
    "Opossum",
    "Oryx",
    "Ostrich",
    "Otter",
    "Owl",
    "Oyster",
    "Panther",
    "Parrot",
    "Partridge",
    "Peafowl",
    "Pelican",
    "Penguin",
    "Pheasant",
    "Pig",
    "Pigeon",
    "Pony",
    "Porcupine",
    "Porpoise",
    "Quail",
    "Quelea",
    "Quetzal",
    "Rabbit",
    "Raccoon",
    "Rail",
    "Ram",
    "Rat",
    "Raven",
    "Red deer",
    "Red panda",
    "Reindeer",
    "Rhinoceros",
    "Rook",
    "Salamander",
    "Salmon",
    "Sand Dollar",
    "Sandpiper",
    "Sardine",
    "Scorpion",
    "Seahorse",
    "Seal",
    "Shark",
    "Sheep",
    "Shrew",
    "Skunk",
    "Snail",
    "Snake",
    "Sparrow",
    "Spider",
    "Spoonbill",
    "Squid",
    "Squirrel",
    "Starling",
    "Stingray",
    "Stinkbug",
    "Stork",
    "Swallow",
    "Swan",
    "Tapir",
    "Tarsier",
    "Termite",
    "Tiger",
    "Toad",
    "Trout",
    "Turkey",
    "Turtle",
    "Viper",
    "Vulture",
    "Wallaby",
    "Walrus",
    "Wasp",
    "Weasel",
    "Whale",
    "Wildcat",
    "Wolf",
    "Wolverine",
    "Wombat",
    "Woodcock",
    "Woodpecker",
    "Worm",
    "Wren",
    "Yak",
    "Zebra"
]

for (let i = 0; i < ani.length; i++) {
    console.log(ani[i])
}


for (let i = ani.length - 1; i >= 0; i--) {
    console.log(ani[i])
}


anim = ""
for (let i = 0; i < ani.length; i++) {
    anim = anim + ani[i] + " "
}

const people = ["Scooby", "Velma", "Daphne", "Shaggy", "Fred"];

for (let i = 0; i < people.length; i++) {
    console.log(people[i].toUpperCase())
}

for (let i =0 ; i < 10;i++){
    console.log("I is : "+i)
    for (let j = 1; j <=3;j++){
        console.log("J is : "+j)
    }
}
for (let i =0 ; i < 10;i++){
    console.log(`i is ${i}`)
    for (let j = 1; j <=3;j++){
        console.log(`j is ${j}`)
    }
}
// WHILE LOOP
index = 0
while(index < ani.length){
    console.log(`${index} : ${ani[index]}`)
    index++
}


const scores ={
    ABC:50,
    DEF:60,
    GHI:70,
    JKL:80,
    MNO:90,
    PQR:100
}
undefined
for (key in scores){
    console.log(key)
}
VM348:2 ABC
VM348:2 DEF
VM348:2 GHI
VM348:2 JKL
VM348:2 MNO
VM348:2 PQR
undefined
for (key in scores){
    console.log(`${key} scored ${scores[key]}`)
}
VM402:2 ABC scored 50
VM402:2 DEF scored 60
VM402:2 GHI scored 70
VM402:2 JKL scored 80
VM402:2 MNO scored 90
VM402:2 PQR scored 100
undefined


Object.keys(scores)
(6) ["ABC", "DEF", "GHI", "JKL", "MNO", "PQR"]
Object.values(scores)
(6) [50, 60, 70, 80, 90, 100]
Object.entries(scores)
(6) [Array(2), Array(2), Array(2), Array(2), Array(2), Array(2)]0: (2) ["ABC", 50]1: (2) ["DEF", 60]2: (2) ["GHI", 70]3: (2) ["JKL", 80]4: (2) ["MNO", 90]5: (2) ["PQR", 100]length: 6__proto__: Array(0)
for (entry of Object.entries(scores)){
    console.log(entry[0] + ":" + entry[1])
}

ABC:50
DEF:60
GHI:70
JKL:80
MNO:90

