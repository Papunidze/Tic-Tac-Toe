import React, { useState } from "react";
import "./tictactoe.css";
function TicTacToe(props) {
  const [initial, setinitial] = useState(Array(9).fill(""));
  const [turn, setturn] = useState("X");
  const [score, setScore] = useState(Array(2).fill(0));
  const [wincom, setComb] = useState(Array(9).fill(""));
  const [winnerPage, setWinner] = useState(false);
  const [turnCount, setTurncount] = useState(0);
  const [text, settext] = useState();
  const Win = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [2, 4, 6],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
  ];
  const Gameboard = initial.map((e, index) => {
    return (
      <div
        className="box"
        id={index}
        key={e + index}
        onClick={(e) => initialing(e.target)}
        style={{ background: "white" }}
      >
        <p id="title" spellCheck="false">
          <span>{initial[index]}</span>
        </p>
      </div>
    );
  });
  const initialing = (e) => {
    setTurncount(turnCount + 1);
    const table = [...initial];
    const winCombination = [...wincom];
    const scoreValue = [...score];
    if (table[parseInt(e.id)] === "") {
      table[parseInt(e.id)] = turn;
      turn === "X" ? setturn("O") : setturn("X");
      console.log(table);
      Win.forEach((e) => {
        if (
          table[e[0]] === turn &&
          table[e[0]] === table[e[1]] &&
          table[e[1]] === table[e[2]]
        ) {
          winCombination[e[0]] = "+";
          winCombination[e[1]] = "+";
          winCombination[e[2]] = "+";
          setComb(winCombination);
          if (turn === "X") {
            scoreValue[0]++;
            settext("Winner is: " + props.firstname);
            setScore(scoreValue);
          }
          if (turn === "O") {
            scoreValue[1]++;
            settext("Winner is: " + props.secondname);
            setScore(scoreValue);
          }
          setTimeout(() => {
            setWinner(true);
          }, 900);
          setturn(null);
        }
      });
      setinitial(table);
    }
  };
  if (winnerPage === false && turnCount === 9) {
    settext("Game Finished Tie");
    setWinner(true);
  }
  function reset() {
    setWinner(false);
    setinitial(Array(9).fill(""));
    setComb(Array(9).fill(""));
    setturn("X");
    setTurncount(0);
  }
  Gameboard.map((cl) =>
    wincom[cl.props.id] === "+"
      ? (cl.props.style.background = "#00B300")
      : (cl.props.style.background = "white")
  );
  let show = winnerPage === false ? "block" : "none";
  return (
    <div className="container">
      <main style={{ display: show }}>
        <section className="overwiev">
          <div className="player">
            <div className="player__text">
              <aside className="player__left">
                <p id="title" spellCheck="false">
                  <span>{props.firstname}: </span>
                  <span>{score[0]}</span>
                </p>
              </aside>
              <aside className="player__right">
                <p id="title" spellCheck="false">
                  <span>{props.secondname}: </span>
                  <span>{score[1]}</span>
                </p>
              </aside>
            </div>
          </div>
        </section>
        <aside className="Center__Text">
          <p id="title" spellCheck="false">
            <span>Turn </span>
            <span>{turn}</span>
          </p>
        </aside>
        <div className="overwiev__table">
          <div className="tictac__table">{Gameboard}</div>
        </div>
      </main>
      {winnerPage && (
        <div className="winner__container">
          <div className="winnerget">
            {winnerPage && (
              <p id="title" spellCheck="false">
                <span>{text}</span>
              </p>
            )}
            <button className="fill" onClick={() => reset()}>
              Reset
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default TicTacToe;
