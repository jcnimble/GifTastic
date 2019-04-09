// Initial array of fails
var fails = ["cake", "fashion", "sports", "dance"];

function displayFailImages() {

  var fail = $(this).attr("data-name");
  var queryURL = "https://api.giphy.com/v1/gifs/search?q=fail+" +
    fail + "&api_key=YV1JdGEPHOuudALjnfRYyDoWqipC3NZE&limit=10";

  // Creating an AJAX call for the specific movie button being clicked
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function (response) {

    console.log(response)
    //storing the data from the AJAX
    var results = response.data;
    // Creating a div to hold the Gif fail
    
             // Looping through each result item
             for (var i = 0; i < results.length; i++) {

              // Creating and storing a div tag
              var failDiv = $("<div>");
  
              // Creating a paragraph tag with the result item's rating
              var p = $("<p>").text("Rating: " + results[i].rating);
  
              // Creating and storing an image tag
              var failImage = $("<img>");
              // Setting the src attribute of the image to a property pulled off the result item
              failImage.attr("src", results[i].images.fixed_height.url);
  
              // Appending the paragraph and image tag to the animalDiv
              failDiv.append(p);
              failDiv.append(failImage);
  
              // Prependng the animalDiv to the HTML page in the "#gifs-appear-here" div
              $("#gifs-appear-here").prepend(failDiv);
             }

  });

}

// // Function for displaying movie data
function renderButtons() {

  // Deleting the movie buttons prior to adding new movie buttons
  // (this is necessary otherwise we will have repeat buttons)
  $("#buttons-view").empty();

// Looping through the array of movies
  for (var i = 0; i < fails.length; i++) {
 // Then dynamicaly generating buttons for each movie in the array.
// This code $("<button>") is all jQuery needs to create the start and end tag. (<button></button>)
    var a = $("<button>");
// Adding a class
    a.addClass("fail-btn");
// Adding a data-attribute with a value of the movie at index i
    a.attr("data-name", fails[i]);
// Providing the button's text with a value of the movie at index i
    a.text(fails[i]);
// Adding the button to the HTML
    $("#buttons-view").append(a);
  }
}


// This function handles events where one button is clicked
$("#add-fail").on("click", function (event) {
  // Preventing the buttons default behavior when clicked (which is submitting a form)
  event.preventDefault();
  // This line grabs the input from the textbox
  var fail = $("#fail-input").val().trim();

  // Adding the movie from the textbox to our array
  fails.push(fail);

  // Calling renderButtons which handles the processing of our movie array
  renderButtons();

});

// Adding a click event listener to all elements with a class of "movie-btn"

$(document).on("click", ".fail-btn", displayFailImages);

// Calling the renderButtons function to display the intial buttons
renderButtons();

