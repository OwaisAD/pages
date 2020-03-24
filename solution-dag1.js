import React from 'react';
import logo from './logo.svg';
import './App.css';
const p = {'name':'Peter','age':34,'height':194}
function App() {
  let {name, age, height, weight=99} = p
  age = age.number || 10
  console.log(name,age,height,weight)
  return (
    <div className="App">
      <Header name="Henning"/>
      {weight.no && console.log(weight,height)}
    </div>
  );
}
const Header = (props) => {
  return (
    <div>{props.name}</div>
  )
}
export default App;