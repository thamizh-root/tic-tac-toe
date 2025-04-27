import { useState } from 'react';
import './index.css';





function Square({ value, onClickBtn }) {
  return <button className="square" onClick={onClickBtn}>{value}</button>
}


export default function Trail() {
  const [squares, setSquares] = useState(Array(9).fill(null));

  function handleClick(index) {
    const nextSquares = squares.slice();
    nextSquares[index] = 'X';
    setSquares(nextSquares);
  }

  return (
    <>

      <div className="board-row">
        <Square value={squares[0]} onClickBtn={() => handleClick(0)} />
        <Square value={squares[1]} onClickBtn={() => handleClick(1)} />
        <Square value={squares[2]} onClickBtn={() => handleClick(2)} />
      </div>

      <div className="board-row">
        <Square value={squares[3]} onClickBtn={() => handleClick(3)} />
        <Square value={squares[4]} onClickBtn={() => handleClick(4)} />
        <Square value={squares[5]} onClickBtn={() => handleClick(5)} />
      </div>


      <div className="board-row">
        <Square value={squares[6]} onClickBtn={() => handleClick(6)} />
        <Square value={squares[7]} onClickBtn={() => handleClick(7)} />
        <Square value={squares[8]} onClickBtn={() => handleClick(8)} />
      </div>


    </>
  );
}

