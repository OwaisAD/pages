// Oddities
// 1. null is an object
console.log('type of null is: ',typeof null); //console.logs 'object'
// null is not a subtype of Object
console.log('null is an instance of Object?: ',null instanceof Object); //evaluates false

// 2. NaN is a number
console.log('type of NaN is Number?: ', typeof NaN); //console.logs 'Number'
console.log('NaN is equal to NaN?: ',NaN === NaN); //evaluates false (NaN is not equal to anythihg. To check we use build-in function: isNaN())

// 3. Array with no keys is falsy. Empty arrays evaluate to truthy but, when compared against a boolean, behave like a falsy
console.log('A new array without keys is false?: ',new Array() == false); //evaluates true
var someVar = []; //empty array
console.log('An empty array literal is false?: ',someVar == false); //evaluates true
if (someVar) console.log('someVar (the empty array now evaluates to true'); 
else  console.log('someVar is still false'); //console.log() runs, so someVar evaluates to true

// That is why we prefer ===
var someVar = 0;
console.log('the empty array is falsy', someVar == false); //evaluates true – zero is a falsy
console.log('the empty array is falsy but not a boolean with the value: false. Comparing with === evaluates to: ',someVar === false); //evaluates false – zero is a number, not a boolean

// 4. Self-invoking functions
(function() { console.log('Function declared and envoked in one statement'); })(); //says 'hello'

// 5. callbacks
console.log('callbacks use the enviroment at the time of running')
var someVar = 'hello';
setTimeout(function() { console.log('someVar has changed a long time ago and thefore is "goodbye"',someVar); }, 1000); //console.logs 'goodbye' as the variable is reset before callback runs
var someVar = 'goodbye'; 

// Now it says hello
var someVar = 'hello';
setTimeout((function(someVar) {
    return function()  { console.log('someVar now injected at run time and therefore is "hello"',someVar); }
})(someVar), 1000);
var someVar = 'goodbye';

// comparing floating points are unprecise
console.log('0.1 + 0.2 !== 0.3: ',0.1 + 0.2 !== 0.3);