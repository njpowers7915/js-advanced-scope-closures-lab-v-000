function produceDrivingRange(blockRange) {
  return function(start, end) {
    startInt = parseInt(start.slice(0, -2))
    endInt = parseInt(end.slice(0, -2))
    if ((end - start) <= blockRange) {
      return `within range by ${blockRange - (end - start)}`
    } else {
      return `${(end - start) - blockRange} blocks out of range`
    }
  }
}

function produceTipCalculator() {

}
