'use strict';

app.factory('MathFactory', function() {
  let laborRate = null
  let laborSum = null
  let partsSum = null
  let claimSum = null

  const setRate = (rate) => {
    laborRate = rate
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
    laborSum = labor * laborRate
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