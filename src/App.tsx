import React from 'react';
import './App.css';
import AuthenticationWrapper from "./features/authentication/AuthenticationWrapper";
import RoutesLayout from "./RoutesLayout";

function App() {
  ccount();
  let b=3;
  function ccount() {
    a = 10;
    console.log("Here I'm works"+ a);
  }
  var a;

  function getSum() {
    a = 100;
    console.log(a + b)
  }
  getSum()

  return (
      <RoutesLayout/>
  );
}

export default App;
