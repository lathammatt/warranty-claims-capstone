'use strict';

app.factory('DataFactory', function(){
  let currentDealer = null
  let dealerRate = null
  let currentBrand = null

  let setDealer = (dealer) => {
    currentDealer = dealer
    console.log("dealer", currentDealer)
  }

  let getDealer = () => {
    return currentDealer
  }

  let setRate = (rate) => {
    dealerRate = rate
    console.log("rate", dealerRate)
  }

  let getRate = () => {
    return dealerRate
  }

  let setBrand = (brand) => {
    currentBrand = brand
    console.log("brand", currentBrand)
  }

  let getBrand = () => {
    return currentBrand
  }




  return {setDealer, getDealer, setRate, getRate, setBrand, getBrand}
})