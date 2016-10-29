'use strict';

app.factory('DataFactory', function($http, $q, MathFactory) {
  let currentDealer = null
  let dealerRate = null
  let currentBrand = null
  let selectModel = null
  let chosenSect = null
  let partReplaced = null
  let chosenOpcode = null



  const setDealer = (dealer) => {
    currentDealer = dealer
  }

  const getDealer = () => {
    return currentDealer
  }

  const getDealers = () => {
    // let dealers = []
    return $http.get('/api/dealer')
    // $q((resolve, reject) => {
    //   $http.get('/api/dealer')
    //     .success((returnedData) => {
    //       console.log("data", returnedData)
    //       dealers = returnedData
    //       resolve(dealers)
    //     })
    //     .error((err) => {
    //       reject(err)
    //     })
    // })
  }

  const setBrand = (brand) => {
    currentBrand = brand
  }

  const getBrand = () => {
    return currentBrand
  }

  const setSection = (section) => {
    chosenSect = section
  }

  const setPart = (part) => {
    partReplaced = part
  }

  // const getSection = () => {
  //   return chosenSect
  // }

  const setVehicle = (car) => {
    selectModel = car
  }

  const setOpcode = (labor) => {
    chosenOpcode = labor
  }


  const getVehicles = () => {
    // let cars = []
    return $http.get('/api/vehicles')
    // $q((resolve, reject) => {
    //   $http.get('/api/vehicles')
    //     .success((returnedData) => {
    //       console.log("data", returnedData)
    //       cars = returnedData
    //       resolve(cars)
    //     })
    //     .error((err) => {
    //       reject(err)
    //     })
    // })
  }

  const getSections = () => {
    // let sections = []
    return $http.get('/api/sections')
    // $q((resolve, reject) => {
    //   $http.get('/api/sections')
    //     .success((returnedData) => {
    //       console.log("data", returnedData)
    //       sections = returnedData
    //       resolve(sections)
    //     })
    //     .error((err) => {
    //       reject(err)
    //     })
    // })
  }

  const getParts = () => {
    // let parts = []
    return $http.get('/api/parts')
    // $q((resolve, reject) => {
    //   $http.get('/api/parts')
    //     .success((returnedData) => {
    //       console.log("data", returnedData)
    //       parts = returnedData
    //       resolve(parts)
    //     })
    //     .error((err) => {
    //       reject(err)
    //     })
    // })
  }

  const getLabor = () => {
    // let labor = []
    return $http.get('/api/labor')
    // $q((resolve, reject) => {
    //   $http.get('/api/labor')
    //     .success((returnedData) => {
    //       console.log("data", returnedData)
    //       labor = returnedData
    //       resolve(labor)
    //     })
    //     .error((err) => {
    //       reject(err)
    //     })
    // })
  }

  let claimDraft = {}

  const pendingClaim = () => {
    claimDraft = {
      dealer: currentDealer,
      model: selectModel,
      section: chosenSect,
      parts: partReplaced,
      labor: chosenOpcode,
      totalParts: MathFactory.getPartSum(),
      totalLabor: MathFactory.getLaborSum(),
      claimTotal: MathFactory.getClaimSum()
    }
    $http.post('/api/claim', claimDraft)
  }

  const getClaimDraft = () => {
    return claimDraft
  }


  return { setDealer, getDealer, getDealers, setBrand, getBrand, setSection, getSections, getVehicles, getParts, getLabor, setPart, setVehicle, setOpcode, pendingClaim, getClaimDraft }

})