/* eslint-disable no-prototype-builtins */
console.log("impShadowing.js")

var anotherObject = {
  a:2
};

var myObject = Object.create(anotherObject)
console.log(anotherObject.a, myObject.a)                                           //  2 2

console.log(anotherObject.hasOwnProperty('a'), myObject.hasOwnProperty('a'))       // True False

myObject.a++                                                                       // oops, implicit shadowing!

console.log(anotherObject.a, myObject.a)                                           // 2 3
console.log(myObject.hasOwnProperty('a'))                                          // True
