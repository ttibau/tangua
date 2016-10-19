angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('tabsController.comunicados', {
    url: '/comunicados',
    views: {
      'tab1': {
        templateUrl: 'templates/comunicados.html',
        controller: 'comunicadosCtrl'
      }
    }
  })

  .state('tabsController.Nibus', {
    url: '/onibus',
    views: {
      'tab2': {
        templateUrl: 'templates/Nibus.html',
        controller: 'NibusCtrl'
      }
    }
  })

  .state('tabsController.Representantes', {
    url: '/representantes',
    views: {
      'tab4' : {
        templateUrl: 'templates/representantes.html',
        controller: 'representantesCtrl'
      }
    }
  })

  .state('tabsController.Duvidas', {
    url: '/duvidas',
    views: {
      'tab3' : {
        templateUrl: 'templates/duvidas.html',
        controller: 'duvidasCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

$urlRouterProvider.otherwise('/page1/comunicados')

  

});