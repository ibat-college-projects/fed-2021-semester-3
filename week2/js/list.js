//alert('I am list js')


// Global variable
let dwarves = []  // zero indexed array - starts at 0 so last item is 1 less than length

//console.log({dwarves})
function SetupDwarves(incomingDwarves) {

    dwarves = incomingDwarves;
    dwarves.push("Happy");
    dwarves.push("Grumpy");
    dwarves.push("Bashful");
    dwarves.unshift("Doc")
}

function ListDwarves() {

    let countDwarves = dwarves.length
    for (let i = 0; i < countDwarves; i++) {
        console.log(`The dwarf at position ${i} is called ${dwarves[i]}`)
    }
}

function PopDwarves() {

    while (dwarves.length > 0) {
        let poppedDwarf = dwarves.pop();
        console.log(`${poppedDwarf} just popped off`)
    }
}

SetupDwarves( ["Sleepy", "Dopey", "Sneezy"]);
ListDwarves();
PopDwarves();
SetupDwarves()


console.log(`Length of dwarves is ${dwarves.length}`);