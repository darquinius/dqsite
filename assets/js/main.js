$( document ).ready(function() {

    // Get today's date in ISO format
    var today = new Date();
    var date = today.toISOString().slice(0, -14);
    console.log(date);


    var oReq = new XMLHttpRequest();
    oReq.addEventListener("load", function () {

        var data = JSON.parse(this.responseText);
        var date = "2021-11-28";
        var starsign = "Taurus";
    
        for (let entry of data) {

            if (entry.tarort === date) {

                $('.home-wrap').append('<p>' + entry[starsign] + '</p>');

            }

        }


    });
    oReq.open("GET", "/json/dhe.json");
    oReq.send();


});

    