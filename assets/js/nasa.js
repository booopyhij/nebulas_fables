$(document).ready(function () {
  $("#searchBtn").on("click", function (event) {
    event.preventDefault();
    //need to add function to clear out "img-card" on click
    var userInput = $("#user-input").val().trim();
    console.log(userInput);

    search(userInput);
  });

  function search(userInput) {
    // var nasaApiKey = "kSgH3akh7Qaqauv7AbKZyRc6pQjxcfVEOlObfDDl"; i dont think we need api key but will keep in just incase we do need it later
    var nasaImageUrl = "https://images-api.nasa.gov/search?q=" + userInput;
    $.ajax({
      url: nasaImageUrl,
      method: "GET",
    }).then(function (searchResponse) {
      console.log(searchResponse);
      $("#img-card").empty();
      var imageReturn = searchResponse.collection.items[0].links[0].href;
      console.log(imageReturn);

      var userImage = $('<img src="' + imageReturn + '" />');

      $("#img-card").append(userImage);
    });
  }
});
