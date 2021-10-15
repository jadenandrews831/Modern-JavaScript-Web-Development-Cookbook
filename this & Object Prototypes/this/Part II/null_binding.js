/*
  apply(..) can be used for sprading out arrays of values as parameters to a function call
  this also applies to bind(..)
*/

function foo(a, b)
{
  console.log("a: " + a + " b: " + b);
}
console.log("null_binding.js");

foo.apply(null, [2, 3]);

var bar = foo.bind(null, 4);
bar(5);