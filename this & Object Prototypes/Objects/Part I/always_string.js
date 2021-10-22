console.log("always_string.js");

var myObject = {};

myObject[true] = 'foo';
myObject[3] = 'bar';
myObject[myObject] = 'baz';

console.log(myObject["true"]);              //  "foo"
console.log(myObject["3"]);                 //  "bar"
console.log(myObject["[object Object]"]);   //  "baz"
