const { expect } =  require('chai')
const chp1 = require('./chp1')

/*import { expect } from 'chai'
import chp1 from './chp1'*/

// Test if a string has unique characters.
describe('chapter1-q1: hasUniqueCharacters', function() {

  // List test variables for test to pass
  [
    'abcdefghi',
    'jklpoiuqwerzxcvmnsadf',
    '1234567890',
    'AaBbCcDdeFg1234567890(*&^%$#@!)'
  ].forEach(arg => { // Run each test variable through the function.

    it(`returns true for unique string: ${arg}`, function() {
      expect(chp1.hasUniqueCharacters(arg)).to.be.true
    })
  });

  // List test variables for test to fail
  [
    'abcdabdh',
    'jklpoiuqsjdhfca',
    '123454545',
    'AaBbCcDdeFg1234567890(*&^&#@!)'
  ].forEach(arg => { // Run each test variable through the function.

    it(`returns false for duplicated string: ${arg}`, function() {
      expect(chp1.hasUniqueCharacters(arg)).to.be.false
    })
  })
})


// Test if one string is a permutation of the other.
describe('chapter1-q2: isPermutation', function() {
  
  // Test cases which pass.
  [
    ['madeit', 'itadme'],
    ['alcatel', 'telcaal'],
    ['02o', 'o02'],
    ['maze', 'zeam']
  ].forEach(arg => {

    it(`returns true for strings that are permutations: ${arg[0]} & ${arg[1]}`, function() {
      expect(chp1.isPermutation(arg[0], arg[1])).to.be.true
    })
  });

  // Test cases which fail.
  [
    ['madeit', 'meanit'],
    ['whatelse', 'yourface']
  ].forEach(arg => {

    it(`returns false for strings that not permutations: ${arg[0]} & ${arg[1]}`, function() {
      expect(chp1.isPermutation(arg[0], arg[1])).to.be.false
    })
  })
})


/* Easy tests
console.log(chp1.replaceSpace("Mt John Smith    ", 13))
console.log(chp1.oneAway('pale', 'ple'))
console.log(chp1.isRotatedSubstring('pale', 'ple'))
console.log(chp1.zeroMatrix([
          [ 1,  2,  3,  4],
          [ 5,  6,  7,  8],
          [ 9,  0, 11, 12],
          [13, 14, 15,  0],
          [17, 18, 19, 20]
        ]))*/
