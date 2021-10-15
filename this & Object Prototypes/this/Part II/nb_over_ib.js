function foo(something)
{
  this.a = something;
}

var obj1 = 
{
  foo: foo                        //<-- implicit binding
};

console.log("nb_over_ib.js");

var obj2 = {};

obj1.foo( 2 );                    //<-- implicit binding call... after this is called, obj1.a is 2
console.log( obj1.a );

obj1.foo.call(obj2, 3);           //<-- explicit binding call... after this is called, obj2.a is 3
console.log( obj2.a ); 

var bar = new obj1.foo( 4 ); // <-- new binding takes precedence over implicit binding
console.log( obj1.a );
console.log( bar.a )  // <-- SEE HERE