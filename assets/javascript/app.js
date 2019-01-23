//created original search options as buttons - drawn from array
var topics = ['Happy','Sad','Scared','Excited'];


createButtons();

function createButtons() {

    $('#buttonsCreatedDiv').empty();
for (var i = 0; i < topics.length; i++) {
    var arrayButtons = topics[i];
    
    var newSearchDiv = $('<div id="newSearchDiv">');
    newSearchDiv.html('<button class="btn btn-dark" data-name=' + topics[i] + '>' + arrayButtons + '</button>');
    $("#buttonsCreatedDiv").append(newSearchDiv);
    

};
};
// end of for loop!

$('#searchButton').on("click", function() {

var searchTerm = $('#textInput').val().trim();
// console.log(searchTerm);
topics.push(searchTerm);

createButtons();
console.log(topics);


$('.btn-dark').on("click", function () {
    
    

    var genre = $(this).attr("data-name");
    var queryUrl = 'https://api.giphy.com/v1/gifs/search?q=' + genre + '&api_key=2UTWN8JUTC03FAoJZDLDSLF79CSv1KUx&limit=10';
    
    console.log(genre);
    console.log($(this));
    

    
    $('#results').empty();

    

    $.ajax({
            url: queryUrl,
            method: "GET"
    
        }).then(function(response){
            for (var i = 0; i < response.data.length; i++) {
            console.log(response);
            
            
            var newResultsDiv = $('<div>');
            console.log(newResultsDiv);
            var gifImages = $('<img>');
            var gifRatings = $('<div>');
            var stillPath = response.data[i].images.downsized_still.url;
            
            var animatePath = response.data[i].images.downsized_medium.url;
            
            
            var rating = response.data[i].rating;
            
            
            gifImages.attr('src', stillPath).attr('class', "gifs").attr('data-still', stillPath).attr('data-animate', animatePath).attr('data-state', 'still').attr('id',[i]);
            newResultsDiv.append(gifImages);
            
            
            newResultsDiv.append("<br><h4> Rating: " + rating + "</h4>");
            
            
            $('#results').append(newResultsDiv);

            
            $(gifImages).on('click', function () {
            console.log($(this));
            var state = $(this).attr('data-state');

            if (state === "still") {
                var animate = $(this).attr('data-animate');
                $(this).attr('src', animate);
                $(this).attr('data-state', 'animate');
            } 
            else {
                var still = $(this).attr('data-still');
                $(this).attr('src', still);
                $(this).attr('data-state', 'still');

            }



            });//end of gifImages on click
            
            
            
            

            
    
        };// end of for loop
    
           
        
        
        });//end of full ajax request
    
       
    });//end of on click


});
//end of on click!


$('.btn-dark').on("click", function () {
    
    

    var genre = $(this).attr("data-name");
    var queryUrl = 'https://api.giphy.com/v1/gifs/search?q=' + genre + '&api_key=2UTWN8JUTC03FAoJZDLDSLF79CSv1KUx&limit=10';
    
    console.log(genre);
    console.log($(this));
    

    
    $('#results').empty();

    

    $.ajax({
            url: queryUrl,
            method: "GET"
    
        }).then(function(response){
            for (var i = 0; i < response.data.length; i++) {
            console.log(response);
            
            
            var newResultsDiv = $('<div>');
            console.log(newResultsDiv);
            var gifImages = $('<img>');
            var gifRatings = $('<div>');
            var stillPath = response.data[i].images.downsized_still.url;
            
            var animatePath = response.data[i].images.downsized_medium.url;
            
            
            var rating = response.data[i].rating;
            
            
            gifImages.attr('src', stillPath).attr('class', "gifs").attr('data-still', stillPath).attr('data-animate', animatePath).attr('data-state', 'still').attr('id',[i]);
            newResultsDiv.append(gifImages);
            
            
            newResultsDiv.append("<br><h4> Rating: " + rating + "</h4>");
            
            
            $('#results').append(newResultsDiv);

            
            $(gifImages).on('click', function () {
            console.log($(this));
            var state = $(this).attr('data-state');

            if (state === "still") {
                var animate = $(this).attr('data-animate');
                $(this).attr('src', animate);
                $(this).attr('data-state', 'animate');
            } 
            else {
                var still = $(this).attr('data-still');
                $(this).attr('src', still);
                $(this).attr('data-state', 'still');

            }



            });//end of gifImages on click
            
            
            
            

            
    
        };// end of for loop
    
           
        
        
        });//end of full ajax request
    
       
    });//end of on click

    

    
    

    
    
    
    
    

















    
    
    
  