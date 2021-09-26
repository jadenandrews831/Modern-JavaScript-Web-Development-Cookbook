// examples of closure
function foo()
{
  var a = 2;
  function bar()
  {
    console.log( a );
  }

  return bar;
}

var baz = foo();

baz();


var fn;

function food()
{
  var a = 2;
  function baz()
  {
    console.log(a);
  }

  fn = baz();
}

function bar()
{
  fn;
  console.log("this still works");
}

food();

bar();

function wait(message)
{
  setTimeout( function timer()
  {
    console.log( message );
  }, 1000);
}

wait("Hello, closure!");

for(let i=1; i<=5; i++)
{
  setTimeout(function()
  {
    console.log(i)
  }, i*1000);
}