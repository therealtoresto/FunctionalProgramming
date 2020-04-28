'use strict';

// Imperative

class Adder {
    constructor(initial) {
        this.value = initial;
    }
    add(value) {
        this.value += value;
        return this;
    }
    valueOf() {
        return this.value;
    }
}

const sum1 = new Adder(1).add(9).add(1).add(1).add(7);
console.log('Sum:', +sum1);

// Functional

const adder = initial => Object.assign(
    value => adder(initial + value),
    { valueOf: () => initial }
);

const sum2 = adder(1)(9)(1)(7);
console.log('Sum:', +sum2);

// Functional methods

const sum3 = add(1).add(9).add(1).add(7);
console.log('Sum:', +sum3);