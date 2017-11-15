app.directive('myInput', function() {
    return {
        restrict: 'E',
        template: "<label>Movie Title:<input type='text' ng-model='moviename'></label><button ng-click='getOMDbData(moviename)'>GO</button>"
    };
});