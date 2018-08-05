function produceDrivingRange(range) {
  return function(start, end) {
    if ((end - start) <= range) {
      return `within range by ${range - (end - start)}`
    } else {
      return `${(end - start) - range} blocks out of range`
    }
  }
}

function produceTipCalculator() {
  
}