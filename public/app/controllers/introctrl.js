'use strict';

app.controller("IntroCtrl", function($scope, $location) {
  //----change background image----//
  const changeImg = () => {
    $('body').css('background-image', 'url(../img/grayedgears.png)')
    $('body').css('background-position-y', "0")
  }
  changeImg()

  //----BUTTONS----//
  $scope.enterSite = () => {
    $location.url('/dealer')
  }

})