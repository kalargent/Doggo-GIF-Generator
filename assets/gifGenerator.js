$(function (){
    console.log ("loaded correctly"); 
    buttonGenerator(); 
})



// CREATE AN ARRAY TO POPULATE THE BUTTONS 

var emotionArray = ["Excited", "Shocked", "Saddened", "Awed", "Wowed"]; 

// CREATE THE BUTTONS WHEN PAGE LOADS - COPIED FROM TRIVIA GAME
function buttonGenerator () {
    //empty buttons 
        $("#buttons").empty(); 
        // for loop to display answer buttons on the screen 
        for (var i = 0; i < emotionArray.length; i++) {
            var a = $("<button>"); 
            a.addClass("searchButton"); 
            a.attr("data-name", emotionArray[i]); 
            a.text(emotionArray[i]); 
            $("#buttons").append(a);
            console.log ("buttons created");    
        };
}; 

// CREATE THE ON CLICK FUNCTION THAT PASSES THE QUERY 
$(document).on("click", ".searchButton", function () {
    var searchTerm = $(this).data("name"); 
    console.log (searchTerm); 
    console.log ("Button clicked");
})

// variable for the search term 
// variable for the query URL 

// ajax call GET

// then response 




