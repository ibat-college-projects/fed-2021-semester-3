

function init() {

    let listOfCities = ['Dublin', 'Cork', 'Limerick', 'Killarney'];

    const htmlContent = renderCitiesAsHTML(listOfCities);

    renderCityListing(htmlContent)

    console.log(htmlContent);

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