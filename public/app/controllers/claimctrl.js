'use strict';

app.controller('ClaimCtrl', function($scope, $http, $location, DataFactory) {
  $scope.vehicleList = []
  let wheels = {}
  let brand = DataFactory.getBrand()

  $http.get('/api/vehicles')
    .then(({ data: vehicles }) => {
      wheels = vehicles
      console.log(wheels)
      for (let i = 0; i < wheels.length; i++) {
        console.log("check", wheels[i].name)
        if (wheels[i].brand === brand) {
          $scope.vehicleList.push(wheels[i].name)
        }
      }
    })
})