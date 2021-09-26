// Remember that in a try/catch statement, the 'catch' statement is block scoped
/* 
  try 
  {
    undefined(); // illegal operation to force an exception!
  }
  catch(err)
  {
    console.log( err ); // works!
  }

  console.log( err ); // ReferenceError: 'err' not found
*/

/*
  Something to remember about DOM

  function process(data)
  {
    // do something interesting
  }

  var someReallyBigData = {..};

  process( someReallyBigData );

  var btn = document.getElementById( "my_button" );

  btn.addEventListener( "click", function click(evt) // addEventListener is something you should remember for future reference.
  {
    console.log("button clicked");
  }, /*)
*/