/*
  Explicit binding takes precedence over implicit binding

  Global Code: I believe that since I am referencing the same global object with different javascript pages, 
  objects, functions, variables etc with global scope will be retained over prohects.
*/

function foo()
{
  console.log( this.a );
}

var obj1 = {
  a: 2,
  foo: foo
}

var obj2 = 
{
  a: 3, 
  foo: foo
}

console.log("eb_over_ib.js");

obj1.foo(); // <-- implicit binding
obj2.foo();

obj1.foo.call(obj2); // <- SEE HERE: explicit binding takes precedence...
obj2.foo.call(obj1);