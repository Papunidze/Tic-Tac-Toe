import React, { useRef } from "react";
import { useState } from "react/cjs/react.development";
import "./Home.css";
import Tictactoe from "./TicTacToe";
const Homepage = () => {
  const [tictacPage, settitca] = useState(false);
  const show = tictacPage ? "none" : "block";
  let firstname = useRef();
  let secondname = useRef();
  console.log(show);
  function start() {
    settitca(true);
    if (firstname.current.value === "") {
      firstname.current.value = "X";
    }
    if (secondname.current.value === "") {
      secondname.current.value = "O";
    }
  }
  return (
    <div className="mainContainer">
      <div style={{ display: show }}>
        <div className="input__name">
          <p id="title" spellCheck="false">
            <span>First Player</span>
          </p>
          <input ref={firstname} maxLength={7} />
          <p id="title" spellCheck="false">
            <span>Second Player</span>
          </p>
          <input ref={secondname} maxLength={7} />
        </div>
        <div className="str__Btn">
          <button className="raise" onClick={() => start()}>
            Start
          </button>
        </div>
      </div>
      {tictacPage && (
        <Tictactoe
          firstname={firstname.current.value}
          secondname={secondname.current.value}
        />
      )}
    </div>
  );
};

export default Homepage;
