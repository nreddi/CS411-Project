var MyFirstController = function($scope, $http, userData, getPosterPhoto , OMDbLookUpMovieTitle) {
    $scope.ManyHellos = ['Hello', 'Hola', 'Bonjour', 'Guten Tag', 'Ciao', 'Namaste', 'Yiasou'];

    $scope.data = userData.user;

    $scope.getGravatar = function(path) {
        console.log("");
        getPosterPhoto.getPoster(path).then(onLookupComplete, onError);
    };


    $scope.getOMDbData = function (moviename) {
        console.log("");
        OMDbLookUpMovieTitle.lookupMovie(moviename).then(onLookupComplete, onError);
    }

    var onLookupComplete = function(response) {
        $scope.movie = response.data;
        $scope.status = response.status;

    };

    var onError = function(reason) {
        $scope.error = "Ooops, something went wrong..";
    };
};

app.controller("MyFirstController", MyFirstController);