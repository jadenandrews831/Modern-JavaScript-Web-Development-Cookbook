var myObject = 
{
  a: 2
};
console.log("noExtensions.js");


Object.preventExtensions( myObject );
myObject.b = 3;
console.log( myObject.a );              //  2
console.log( myObject.b );              //  undefined
