
angular.module('ChartsApp')

.controller('ChartCtrl', function($scope, $stateParams, $rootScope, $http, $ionicLoading, $ionicPopup) {

//$ionicLoading   begin
$scope.show = function() {
    $ionicLoading.show({
      template: '<p>Loading...</p><ion-spinner></ion-spinner>'
    });
  };

  $scope.hide = function(){
        $ionicLoading.hide();
  };

  $scope.callhttp = function() {
    // Start showing the progress
    $scope.show($ionicLoading);

    $http({method: 'get',
            url: 'http://10.201.92.151:3000/api/spin'
      }).success(function(data) {
        var alertPopup = $ionicPopup.alert({
            title: 'Got Data from HTTP call',
        });
    }).error(function(data) {
      // Do something on error
        var alertPopup = $ionicPopup.alert({
            title: 'HTTP call failed!',
            template: 'HTTP call failed!'
        });
    }).finally(function($ionicLoading) { 
      // On both cases hide the loading
      $scope.hide($ionicLoading);  
    });  
  }//call HTTP
 //$ionicLoading   end
 
 console.log("$rootScope.actualValue=" + $rootScope.actualValue);
 console.log("$rootScope.typicalValue=" + $rootScope.typicalValue);

  $scope.myDataSource = {
    "chart": {
        "manageresize": "1",
        "origw": "350",
        "origh": "200",
        "palette": "2",
        "bgalpha": "0",
        "bgcolor": "FFFFFF",
        "lowerlimit": "0",
        "upperlimit": "100",
        "numbersuffix": "%",
        "showborder": "0",
        "basefontcolor": "#000000",
        "basefontsize": "12",
        "charttopmargin": "5",
        "chartbottommargin": "5",
        "tooltipbgcolor": "#20B2AA",
        "tooltipcolor": "#ffffff",
        "tooltipradius": "3",
        "gaugefillmix": "{dark-10},{light-70},{dark-10}",
        "gaugefillratio": "15",
        "pivotradius": "14",
        "pivotFillColor": "#5599CC",
        "pivotFillAlpha": "100",
        "pivotFillMix": "#5599CC #ffffff ",
        "showValue": "0",
        "valueBelowPivot": "0",
        "gaugeouterradius": "140",
        "gaugeinnerradius": "70%",
        "gaugeoriginx": "175",
        "gaugeoriginy": "190",
        "trendvaluedistance": "5",
        "tickvaluedistance": "5",
        "managevalueoverlapping": "1",
        "autoaligntickvalues": "1"
    },
    "colorrange": {
        "color": [
            {
                "minvalue": "0",
                "maxvalue": "70",
                "code": "8BBA00"
            },
            {
                "minvalue": "70",
                "maxvalue": "90",
                "code": "F6BD0F"
            },
            {
                "minvalue": "90",
                "maxvalue": "100",
                "code": "FF654F"
            }
        ]
    },
    "dials": {
        "dial": [
            {
                "value": $rootScope.actualPers,
                "displayvalue": "Actual Spend $" + $rootScope.actualValue,
                "rearextension": "10",
                "basewidth": "20",
                "topwidth": "3"
            }
        ]
    },
    "trendpoints": {
        "point": [
            {
                "startvalue": $rootScope.typicalPers,
                "displayvalue": "Typical $" + $rootScope.typicalValue,
                "markerTooltext": "Typical Spend $" 
                + $rootScope.typicalValue,
                "usemarker": "1",
                "markerradius": "10",
                "valueInside": "0",
                "thickness": "6",
                "trendValueDistance": "16",
                "dashed": "50",
                "dashlen": "5",
                "dashgap": "2"
            }
        ]
    },
    "annotations": {
        "groups": [
            {
                "id": "Grp1",
                "showbelow": "1",
                "showshadow": "1",
                "items": [
                    {
                        "id": "ann-bg",
                        "type": "rectangle",
                        "x": "$chartCenterX-145",
                        "y": "$chartEndY - 82",
                        "tox": "$chartCenterX + 145",
                        "toy": "$chartEndY - 22",
                        "fillcolor": "#20B2AA",
                        "radius": "8"
                    },
                    {
                        "id": "ann-text1",
                        "type": "Text",
                        "color": "#ffffff",
                        "label": "Budget: $" + $rootScope.budgetValue
                        +  " | Typical: $" + $rootScope.typicalValue,
                        "fontSize": "16",
                        "align": "center",
                        "x": "$chartCenterX - 4",
                        "y": "$chartEndY - 62"
                    },
                    {
                        "id": "ann-text2",
                        "type": "text",
                        "color": "#ffffff",
                        "label": "Actual Spend: $" + $rootScope.actualValue,
                        "fontSize": "16",
                        "align": "center",
                        "x": "$chartCenterX - 5",
                        "y": "$chartEndY - 42"
                    }
                ]
            }
        ]
    }
}
});
