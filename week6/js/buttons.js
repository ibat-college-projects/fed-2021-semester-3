let counter = 0;
let counterMaxLimit = 20;
let counterMinLimit = -10;

function init() {

    console.log("starting up after load")
    WriteCounter(0)

}

function btnReset() { 
    
   
    counter =0
    WriteCounter(counter)

}


function btnAdd() { 
    
    console.log("Adding a counter")
    counter = ++counter <= counterMaxLimit ? counter : counterMaxLimit;
    //console.log("REducing a counter")
    WriteCounter(counter)

}


function btnMinus() {
    
    console.log("REducing a counter")

    counter = --counter >= counterMinLimit ? counter : counterMinLimit;
    WriteCounter(counter);

}

function WriteCounter(e) {
    console.log(`Writing to ${e}`)
    document.getElementById("counterResult").innerHTML = e;
}