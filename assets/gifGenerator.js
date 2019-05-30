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



