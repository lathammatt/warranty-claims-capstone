'use strict';

app.controller('ClaimCtrl', function($scope, $http, $location, DataFactory, MathFactory) {
  $scope.vehicleList = []
  $scope.sectionsList = []
  $scope.partsList = []
  $scope.laborList = []
  let wheels = {}
  let brand = DataFactory.getBrand()
  let car = null
  let trinkets = {}

  DataFactory.getVehicles()
    .then((vehicles) => {
      wheels = vehicles
      for (let i = 0; i < wheels.length; i++) {
        if (wheels[i].brand === brand) {
          $scope.vehicleList.push(wheels[i].name)
        }
      }
    })

  $scope.populateSections = (vehicle) => {
    car = vehicle
    DataFactory.setVehicle(vehicle)
    DataFactory.getSections()
      .then((sections) => {
        for (let i = 0; i < sections.length; i++) {
          $scope.sectionsList.push(sections[i].name)
        }
      })
  }

  $scope.populateParts = (section) => {
    $scope.partsList = []
    let sectionMatch = []
    DataFactory.setSection(section)
    DataFactory.getParts()
      .then((parts) => {
        trinkets = parts
        for (let i = 0; i < parts.length; i++) {
          if (parts[i].section === section) {
            sectionMatch.push(parts[i])
          }
        }
        for (let i = 0; i < sectionMatch.length; i++) {
          for (let j = 0; j < sectionMatch[i].models.length; j++) {
            if (sectionMatch[i].models[j] === car) {
              $scope.partsList.push(sectionMatch[i].name)
            }
          }
        }
      })
  }

  $scope.populateLabor = (part) => {
    $scope.laborList = []
    DataFactory.setPart(part)
    for (let i = 0; i < trinkets.length; i++) {
      if (trinkets[i].name === part) {
        MathFactory.setPartSum(trinkets[i].cost)
        $scope.laborList.push(trinkets[i].labor)
      }
    }
  }

  $scope.calculateLabor = (labor) => {
    let opcodeArray = []
    let laborHours = null
    DataFactory.setOpcode(labor)
    DataFactory.getLabor()
      .then((opcodes) => {
        for (let i = 0; i < opcodes.length; i++){
          if (opcodes[i].name === labor){
            opcodeArray.push(opcodes[i])
          }
        }
        for (let i = 0; i < opcodeArray.length; i++) {
          for (let j = 0; j < opcodeArray[i].largeCars.length; j++) {
            if (opcodeArray[i].smallCars[j] === car) {
              laborHours = opcodeArray[i].smallRate
            }
          }
        }
        for (let i = 0; i < opcodeArray.length; i++) {
          for (let j = 0; j < opcodeArray[i].largeCars.length; j++) {
            if (opcodeArray[i].largeCars[j] === car) {
              laborHours = opcodeArray[i].largeRate
            }
          }
        }
        MathFactory.setLaborSum(laborHours)
      })

  }

  $scope.resetPage = () => {
    $scope.model = ''
    $scope.sectionsList = []
    $scope.partsList = []
    $scope.laborList = []
  }

  $scope.startOver = () => {
    $scope.model = ''
    $scope.sectionsList = []
    $scope.partsList = []
    $scope.laborList = []
    $location.url('/dealer')
  }

  $scope.claimConfirm = () => {
    DataFactory.pendingClaim()
    $location.url('/confirm')
    }



})