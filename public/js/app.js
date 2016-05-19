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
      .state('newUser', {
        url: '/newUser',
        templateUrl: '../templates/newUser.html',
        controller: 'usersCtrl'
      })
      .state('admin', {
        url: '/admin',
        templateUrl: '../templates/admin.html',
        controller: 'usersCtrl'
      })
      .state('login', {
        url: '/login',
        templateUrl: '../templates/login.html',
        controller: 'usersCtrl'
      })

  }

])
