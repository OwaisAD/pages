# Dagsorden React dag1
- Hvad er [react](https://reactjs.org/)
- Hvilke problemer løser det
- [create-react-app](https://github.com/facebook/create-react-app/blob/master/README.md)
- **Class exercise**: start new app and render a list of names as table:  
`const names = [{'fname':'Anders','lname':'Henriksen'},{'fname':'Britta','lname':'Albertsen'},{'fname':'Kalle','lname':'Fredborg'}]`
- [Virtual DOM](https://miro.medium.com/max/1024/0*_C52yYMRTDuMtdBA)
- [React Native](https://reactnative.dev/docs/getting-started)
- [Hvad er et modul](https://medium.com/backticks-tildes/introduction-to-es6-modules-49956f580da) (ES6)
    - import/export
- **Class exercise**: Move content of App component from earlier into it own module named NamesTable so that the App is still working 
- Babel og Webpack
    - single js file, dev server
- Hvad er en component i react:
```js
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

function App() {
  return (
    <div>
      <Welcome name="Sara" />
      <Welcome name="Lucas" />
      <Welcome name="Emma" />
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
```
- Hvad er props:
```js
function Welcome(props) {
  return <h1> Hello, 
      {props.name}
  </h1>;
}

//Passing values to props
function App() {
  return (
    <div>
      <Welcome name="Sara" />
      <Welcome name="Cahal" />
      <Welcome name="Edite" />
    </div>
  );
}
```  
- [Class component vs functional component](https://dev.to/danielleye/react-class-component-vs-function-component-with-hooks-13dg)
- **Class exercise**: Create 2 new react components: One class component and one functional component. They should both recieve props: cars and given an array of car objects, should render the cars as html table.

- Destructuring [objects](https://wesbos.com/destructuring-objects/) and arrays
- Set [default values](https://www.samanthaming.com/tidbits/52-3-ways-to-set-default-value/) 
- ***Class exercise**: Use object destructuring for this object:
  - `{'name':'Peter','age':34,'height':194}` and print each variable to the console
  - set a default value for weight when destructuring the object
  - use || operator to set a default value for the age variable
  - use && operator to check the object for weight property and if present log both weight and height to console
