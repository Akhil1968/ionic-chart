
angular.module('ChartsApp', ['ionic', 'ChartsApp.controllers', 'ng-fusioncharts'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })
  .state('app.charts', {
      url: '/charts',
      views: {
        'menuContent': {
          templateUrl: 'templates/charts.html',
          controller: 'ChartsCtrl'
        }
      }
    })

  .state('app.chartvalues', {
      url: '/chartvalues',
      views: {
        'menuContent': {
          templateUrl: 'templates/ChartValues.html',
          controller: 'ChartValuesCtrl'
        }
      }
    })

  .state('app.single', {
    url: '/charts/:chartId',
    views: {
      'menuContent': {
        templateUrl: 'templates/chart.html',
        controller: 'ChartCtrl'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/chartvalues');
});
