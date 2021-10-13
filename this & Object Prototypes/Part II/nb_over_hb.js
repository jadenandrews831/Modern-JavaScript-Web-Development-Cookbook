/*
  When new is applied, we get a newly created object back
*/

function foo(something)
{
  this.a = something;
}

var obj1 = {};

var bar = foo.bind( obj1 );
bar( 2 );
console.log(obj1.a); // 2

var baz = new bar( 3 ); // <-- SEE HERE new binding takes precedence over explicit binding
console.log( obj1.a ); // 2
console.log( baz.a );  // 3