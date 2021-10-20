let fleet = [];
function init() {


}

function btnSaveCar() {

    let mf = document.getElementById("tbMf").value
    let model = document.getElementById("tbModel").value
    let colour = document.getElementById("tbColour").value



    const CarObject = {
        "mf": mf,
        "model": model,
        "colour": colour
    }


    fleet.push(CarObject);

    console.log({ fleet })
    console.log(JSON.stringify(fleet))

    localStorage.setItem("fleet", JSON.stringify(fleet));

    renderFleet(fleet);
}

function btnRetrieveFleet() {


    renderFleet() ;
  

}

function renderFleet() {

    fleetObject = JSON.parse(localStorage.getItem("fleet"));

    renderList(fleetObject)

}


function renderList(fleetAsList) {

    var listingDiv = document.getElementById('tbodyCarData');

    htmlString = [];

    for(const [index, currentCar] of fleetAsList.entries()) {

        const removeButton = `<button class='btn btn-danger' onclick='removeCar(${index})'>Button</button>`
     
        const rowItem = `<tr><td>${currentCar.mf}</td><td>${currentCar.model}</td><td>${currentCar.colour}</td><td>${removeButton}</td></tr>`;

        htmlString.push(rowItem);


    }

    listingDiv.innerHTML=htmlString.join(' ');
    

}

function removeCar(indexOfCar) {

    fleet.splice(indexOfCar,1);

    localStorage.setItem("carData", JSON.stringify(fleet));

    renderList(fleet);
}
