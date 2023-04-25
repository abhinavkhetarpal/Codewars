/* Instructions

You're re-designing a blog, and the blog's posts have the Weekday Month Day, time format for showing the date and time when a post was made, e.g., Friday May 2, 7pm.

You're running out of screen real estate, and on some pages you want to display a shorter format, Weekday Month Day that omits the time.

Write a function that takes the website date/time in its original string format and returns the shortened format.

*/

/*
Parameters: string
Returns: string
Examples: shortenToDate("Friday May 2, 7pm") -> "Friday May 2"
          shortenToDate("Monday December 31, 11pm") -> "Monday December 31"
Pseudocode:
  find the index of the comma character
  slice from 0 to that index
*/

function shortenToDate(longDate) {
    return longDate.slice(0,longDate.indexOf(","))
}

// Alternative Solution

function shortenToDate(longDate) {
    return longDate.split(",")[0]
}

// Solution Using Destructuring Assignment Syntax

function shortenToDate(longDate){
    const [date,time] = longDate.split(",")
    return date
}