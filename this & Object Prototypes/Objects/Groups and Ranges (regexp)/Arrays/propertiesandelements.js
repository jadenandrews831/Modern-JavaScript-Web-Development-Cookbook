//  Match one 'd' followed by one or more b's followed by one 'd'
//  Remember matched b's and the following 'd'
//  Ignore case

const myRe = /d(b+)(d)/i;
const myArray = myRe.exec( 'cdbBdBsbz' );

console.log(myArray);