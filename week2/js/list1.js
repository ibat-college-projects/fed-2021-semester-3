//alert('I am list js')

let dwarf1 = "Sleepy"
let dwarf2 = "Dopey"
let dwarf3 = "Sneezy"
let dwarf4 = "Grumpy"
let dwarf5 = "Happy"
let dwarf6 = "Bashful"
let dwarf7 = "Doc"

let dwarves = ["Sleepy", "Dopey", "Sneezy"]  // zero indexed array - starts at 0 so last item is 1 less than length

dwarves[3] = "Grumpy"; // adds grumpy to the end of list

dwarves.push("Happy");
dwarves.push("Bashful");
console.log(dwarves.join())
dwarves.pop();// removes from the end
console.log(dwarves.join())

dwarves.shift();// removes from start
console.log(dwarves.join())
dwarves.unshift("Doc")
console.log(dwarves.join())

dwarves.splice(1, 0, 'Bashful')
console.log(dwarves.join())

//console.log({dwarves})




console.log(dwarves[0])
console.log(dwarves[1])
console.log(dwarves[2])
console.log(dwarves[3])

let  countDwarves = dwarves.length
for (let i = 0; i < countDwarves; i++) {

    console.log(`The dwarf at position ${i} is called ${dwarves[i]}`)

}


while (dwarves.length > 0 ) {

    let poppedDwarf = dwarves.pop();
    console.log(`${poppedDwarf} just popped off`)

}

console.log(`Length of dwarves is ${dwarves.length}`);