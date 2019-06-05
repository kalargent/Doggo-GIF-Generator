$(function (){
    console.log ("loaded correctly"); 
    buttonGenerator(); 
})



// CREATE AN ARRAY TO POPULATE THE BUTTONS 

var doggos = ["Chihuahua", "Corgi", "Mastiff", "German Shepherd", "Pug", "Shiba Inu", "Akita", "Yorkie", "Snoop"]; 
var searchTerm = ""; 

// CREATE THE BUTTONS WHEN PAGE LOADS - COPIED FROM TRIVIA GAME
function buttonGenerator () {
    //empty buttons 
        $("#buttons").empty(); 
        // for loop to display answer buttons on the screen 
        for (var i = 0; i < doggos.length; i++) {
            var a = $("<button>"); 
            a.addClass("searchButton"); 
            a.attr("data-name", doggos[i]); 
            a.text(doggos[i]); 
            $("#buttons").append(a);
            console.log ("buttons created");    
        };
}; 

function GIFgenerator () {
    // $("#results").empty(); 
    // create a variable for the search term 
    // searchTerm = $("#searchText").data("name"); 
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
            var gifDiv = $("<div col-sm>");
            
            // each gif is an image 
            var gif = $("<img class= 'gif' data-state ='animate'>");
            
            // this is how you get the animated GIF 
            gif.attr("src", searchResults[i].images.fixed_width.url);
            
            // this is how you get the animated gif, too
            gif.attr("data-animate", searchResults[i].images.fixed_width.url);
            
            // this is the still image url
            gif.attr("data-still", searchResults[i].images.fixed_width_still.url); 
            
            //this is the state of the image when the page loads 
            // gif.attr("data-state", "animate"); 
            
            // sets the rating in a separate para tag
            var rating = $("<p>")
            
            // sets the text for the rating para 
            rating.text("This is rated " + searchResults[i].rating);
            
            // logs rating variable 
            console.log (rating); 
            
            // gifDiv.prepend(p);
            gifDiv.prepend(gif,rating);
            
            // prepend the div witht the results 
            $("#results").prepend(gifDiv); 
          }
          console.log(response); 
          
    })
}

// CREATE THE ON CLICK FUNCTION THAT PASSES THE QUERY 
$(document).on("click", ".searchButton", function () {
    $("#results").empty(); 
    offset = 10; 
    // create a variable for the search term 
    searchTerm = $(this).data("name") + " Dog"; 
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
            var gifDiv = $("<div col-sm>");
            
            // each gif is an image 
            var gif = $("<img class= 'gif' data-state ='animate'>");
            
            // this is how you get the animated GIF 
            gif.attr("src", searchResults[i].images.fixed_width.url);
            
            // this is how you get the animated gif, too
            gif.attr("data-animate", searchResults[i].images.fixed_width.url);
            
            // this is the still image url
            gif.attr("data-still", searchResults[i].images.fixed_width_still.url); 
            
            //this is the state of the image when the page loads 
            // gif.attr("data-state", "animate"); 
            
            // sets the rating in a separate para tag
            var rating = $("<p>")
            
            // sets the text for the rating para 
            rating.text("This is rated " + searchResults[i].rating);
            
            // logs rating variable 
            console.log (rating); 
            
            // gifDiv.prepend(p);
            gifDiv.prepend(gif,rating);
            
            // prepend the div witht the results 
            $("#results").prepend(gifDiv); 
          }
          console.log(response); 
          
    })

})

// ON CLICK FOR PAUSING AND ANIMATING
$("#results").on("click", ".gif", function () {
    // testing if on click works 
    console.log("clicked GIF"); 
    // set the image state variable to track the state of the image
    var imageState = $(this).attr("data-state"); 
    // sets the image to still URL 
    var stillImage = $(this).attr("data-still"); 
    // sets the image to animate URL 
    var animatedImage = $(this).attr("data-animate"); 
    // console.log(animatedImage);

    if (imageState === "animate") {
        // update the src to be the still image var
        $(this).attr("src", stillImage);
        // update the data-state to still 
        $(this).attr("data-state", "still"); 
        // testing that the if works 
        console.log("still");
    }
    
    else {
        // update the src to be the animated var 
        $(this).attr("src", animatedImage);
        // set the data-state to animate 
        $(this).attr("data-state", "animate")
        // testing that else works
        console.log("animate"); 

    } 

})

// ON CLICK FOR ADDING NEW SEARCH TERMS TO THE ARRAY -- THIS IS WHERE THE BUG IS 
$("#addButton").on("click", function (event) {

    event.preventDefault();
    // test that on click works 
    console.log ("clicked on add"); 
    // a new variable to take in the search term that the user types
    var newButton = $("#searchText").val();
        if (newButton != "") {
        // test to see if the variable is retrieved  
        console.log (newButton); 
        // send the variable to the array 
        doggos.push(newButton); 
        // re-generate the buttons with the new one included 
        $("#results"). empty(); 
        $("#searchText").val(""); 
        buttonGenerator();
        searchTerm = newButton;
        offset = 10;  
        GIFgenerator(); 
        }
    })

   
var offset = 10; 
// ON CLICK FOR LOADING MORE GIFS 
$("#loadMore").on("click", function (){
    console.log("clicked for more"); 
    // prepend the existing results for the gif 
    var queryURLmore = "https://api.giphy.com/v1/gifs/search?q=" + searchTerm + "&api_key=1GkFl3xoDoGUiLsnAoa9AybDWPVMNDkh&offset=" +offset+ "&limit=10"; 
    console.log (queryURLmore); 

    $.ajax ({
        url:queryURLmore,  
        method: "GET" 
    })

    .then (function (addMoreResponse) {
        var searchResultsMore = addMoreResponse.data; 
        // for loop going through the results of the response 
        for (var i = 0; i < searchResultsMore.length; i++) {
            // create a new div for each gif
            var gifDiv = $("<div>");
            
            // each gif is an image 
            var gif = $("<img class= 'gif' data-state ='animate'>");
            
            // this is how you get the animated GIF 
            gif.attr("src", searchResultsMore[i].images.fixed_width.url);
            
            // this is how you get the animated gif, too
            gif.attr("data-animate", searchResultsMore[i].images.fixed_width.url);
            
            // this is the still image url
            gif.attr("data-still", searchResultsMore[i].images.fixed_width_still.url); 
            
            //this is the state of the image when the page loads 
            // gif.attr("data-state", "animate"); 
            
            // sets the rating in a separate para tag
            var rating = $("<p>")
            
            // sets the text for the rating para 
            rating.text("This is rated " + searchResultsMore[i].rating);
            
            // logs rating variable 
            console.log (rating); 
            
            // gifDiv.prepend(p);
            gifDiv.prepend(gif,rating);
            
            // prepend the div witht the results 
            $("#results").prepend(gifDiv); 
          }
          console.log(searchResultsMore); 
          offset +=10; 
    }
    // $("#results").push(); 
)})



