let name = "";
let count = 0;

let get = () => count;
let inc = () => ++count;
let toString = () => `${name}: ${get()}`;

/*
  Since we cannot initialize anything otherwise,
  a common pattern is to provide a "init()" function
  to do all necessary initializations.
*/

const init = (n) => {
  name = n;
};

export default { inc, toString, init };
