var isAnagram = function(test, original) {
    test = test.toLowerCase()
    original = original.toLowerCase()
    test = test.split("").sort().join("")
    original = original.split("").sort().join("")
    return test == original
  };

// Refactored

function isAnagram(test,original){
    test = test.toLowerCase().split("").sort().join("")
    original = original.toLowerCase().split("").sort().join("")
    return test == original
}