function foo(something)
{
  this.a = something;
}

var obj1 = 
{
  foo: foo
};

console.log("nb_over_ib.js");

var obj2 = {};

obj1.foo( 2 );
console.log( obj1.a );

obj1.foo.call(obj2, 3);
console.log( obj2.a ); // <-- this creates a property 'a' for obj2

var bar = new obj1.foo( 4 ); // <-- new binding takes precedence over implicit binding
console.log( obj1.a );
console.log( bar.a )  // <-- SEE HERE