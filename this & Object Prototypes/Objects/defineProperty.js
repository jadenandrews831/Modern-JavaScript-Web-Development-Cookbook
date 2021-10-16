console.log("defineProperty.js");

var myObject = {};

Object.defineProperty( myObject, "a", {
  value: 2,
  writable: true,
  enumerable: true,
  configurable: true
});

console.log(myObject.a);                  // 2