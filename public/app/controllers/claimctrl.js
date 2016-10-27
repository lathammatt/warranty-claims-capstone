'use strict';

app.controller('ClaimCtrl', function($scope, $http, $location, DataFactory) {
  $scope.vehicleList = []
  $scope.sectionsList = []
  let wheels = {}
  let brand = DataFactory.getBrand()
  let car = null

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

  $scope.populateSections = (vehicle) => {
    car = vehicle
    $http.get('/api/sections')
      .then(({ data: sections }) => {
        console.log("sections", sections)
        for (let i = 0; i < sections.length; i++) {
          $scope.sectionsList.push(sections[i].name)
        }
      })
  }

  $scope.populateParts = (section) => {
    car = section
    $http.get('/api/parts')
      .then(({ data: sections }) => {
        console.log("sections", sections)
        for (let i = 0; i < sections.length; i++) {
          $scope.sectionsList.push(sections[i].name)
        }
      })
  }



})