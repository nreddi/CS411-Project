app.directive('myInput', function() {
    return {
        restrict: 'E',
        template: "<label>Enter the Movie Title: <input type='text' ng-model='moviename'></label><button ng-click='getOMDbData(moviename)'>GO</button>"
    };
});