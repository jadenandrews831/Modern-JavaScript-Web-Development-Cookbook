/*
  There are two requirements for the modlue pattern to be excersied:

    1) There must be an outer enclosing function, and it must be invoked at least once (each time creates a new module instance).
    2) The enclosing function must return back at least one inner function, so that this inner function has closure over the private
        scope, and can access and/or modify that private state.
*/

function CoolModule()
{
  var something = "cool";
  var another = [1, 2, 3];

  function doSomething()
  {
    console.log( something );
  }

  function doAnother()
  {
    console.log(another.join(" ! "))
  }

  return {
    doSomething: doSomething,
    doAnother: doAnother
  };
}


var foo = CoolModule();

foo.doSomething();
foo.doAnother();

// Modern Modules

var MyModules = (function Manager()
{
  var modules = {};

  function define(name, deps, impl)
  {
    for(var i=0; i<deps.length; i++)
    {
      deps[i] = modules[deps[i]];
    }
    modules[name] = impl.apply(impl, deps);
  }

  function get(name)
  {
    return modules[name];
  }

  return {
    define: define,
    get: get
  };
  
})();

MyModules.define( "bar", [], function()
{
  function hello(who)
  {
    return "Let me introduce: " + who;
  }

  return {
    hello: hello
  }
});

MyModules.define( "foo", ['bar'], function(bar)
{
  var hungry = "hippo";

  function awesome()
  {
    console.log(bar.hello( hungry ).toUpperCase());
  }

  return {
    awesome: awesome
  }
});

var bar = MyModules.get( "bar" );
var food = MyModules.get( "foo" );

console.log(bar.hello("hippo"));

food.awesome();


