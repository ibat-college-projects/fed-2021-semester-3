
$(function () {
    initJquerySeating();
});

function initJquerySeating() {

    const maxSeatsChosen = 3;

    $('.seat').on('click', function () {

        if ($(this).hasClass('reserved')) return;


        if ($(this).hasClass('selected')) {
            $(this).removeClass('selected');
            $('#seatsChosen').html(``);
            ShowSeatCount();
            return;
        }

        if ($('.selected').length >= maxSeatsChosen) { 
            return; 
        } 

        $(this).addClass('selected');
    
        ShowSeatCount();
    
    })

}

function ShowSeatCount() {

    let seatsChosen = [];

    $('.selected').each( function (index) {

        const rowSeat = $(this).data("row");
        const colSeat = $(this).data("col");

        seatsChosen.push( {row: rowSeat, col: colSeat} );

    });

    let chosenSeats = seatsChosen.map(x => { return `${x.row}:${x.col}` } );

    $('#seatsChosen').html(`selected seats: ${chosenSeats.join(', ')}`);

}