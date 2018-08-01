/**
 * Question 1
 * Is Unique: Implement an algorithm to determine if a string has all
 * unique characters.
 * What if you cannot use additional data structures?
 */

exports.hasUniqueCharacters = (str) => {
  let strArray = new Set()
  for (let i = 0; i < str.length; i++) {
    if (strArray.has(str[i])) {
      return false
    }
      strArray.add(str[i])
  }
  return true;
}

/**
 * Question 2
 * Check Permutation: Given two strings, write a method to decide if
 * one is a permutation of the other.
 */

exports.isPermutation = (str1, str2) => {
  if (str1.length === 0 || str1.length !== str2.length) {
    return false
  }
  // Convert the string to an array and sort them with quicksort.
  let str1Sorted = str1.split('').sort()
  let str2Sorted = str2.split('').sort()

  // Check if every variable in str1 is same as str2.
  return str1Sorted.every((v, i) => v === str2Sorted[i])
}
