/* @flow */

import myCounter from "./module_counter.mjs";

myCounter.init("Clicks");

myCounter.inc()
myCounter.inc()
myCounter.inc()
myCounter.inc()
console.log(myCounter.toString())


