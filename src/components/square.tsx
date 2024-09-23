import { SquareProps } from "../types/types"; // Import du type
import './square.css';


function Square({ value, onSquareClick }: SquareProps) {
  return (
    <button className="square" onClick={onSquareClick}>
        <div className="value">
        {value}
        </div>
      
    </button>
  );
}

export default Square;


