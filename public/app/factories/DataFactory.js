'use strict';

app.factory('DataFactory', function(){
  let currentDealer = null
  let dealerRate = null
  let currentBrand = null
  let chosenSect = null

  const setDealer = (dealer) => {
    currentDealer = dealer
    console.log("dealer", currentDealer)
  }

  const getDealer = () => {
    return currentDealer
  }

  const setBrand = (brand) => {
    currentBrand = brand
    console.log("brand", currentBrand)
  }

  const getBrand = () => {
    return currentBrand
  }

  const setSection = (section) => {
    chosenSect = section
    console.log("section", chosenSect)
  }

  const getSection = () => {
    return chosenSect
  }




  return {setDealer, getDealer, setRate, getRate, setBrand, getBrand}
})