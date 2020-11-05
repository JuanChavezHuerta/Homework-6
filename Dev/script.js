$(document).ready(function() {

    //FOR ZIP CODE SECTION, create event listener button, create a function that will handle ajax call(similar to fetch API)
    

    
    
    //FUNCTIONS

    
    var getZip = function(zip) {
        //var for getting weather back
        var requestURL = 'api.openweathermap.org/data/2.5/weather?zip=80210,us&appid=ebc53887a83232974059f9adb2445958'

        

        // test to see if button works
        console.log(zip);


        // // AJAX call
        $.ajax({
        url: requestURL,
        method: 'GET'
        }).then().catch((e)=>{
            console.log(e);
        });
   

    };



    


    //EVENT LISTENERS
    $('#myButton').on('click', function(){
        var zip = $('#myZip').val()
        // console.log()
        getZip(zip);
        // zip.val().empty();
    });



    
});

