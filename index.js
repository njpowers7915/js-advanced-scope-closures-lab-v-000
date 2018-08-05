function produceDrivingRange(blockRange) {
  return function(start, end) {
    if ((end - start) <= blockRange) {
      return `within range by ${blockRange - (end - start)}`
    } else {
      return `${(end - start) - blockRange} blocks out of range`
    }
  }
}

function produceTipCalculator() {

}
