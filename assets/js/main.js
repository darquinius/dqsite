$( document ).ready(function() {

    // Get today's date in ISO format
    var today = new Date();
    var date = today.toISOString().slice(0, -14);
    console.log(date);

    $('.home-wrap').append('<p>' + date + '</p>');


    $.getJSON('https://crystalhoroscope.com/wp-content/themes/magic-quiz/content/dailyhoroscope/dhe.json');


});

    