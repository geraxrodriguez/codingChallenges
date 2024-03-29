// This kata is designed to test your ability to extend the functionality of built-in classes. In this case, we want you to extend the built-in Array class with the following methods: square(), cube(), average(), sum(), even() and odd().

// Explanation:

// square() must return a copy of the array, containing all values squared
// cube() must return a copy of the array, containing all values cubed
// average() must return the average of all array values; on an empty array must return NaN (note: the empty array is not tested in Ruby!)
// sum() must return the sum of all array values
// even() must return an array of all even numbers
// odd() must return an array of all odd numbers
// Note: the original array must not be changed in any case!
// class Person {
//   constructor (_name, _age) {
//     this.name = _name;
//     this.age = _age;
//   }
//   describe () {
//     console.log(`I am ${this.name} and am ${this.age} years old`)
//   }
// }

// class Programmer extends Person {
//   constructor (_name, _age, _yearsOfExperience) {
//     super (_name, _age);
    
//     // Custom behavior
//     this.yearsOfExperience = _yearsOfExperience;
//   } 
//   code () {
//     console.log(`${this.name} is coding`)
//   }
// }

// let person1 = new Person('Jeff', 45)
// let programmer1 = new Programmer('Dom', 56, 12)

// console.log(person1)
// console.log(programmer1)

// const programmers = [
//   new Programmer('Dom', 56, 12),
//   new Programmer('Eerick', 24, 4)
// ]

// function developSoftware (programmers) {
//   for (let programmer of programmers) {
//     programmer.code()
//   }
// } 

// developSoftware(programmers)

Array.prototype.square  = function () {
    return this.map(function(n) { return n*n; }); 
}
Array.prototype.cube = function () {
    return this.map(num => Math.pow(num, 3))
}
Array.prototype.average = function () {
    return this.reduce((a,c) => a + c, 0) / this.length
}
Array.prototype.sum = function () {
    return this.reduce((a,c) => a + c, 0)
}
Array.prototype.even = function () {
    return this.filter(num => num % 2 === 0)
}
Array.prototype.odd = function () {
    return this.filter(num => num % 2 === 1)
}

Object.assign(Array.prototype, {
    square() {return this.map(n => n * n);},
    cube() {return this.map(n => Math.pow(n, 3));},
    sum() {return this.reduce((p,n) => p + n, 0);},
    average() {return this.reduce((p,n) => p + n, 0) / this.length;},
    even() {return this.filter(n => !(n % 2));},
    odd() {return this.filter(n => n % 2);}
});