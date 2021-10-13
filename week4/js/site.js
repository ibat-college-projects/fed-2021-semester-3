

function init() {

    let listOfCities = ['Dublin', 'Cork', 'Limerick', 'Killarney'];

    const htmlContent = renderCitiesAsHTML(listOfCities);

    renderCityListing(htmlContent)

    renderCitySelectList(listOfCities)

    setSelectedCity(listOfCities[0])

    console.log(htmlContent);

}

function addCity() {
    // Grab the contents of the add city field 
    const selectedInput = document.querySelector("#tbAddCity");
    const addCityItem = selectedInput.value;


    // PUsh the item onto the end of the select box
    const selectedObject = document.querySelector('#selectListOfCities');
    let option = document.createElement("option");
    option.text = addCityItem;
    selectedObject.add(option, null);

    //clear our add city field 
    selectedInput.value = ''

    


}

function onCityChange(e) {

    const currentIndex = e.selectedIndex;
    const currentValue = e.value;
    const currentText = e.options[currentIndex].text;
    console.log(`City has changed index to: ${currentIndex}`)
    console.log(`City has changed value to: ${currentValue}`)
    console.log(`City has changed text to: ${currentText}`)

    setSelectedCity(currentText)





}

function setSelectedCity(city) {

    const selectedObject = document.querySelector('#selectedCity');
    selectedObject.value = city;

}

function renderCitySelectList(listOfCities) {

    const selectedObject = document.querySelector('#selectListOfCities');

    selectedObject.length = 0;

    listOfCities.forEach((city, index) => {

        let option = document.createElement("option");
        option.value = index;
        option.text = city;

        selectedObject.add(option, null);


    })





}

function renderCityListing(htmlContent) {

    const selectedHTMLObject = document.querySelector('#listGroup');
    selectedHTMLObject.innerHTML = htmlContent;
}





function renderCitiesAsHTML(listOfCities) {

    let htmlContent = [];

    htmlContent.push(`<ul class="list-group">`)
    listOfCities.forEach((city, index) => {

        htmlContent.push(`<li class="list-group-item">${index} : ${city} </li>`)

    })
    htmlContent.push(`</ul>`)

    return htmlContent.join(" ");

}