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
    // create a variable for the search term 
    var searchTerm = $(this).data("name"); 
    // log it to test that i'm getting it
    console.log (searchTerm); 
    console.log ("Button clicked");
    // variable for the query URL
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + searchTerm + "&api_key=1GkFl3xoDoGUiLsnAoa9AybDWPVMNDkh&limit=10"; 
    // testing the URL 
    console.log (queryURL); 

    $.ajax ({
        url:queryURL,  
        method: "GET" 
    })

    // wait for a response 
    .then (function (response){
        // variable to capture the response 
        var searchResults = response.data; 
        // for loop going through the results of the response 
        for (var i = 0; i < searchResults.length; i++) {
            // create a new div for each gif
            var gifDiv = $("<div>");
            // each gif is an image 
            var gif = $("<img>");
            // this is how you get the still image 
            gif.attr("src", searchResults[i].images.fixed_height_still.url);
            // defines where to get the rating variable
            var rating = searchResults[i].rating;
            // logs rating variable 
            console.log (rating); 
            // gifDiv.prepend(p);
            gifDiv.prepend(gif,rating);
            // prepend the div witht the results 
            $("#results").prepend(gifDiv)

            // console.log(gifDiv); 
          }
          console.log(response); 
          
    })
})

// ajax call GET


// then response 




