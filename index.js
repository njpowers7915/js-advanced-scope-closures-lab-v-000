function produceDrivingRange(blockRange) {
  return function(start, end) {
    startInt = parseInt(start.slice(0, -2))
    endInt = parseInt(end.slice(0, -2))
    if ((endInt - startInt) <= blockRange) {
      return `within range by ${blockRange - (endInt - startInt)}`
    } else {
      return `${(endInt - startInt) - blockRange} blocks out of range`
    }
  }
}

function produceTipCalculator(tip) {
  return function(fare) {
    return fare * tip
  }
}
