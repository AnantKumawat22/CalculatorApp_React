import React, { useEffect } from 'react';
import './App.css';
import { useState } from 'react';

function App() {

  const [input, setInput] = useState(0);

  // useEffect(()=>{
  //   document.getElementById("#num").value="";
  // },[]);

  return (
    <>
      <nav className="nav_bar">
        <p>Calculator App</p>
      </nav>
      <div className="container">
        <div className="center_div">
          <input type="text" value={input} id="num" />
          <div class="grid_div">
            <div class="box" id="item1">AC</div>
            <div class="box" id="item2"><i class="fas fa-backspace"></i></div>
            <div class="box operator" id="item3">%</div>

            <div class="box operator" id="item4">/</div>
            <div class="box operand" id="item5">7</div>

            <div class="box operand" id="item6">8</div>
            <div class="box operand" id="item7">9</div>

            <div class="box operator" id="item8">*</div>
            <div class="box operand" id="item9">4</div>

            <div class="box operand" id="item10">5</div>
            <div class="box operand" id="item11">6</div>

            <div class="box operator" id="item12">-</div>
            <div class="box operand" id="item13">1</div>

            <div class="box operand" id="item14">2</div>
            <div class="box operand" id="item15">3</div>

            <div class="box operator" id="item16">+</div>

            <div class="box operand" id="item17" >0</div>
            <div class="box operand" id="item18">.</div>

            <div class="box b1" id="item19">=</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
