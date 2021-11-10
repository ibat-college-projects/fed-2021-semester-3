
$(function () {
    setUpJqueryFunctions();
});

function setUpJqueryFunctions() {

    WriteWelcomeMessage();
    WriteAge()
    WriteSumCalculation();
    SetupPizzaOptions()
}

function SetupPizzaOptions() {

    $('#selectMeatOptions').on('click', function () {

         $('input:checkbox').not(this).prop('checked',this.checked)  ;
         
         const numberOfCheckedItems = $('input:checkbox:checked').not(this).length;

         WriteToMessagePanel(`Total options selected: ${numberOfCheckedItems}`)

    });


}

function WriteSumCalculation() {

    $('#btnAdd').on('click', function() {

        const number1 = isNaN( $('#tbNum1').val() ) ? 0 :  $('#tbNum1').val();
        const number2 = isNaN( $('#tbNum2').val() ) ? 0 :  $('#tbNum2').val();
        const total = parseInt(number1) + parseInt(number2);
        WriteToMessagePanel(`Your total is ${total}`);
    
    });
}

function WriteAge() {

    $('#btnAge').on('click', function () {
        const age = $('#tbAge').val();
        WriteToMessagePanel(`Your age is ${age}`);

    })
}

function WriteWelcomeMessage() {

    $('#btnDemo').on('click', function () {

        WriteToMessagePanel('hello world');
    })
}

function WriteToMessagePanel(msg) {

    $('#messagePanel').html(msg);
}
