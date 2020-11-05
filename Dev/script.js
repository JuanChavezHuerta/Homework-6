$(document).ready(function() {

    //FOR ZIP CODE SECTION, create event listener button, create a function that will handle ajax call(similar to fetch API)
    

    
    
    //FUNCTIONS

    
    var getZip = function(zip) {
        //var for getting weather back
        var requestURL = "api.openweathermap.org/data/2.5/weather?zip=80210,us&appid=6f5ea58cb35532d1813901385fee7376"

        


        // // AJAX call
        $.ajax({
        url: requestURL,
        method: 'GET'
        }).then();
   

    };



    


    //EVENT LISTENERS
    $('#myButton').on('click', function(){
        var zip = $('#myZip').val()
        // console.log()
        getZip(zip);
        // zip.val().empty();
    });



    
});

