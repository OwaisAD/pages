// # Oddities in js
// 1. null is an object
console.log('01: type of null is: ',typeof null); //console.logs 'object'
// null is not a subtype of Object
console.log('02: null is an instance of Object?: ',null instanceof Object); //evaluates false

// 2. NaN is a number
console.log('03: type of NaN is Number?: ', typeof NaN); //console.logs 'Number'
console.log('04: NaN is equal to NaN?: ',NaN === NaN); //evaluates false (NaN is not equal to anythihg. To check we use build-in function: isNaN())
console.log('04a compare string with number: ',5==="5");
// 3. Array with no keys is falsy. Empty arrays evaluate to truthy but, when compared against a boolean, behave like a falsy
console.log('05: A new array without keys is false?: ',new Array() == false); //evaluates true
var someVar = []; //empty array
console.log('06: An empty array literal is false?: ',someVar == false); //evaluates true
if (someVar==false) console.log('07: someVar (the empty array now evaluates to true'); 
else  console.log('08: someVar is still false'); //console.log() runs, so someVar evaluates to true

// That is why we prefer ===
var someVar = 0;
console.log('09: the empty array is falsy', someVar == false); //evaluates true – zero is a falsy
console.log('10: the empty array is falsy but not a boolean with the value: false. Comparing with === evaluates to: ',someVar === false); //evaluates false – zero is a number, not a boolean

// 4. Self-invoking functions
(function() { console.log('11: Function declared and envoked in one statement'); })(); //says 'hello'

// 5. callbacks
// 'Callbacks use the enviroment at the time of running')
var someVar = 'hello';
setTimeout(function() { console.log('13: someVar has changed a long time ago and thefore is "goodbye"',someVar); }, 1000); //console.logs 'goodbye' as the variable is reset before callback runs
var someVar = 'goodbye'; 

// Now it says hello
var someVar = 'hello';
setTimeout((function(someVar) {
    return function()  { console.log('14: someVar now injected at run time and therefore is "hello"',someVar); }
})(someVar), 1000);
var someVar = 'goodbye';

// comparing floating points are unprecise
console.log('15: 0.3 not equal to 0.3 but almost: ','0.1 + 0.2 !== 0.3: ',0.1 + 0.2 !== 0.3);
console.log('16: 0.1+0.2 === 0.30000000000000004: ',.1+.2===0.30000000000000004)
console.log('Possible solutions')
console.log('17: Now we get true when comparing 0.3 to almost 0.3: ',0.1 + 0.2 > 0.3 - 0.001 && 0.1 + 0.2 < 0.3 + 0.001); //true
console.log('Or using Math.round()', Math.round((0.1+0.2)*1000)===0.3*1000,' comparing with 3 floating point accuracy');

// destructuring and spread operator
const [a18, b18, ...restElements] = [10, 20, 30, 40, 50]; //destructuring array
console.log('18: rest is now an array with values 30,40,50: ',restElements);
({a19, b19, ...restProperties} = {a: 10, b: 20, c: 30, d: 40}); //destructuring object
console.log('19: rest is now an object with keys: c,d and values: 30,40',restProperties); 

// ignoring some values
function f() {
    return [1, 2, 3];
}
const [a1, , b1] = f();
console.log('20: ',a1,b1);

// Assigning to new variable names and providing default values
const {a: aa = 10, b: bb = 5} = {a: 3};
console.log('20: now we have 2 new variable names and "aa" is 3: ',aa,' and "bb" has the default value of 5: ',bb); // 3
try{console.log(a,b);}catch(error){console.log('ERROR: ',error);}


