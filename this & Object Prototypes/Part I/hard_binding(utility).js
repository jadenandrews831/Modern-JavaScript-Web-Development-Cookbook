function foo(something)
{
  console.log(this.a, something);
  return this.a + something;
}

var obj = 
{
  a: 2
}

console.log("hard_binding(utility).js");
var bar = foo.bind(obj); // bind returns a new function that is hardcoded to call the original function with the this context set as your specified
var b = bar(3);

console.log( b );