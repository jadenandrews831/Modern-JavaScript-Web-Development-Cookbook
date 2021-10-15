/*
  Arrow-functions are signified not by the 'function' keyword, but by the so-called 'fat arrow' operator, =>
  Arrow-functions adopt the 'this' binding from the enclosing (function or global) scope
*/

var a = 5;

function foo()
{
  // return an arrow function
  /*
    The arrow-function created here lexically captures whatever 'foo()'s 'this' is at call time.
    Since 'foo()' was 'this-bound' to 'obj1', bar ( a reference to the returned arrow-function )
    will also be 'this-bound' to 'obj1'. The lexical binding of an arrow-function cannot be overridden
    (even with new!) (see below)
  */
  return (a) =>
  {
    // 'this' here is lexically inherited from 'foo()'
    console.log( this.a );
  }
}

var obj =
{
  a: 2
};

var obj2 =
{
  a: 3
};

var bar = foo.call( obj );
bar.call( obj2 );

// below
/*
  The most common use case will likely be in the use of callbacks, such as event handlers or timers:
*/

function food()
{
  setTimeout(() => {
    // 'this' here is lexically inherited from 'foo()'
    console.log( this.a )
  }, 1000);
}

var obj1 =
{
  a: 4
}

food.call( obj1 );                                        // 4