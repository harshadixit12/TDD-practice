const expect = require('chai').expect;
const Money = require('../money');
const Bank = require('../bank');

describe('Test Money.dollar arithmetic', function () {
    describe ('Tests multiplication', function () {
        it ('Should multiply correctly in happy flow', function () {
            var x = Money.dollar(5);
            const y = x.times(2);
            expect(y.amount).to.equal(10);
        })
    
        it ('Should result in 0 if no input', function () {
            x = Money.dollar();
            expect(x.amount).to.equal(0);
        })
    
        it ('Should multiply correctly with 0', function () {
            x = Money.dollar(5);
            const y = x.times(0);
            expect(y.amount).to.equal(0);
        })
    
        it('Should return a new object when times is used', function () {
            const x = Money.dollar(5);
            const y = x.times(2);
    
            expect(y.amount).to.equal(10);
    
            const z = x.times(10);
            expect(z.amount).to.equal(50);
        })
    })
    
    describe ('Test equality', function () {
        it ('Two objects with same amount should be equal', function () {
            const x = Money.dollar(5);
            const y = Money.dollar(5);
    
            expect(x.equals(y)).to.be.true;
        })
    
        it ('Two objects with different amount should be unequal', function () {
            const x = Money.dollar(5);
            const y = Money.dollar(20);
    
            expect(x.equals(y)).to.be.false;
        })
    })
})



describe('Compare two currencies', function () {
    it('Should test equality of franc and dollar', function () {
        const x = Money.franc(5);
            const y = Money.dollar(5);
    
        console.log(x);
        console.log(y);
        expect(x.equals(y)).to.be.false; // Two amounts are equal if their value and currency are same
    })
})

describe('Test currency', function () {
    it('Should currency of franc and dollar', function () {
        const x = Money.franc(5);
            const y = Money.dollar(5);
    
        console.log(x.currency);
        expect(y.currency()).to.equal('USD');
        expect(x.currency()).to.equal('CHF');
    })
})

describe('Test sum', function () {
    it('Should add if same currency', function () {
        const sum = Money.dollar(5).plus(Money.dollar(10));
        const bank = new Bank();
        const value = bank.reduce(sum, 'USD');
        expect(value.amount).to.equal(15);
    })

    it('Should test reduce for different currency', function () {
        const dollars = Money.dollar(5);
        const francs = Money.franc(10);
        const bank = new Bank();
        bank.addRate('CHF', 'USD', 2);
        const reduced = bank.reduce(francs, 'USD');
        expect(result.amount).to.equal(5);

    })

    it('Should add different currencies', function () {
        const five = Money.dollar(5);
        const sum = five.plus(Money.franc(10));
        const bank = new Bank();
        bank.addRate('CHF', 'USD', 2);
        const reduced = bank.reduce(sum, 'USD');

    })
})