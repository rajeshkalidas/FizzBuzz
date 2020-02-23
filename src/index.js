import React from "react";
import ReactDOM from "react-dom";
import FizzBuzz from './fizzBuzz';
//eslint-disable-next-line
import style from './styles.css'; 

function App() {
  return (
    <div className="App">
     <FizzBuzz />     
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
