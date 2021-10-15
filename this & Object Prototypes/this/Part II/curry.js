/*
  bind(..) has the ability to default any argumets passed after the first 
  'this' binding as standard arguments to the underlying function ( called 
  partial application, a subset of currying )

  currying - in mathematics and computer science, currying is the act of converting
              a function that takes multiple arguments into a sequence of function,
              each with a single argument.
*/

function foo(p1, p2)
{
  this.val = p1 + p2;
}

/*
  using 'null' here because we don't care about
  the 'this' hard-binding in this scenario, and
  it will be overridden by the 'new' call anyway
*/

var bar = foo.bind(null, "p2");

var baz = new bar("p1");  //p2p1

console.log(baz.val); //<-- Notice that some of the parameters are already filled.


