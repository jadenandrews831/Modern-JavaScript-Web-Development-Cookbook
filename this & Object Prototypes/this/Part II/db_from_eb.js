/*
  Its quite common to use 'apply(..)' for spreading out arrays of values as parameters to a function call. 
  Similary, 'bind(..)' can curry parameters (preset values), which can be very helpful:

  Both these utilites require a 'this' binding for the first parameter. If the functions in question don't 
  care about 'this', you need a placeholder value, and null might seem like a reasonable choice as shown 
  in this snippet

  ES6 also has the spread operator, which will let you syntactically "spread out" an array as parameters
  without needing 'apply(..)', such as 'foo(...[1, 2])', which amounts to foo(1,2) -- syntactically avoiding
  a 'this' binding if it's unnecessary. Unfortunately, there's no ES6 syntactic substitute for currying, so 
  'this' parameter of the 'bind(..)' call still needs attention.

  Using 'null' can sometimes lead to some unexpected consequences. Picture using 'null' against a function call
  and that function does make a 'this' reference, the default binding rule means it might inadvertently
  reference (or worse, mutate!) the global object. It may be safer to set up an object for 'this' that is
  guaranteed not to be an object that can create problematic side effects in your program. 
 */
function foo(a, b)
{
  console.log( "a:" + a +", b:" + b );
}

foo.apply( null, [2, 3] );

//currying with 'bind(..)'
var bar = foo.bind( null, 2 );
bar( 3 ); // a:2, b:3