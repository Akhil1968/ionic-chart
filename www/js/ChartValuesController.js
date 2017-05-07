
angular.module('ChartsApp')

.controller('ChartValuesCtrl', function($scope, $stateParams, $state, $rootScope) {
$scope.chartData = {
    budgetValue: 2000,
    typicalValue: 1200,
    actualValue: 1300
};
  
 $scope.redrawChart = function(){
    $rootScope.budgetValue = $scope.chartData.budgetValue;
    $rootScope.typicalValue = $scope.chartData.typicalValue;
    $rootScope.actualValue = $scope.chartData.actualValue;
    $rootScope.typicalPers = ($scope.chartData.typicalValue / $scope.chartData.budgetValue) * 100;
    $rootScope.actualPers = ($scope.chartData.actualValue / $scope.chartData.budgetValue) * 100;
    //console.log("$rootScope.actualValue=" + $rootScope.actualValue);
    //console.log("$rootScope.typicalValue=" + $rootScope.typicalValue);
    $state.go('app.single');
 }
});
