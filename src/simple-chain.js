const CustomError = require("../extensions/custom-error");

const chainMaker = {

  chain: [],

  getLength() {
    return this.chain.length
  },

  addLink(value) {
    if (value === null) {
      value = 'null'
    }
    this.chain.push(value)
    return this
  },

  removeLink(position) {
    if ((typeof position === 'number') && ((position ^ 0) === position)) {
      if ((position < 1) || (position > this.chain.length)) {
        this.chain.length = 0
        throw new Error('Ooops')
      } else {
        this.chain.splice(position - 1, 1)
        return this
      }
    } else {
      this.chain.length = 0
      throw new Error('Ooops')
    }
  },

  reverseChain() {
    this.chain.reverse()
    return this
  },

  finishChain() {
    const answer = `( ${this.chain.join(' )~~( ')} )`
    this.chain.length = 0
    return answer
  }

};

module.exports = chainMaker;
