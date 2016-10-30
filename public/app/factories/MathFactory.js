'use strict';

app.factory('MathFactory', function() {
  let dealerRate = null
  let opcodeHours = null
  let laborSum = null
  let partsSum = null
  let claimSum = null

  const setRate = (rate) => {
    dealerRate = rate
  }

  const getRate = (rate) => {
    return dealerRate
  }

  const setPartSum = (cost) => {
    partsSum = cost
  }

  const getPartSum = () => {
    return partsSum
  }

  const makeClaimSum = (cost) => {
    claimSum = laborSum + partsSum
  }

  const setLaborSum = (labor) => {
    opcodeHours = labor
    laborSum = opcodeHours * dealerRate
    makeClaimSum()
  }

  const getLaborSum = () => {
    return laborSum
  }

  const getClaimSum = () => {
    return claimSum
  }

  const getLaborHours = () => {
    return opcodeHours
  }


return {setRate, getRate, setPartSum, getPartSum, setLaborSum, getLaborSum, makeClaimSum, getClaimSum, getLaborHours}
})