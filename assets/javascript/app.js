// // Initial array of fails
var fails = ["cake", "fashion", "sports", "dance"];


function alertFailName() {
  var failName = $(this).attr("data-name");

  alert(failName);
}

// // Function for displaying movie data
function renderButtons() {
  //   // Deleting the movie buttons prior to adding new movie buttons
  //   // (this is necessary otherwise we will have repeat buttons)
  $("#buttons-view").empty();

  //   // Looping through the array of movies
  for (var i = 0; i < fails.length; i++) {
    //     // Then dynamicaly generating buttons for each movie in the array.
    //     // This code $("<button>") is all jQuery needs to create the start and end tag. (<button></button>)
    var a = $("<button>");
    //     // Adding a class
    a.addClass("fail");
    //     // Adding a data-attribute with a value of the movie at index i
    a.attr("data-name", fails[i]);
    //     // Providing the button's text with a value of the movie at index i
    a.text(fails[i]);
    //     // Adding the button to the HTML
    $("#buttons-view").append(a);
  }
}


      // This function handles events where one button is clicked
      $("#add-fail").on("click", function(event) {
        // Preventing the buttons default behavior when clicked (which is submitting a form)
        event.preventDefault();
        // This line grabs the input from the textbox
        var fail = $("#fail-input").val().trim();

        // Adding the movie from the textbox to our array
       fails.push(fail);

        // Calling renderButtons which handles the processing of our movie array
        renderButtons();

      });

      // Function for displaying the movie info
      // We're adding a click event listener to all elements with the class "movie"
      // We're adding the event listener to the document because it will work for dynamically generated elements
      // $(".movies").on("click") will only add listeners to elements that are on the page at that time
      $(document).on("click", ".fail", alertFailName);

      // Calling the renderButtons function to display the intial buttons
      renderButtons();

// $("button").on("click", function () {
//   // In this case, the "this" keyword refers to the button that was clicked
//   var fail = $(this).attr("data-person");


//   // Constructing a URL to search Giphy for the name of the person who said the quote
//   var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
//     person + "&api_key=YV1JdGEPHOuudALjnfRYyDoWqipC3NZE&limit=10";

//   // Performing our AJAX GET request
//   $.ajax({
//     url: queryURL,
//     method: "GET"
//   })
//     // After the data comes back from the API
//     .then(function (response) {
//       // Storing an array of results in the results variable
//       var results = response.data;

//       // Looping over every result item
//       for (var i = 0; i < results.length; i++) {

//         // Only taking action if the photo has an appropriate rating
//         if (results[i].rating !== "r" && results[i].rating !== "pg-13") {
//           // Creating a div for the gif
//           var gifDiv = $("<div>");

//           // Storing the result item's rating
//           var rating = results[i].rating;

//           // Creating a paragraph tag with the result item's rating
//           var p = $("<p>").text("Rating: " + rating);

//           // Creating an image tag
//           var personImage = $("<img>");

//           // Giving the image tag an src attribute of a proprty pulled off the
//           // result item
//           personImage.attr("src", results[i].images.fixed_height.url);

//           // Appending the paragraph and personImage we created to the "gifDiv" div we created
//           gifDiv.append(p);
//           gifDiv.append(personImage);

//           // Prepending the gifDiv to the "#gifs-appear-here" div in the HTML
//           $("#gifs-appear-here").prepend(gifDiv);
//         }
//       }
//     });
// });