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


/**
 * Question 3
 * URLify: Write a method to replace all spaces in a string with '%20'.
 * You may assume that the string has sufficient space at the end to
 * hold the additional characters, and that you are given the "true"
 * length of the string.
 * 
 * EXAMPLE
 * Input: "Mt John Smith    ", 13
 * Output: "Mt%20John%20Smith"
 */


exports.replaceSpace = (str, length) => {
  let URLify = ''
  // Loop through the string and add %20 wherever there is space.
  for (let i = 0; i < length; i++) {
    if (str[i] === ' ') {
      URLify += '%20'
    }
    // In adding each letter to the returning string, trim spaces.
    URLify += str[i].trim()
  }
  return URLify
}


/**
 * Question 4
 * Palindrome Permutation: Given a string, write a function to check
 * if it is a permutation of a palindrome. A palindrome is a word or
 * phrase that is the same forwards and backwards. A permutation is a
 * rearrangement of letters.
 * The palindrome does not need to be limited to just dictionary words.
 * 
 * EXAMPLE
 * Input:     Tact Coa
 * Output:    True (permutations: "taco cat", "atco cta", etc.)
 */

exports.isPalindromePermutation = str => {
  if (!str) {
    return false
  }

  let chars = new Set()
  for (let char of str) {
    if (char !== ' ') {
      if (chars.has(char)) {
        chars.delete(char)
      }
      else {
        chars.add(char)
      }
    }
  }
  
  return chars.size <= 1
}

/**
 * Question 5
 * One Away: There are three types of edits that can be performed on
 * strings: insert a character, remove a character, or replace a character.
 * Given two strings, write a function to check if they are one edit
 * (or zero edits) away.
 * 
 * EXAMPLE
 * pale,  ple   -> true
 * pales, pale  -> true
 * pale,  bale  -> true
 * pale,  bake  -> false
 */

exports.oneAway = (str1, str2) => {
  // Return false if length is more than one.
  if ((str1.length - str2.length) > 1) {
    return false
  }

  let isEdited = false;
  for (let i = 0, j = 0; i < str1.length && j < str2.length; i++, j++) {
    if (str1[i] !== str2[j]) {
      if (isEdited) {
        // Second edit
        return false;
      }

      if (str1.length > str2.length) {
        j--; // Decrease j, we are deleting char from str1
      }
      else if (str1.length < str2.length) {
        i--; // Decrease i, we are deleting char from str2
      }
      isEdited = true;
    }
  }

  return true;
}


/**
 * Question 6
 * String Compression: Implement a method to perform basic string compression
 * using the counts of repeated characters. For example, the string
 * "aabcccccaaa" would become "a2b1c5a3". If the "compressed" string
 * would not become smaller than the original string, your method should
 * return the original string. You can assume the string has only
 * uppercase and lowercase letters (a-z).
*/
// for each char, count number of occurrences.
// if next char is different, return previous char and count
// repeat process on next char

exports.compressString = (str) => {
  let strCount = 0
  for (let i = 0; i < str.length; i++) {
    
  }
}
