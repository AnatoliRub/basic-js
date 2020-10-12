const CustomError = require("../extensions/custom-error");
const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
class VigenereCipheringMachine {
  constructor(modification = true) {
    this.modification = modification
  }
  encrypt(message, key) {
    let start
    let j = 0
    let c = []
    let foundCoef

    if (message === undefined || key === undefined) throw new Error('THROWN')

    start = message.toUpperCase().split('')

    key = key.toUpperCase().split('')

    for (let i = 0; i < start.length; i++) {
      if (j > key.length - 1) {
        j = 0
      }
      if (alphabet.indexOf(start[i]) == -1) {
        c.push(start[i])
      } else {
        foundCoef = alphabet.indexOf(start[i]) + alphabet.indexOf(key[j])
        if (foundCoef > 25) {
          c.push(alphabet[foundCoef % 26])
        } else {
          c.push(alphabet[foundCoef])
        }
        j++
      }
    }
    return this.modification == true ? c.join('') : c.reverse().join('')
  }

  decrypt(message, key) {
    let start
    let j = 0
    let c = []
    let foundCoef

    if (message === undefined || key === undefined) throw new Error('THROWN')

    start = message.toUpperCase().split('')

    key = key.toUpperCase().split('')

    for (let i = 0; i < start.length; i++) {
      if (j > key.length - 1) {
        j = 0
      }
      if (alphabet.indexOf(start[i]) == -1) {
        c.push(start[i])
      } else {
        foundCoef = alphabet.indexOf(start[i]) - alphabet.indexOf(key[j])
        if (foundCoef < 0) {
          c.push(alphabet[25 + foundCoef + 1])
        } else {
          c.push(alphabet[foundCoef])
        }
        j++
      }
    }
    return this.modification == true ? c.join('') : c.reverse().join('')
  }
}

module.exports = VigenereCipheringMachine;
