const row = 7;

// export const initalBoard = Array(row);
// for (var i = 0; i < row; i++) {
//     initalBoard[i] = Array(col).fill("");
// }

export const initalBoard = 
Array.from({ length: row }, () => 
Array.from({ length: row }, () => ""));
