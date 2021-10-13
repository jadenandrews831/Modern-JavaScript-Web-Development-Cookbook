/*
  Explicit binding takes precedence over implicit binding

  Global Code: I believe that since I am referencing the same global object with different javascript pages, 
  objects, functions, variables etc with global scope will be retained over prohects.
*/

function foo()
{
  console.log( this.a );  //<-- default binding
}

var obj1 = {
  a: 2,
  foo: foo                //<-- implicit binding
}

var obj2 = 
{
  a: 3, 
  foo: foo                //<-- implicit binding
}

console.log("eb_over_ib.js");

obj1.foo();                // <-- implicit binding call
obj2.foo();               // <-- implicit binding call

obj1.foo.call(obj2); // <- SEE HERE: explicit binding takes precedence...(should be '3')
obj2.foo.call(obj1);