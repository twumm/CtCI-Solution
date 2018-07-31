/**
 * Is Unique: Implement an algorithm to determine if a string has all
 * unique characters.
 * What if you cannot use additional data structures?
 */

let hasUniqueCharacters = (str) => {
  let strArray = new Set()
  for (let i = 0; i < str.length; i++) {
    if (strArray.has(str[i])) {
      return false
    }
      strArray.add(str[i])
  }
  return true;
}

// console.log(hasUniqueCharacters('sdtgj'))
