function foo()
{
  console.log("foo");
}

var someFoo = foo;                //  variable reference to 'foo'

var myObject = 
{
  someFoo: foo
};

foo;                              //  function foo(){..}

someFoo;                          //  function foo(){..}

myObject.someFoo;                 //  function foo(){..}

