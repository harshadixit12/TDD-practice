'use strict'

const Sum = require('./sum');

class Bank {
    reduce (source, to) {
        const sum = Object.assign(new Sum(), source);
        return sum.reduce(to);
    }

    addRate () {
        
    }
}

module.exports = Bank;