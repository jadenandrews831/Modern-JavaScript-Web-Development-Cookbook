const fruit = [];
fruit.push('banana', 'apple', 'peach');
console.log(fruit.length)                  //  3

/*
  When setting a property on a JavaScript array when the property is a valid array index and that index is outside the 
  current bounds of the array, the engine will update the array's 'length' property accordingly.
*/

fruit[5] = 'mango';                        
console.log(fruit[5]);                     //  'mango'
console.log(Object.keys(fruit));           //  '["0", "1", "2", "5"] (4)'
console.log(fruit.length);                 //  6
console.log(fruit);                        //  '["banana", "apple", "peach", 5: "mango"] (6)'

// Increasing the 'length' property
fruit.length = 10;
console.log(fruit);                        // '["banana", "apple", "peach", 5: "mango"] (10)'
console.log(Object.keys(fruit));           // '["0", "1", "2", "5"] (4)'
console.log(fruit.length);                 // 10
console.log(fruit[8]);                     // undefined

// Decreasing the 'length' property
fruit.length = 2;
console.log(Object.keys(fruit));
console.log(fruit.length);

//Array.prototpye.entries()
console.log(fruit);
console.log(fruit.entries());