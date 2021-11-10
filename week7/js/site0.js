
$(function () {



    setUpJqueryFunctions();

});

function setUpJqueryFunctions() {
    // isLoaded();
    applyStriped();

    $('#btnStyle').on('click', function () {
        
        console.log('#btnStyle clicked');

        $('p:last').css('font-style','italic')
      

    })


    $('#btnAppend').on('click', function () {

        console.log('#btnAppend clicked');
        $("<p>This is new item 1</p>").insertAfter('p:last');
        $("<p>This is new item 2</p>").insertAfter('p:last');
        $("<p>This is new item 3</p>").insertAfter('p:last');

    })


    $('#btnToggle').on('click', toggle)


    $('#btnHideFirst').on('click', function () {

        $('p:first').hide();
    })

    $('#btnShowFirst').on('click', function () {

        $('p:first').show();
    })





    $('#btnShowDate').on('click', function () {
        console.log('#btnShowDate clicked');

        const currentDate = new Date();
        const shortDate = currentDate.toDateString();

        $('p')[0].innerHTML = `<em>Hello There! ${shortDate}</em>`;


    });


}

function toggle() {

    $('body div p').toggleClass('striped');

}

function applyStriped() {

    // $(target).doStuff(with options)

    $('p.second').addClass('striped');

}
function isLoaded() {

    console.log(`Jquery goodness is loaded`);
}