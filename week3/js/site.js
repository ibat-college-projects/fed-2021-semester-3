let carMF = 'Volkswagen';
let carModel = 'Golf'
let carEngine = '1.6'
let carColour = 'Red'
let carType = 'Hatchback'


// let carMF1 = 'Nissan';
// let carModel1 = 'Navara'
// let carEngine1 = '2.5'
// let carColour1 = 'Grey'
// let carType1 = 'Pickup'

// let carMF12= 'Nissan2';
// let carMode2 = 'Navara2'
// let carEngine2 = '2.52'
// let carColour2 = 'Grey2'
// let carType2 = 'Pickup2'
// let carInterior = 'Luxurious'

let car = {

    'mf': 'Ford',
    'model': 'Fiesta',
    'engine': '1.2',
    'colour': 'Pink',
    'type': 'Sedan'
}

let fleet = [
    {

        'mf': 'Ford',
        'model': 'EScort',
        'engine': '1.2',
        'colour': 'Blue',
        'type': 'Hatchback'
    },
    {

        'mf': 'Ford',
        'model': 'Fiesta',
        'engine': '1.2',
        'colour': 'Pink',
        'type': 'Sedan'
    }
    ,
    {

        'mf': 'Nissan',
        'model': 'Navara',
        'engine': '2.0',
        'colour': 'Grey',
        'type': 'Pickup'

    }

];


// console.log(`The car manufacturer 0 ${car.mf}`)
// console.log(`The car manufacturer 1 ${car1.mf}`)


// console.log(`The car manufacturer 0 ${fleet[0].mf}`)
// console.log(`The car manufacturer 1 ${fleet[1].mf}`)

for (let i = 0; i < fleet.length; i++) {

    const currentCar = fleet[i];
    const message = `${i} : ${currentCar.mf} : ${currentCar.colour} :  ${currentCar.engine}`
    console.log(message)

}

// 
for (const currentCar of fleet) {

    const message = `ForEach : ${currentCar.mf} : ${currentCar.colour} :  ${currentCar.engine}`
    console.log(message)
}




GetAllManufacturers(fleet);
FindCarsByMf(fleet, 'Ford')


function FindCarsByMf(fleet, manufacturer) {

    let carsByManufacturer = fleet.filter(car => car.mf.toLowerCase() === manufacturer.toLowerCase())

    console.log(carsByManufacturer)

}

function GetAllManufacturers(fleet) {

    let foundItems = [];

    // Method 1
    // for (const currentCar of fleet) {

    //     foundItems.push(currentCar.mf);
    // }

    //Method 2
    fleet.forEach(function (car) {

        foundItems.push(car.mf);
    })

    //Method 3
    let foundMfs = fleet.map(
        function (car) {
            return car.mf
        }
    )


    //Method 4: MAP FILTER REDUCE
    const foundMfList = fleet.map(car => car.mf)


    console.log(foundMfList.join(','));

}






