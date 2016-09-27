// long1
var words = ["hello", "what", "is", "up", "dude"]

function lengths () {
  var arrlength = []
  words.forEach(function (word) {
    var count = word.length
    arrlength.push(count)
  })
  return arrlength
}
lengths(words)

// short4
function sumArray ([a,b,c,d]) {
  var sum = a + b + c + d
  return sum
}
sumArray([1,2,3,4])

function multiplyArray ([a,b,c,d]) {
  var product = a * b * c * d
  return product
}
multiplyArray([1,2,3,4])


// short7
var words = ["hello", "what", "is", "up", "dude"]

function findLongestWords () {
  var longestWordsLength = 0
  words.forEach(function (word) {
    if(longestWordsLength < word.length) {
      longestWordsLength = word.length
    }
  })
  return longestWordsLength
}
findLongestWords(words)

// short8
var result = false
var words = ["hello", "what", "is", "up", "dude"]

function filterLongWords (arr, x) {
  words.forEach(function (word) {
    if (word.length > x) {
      return word
    } else {
      result = false
      return result
    }
  })
}
filterLongWords(words, 4)


// find the longest words in a string
// hint: split & reduce

var str = "The quick brown fox jumped over the lazy dog";

var single = str.split(' ')


// find the largest number in array of array
// hint: map and reduce

var arrOfArr =
    [
      [4, 5, 1, 3],
      [13, 27, 18, 26],
      [32, 35, 37, 39],
      [1000, 1001, 857, 1]
    ];



// output ==> [ 5, 27, 39, 1001 ]
