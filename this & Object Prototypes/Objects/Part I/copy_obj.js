function anotherFunction()  {/*.. */}

var anotherObject = 
{
  c: true
};

var anotherArray = [];

var myObject = 
{
  a: 2,
  b: anotherObject,
  c: anotherArray,
  d: anotherFunction
}

anotherArray.push( anotherObject, myObject );

/*.assign()*/

var newObj = Object.assign( {}, myObject )

newObj.a;                                     //  2
newObj.b === anotherObject;                   // true
newObj.c === anotherArray;                    // true
newObj.d === anotherFunction;                 // true