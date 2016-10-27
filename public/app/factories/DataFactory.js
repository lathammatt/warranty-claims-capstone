'use strict';

app.factory('DataFactory', function($http, $q) {
  let currentDealer = null
  let dealerRate = null
  let currentBrand = null
  let chosenSect = null

  const setDealer = (dealer) => {
    currentDealer = dealer
    console.log("dealer", currentDealer)
  }

  const getDealers = () => {
    let dealers = []
    return $q((resolve, reject) => {
      $http.get('/api/dealer')
        .success((returnedData) => {
          console.log("data", returnedData)
          dealers = returnedData
          resolve(dealers)
        })
        .error((err) => {
          reject(err)
        })
    })
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




  return { setDealer, getDealers, setBrand, getBrand, setSection, getSection }
})