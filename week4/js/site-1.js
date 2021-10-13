

function init() {

    let listOfCities = ['Dublin', 'Cork', 'Limerick', 'Killarney'];

    const htmlContent = renderCitiesAsHTML(listOfCities);

    renderCityListing(htmlContent)

    renderCitySelectList(listOfCities)

    console.log(htmlContent);

}

function renderCitySelectList(listOfCities) {

    const selectedObject = document.querySelector('#selectListOfCities');

    selectedObject.length = 0;

    listOfCities.forEach((city, index) => {

        let option = document.createElement("option");
        option.value = index;
        option.text = city;
        
        selectedObject.add(option,null);


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