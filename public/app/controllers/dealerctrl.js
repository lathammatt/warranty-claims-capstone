'use strict';

app.controller("DealerCtrl", function($scope, $http) {
  $scope.dealers = null
  $scope.dealerList = []
  let selection = null

  $http.get('/api/dealer')
    .then(({ data: dealers }) => {
      $scope.dealers = dealers
      console.log($scope.dealers)
    })

  $scope.brandSelect = (brand) => {
    selection = brand
    console.log(selection)

    for (let i = 0; i < $scope.dealers.length; i++) {
      console.log("check", $scope.dealers[i].name, selection)
      if ($scope.dealers[i].brand === selection) {
        console.log($scope.dealers[i].name)
        $scope.dealerList.push($scope.dealers[i].name)
        console.log($scope.dealerList)
      }
    }
  }

})