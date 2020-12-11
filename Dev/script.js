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


    if(history.length > 0){}


    function cityWeather(today){
        var name = today.name;
        var temp = Math.floor(today.main.temp);
        var humidity = today.main.humidity;

        $('#name').text("City: " + name);
        $('#temp').text("Temp: " + temp);
        $('#humidity').text('Humidity: ' + humidity);
        


    }
    


    function cityDisplay(value){
        
        var section = $('#mySection');
        var divider = $('<div class="divider">');
        var h5 = $('<h5 class= histy>' + value + '</h5>');



        section.append(divider);
        section.append(h5);
        
        



    }


    function cardsDisplay(data){

        for(let i = 0; i < data.list.length; i++ ){
            //console.log(data.list[i].dt_txt)
            if(data.list[i].dt_txt.indexOf("12:00:00")!== -1){
                var cardContainer = $('#myCards');
        var card = $('<div class = "card blue darken-1">');
        var cardSpan = $('<span class = "card-title">');
        var cardImg = $('<img href = "iconurl">');

        var cardDate = $('<h5>').text(data.list[i].dt_txt);
        var cardWidget = $(data.list[i].weather[0].icon);
        var iconcode = data.list[i].weather[0].icon;
        var iconurl = $("<img>").attr("src","http://openweathermap.org/img/w/" + iconcode + ".png");
        var cardTemp = $('<p>').text(data.list[i].main.temp)
        var cardHumi = data.list[i].main.humidity
        
        cardContainer.append(card.append(cardSpan, cardImg, cardDate, iconurl, cardWidget, cardTemp, cardHumi));
            }

        }

    };




    function myCards(zip){
        // request url for the 5 day forcast
        var requestURL2 = "https://api.openweathermap.org/data/2.5/forecast?zip=" + zip + ",US&units=imperial&appid=38ed2b19da01786b6087bfa45c0601c4"

        $.ajax({
            url: requestURL2,
            method: 'GET'
            })
            .then(function(data){
                console.log(data);
                cardsDisplay(data);
            });   



            



    }


    //EVENT LISTENERS

    //listener for the search history.
    //add an ajax call inside each one to pull weather data
    //add an ID to the h5 tag
    
    $('.histy').on('click', function(){
     event.preventDefault();
     var x =[];
     $('.histy').each(function(index, obj){
      var cityName = $(this).text()
      
      console.log(cityName)
  
       x.push($(this).text());
    
     });
     
    

    //  for(let i = 0; i < x.length; i++){
         var requestURL2 = "https://api.openweathermap.org/data/2.5/forecast?q=" + x[0] + "&appid=38ed2b19da01786b6087bfa45c0601c4"

       console.log(x)

        $.ajax({
         url: requestURL2,
         method: 'GET'
       })
        .then(function(data){
         cardsDisplay(data)
        })
        
   

    //  }



    })






    // when someone clicks the button its going to store the value thats inside the id: myButton 
    $('#myButton').on('click', function(){
        var zip = $('#myZip').val()
        event.preventDefault();
        myCards(zip);
        // console.log()
        // getZip(zip);
        // zip.val().empty();

       
         

         //endpoint for getting back the weather
         var requestURL = "https://api.openweathermap.org/data/2.5/weather?zip=" + zip + ",us&units=imperial&appid=6f5ea58cb35532d1813901385fee7376"

        
         

         // // AJAX call
         $.ajax({
         url: requestURL,
         method: 'GET'
         })
         .then(function(data){
            //  console.log(data);
             var value = data.name;
             history.push(value);
            
             
            //  console.log(cityNames);
             localStorage.setItem('cityNames', JSON.stringify(history));
             
            
            
            cityWeather(data);
            cityDisplay(value);
            
         });
 




    });
    
    
    
});

