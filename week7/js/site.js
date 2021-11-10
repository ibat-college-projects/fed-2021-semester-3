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

            RenderMovieData(jsondata);
        })

    })
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
