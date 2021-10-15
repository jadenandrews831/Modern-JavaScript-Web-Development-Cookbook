/*
  SEE 
*/
function foo(a,b)
{
  console.log("a:" + a + ", b:" + b)
}

var ø = Object.create( null );            //<-- this is similar to '{ }', but without the delegation to Object.prototype, so it's "more empty" than just '{ }'

foo.apply( ø, [2, 3]);

var bar = foo.bind( ø, 2 );
bar(3);