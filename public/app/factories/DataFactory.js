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

  const getDealer = () => {
    return currentDealer
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

  // const getSection = () => {
  //   return chosenSect
  // }


  const getVehicles = () => {
    let cars = []
    return $q((resolve, reject) => {
      $http.get('/api/vehicles')
        .success((returnedData) => {
          console.log("data", returnedData)
          cars = returnedData
          resolve(cars)
        })
        .error((err) => {
          reject(err)
        })
    })
  }

  const getSections = () => {
    let sections = []
    return $q((resolve, reject) => {
      $http.get('/api/sections')
        .success((returnedData) => {
          console.log("data", returnedData)
          sections = returnedData
          resolve(sections)
        })
        .error((err) => {
          reject(err)
        })
    })
  }

  const getParts = () => {
    let parts = []
    return $q((resolve, reject) => {
      $http.get('/api/parts')
        .success((returnedData) => {
          console.log("data", returnedData)
          parts = returnedData
          resolve(parts)
        })
        .error((err) => {
          reject(err)
        })
    })
  }

  const getLabor = () => {
    let labor = []
    return $q((resolve, reject) => {
      $http.get('/api/labor')
        .success((returnedData) => {
          console.log("data", returnedData)
          labor = returnedData
          resolve(labor)
        })
        .error((err) => {
          reject(err)
        })
    })
  }


  return { setDealer, getDealer, getDealers, setBrand, getBrand, setSection, getSections, getVehicles, getParts, getLabor }
})