'use strict'
//const Sum = require('./sum');

class Money {
    constructor (x, currency) {
        this.amount = x || 0;
        this.currencyName = currency;
    }

    equals (x) {
        const money = Object.assign(new Money(), x);
        return (this.amount === money.amount) && this.currencyName === money.currencyName;
    }

    static dollar (amount) {
        return new Money(amount, 'USD');
    }

    static franc (amount) {
        return new Money(amount, 'CHF');
    }

    currency () {
        return this.currencyName;
    }

    times (multiplier) {
        return new Money(this.amount * multiplier, this.currencyName);
    }

    plus (value) {
        console.log('Money plus', value, this);
        return new Sum(this, value);
    }

    reduce (bank, to) {
        const rate = bank.rate(this.currencyName, to);
    }
}

class Sum {
    constructor (augend, addend) {
        this.augend = augend;
        this.addend = addend;
    }

    reduce(to) {
        const amount = this.augend.amount + this.addend.amount;
        
        return new Money(amount, to);
    }
}

module.exports = Money;