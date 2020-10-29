# React dag 3
![](images/lifting.png)
- [Lifting state up](https://reactjs.org/docs/lifting-state-up.html)
- [Example code](LiftingState.js)  

**Exercise**: Create a functional component that renders 2 other components: Comp 1 contains an input field to enter fahrenheit degrees and Comp2 shows the result in Celcius.
- [Asyncrone server kald](FetchDemo.js)
  - GET, POST, PUT, DELETE  
[Example code here](https://docs.google.com/document/d/11OQda4HZMBvtEmUOccgV4k8wkz63kzWzKNBusj7CLdQ/edit?usp=sharing)

**Exercise**: Create a data facade that can fetch data. Use the [Jsonserver](jsonserver.md) to create a dev backend api. (Make this the simplest possible solution. IE dont use all the details from the example code above)
- [Async-Await](https://dev.to/gafi/7-reasons-to-always-use-async-await-over-plain-promises-tutorial-4ej9?ref=hackernoon.com)

**Exercise**: In your datafacade from last exercise add post, put and delete. Also use async await for the facade methods. Try and see if you can render error messages with a http status code. Test it with wrong parameters, ressource and with wrong host (gives a network error NOT a server response)
