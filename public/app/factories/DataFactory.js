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
    return $http.get('/api/dealer')
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

  const setVehicle = (car) => {
    selectModel = car
  }

  const setOpcode = (labor) => {
    chosenOpcode = labor
  }


  const getVehicles = () => {
    return $http.get('/api/vehicles')
  }

  const getSections = () => {
    return $http.get('/api/sections')
  }

  const getParts = () => {
    return $http.get('/api/parts')
  }

  const getLabor = () => {
    return $http.get('/api/labor')
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
  }

  const getClaimDraft = () => {
    return claimDraft
  }

  const postClaim = () => {
    $http.post('/api/claim', claimDraft)
  }

  const redoRepair = () => {
    claimDraft = {}
    selectModel = null
    chosenSect = null
    partReplaced = null
    chosenOpcode = null
    console.log("redoRepair", claimDraft)
  }

  const restartClaim = () => {
    claimDraft = {}
    currentDealer = null
    dealerRate = null
    currentBrand = null
    selectModel = null
    chosenSect = null
    partReplaced = null
    chosenOpcode = null
  }



  return { setDealer, getDealer, getDealers, setBrand, getBrand, setSection, getSections, getVehicles, getParts, getLabor, setPart, setVehicle, setOpcode, pendingClaim, getClaimDraft, postClaim, redoRepair, restartClaim }

})