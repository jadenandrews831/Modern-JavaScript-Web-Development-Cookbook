function foo()
{
  console.log( this.a );
}

var a = 2;
var o = { a: 3, foo: foo }
var p = { a: 4, foo: foo };

console.log("indirection.js");

o.foo();                            // 3

(p.foo = o.foo)();                  //<-- o.foo() is a reference to function foo, so 'this.a' is a reference to the global object property, which is '2'.


/*
  Essentially, the right hand side is evaluated, and value 'foo()' is assigned to property 'foo' of object 'p'

  When 'foo()' is run, 'this' refers to the global object

  Whatever value is evaluated is then assigned to 'p.foo'
  
  Best way to put it is that the assignment 'o.foo = foo' is a reference to function foo. Whenever it is called, it refers
  to the current call site. If it is called relative to 'o', 'this' refers to 'o'. if it is relative to the global scope, 'this' 
  refers to the global object or undefined if in strict mode.
*/
a;