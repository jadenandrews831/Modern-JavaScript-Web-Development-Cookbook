/* eslint-disable no-func-assign */
/*
 DISCVOERY:

 In the browser environment, variables retain their values across programs 
 i.e. foo() defined in explicit_binding.js
 */

function foo()
{
  console.log(this.a);
}

var obj =
{
  a:2
}

foo.call(obj);


function fo() //<-
{
  console.log( this.a );
}

obj = 
{
  a: 2
}

var bar = function()
{
  fo.call(obj);
};
bar();
setTimeout( bar, 1000 );

bar.call(window);

