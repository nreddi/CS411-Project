app.factory('userData', function() {

    return {

        user: {
            firstName: 'Yuxiao',
            lastName: 'Wang',
            movie: ["Game of Throne","Arrival","Fast and Furious 10"],
            email: 'o1xhack@gmail.com',
            startDate: new Date(2017, 9, 25),
            username: 'o1xhack'
        }
    }

});

app.factory('OMDbLookUpMovieTitle', function ($http) {
    return {
        lookupMovie: function(movie) {
            console.log('Looking up' + movie);
            return $http.get("https://api.themoviedb.org/3/search/movie?api_key=9edb89b91f4f28ef916263ab0ea5f63e&language=en-US&query=" + movie + "&page=1&include_adult=false")
                .then(function (response) {
                    return response;
                },
                // error
                function (response) {
                    return response;
                });
        }
    }

});

app.factory('getPosterPhoto', function() {
    return {
        getPoster: function(posterpath) {
            return 'https://image.tmdb.org/t/p/w500/' + posterpath;
        }
    }
});