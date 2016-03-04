app.controller('bioCtrl', function($scope,$stateParams,mainService) {
  var name = $stateParams.shortName;
  $scope.currentBio = mainService.getBio(name)

    $scope.showModal = false;
    $scope.open = function(){
    $scope.showModal = !$scope.showModal;
    };

})
