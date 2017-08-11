$(document).ready(function () {
    var starwarsAPI = "https://swapi.co/api/films/";
  
  
    function displayMovies(data) {
        
        var movieHTML = '<ul id="movieGallery">';
        var movie = [data.results[0].title, 
                      data.results[1].title, 
                      data.results[2].title, 
                      data.results[3].title, 
                      data.results[4].title, 
                      data.results[5].title
                    ];
                   
        var movieInfo = [data.results[0].opening_crawl, 
                    data.results[1].opening_crawl,
                     data.results[2].opening_crawl, 
                    data.results[3].opening_crawl, 
                    data.results[4].opening_crawl, 
                    data.results[5].opening_crawl
                 ];
        var movieProducer = [data.results[0].producer, 
                      data.results[1].producer, 
                      data.results[2].producer, 
                      data.results[3].producer, 
                      data.results[4].producer, 
                      data.results[5].producer
                    ];
          var movieRelease = [data.results[0].release_date, 
                      data.results[1].release_date, 
                      data.results[2].release_date, 
                      data.results[3].release_date, 
                      data.results[4].release_date, 
                      data.results[5].release_date
                    ];          
            var moviesPicture = [
                "img/yoda-1675801_640.jpg",
                "img/star-wars-1936225_640.jpg",
                "img/star-wars-2082969_640.jpg",
                "img/mars-512489_640.jpg",
                "img/toy-930612_640.jpg",
                "img/star-wars-2172947_640.jpg"
            ];
                 
        var i = 0;
        while (i < movie.length) {
            movieHTML += '<li>';
           
            movieHTML += '<img src="' + moviesPicture[i] + '" alt="Star Wars">';
             movieHTML += '<span class="episode">' + movie[i] + '</span>';
            movieHTML += '<span class="hidden">' + movieInfo[i] + '</span>';
            movieHTML += '<span>' + movieProducer[i] + '</span>';
            movieHTML += '<span>' + movieRelease[i] + '</span>';
            movieHTML += '</li>';
            i += 1;     
        }
       movieHTML += '</ul>';
        $("#movies").html(movieHTML);


        var $overlay = $('<div id="overlay"></div>');
        var $overlayCover = $('<div class="cover"></div>');
        var $image = $('<img>');
        var $caption = $('<p class="captionInfo"></p>');
        var $movie = $('<p class="captionInfo"></p>');

        $overlayCover.append($movie);
        $overlayCover.append($image);
        $overlayCover.append($caption);
        $overlay.append($overlayCover);
        $("body").append($overlay);

        $('#movieGallery').on('click', 'li', function (e) {

            var movieTitle = $(this).children("span.episode").html();
            $movie.html(movieTitle);

            var imageLocation = $(this).children("img").attr("src");
            $image.attr("src", imageLocation);
            $overlay.show();

            var captionText = $(this).children("span.hidden").html();
            $caption.html(captionText);

            e.preventDefault();
        });

        $(document).on('click', function (e) {
            if ($(e.target).has('.cover').length) {
                $overlay.hide();
            }
        });
    }
    $.getJSON(starwarsAPI, displayMovies);
});

