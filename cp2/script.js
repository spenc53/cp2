var app = angular.module('myApp', []); 
app.controller('addFamily', function($scope) {
    $scope.familyList = [];

    $scope.addFamily = function() {
        $scope.familyList.push(
            {
                person:$scope.person,
                father:$scope.father,
                mother:$scope.mother,
                done:false
            });
        $scope.person = "";
        $scope.father = "";
        $scope.mother = "";
    };

    $scope.remove = function() {
        var oldList = $scope.familyList;
        $scope.familyList = [];
        angular.forEach(oldList, function(x) {
            if (!x.done) $scope.familyList.push(x);
        });
    };
});