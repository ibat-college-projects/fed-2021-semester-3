//alert('Hello World')


// console.log(`I am on step 1`)
// console.log(`I am on step 2`)
// console.log(`I am on step 3`)
// console.log(`I am on step 4`)
// console.log(`I am on step 5`)


// let counter = 1;
// console.log(`I am on step ${counter}`); counter = counter +1;
// console.log(`I am on step ${counter}`); counter = counter +1;
// console.log(`I am on step ${counter}`); counter = counter +1;
// console.log(`I am on step ${counter}`); counter = counter +1;
// console.log(`I am on step ${counter}`); counter = counter +1;


// let counter = 5;
// console.log(`I am on step ${counter}`); counter++;
// console.log(`I am on step ${counter}`); counter++;
// console.log(`I am on step ${counter}`); counter++;
// console.log(`I am on step ${counter}`); counter++;
// console.log(`I am on step ${counter}`); counter++;



// let counter = 10;
// console.log(`I am on step ${counter++}`); // post increment operator 
// console.log(`I am on step ${counter++}`); 
// console.log(`I am on step ${counter++}`); 
// console.log(`I am on step ${counter++}`); 
// console.log(`I am on step ${counter++}`);


// let counter = 1; // initialising variable
// let topStep = 10; // conditional or limit variable 

// while (condition) { do stuff.... }


// while (counter < topStep) {

//     console.log(`I am on step ${counter}`);

//     counter++;

// }

// do {

//     console.log(`Do while I am on step ${counter}`);

//     counter++;

// } while (counter < topStep)


// let counter = 1; // initialising variable
// conditional or limit variable 

// while (condition) { do stuff.... }
// topStep = 10;

// for ( counter = 1; counter < topStep; counter++ ) {

//     console.log(`For Loop:  I am on step ${counter}`);

// }





function GoUpStairs(topStep) {
   
    let midWay = parseInt(topStep / 2)

    for (let i = 0; i < topStep; i++) {



        if (i == midWay) {
            console.log(`=====================Reached Midway point : ${midWay}`);
        }

        let stepType = i % 2 == 0 ? 'Even' : 'Odd'; // ternary operator


        console.log(`For Loop with i:  I am on step ${i}. It step : ${stepType} `);


    }
}

let userInput = 100;
GoUpStairs(userInput);
GoUpStairs(10);
GoUpStairs(15);











