// https://pastebin.com/raw/gGccfsV3
$(function () {
    initJquery();
});

function initJquery() {

    SetupMovieLoader()

}

function SetupMovieLoader() {

    $('#messagePanel').hide();

    $('#btnLoadMovies').on('click', function () {

        const url = './data/movies.json';

        $.getJSON(url, function (jsondata) {

           // RenderMovieData(jsondata);
            RenderMovieDataAsTable(jsondata);
        })

    })
}


function RenderMovieDataAsTable(movieListing) {

    //console.log(movieListing);
    htmlString = [];
 
    // start of a list
    for (const movie of movieListing) {
        htmlString.push("<tr>")
       
        const { title, year, director, id, cast, ...rest } = movie;

        const btnDetails= `<button class="btn btn-success">Details</button>`;
        htmlString.push(`<td>${title}</td><td>${year}</td><td>${btnDetails}</td>`);
     

        htmlString.push('</tr>')
    }

    $('tbody#movieBody').append(htmlString.join(" "));
   // WriteToMessagePanel(htmlString.join(" "));

}










function RenderMovieData(movieListing) {

    //console.log(movieListing);
    htmlString = [];
    htmlString.push("<ol>")
    // start of a list
    for (const movie of movieListing) {

        // const title = movie.title;
        // const year = movie.year;
        // const director = movie.director;

        // Object destructuring

        const { title, year, director, id, cast, ...rest } = movie;

        htmlString.push(`<li>${title} : ${year}`);
        htmlString.push('<ol>')


        for (const castMember of cast.split(',')) {
            htmlString.push(`<li>${castMember}</li>`);

        }
        htmlString.push('</ol>')

        htmlString.push('</li>')
    }

    htmlString.push("</ol>")
    WriteToMessagePanel(htmlString.join(" "));

}

function WriteToMessagePanel(msg) {
  
    $('#messagePanel').show().html(msg);
}
