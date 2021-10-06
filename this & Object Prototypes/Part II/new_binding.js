/*
  New Binding

  By calling foo(..) with new in fron of it,
  we've constructed a new object and set that new 
  object as the 'this' for the call of foo(..)
*/

function foo(a)
{
  this.a = a;
}

var bar = new foo( 2 );
console.log( bar.a );