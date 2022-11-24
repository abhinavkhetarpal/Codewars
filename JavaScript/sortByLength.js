function sortByLength (array) {
    return array.sort((a,b) => a.length - b.length)
  };

// Refactored so as not to modify original array

function sortByLength (array) {
    return [...array].sort((a,b) => a.length - b.length)
}