
angular.module('ChartsApp')

.controller('ChartCtrl', function($scope, $stateParams, $rootScope) {
 console.log("$rootScope.actualValue=" + $rootScope.actualValue);
 console.log("$rootScope.typicalValue=" + $rootScope.typicalValue);
  $scope.myDataSource = {
    "chart": {
        "caption": "Your Spend",
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
        "basefontcolor": "FFFFDD",
        "basefontsize": "12",
        "charttopmargin": "5",
        "chartbottommargin": "5",
        "tooltipbgcolor": "009999",
        "gaugefillmix": "{dark-10},{light-70},{dark-10}",
        "gaugefillratio": "15",
        "pivotradius": "12",
        "showValue": "1",
        "valueBelowPivot": "1",
        "gaugeouterradius": "120",
        "gaugeinnerradius": "70%",
        "gaugeoriginx": "175",
        "gaugeoriginy": "200",
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
                "markerTooltext": "Typical Spend $" + $rootScope.typicalValue + " " + $rootScope.typicalPers + "%",
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
                        "type": "rectangle",
                        "x": "$chartStartX+5",
                        "y": "$chartStartY+5",
                        "tox": "$chartEndX-5",
                        "toy": "$chartEndY-5",
                        "radius": "20",
                        "fillcolor": "009999,ff456f,009999",
                        "showborder": "0"
                    }
                ]
            }
        ]
    }
}
});
