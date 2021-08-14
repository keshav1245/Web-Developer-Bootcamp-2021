let prev_item = ""
const item_bag = []
while(true){
    let cmd  = prompt("Enter your Choice");
    cmd = cmd.trim()
    if (cmd === "new"){
        let item = prompt("Add your item")
        item_bag.push(item)
        console.log(`${item} added to list`)
    }else if(cmd === "list"){
        console.log("*********")
        for (let i = 0; i < item_bag.length ; i++){
            console.log(`${i}: ${item_bag[i]}`)
        }
        console.log("*********")
    }else if(cmd === "delete"){
        let index = parseInt(prompt("Enter index to del"))
        item_bag.splice(index,1)
    }else if(cmd === "quit"){
        console.log("OK, YOU QUIT THE APP")
        break
    }
}