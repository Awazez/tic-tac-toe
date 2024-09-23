// types.ts


export type SquareProps = {
    value: string | number | null; // Valeur pouvant être "X", "O", ou null
    onSquareClick: () => void; // Fonction déclenchée lors d'un clic
  };
  
  export type boardType = {
    xIsNext: boolean; // Indique si le prochain coup est pour "X"
    squares: (string | null)[]; // Un tableau contenant les valeurs "X", "O", ou null pour chaque case
    onPlay: (nextSquares: (string | null)[]) => void; // Fonction de callback pour jouer un coup
  };

