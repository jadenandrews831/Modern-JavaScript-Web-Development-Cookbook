/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
console.log("objectIteration.js");

var myObject = 
{
  a: 2,
  b: 3
};

Object.defineProperty( myObject, Symbol.iterator, 
{
  enumerable: false, 
  writable: false,
  configurable: true,
  value: function()
  {
    var o = this;
    var idx = 0;
    var ks = Object.keys( o );
    return {
      next: function()
      {
        return {
          value: o[ks[idx++]],
          done: (idx > ks.length)
        }
      }
    }
  }
});

//  iterate 'myObject' manually
var it = myObject[Symbol.iterator]();
console.log(it.next());
console.log(it.next());
console.log(it.next());

//  iterate 'myObject' with 'for..of'
for (var v of myObject)
{
  console.log(v);
}
