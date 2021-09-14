import React from 'react';
import './App.css';
import { useState } from 'react';
import CalcArray from './CalcArray';

function App() {
  const [input, setInput] = useState("");

  function allClear() {
    setInput("");
  }

  function backspace() {
    if (input.length >= 0) {
      var newStr = input.substring(0, input.length - 1);
      if (newStr == "") {
        setInput("");
        return;
      }
      setInput(newStr);
    }
  }

  const inputChange = () => {
    var x = document.getElementById("num").value;
    setInput(x);
  }

  const gridclick = (e) => {
    let str = input + e.target.innerText;
    let cal = str.split(" ");
    setInput(str);
  }

  const result = () => {
    let res;
    try {
      res = eval(input);
    } catch (e) {
      if (e instanceof SyntaxError) {
        alert(e.message);
      } else {
        throw e;
      }
    }
    setInput(res);
  }

  return (
    <>
      <nav className="nav_bar">
        <p>Calculator App</p>
      </nav>
      <div className="container">
        <div className="center_div">
          <input type="text" onChange={inputChange} value={input} id="num" />
          <div id="grid_div">

            <div className="box" id="item1" onClick={allClear}>AC</div>
            <div className="box" id="item2" onClick={backspace}><i className="fas fa-backspace"></i></div>

            {CalcArray.map((val) => {
              return (
                <>
                  <div className="box" key={val.id} onClick={gridclick}>{val.data}</div>
                </>
              );
            })}
            <div className="box b1" id="item19" onClick={result}>=</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
