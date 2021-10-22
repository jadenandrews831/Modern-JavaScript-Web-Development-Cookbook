var myObject =
{
  get a()
  {
    return 2;
  }
};

console.log("getter.js");

Object.defineProperty(
  myObject,                                     //  target
  "b",                                          //  property name
  {                                             //  descriptor 
    get: function(){ return this.a * 2 },       //  define a getter for 'b'
    enumerable: true                            // make sure 'b' shows up as an object property
  }
);

console.log(myObject.a);                        //  2
console.log(myObject.b);                        //  4

myObject.a = 3;
console.log(myObject.a);                        //  2



