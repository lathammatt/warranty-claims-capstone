'use strict';

app.factory('MathFactory', function() {
  let laborRate = null
  let laborSum = null
  let partsSum = null
  let claimSum = null

  const setRate = (rate) => {
    laborRate = rate
    console.log("rate", rate)
  }

  const setPartSum = (cost) => {
    partsSum = cost
  }

  const getPartSum = () => {
    return partsSum
  }

  const setLaborSum = (labor) => {

  }

  const getLaborSum = () => {
    return laborSum
  }

  const setClaimSum = (cost) => {}

  const getClaimSum = () => {
    return claimSum
  }


return {setRate, setPartSum, getPartSum, setLaborSum, getLaborSum, setClaimSum, getClaimSum}
})