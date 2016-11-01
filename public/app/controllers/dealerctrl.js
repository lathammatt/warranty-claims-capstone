'use strict';

app.controller("DealerCtrl", function($scope, $http, DataFactory, $location, MathFactory) {

  const changeImg = () => {
    $('body').css('background-image', 'url(../img/inside.png)')
    $('body').css('background-position-y', "0")
  }

  changeImg()

  let shops = {}
  $scope.dealerList = []
  let selection = null

  DataFactory.getDealers()
    .then((object) => {
      shops = object.data
    })

  $scope.brandSelect = (brand) => {
    DataFactory.setDealer(null)
    $scope.dealerList = []
    selection = brand
    for (let i = 0; i < shops.length; i++) {
      if (shops[i].brand === selection) {
        $scope.dealerList.push(shops[i].name)
      }
    }
  }

  $scope.dealerChoice = (choice) => {
    DataFactory.setDealer(choice)
    for (let i = 0; i < shops.length; i++) {
      if (shops[i].name === choice) {
        MathFactory.setRate(shops[i].rate)
        DataFactory.setBrand(shops[i].brand)
      }
    }
  }

  $scope.startClaim = () => {
    let check = DataFactory.getDealer()
    if (check === null) {} else {
      $location.url('/claim')
    }
  }
})