var MyFirstController = function($scope, $http, userData, userGravatar, OMDbLookUpMovieTitle) {
    $scope.ManyHellos = ['Hello', 'Hola', 'Bonjour', 'Guten Tag', 'Ciao', 'Namaste', 'Yiasou'];

    $scope.data = userData.user;

    $scope.getGravatar = function(email) {
        return userGravatar.getGravatar(email);
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