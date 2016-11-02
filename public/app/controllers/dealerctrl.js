'use strict';

app.controller("DealerCtrl", function($scope, $http, DataFactory, $location, MathFactory) {
  //----change background image----//
  const changeImg = () => {
    $('body').css('background-image', 'url(../img/inside.png)')
    $('body').css('background-position-y', "0")
  }
  changeImg()


  let shops = {}
  $scope.dealerList = []

  //----temp store dealers----//
  DataFactory.getDealers()
    .then((object) => {
      shops = object.data
    })

  //----populate dealers menu based on selected brand----//
  $scope.brandSelect = (brand) => {
      DataFactory.setDealer(null) //---clear dealer if brand changes
      $scope.dealerList = [] //---same as above
      for (let i = 0; i < shops.length; i++) {
        if (shops[i].brand === brand) { //---match to brand, push names to menu
          $scope.dealerList.push(shops[i].name)
        }
      }
    }
    //----take dealer choice, save rate, name, and brand----//
  $scope.dealerChoice = (choice) => {
      DataFactory.setDealer(choice)
      for (let i = 0; i < shops.length; i++) {
        if (shops[i].name === choice) {
          MathFactory.setRate(shops[i].rate)
          DataFactory.setBrand(shops[i].brand)
        }
      }
    }
    //----BUTTONS----//
  $scope.startClaim = () => {
    if (DataFactory.getDealer() === null || DataFactory.getBrand() === null) {
      $('.error').html(`Please select option for each section`)
    } else {
      $location.url('/claim')
    }
  }
})