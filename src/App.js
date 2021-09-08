import React, { useEffect } from 'react';
import './App.css';
import { useState } from 'react';

function App() {

  const [input, setInput] = useState(0);

  function allClear() {
    setInput(0);
  }

  function backspace() {
    if (input.length >= 0) {
      var newStr = input.substring(0, input.length - 1);
      if (newStr == "") {
        setInput(0);
        return;
      }
      setInput(newStr);
    }
  }

  const inputChange = () => {
    var x = document.getElementById("num").value;
    setInput(x);
  }

  const gridclick = () => {
    var divElements = document.getElementsByClassName('grid_div');

    for (var i = 2; i < divElements.length; i++) {
      divElements[i].addEventListener('click', function () {
        setInput(divElements[i].innerText);
      });
    };
  }

  // function Add(x, y){
  //   return(x + y);
  // }


  return (
    <>
      <nav className="nav_bar">
        <p>Calculator App</p>
      </nav>
      <div className="container">
        <div className="center_div">
          <input type="text" onChange={inputChange} value={input} id="num" />
          <div className="grid_div" onClick={gridclick}>

            <div className="box" id="item1" onClick={allClear}>AC</div>
            <div className="box" id="item2" onClick={backspace}><i className="fas fa-backspace"></i></div>
            <div className="box operator" id="item3">%</div>

            <div className="box operator" id="item4">/</div>
            <div className="box operand" id="item5">7</div>

            <div className="box operand" id="item6">8</div>
            <div className="box operand" id="item7">9</div>

            <div className="box operator" id="item8">*</div>
            <div className="box operand" id="item9">4</div>

            <div className="box operand" id="item10">5</div>
            <div className="box operand" id="item11">6</div>

            <div className="box operator" id="item12">-</div>
            <div className="box operand" id="item13">1</div>

            <div className="box operand" id="item14">2</div>
            <div className="box operand" id="item15">3</div>

            <div className="box operator" id="item16">+</div>

            <div className="box operand" id="item17" >0</div>
            <div className="box operand" id="item18">.</div>

            <div className="box b1" id="item19">=</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
