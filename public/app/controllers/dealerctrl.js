'use strict';

app.controller("DealerCtrl", function($scope, $http) {
  $scope.dealers = null
  $scope.dealerList = []
  let selection = null

  $http.get('/api/dealer')
    .then(({ data: dealers }) => {
      $scope.dealers = dealers
    })

  $scope.brandSelect = (brand) => {
    selection = brand
  }

  for (shop in $scope.dealers){
    if ($scope.dealers.brand = selection){
      $scope.dealerList.push($scope.dealers.name)
    }
  }

})