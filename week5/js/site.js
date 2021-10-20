function init() {

    console.log("Loading after document has loaded");
}

function btnSave() {

    localStorage.setItem("today", "Wednesday");

    let favouriteFlavour = document.getElementById("tbFlavour").value;

    localStorage.setItem("flavour",favouriteFlavour);
}

function btnRetrieveFlavour() { 
    const today = localStorage.getItem("today");
    console.log(`Today is ${today}`)

    const favouriteFlavour = localStorage.getItem("flavour");
    console.log(`On ${today} your favourite flavour is ${favouriteFlavour}`)
}