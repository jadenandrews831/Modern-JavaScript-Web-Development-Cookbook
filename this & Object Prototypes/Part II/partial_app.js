console.log("partial_app.js");

function foo(p1, p2)
{
  this.val = p1 + p2;
}

/*
  Using 'null' here because we don't care about
  the 'this' hard-binding in this scenario, and
  it will be overridden by the 'new' call anyway!
*/
var bar = foo.bind(null, "p1");

var baz = new bar("p2");
console.log(baz.val);