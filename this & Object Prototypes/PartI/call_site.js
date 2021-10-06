/* eslint-disable no-func-assign */
/*
  call-site: the location in code where a 
  function is called (not where it is declared).

  call-stack: the stack of functions that have 
  been called to get us to the current moment in execution


*/

function baz()
{
  /*
    call-stack is: 'baz'
    so, our call-site is in the global scope
  */
  console.log("baz");
  bar(); //<-- call-site for 'bar'
}

function bar()
{
  /*
    call-stack is: 'baz' -> 'bar'
    so, our call0site is in 'baz'
   */
  console.log("bar");
  foo();
}

function foo()
{
  /*
    call-stack is: 'baz' -> 'bar' -> 'foo'
    so, our call-site is in 'bar'
  */
  console.log("foo");
}

baz(); //<-- call-site for 'baz'
console.log(" ");
/*
  DEFAULT BINDING: points the 'this' statement at the global object

  Variables declared in the global scope are synonymous 
  with global-object properties of the same name.

  If strict mode is in effect, the global object is not 
  eligible for the default binding, so the 'this' is instead set to undefined

  The overall 'this' binding rules are entirely based on the call-site, the global 
  object is only eligible for the default binding if the contents of foo() are not 
  running in strict mode; the strict mode state of the call-site of foo() is irrelevant.
*/

// EX 1:

// Default binding here applies to the function fall 'foo()', which points 
// 'this' at the global object.

foo = () =>
{
  console.log( this.a )
}

var a = 2;

foo();
console.log(" ");

/*
// EX 2: 

// If strict mode is in effect, the global object is not eligible for the 
// default binding, so the 'this' is instead set to 'undefined'

function foo()
{
  "use strict";

  console.log( this. a )
}

var a = 2;

foo();
*/

// EX 3:

//

foo = () =>
{
  console.log( this.a );
}

a = 2;

(function()
{
  "use strict";

  foo();
})();
console.log(" ");

/*
  IMPLICIT BINDING: When there is a context object for a function reference,
  that object should be used for the function call's this binding

  Containing(/Owning) Object: the context object
*/


// EX 1

// Notice the manner in which foo() is declared and then later added as a reference property onto 'obj'.
// Regardless of whether 'foo()' is initially declared on 'foo', or is added 
// as a reference later (as this snipped shows), in neither case is the function really "owned" or 
// "contained" by the 'obj' object.

foo = () => 
{
  console.log( this.a );
}

var obj = 
{
  a: 2,
  foo: foo
};
obj.foo();
console.log(" ");

// EX 2:

// Only the top/last level of an object property reference chain matters to the call-site

foo = () =>
{
  console.log( this. a );
}

var obj2 = {
  a: 42,
  foo: foo
}

var obj1 = {
  a: 2,
  obj2: obj2
}

obj1.obj2.foo(); // 42
console.log(" ")

/*
  IMPLICITLY LOST

  When an implicitly bound function loses that binding, it means that it falls back to the 
  default binding of either the global object or 'undefined'
*/

//EX 1

// Even though 'bar' appears to be a reference to 'obj.foo', it is really just another reference to 'foo' itself.
// The call-site here is 'bar', which is a plain, undecorated call, thus applies default binding.

foo = () =>
{
  console.log( this.a );
}

obj = {
  a: 2,
  foo: foo
}

bar = obj.foo; // function reference/alias!
a = "oops, global"; // 'a' also property on global object

bar(); // "oops, global"
console.log(" ");


foo = () =>
{
  console.log(this.a); 
}

function doFoo(fn)  
{
  // 'fn' is just another reference to 'foo'
  fn();
}

obj = 
{
  a: 2, 
  foo: foo
};

a = "oops, global(2)"; // 'a' also property on global object

doFoo( obj.foo );
console.log(" ");


foo = () =>
{
  console.log( this.a );
}

obj = 
{
  a: 2,
  foo: foo
};

var a = "oops, global(3)";

setTimeout( obj.foo, 10000 );
console.log(" ");

/***********/
/**
 Explicit Binding

 * Explicit binding alone does not offer any solution to the issue of a function 
 "losing" its intended this binding, or just having it paved over by a framework.
 */

