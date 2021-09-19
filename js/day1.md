# Javascript Day 1
source ([Mozilla](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide))
- Grammar and types
    - variables
        - var, let, const
        - scope
    - function declarations vs function expressions (declarations are hoisted)
    - window (global object) `window.variables`
    - Data types (dynamically typed language)
        - Boolean, null, undefined, Number, String, object, array
        - [undefined vs null](https://flexiple.com/undefined-vs-null-javascript/)
- Control flow
    - loops
    - conditionals
    - falsy, truthy values
    - switch
    - try catch
- loops
    - for
        - for (let step = 0; step < 5; step++) {}
    - for ... in (looping keys of object)
        - for(key in obj){}
    - for ... of (looping elements in array)
        - for(element of arr){}
    - array.forEach((val, idx) => console.log(val, idx)))
    - do ... while
    - while
    - break, continue
- functions
    - first class members (functions are objects)
        - callbacks
        - nested functions
        - returning functions (closures)
        - arrow functions
    - arguments object (myFunc(val1, val2, val3, val4){for(el of arguments){console.log(el)}})
    - default parameters multiply(a, b = 1)
    - Rest parameters ( multiply(multiplier, ...theArgs) {  return theArgs.map(x => multiplier * x); })
    - the separate 'this' for each new function
    - build-in-functions isNaN(), parseInt("3")
- operators (a lot like java)
    - destructuring const [one, two, three] = myArr;
    - comparison === vs ==
    - operator types: 
        - assignment operators (=, +=, *= etc.)
        - comparison operators (===, !==, >, <, <=, )
        - arithmetic operators (+,-,*,/,%,++, etc)
        - logical operators (&&, ||, !)
        - string operators (+, +=)
        - ternary operator (condition ? val1 : val2)
        - typeof operator (typeof someVar)
        - in operator (idx or key in object) (make in car == true)
- Number, Math, Date objects
    - 
- String methods
- [Template literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)
- 


    

