$(document).ready(function() {

    //FOR ZIP CODE SECTION, create event listener button, create a function that will handle ajax call(similar to fetch API)
    
    
    
    var history = [];
    if(JSON.parse(localStorage.getItem('cityNames')) !== null){
    history = JSON.parse(localStorage.getItem('cityNames'));
    // console.log(history);

    if(history.length > 0){
        for(i = 0; i < history.length;i++){

            cityDisplay(history[i]);
            
        }
    }};




    


    function cityDisplay(value){
        
        var section = $('#mySection');
        var divider = $('<div class="divider">');
        var h5 = $('<h5>' + value + '</h5>');



        section.append(divider);
        section.append(h5);
        
        



    }






    //EVENT LISTENERS

    // when someone clicks the button its going to store the value thats inside the id: myButton 
    $('#myButton').on('click', function(){
        var zip = $('#myZip').val()
        event.preventDefault();
        // console.log()
        // getZip(zip);
        // zip.val().empty();

       
        

         //endpoint for getting back the weather
         var requestURL = "https://api.openweathermap.org/data/2.5/weather?zip=" + zip + ",us&appid=6f5ea58cb35532d1813901385fee7376"

        
         

         // // AJAX call
         $.ajax({
         url: requestURL,
         method: 'GET'
         })
         .then(function(data){
             console.log(data);
             var value = data.name;
             history.push(value);
            
             
            //  console.log(cityNames);
             localStorage.setItem('cityNames', JSON.stringify(history));
             
            
            
             
            cityDisplay(value);
         });
 




    });
    
    
    
});

