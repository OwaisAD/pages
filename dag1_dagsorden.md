# Dagsorden React dag1
- Hvad er [react]()
- Hvilke problemer løser det
- [Hvad er et modul](https://medium.com/backticks-tildes/introduction-to-es6-modules-49956f580da) (ES6)
    - import/export
- Babel og Webpack
    - single js file, dev server
- [create-react-app](https://github.com/facebook/create-react-app/blob/master/README.md)
- [Virtual DOM](https://miro.medium.com/max/1024/0*_C52yYMRTDuMtdBA)
- [React Native](https://reactnative.dev/docs/getting-started)
- Hvad er en component i react:
```
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
```
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

