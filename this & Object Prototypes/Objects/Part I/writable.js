console.log("writable.js");

var myObject = {};

Object.defineProperty( myObject, "a", 
{
  value: 2, 
  writable: false, 
  enumerable: true,
  configurable: true
});

myObject.a = 3;
console.log(myObject.a)                   // 2