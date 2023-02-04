/* Instructions

Wolves have been reintroduced to Great Britain. You are a sheep farmer, and are now plagued by wolves which pretend to be sheep. Fortunately, you are good at spotting them.

Warn the sheep in front of the wolf that it is about to be eaten. Remember that you are standing at the front of the queue which is at the end of the array:

[sheep, sheep, sheep, sheep, sheep, wolf, sheep, sheep]      (YOU ARE HERE AT THE FRONT OF THE QUEUE)
   7      6      5      4      3            2      1
If the wolf is the closest animal to you, return "Pls go away and stop eating my sheep". Otherwise, return "Oi! Sheep number N! You are about to be eaten by a wolf!" where N is the sheep's position in the queue.

Note: there will always be exactly one wolf in the array.

/*

/* 
Parameters: array of strings - "wolf" (max 1) or "sheep"
Returns: string - "Pls go away and stop eating my sheep" or "Oi! Sheep number 1! You are about to be eaten by a wolf!"
Examples: warnTheSheep(["wolf","sheep","sheep"]) -> "Oi! Sheep number 2! You are about to be eaten by a wolf!"
          warnTheSheep(["sheep","sheep","wolf"]) -> "Pls go away and stop eating my sheep"
Pseudocode:
// if queue[queue.length-1] == "wolf" return "Pls go away and stop eating my sheep"
// else return `Oi! Sheep number ${queue.lastIndexOf('wolf')}! You are about to be eaten by a wolf!`
*/

function warnTheSheep(queue) {
    return queue[queue.length-1] == "wolf" ? 
      "Pls go away and stop eating my sheep" : 
      `Oi! Sheep number ${(queue.length) - (queue.indexOf('wolf')+1)}! You are about to be eaten by a wolf!`
  }

// Using Prettier Code Formatting

  function warnTheSheep(queue) {
    return queue[queue.length - 1] == "wolf"
      ? "Pls go away and stop eating my sheep"
      : `Oi! Sheep number ${
          queue.length - (queue.indexOf("wolf") + 1)
        }! You are about to be eaten by a wolf!`;
  }