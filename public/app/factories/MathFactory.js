'use strict';

app.factory('MathFactory', function() {
  let dealerRate = null
  let laborSum = null
  let partsSum = null
  let claimSum = null

  const setRate = (rate) => {
    dealerRate = rate
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
    laborSum = labor * dealerRate
    makeClaimSum()
  }

  const getLaborSum = () => {
    return laborSum
  }

  const getClaimSum = () => {
    return claimSum
  }


return {setRate, setPartSum, getPartSum, setLaborSum, getLaborSum, makeClaimSum, getClaimSum}
})