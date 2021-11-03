let adultPrice = 10;
let childPrice = 5;
let totalTicketPrice = 0;
let adultTicketCount = 0;
let childTicketCount = 0;
let maxAdultTickets = 4;
let maxChildTickets = 5;
let familyPrice = 30;



function init() {
console.log("Bruce Wayne - English - 80 - Pass")
    console.log("starting up after load")
    WriteTotal(0)
    WriteAdultCount(0)
    WriteChildCount(0)

}



function addTicket(item) {

    if (item == 'adult') {

        adultTicketCount = ++adultTicketCount <= maxAdultTickets ? adultTicketCount : maxAdultTickets;
        WriteAdultCount(adultTicketCount)
        WriteTotal(CalculatePrice());



    } else {

        if (adultTicketCount > 0) {
            childTicketCount = ++childTicketCount <= maxChildTickets ? childTicketCount : maxChildTickets;
            WriteChildCount(childTicketCount);
            WriteTotal(CalculatePrice());
        }
    }

}


function removeTicket(item) {

    if (item == 'adult') {

        adultTicketCount = --adultTicketCount >= 0 ? adultTicketCount : 0;


        if (adultTicketCount == 0) {

            childTicketCount = 0;
            WriteChildCount(0)
        }


        WriteAdultCount(adultTicketCount)
        WriteTotal(CalculatePrice());



    } else {

        childTicketCount = --childTicketCount >= 0 ? childTicketCount : 0;
        WriteChildCount(childTicketCount);
        WriteTotal(CalculatePrice());
    }

}

function WriteTotal(e) {
    console.log(`Writing to ${e}`)
    document.getElementById("totalTicketPrice").innerHTML = e;
}

function WriteAdultCount(e) {

    document.getElementById("adultTicketCount").innerHTML = e;
}

function WriteChildCount(e) {

    document.getElementById("childTicketCount").innerHTML = e;
}

function CalculatePrice() {

    isFamilyTicket = adultTicketCount == 2 && childTicketCount == 3 ? true : false;

    if (isFamilyTicket) {
        return familyPrice;
    } else {

        return (adultTicketCount * adultPrice) + (childTicketCount * childPrice);
    }




}