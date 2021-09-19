# React dag 2:
- State vs [props](https://reactjs.org/docs/components-and-props.html#props-are-read-only) (immutable data and pure functions)
- When do we need state in a component?
- [Stateful component vs Stateless component](https://reactjs.org/docs/hooks-state.html#equivalent-class-example)  
**Class exercise 1**:   
Create a stateful class component that when clicking a button shows the current time.
- 2 Hooks: [useState](https://reactjs.org/docs/hooks-state.html) & useEffect (comes later)
- [Handling events](https://reactjs.org/docs/handling-events.html)
- [Forms and controlled components](https://reactjs.org/docs/forms.html#controlled-components)  
**Class exercise 2**:   
Create a statefull function using useState() to read input from a input field (as characters are entered) and add it to a list that gets updated on the page when form is submitted.
- Second hook: [useEffect](https://reactjs.org/docs/hooks-effect.html)  
**Class exercise 3**:   
Create a functional component that when loaded gets data from [this api](https://jsonplaceholder.typicode.com/albums) and renders it as an html table  
- [List and keys](https://reactjs.org/docs/lists-and-keys.html#basic-list-component)   
**Class exercise 4**:  
Update the class component from exercise 1 so that every click to get the time is recorded (all timestamps are saved).
Create a component that can render a list of the timestamps as `<ul>`.  
Check in browser console that you do not get a warning like: 
`Warning: Each child in a list should have a unique "key" prop.`
