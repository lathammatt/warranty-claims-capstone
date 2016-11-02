'use strict';

app.controller("IntroCtrl", function($scope, $location) {

  const changeImg = () => {
    $('body').css('background-image', 'url(../img/grayedgears.png)')
    $('body').css('background-position-y', "0")
  }

  changeImg()

  $scope.enterSite = () => {
    $location.url('/dealer')
  }

})