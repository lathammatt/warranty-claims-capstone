'use strict';

app.factory('DataFactory', function(){
  let currentDealer = null

  let setDealer = (dealer) => {
    currentDealer = dealer
    console.log("setting", currentDealer)
  }

  let getDealer = () => {
    console.log(currentDealer)
    return currentDealer
  }

  return {setDealer, getDealer}
})