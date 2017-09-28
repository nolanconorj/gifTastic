var topics = ["Los Angeles Lakers", "New York Yankees", "Dallas Cowboys", "Chicago Blackhawks", "Manchester United"];

function displayTeamInfo() {

        var team = $(this).attr("data-name");
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + team + "&api_key=dc6zaTOxFJmzC&limit=10";

        // Creating an AJAX call for the specific movie button being clicked
        $.ajax({
          url: queryURL,
          method: "GET"
        }).done(function(response) {

          // Creating a div to hold the movie
          var teamDiv = $("<div class='teams'>");

          // Storing the rating data
          var rating = response.Rated;

          // Creating an element to have the rating displayed
          var pOne = $("<p>").text("Rating: " + rating);

          // Displaying the rating
          teamDiv.append(pOne);

          

          // Putting the entire movie above the previous movies
          $("#teams-view").prepend(teamDiv);
        });

      }

function renderButtons() {

        // Deleting the movies prior to adding new movies
        // (this is necessary otherwise you will have repeat buttons)
        $("#teamButtons").empty();

for (var i = 0; i < topics.length; i++) {

          // Then dynamicaly generating buttons for each movie in the array
          // This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
          var a = $("<button>");
          // Adding a class of movie to our button
          a.addClass("teams-created");
          // Adding a data-attribute
          a.attr("data-name", topics[i]);
          // Providing the initial button text
          a.text(topics[i]);
          // Adding the button to the buttons-view div
          $("#teamButtons").append(a);
        }

// This function handles events where a movie button is clicked
      $("#addTeam").on("click", function(event) {
        event.preventDefault();
        // This line grabs the input from the textbox
        var newTeam = $("#team-input").val().trim();

        // Adding movie from the textbox to our array
        topics.push(newTeam);

        // Calling renderButtons which handles the processing of our movie array
        renderButtons();
      });
    };

      // Adding a click event listener to all elements with a class of "movie"
      $(document).on("click", ".teams-created", displayTeamInfo);

      // Calling the renderButtons function to display the intial buttons
      renderButtons();













//----------------BUTTON TRIGGERED CODE
/*$("button").on("click", function() {
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
    });*/