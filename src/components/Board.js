import React, {useState} from "react";
import './styles/Board.css';
import Square from "./Square";

function Board() {
    const [squares, setSquares] = useState(Array(9).fill(null))
    const [xIsNext, setXIsNext] = useState(true)
    const [status, setStatus] = useState('Next player: X')
    const [winner, setWinner] = useState(false)
    // const status = 'Next player: X';

    function handleClick(i) {
      if (winner || squares[i]) {
        return;
      }
      const squaresVar = squares.slice()
      squaresVar[i] = xIsNext ? 'X' : 'O'
      setSquares(squaresVar)  
      setXIsNext(!xIsNext)
      setStatus(!xIsNext ? 'Next player: X' : 'Next player: O')
      console.log(status);
      calculateWinner(squaresVar)
      // console.log(winner)

    }
    function renderSquare(i) {

        return <Square value = {squares[i]} onClick = {()=> handleClick(i)}/>;
    }
    function calculateWinner(squares) {
      const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
      ];
      for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
          setWinner(true)
          const temp = xIsNext ? 'X' : 'O'
          setStatus('Winner: ' + temp)
          return squares[a];
        }
      }
      return null;
    }
    // console.log(status)
    // if (winner) {
    //   // setStatus('Winner: ' + xIsNext ? 'X' : 'O')
    // } else {
    //   // setStatus(!xIsNext ? 'Next player: X' : 'Next player: O')
    // }

    // } else {
    //   setStatus('Next player: ' + (this.state.xIsNext ? 'X' : 'O'))
    // }
    return (  
      
        <div>
          <div className="board-row">
            {renderSquare(0)}
            {renderSquare(1)}
            {renderSquare(2)}
          </div>
          <div className="board-row">
            {renderSquare(3)}
            {renderSquare(4)}
            {renderSquare(5)}
          </div>
          <div className="board-row">
            {renderSquare(6)}
            {renderSquare(7)}
            {renderSquare(8)}
          </div>
          <div className="status">{status}</div>
        </div>
    )
}

export default Board;