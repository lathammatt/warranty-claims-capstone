'use strict';

app.controller('ClaimCtrl', function($scope, $http, $location, DataFactory, MathFactory) {
  $scope.vehicleList = []
  $scope.sectionsList = []
  $scope.partsList = []
  $scope.laborList = []
  let brand = DataFactory.getBrand()
  let car = null
  let trinkets = {}

  //--------background picture change--------//
  const changeImg = () => {
    $('body').css('background-image', 'url(../img/engine.png)')
    $('body').css('background-position-y', "0")
  }
  changeImg()

  //-----get vehicle models and populate select menu----//
  DataFactory.getVehicles()
    .then((vehicles) => {
      for (let i = 0; i < vehicles.data.length; i++) {
        if (vehicles.data[i].brand === brand) {
          $scope.vehicleList.push(vehicles.data[i].name)
        }
      }
    })

  //----get sections based on model above, populate select menu---//
  $scope.populateSections = (vehicle) => {
    $scope.sectionsList = [] //----temp clear menu if vehicle model changed
    car = vehicle
    DataFactory.setVehicle(vehicle) //----store vehicle selected
    DataFactory.getSections()
      .then((sections) => {
        for (let i = 0; i < sections.data.length; i++) {
          $scope.sectionsList.push(sections.data[i].name) //---no match to vehicle name, but future option
        }
      })
  }

  //-----get parts based on section selected----//
  $scope.populateParts = (section) => {
    $scope.partsList = [] //----clear parts if section selection changes
    let sectionMatch = [] //----same as above
    DataFactory.setSection(section) //---store section
    DataFactory.getParts()
      .then((parts) => {
        trinkets = parts.data
        for (let i = 0; i < parts.data.length; i++) {
          if (parts.data[i].section === section) { //---match to section
            sectionMatch.push(parts.data[i])
          }
        }
        for (let i = 0; i < sectionMatch.length; i++) {
          for (let j = 0; j < sectionMatch[i].models.length; j++) {
            if (sectionMatch[i].models[j] === car) { //----push to menu only parts that belong to vehicle
              $scope.partsList.push(sectionMatch[i].name)
            }
          }
        }
      })
  }

  //----get labor for menu based on part selected----//
  $scope.populateLabor = (part) => {
      $scope.laborList = [] //----clear opcodes from menu if part changes
      let nameMatch = []
      DataFactory.setPart(part) //----store part selected
      for (let i = 0; i < trinkets.length; i++) {
        if (trinkets[i].name === part) { //----match parts.data with part name selected, push to array
          nameMatch.push(trinkets[i])
        }
      }
      for (let i = 0; i < nameMatch.length; i++) {
        for (let j = 0; j < nameMatch[i].models.length; j++) {
          if (nameMatch[i].models[j] === car) { //----match new array with vehicle, set part cost and labor menu
            MathFactory.setPartSum(nameMatch[i].cost)
            $scope.laborList.push(nameMatch[i].labor)
          }
        }
      }

    }
    //----save labor selection, determine hours, prepare claim for submission----//
  $scope.calculateLabor = (labor) => {
      let opcodeArray = [] //----clear labor menu if part changes
      let laborHours = null //----temp save of correct labor time
      DataFactory.setOpcode(labor) //---set opcode
      DataFactory.getLabor()
        .then((opcodes) => {
          for (let i = 0; i < opcodes.data.length; i++) {
            if (opcodes.data[i].name === labor) { //---find correct opcode in labor data
              opcodeArray.push(opcodes.data[i])
            }
          }
          for (let i = 0; i < opcodeArray.length; i++) {
            for (let j = 0; j < opcodeArray[i].largeCars.length; j++) {
              if (opcodeArray[i].smallCars[j] === car) {
                laborHours = opcodeArray[i].smallRate //---if vehicle takes small labor time
              }
            }
          }
          for (let i = 0; i < opcodeArray.length; i++) {
            for (let j = 0; j < opcodeArray[i].largeCars.length; j++) {
              if (opcodeArray[i].largeCars[j] === car) {
                laborHours = opcodeArray[i].largeRate //---if vehicle takes large labor time
              }
            }
          }
          MathFactory.setLaborSum(laborHours) //---throw labor time into final claim processing
        })

    }
    //------BUTTONS------//
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
    if (car === null || DataFactory.getSection() === null || DataFactory.getPart() === null || DataFactory.getOpcode() === null) {
      $('.error').html(`Please select option for each section`)
    } else {
      DataFactory.pendingClaim()
      $location.url('/confirm')
    }
  }



})