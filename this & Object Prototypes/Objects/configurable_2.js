console.log("configurable_2.js");

var myObject = 
{
  a: 2
};

console.log(myObject.a)             // 2
delete myObject.a;
console.log(myObject.a)             // undefined

Object.defineProperty( myObject, "a",
{
  value: 2, 
  writable: true,
  configurable: false,
  enumerable: true
});

console.log(myObject.a)             // 2
delete myObject.a;
console.log(myObject.a)             // 2