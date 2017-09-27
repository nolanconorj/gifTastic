
$("button").on("click", function() {
      var team = $(this).attr("data-team");
      //API-----------------------------------------------------------------
      var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        team + "&api_key=dc6zaTOxFJmzC&limit=10";

      $.ajax({
          url: queryURL,
          method: "GET"
        })
        .done(function(response) {
          var results = response.data;

          for (var i = 0; i < results.length; i++) {
            var gifDiv = $("<div class='item'>");

            var rating = results[i].rating;

            var p = $("<p>").text("Rating: " + rating);

            var teamImage = $("<img>");
            teamImage.attr("src", results[i].images.fixed_height.url);

            gifDiv.prepend(p);
            gifDiv.prepend(teamImage);

            $("#gifs-appear-here").prepend(gifDiv);
          }
        });
    });