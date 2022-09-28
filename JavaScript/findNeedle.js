// First attempt

function findNeedle(haystack) {
    return 'found the needle at position ' + haystack.findIndex((x,i) => x == "needle")
  }

// Refactored

function findNeedle(haystack){
    return 'found the needle at position ' + haystack.indexOf("needle")
}