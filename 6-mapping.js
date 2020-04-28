'use strict';

// Map object instead of key iteration

// Imperative

const marcus1 = {
    firstName: 'Marcus',
    middleName: 'Aurelius',
    lastName: 'Antonius',
};

const marcus2 = {};

for (const key in marcus1) {
    const prop = key.toLowerCase().replace('name', '');
    const value = marcus1[key].toUpperCase();
    marcus2[prop] = value;
}
console.log(marcus2);

// Functional

const omap = (obj, fn) => Object.keys(obj)
    .reduce((res, key) => {
        const [prop, val] = fn(key, obj[key]);
        res[prop] = val;
        return res;
    }, {});

const marcus3 = {
    firstName: 'Marcus',
    moddleName: 'Aurelius',
    lastName: 'Antonius',
};

const marcus4 = omap(marcus3, (key, val) => [
    key.toLowerCase().replace('name', ''),
    val.toUpperCase()
]);

console.log(marcus4);

