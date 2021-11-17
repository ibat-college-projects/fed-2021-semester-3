
$(function () {
    initJquerySeating();
});

function initJquerySeating() {


    $('.seat').on('click', function() {

const row = $(this).data("row");
const col = $(this).data("col");

$('#seatsChosen').html(`selected seat: ${row}-${col}`);

    })
 
}