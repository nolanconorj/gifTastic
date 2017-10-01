var topics = ["Los Angeles Lakers", "New York Yankees", "Dallas Cowboys", "Chicago Blackhawks", "Manchester United"];


function displayTeamInfo() {
    var team = $(this).attr("data-name");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        team + "&api_key=dc6zaTOxFJmzC&limit=10";
    $.ajax({
            url: queryURL,
            method: "GET"
        })
        .done(function(response) {
            var results = response.data;
            console.log(results);
            $("#teams-appear-here").empty(gifDiv);
            for (var i = 0; i < results.length; i++) {
                var gifDiv = $("<div class='item'>");
                var rating = results[i].rating;
                var p = $("<p>").text("Rating: " + rating);
                var teamImage = $("<img class='image' data-state='still'>");
                teamImage.attr("src", results[i].images.fixed_height_still.url)
                teamImage.attr("data-animate", results[i].images.fixed_height.url)
                teamImage.attr("data-still", results[i].images.fixed_height_still.url)
                gifDiv.prepend(p);
                gifDiv.prepend(teamImage);
                console.log(gifDiv);


            $("#teams-appear-here").prepend(gifDiv);





            }

            $(".image").on("click", function() {
                //alert("hi");

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

                //teamImage.attr("src", results[i].images.fixed_height.url).attr("animate")
                // If the clicked image's state is still, update its src attribute to what its data-animate value is.
                // Then, set the image's data-state to animate
                // Else set src to the data-still value
                //if (state === "still") {




            });
        });

};




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

};

$("#addTeam").on("click", function(event) {
    event.preventDefault();
    // This line grabs the input from the textbox
    var newTeam = $("#team-input").val().trim();
    // Adding movie from the textbox to our array
    topics.push(newTeam);
    // Calling renderButtons which handles the processing of our movie array
    renderButtons();
});
// Adding a click event listener to all elements with a class of "movie"
$(document).on("click", ".teams-created", displayTeamInfo);
// Calling the renderButtons function to display the intial buttons
renderButtons();


//teamImage.attr("src", results[i].images.fixed_height.url);









//________________TO DO_________-------------------------------
//empty div. so only 10 gifs on page at a time
//how to pause and start gifs