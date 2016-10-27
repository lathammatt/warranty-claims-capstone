'use strict';

app.factory('MathFactory', function(){
  let laborRate = null
  let laborSum = null
  let partsSum = null
  let claimSum = null

  const setRate = (rate) => {
    dealerRate = rate
    console.log("rate", dealerRate)
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

const setClaimSum = (cost) => {
}

const getClaimSum = () => {
  return claimSum
}



})