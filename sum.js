'use strict'
const Money = require('./money');

class Sum {
    constructor (augend, addend) {
        this.augend = augend;
        this.addend = addend;
    }

    reduce(to) {
        console.log('Money constructor: ',Money);
        const amount = this.augend.amount + this.addend.amount;
        
        return new Money(amount, to);
    }
}

module.exports = Sum;