var app = angular.module('align', ['ui.router'])

app.config([
  "$stateProvider",
  "$urlRouterProvider",

  function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: '/templates/home.html',
        controller: 'mainCtrl'
      })
      .state('staff', {
        url: '/staff',
        templateUrl: '../templates/staff.html',
        controller: 'mainCtrl'
      })
      .state('mission', {
        url: '/mission',
        templateUrl: '../templates/mission.html',
        controller: 'mainCtrl'
      })
      .state('contact', {
        url: '/contact',
        templateUrl: '../templates/contact.html',
        controller: 'mainCtrl'
      })
      .state('model', {
        url: '/model',
        templateUrl: '../templates/model.html',
        controller: 'mainCtrl'
      })
      .state('bio', {
        url: '/bio/:shortName',
        templateUrl: '../templates/bio.html',
        controller: 'bioCtrl'
      })

  }

])
