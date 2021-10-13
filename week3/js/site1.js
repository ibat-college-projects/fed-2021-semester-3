function init() {

    console.log(`I am loading after the page`)

    ShowGreeting();
    showDate();

    const planets = ['mercury', 'venus', 'earth'];
    let htmlToWrite = WriteList(planets);
    writeMessagePanel(htmlToWrite);
}

function WriteList(listOfItems) {
    htmlString = '<ul>';

    for (const item of listOfItems) {

        htmlString += `<li>${item}</li>`;
    }

    htmlString += '</ul>';

    return htmlString;

}

function writeMessagePanel(content) {

    let messagePanel = document.getElementById("messagePanel");

    messagePanel.innerHTML = content;

}


function SumTwoNumbers() {

    let num1 = document.getElementById("number1").value;
    let num2 = document.getElementById("number2").value;
    let result = document.getElementById("result");


    if (isNaN(parseInt(num1))) num1 = 0;
    if (isNaN(parseInt(num2))) num2 = 0;

    const total = parseInt(num1) + parseInt(num2);
    result.value = total;
}

function ClearEmail() {

    let emailInput = document.getElementById("inputDemo");

    emailInput.value = ``;
}

function ResetEmailField() {

    let emailInput = document.getElementById("inputDemo");

    if (emailInput.value == ``) {

        emailInput.value = `Enter your email for newsletter`
    };
}

let counter = 0;
function ClickButton() {

    let messagePanelDiv = document.getElementById("messagePanel");
    counter++;
    const message = `The value of counter is now ${counter}`
    messagePanelDiv.innerHTML = message;

}

function ResetCounter() {

    let messagePanelDiv = document.getElementById("messagePanel");
    counter = 0;

    messagePanelDiv.innerHTML = ``;

}


function showDate() {

    let currentDate = new Date();
    const longDate = currentDate.toString();
    const shortDate = currentDate.toDateString();

    console.log(`Long Date is ${longDate}`);
    console.log(`Short Date is ${shortDate}`);

    // Returns the object found on the page by id
    let dateSpanObject = document.getElementById("currentDate");

    // WRites to the innerHTML property which is what stores and interprets the html
    dateSpanObject.innerHTML = `<strong>${shortDate}</strong>`;
}

function ShowGreeting() {

    let greetingElement = document.getElementById("greeting");
    greetingElement.innerHTML = 'Working with the DOM';
}