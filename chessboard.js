// # JS optional exercise

// In order to represent a chessboard in a program, write a chessboard function that will return an array of arrays containing the squares coordinates.

// function chessboard() {
//  does something
// }

// chessboard()

// in the terminal I get:
// [
//     ['a - 1', 'a - 2', 'a - 3', 'a - 4', 'a - 5', 'a - 6', 'a - 7', 'a - 8'],
//     ['b - 1', 'b - 2', 'b - 3', 'b - 4', 'b - 5', 'b - 6', 'b - 7', 'b - 8'],
//     ...,
//     ['h - 1', 'h - 2', 'h - 3', 'h - 4', 'h - 5', 'h - 6', 'h - 7', 'h - 8'],
// ]

// Not working:
    // letter = parseInt(letter);
    // letter++;
    // letter = letter.toString();


function chessboard() {
  let chessArray = [];
  let letters = "abcdefgh";

  let lettersArray = letters.split("");

  // outer loop (i) creates individual inner arrays inside chessArray
  // inner loop (j) creates "letter -1" to "letter - 2" for each inner array 
  for (let i = 0; i < lettersArray.length; i++) {
    let rowArray = [];
    // ALTERNATIVE SOLUTION:
    // const columnLetter = String.fromCharCode(97 + i);
    for (let j = 1; j < 9; j++) {
      rowArray.push(`${lettersArray[i]} - ${j}`)
      // rowArray.push(`${columnLetter} - ${j}`)
    }
    chessArray.push(rowArray)
  }
  return chessArray;
}

console.log(chessboard());
