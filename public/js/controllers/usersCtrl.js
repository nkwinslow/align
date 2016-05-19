app.controller('usersCtrl', function ($scope, $http) {
  $scope.user = {
    username: 'Username',
    email: 'Email',
    pass: '...'
  };


  $scope.newUser = function () {
    $http.post('http://localhost:9001/api/newUser', $scope.user).then(function (res) {
      console.log(res);
    })
  }

  $scope.login = function () {
    $http.post('http://localhost:9001/api/login', $scope.user).then(function (res) {
      console.log(res);
    })
  }

})
