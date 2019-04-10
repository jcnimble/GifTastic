$( document ).ready(function() {
// Initial array of topics
var topics = ["cake", "fashion", "sports", "dance"];

function displayFailImages() {

  var fail = $(this).attr("data-name");
  var queryURL = "https://api.giphy.com/v1/gifs/search?q=fail+" +
    fail + "&api_key=YV1JdGEPHOuudALjnfRYyDoWqipC3NZE&limit=10";

  // Creating an AJAX call for the specific fail button being clicked
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
      var failDiv = $("<div class='col-md-3'>");

      // Creating a paragraph tag with the result item's rating
      var p = $("<p>").text("Rating: " + results[i].rating);

      // Creating and storing an image tag
      var failImage = $("<img>");
      // Setting the src attribute of the image to a property pulled off the result item
      failImage.attr("src", results[i].images.fixed_height_still.url);
      failImage.attr({ 'data-still': results[i].images.fixed_height_still.url });
      failImage.attr({ 'data-animate': results[i].images.fixed_height.url });
      failImage.attr({ 'data-state': "still" });
      failImage.attr({ 'class': "gif" });

      // Appending the paragraph and image tag to the failDiv

      failDiv.append(failImage);
      failDiv.append(p);

      // Prependng the failDiv to the HTML page in the "#gifs-appear-here" div
      $("#gifs-appear-here").prepend(failDiv);


    }

  });

}



// Function for displaying fail data
function renderButtons() {

  // Deleting the fail buttons prior to adding new fail buttons
  // (this is necessary otherwise we will have repeat buttons)
  $("#buttons-view").empty();

  // Looping through the array of fails
  for (var i = 0; i < topics.length; i++) {
    // Then dynamicaly generating buttons for each fail in the array.
    // This code $("<button>") is all jQuery needs to create the start and end tag. (<button></button>)
    var a = $("<button>");
    // Adding a class
    a.addClass("fail-btn");
    // Adding a data-attribute with a value of the fail at index i
    a.attr("data-name", topics[i]);
    // Providing the button's text with a value of the fail at index i
    a.text(topics[i]);

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

  // Adding the fail from the textbox to our array
  topics.push(fail);

  // Calling renderButtons which handles the processing of our fail array
  renderButtons();

});

// Adding a click event listener to all elements with a class of "fail-btn"

$(document).on("click", ".fail-btn", displayFailImages);

// Calling the renderButtons function to display the intial buttons
renderButtons();

$(document).on("click", ".gif", function(e){
  e.preventDefault();
  $(".gif").on("click", function() {
    // The attr jQuery method allows us to get or set the value of any attribute on our HTML element
    var state = $(this).attr("data-state");
    // If the clicked image's state is still, update its src attribute to what its data-animate value is.
    // Then, set the image's data-state to animate
    // Else set src to the data-still value
    if (state === "still") {
      $(this).attr("src", $(this).attr("data-animate"));
      $(this).attr("data-state", "animate");
    } else {
      $(this).attr("src", $(this).attr("data-still"));
      $(this).attr("data-state", "still");
    }
  });
}
);
});
