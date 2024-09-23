import React from "react";

type SquareProps = {
  value: string | number | null; // Définir les types possibles pour 'value'
  onSquareClick: () => void; // Définir le type de la fonction de clic
};

function Square({ value, onSquareClick }: SquareProps) {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}

export default Square;


