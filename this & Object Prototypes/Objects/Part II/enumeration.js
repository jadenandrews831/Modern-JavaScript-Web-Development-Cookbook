/* eslint-disable no-prototype-builtins */
console.log("enumeration.js");

var myObject = {};

Object.defineProperty(
  myObject,
  "a",
  // make 'a' enumerable, as normal
  { enumerable: true, value: 2 }
);

Object.defineProperty(
  myObject,
  "b",
  // make 'b' NON-enumerable
  { enumeration: false, value: 3 }
);

console.log(myObject.b);

console.log("b" in myObject);

myObject.hasOwnProperty("b");                                 //  true

for (var k in myObject)
{
  console.log( k, myObject );                                 //  a -  2
}

console.log(myObject.propertyIsEnumerable("a"));              //  true
console.log(myObject.propertyIsEnumerable("b"));              //  false

console.log(Object.keys( myObject ));                         //  ["a"]
console.log(Object.getOwnPropertyNames( myObject ));          //  ["a", "b"]