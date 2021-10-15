/*
This wraps the specified function in logic that checks the 'this' at call-time and if it's 'global'
or 'undefined', uses a prespeficied alternate default (obj)
*/

if (!Function.prototype.softBind)
{
  Function.prototype.softBind = function(obj)
  {
    var fn = this;
    // capture any curried parameters
    var curried = [].slice.call( arguments, 1 );
    var bound = function()
    {
      return fn.apply(
        (!this || this === (window || global)) ?
          obj : this
        curried.concat.apply( curried, arguments )
      );
    };
    bound.prototype = Object.create( fn.prototype );
    return bound;
  };
}

function foo()
{
  console.log('name: ' + this.name)
}

var obj = { name: 'obj' },
    obj2 = { name: 'obj2' },
    obj3 = { name: 'obj3' };

var fooOBJ = foo.softBind( obj );
fooOBJ();                                                 // name: obj

obj2.foo = foo.softBind(obj)                              // name: obj2

fooOBJ.call( obj3 );                                      // name: obj3 ... here I notice that changes made by '.call()' are impermanent

setTimeout( obj2.foo, 10 );                               // name: obj

/*
  The soft-bound version of the 'foo()' function can be manually 'this-bound' to 'obj2' or 'obj3' as 
  shown, but it falls back to 'obj' if the default binding would otherwise apply.
*/