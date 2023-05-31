import { Children, useState } from "react";
import "./App.css";

const TURNS = {
  x: "x",
  o: "o",
};
const Square = ({ children, updateBoard, index }) => {
  return <div className="square">{children}</div>;
};

function App() {
  const [board, setBoard] = useState(Array(['x','o','x','x','o','x','x','x','x']).fill(null));
  console.log(board);

  return (
    <main>
      <h1>Tic tac toe</h1>
      <section className="game-board">
        {board.map((_, index) => {
          return <Square key={index} index={index}></Square>;
        })}
      </section>
    </main>
  );
}

export default App;
