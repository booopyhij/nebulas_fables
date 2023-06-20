//function to take in user input from search bar and makes a variable to store it
$("#searchBtn").on("click", function (event) {
  event.preventDefault();
  //need to add function to clear out "img-card" on click
  var userInput = $("#user-input").val().trim();
  console.log(userInput);

  search(userInput);
});

//function for hitting enter to search
$("#user-input").keyup(function (event) {
  userInput = $("#user-input").val().trim();
  if (event.key === "Enter") {
    console.log(userInput);
    search(userInput);
  }
});

//function to search nasa api
function search(userInput) {
  //var to auto add constellation to end of user search input
  var constellation = "%20constellation";
  // var nasaApiKey = "kSgH3akh7Qaqauv7AbKZyRc6pQjxcfVEOlObfDDl"; i dont think we need api key but will keep in just incase we do need it later
  var nasaImageUrl =
    "https://images-api.nasa.gov/search?q=" + userInput + constellation;
  $.ajax({
    url: nasaImageUrl,
    method: "GET",
  }).then(function (searchResponse) {
    console.log(searchResponse);
    $("#nasa-card").empty();
    var imageReturn = searchResponse.collection.items[0].links[0].href;
    console.log(imageReturn);

    var userImage = $('<img src="' + imageReturn + '" />');

    $("#nasa-card").append(userImage);
  });
}
