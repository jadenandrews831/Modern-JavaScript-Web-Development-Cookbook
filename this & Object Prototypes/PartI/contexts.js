/*
  Many libraries' functions, and indeed many new built-in functions
  in the JavaScript language and host environment, provide an optional 
  parameter, usually called "context", which is designed as a work-around 
  for you  not having to use bind(..) to ensure your callback function 
  uses a particular this.
*/

function foo(el)
{
  console.log(el, this.id)
}

var obj =
{
  id: "awesome"
};

[1,2,3].forEach(foo, obj); //<- Awesome! I didn't know that this existed!