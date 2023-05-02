/*
You’ve been given an index.html file and this starter js file.

0. Source this file into the index.html file. You should see a console log when this is done correctly.
  -- There is no JS to write for this step.
*/

console.log('Step 0 complete! client.js loaded!');
            
// Write your code here!

// 1. Start with the number 29 and set that equal to a variable named ‘highScore’;
let highScore = 29;
console.log( highScore )

// 2. Make a new empty array called myScrabbleTiles.
let myScrabbleTiles = [];

// 3. Put these 6 tile objects into myScrabbleTiles:
/*
  { tile: 'N', score: 1 }
  { tile: 'K', score: 5 }
  { tile: 'Z', score: 10 }
  { tile: 'X', score: 8 }
  { tile: 'D', score: 2 }
  { tile: 'A', score: 1 }
*/
// pushing created objects into myScrabbleTiles array
myScrabbleTiles.push({ tile: 'N', score: 1});
myScrabbleTiles.push({ tile: 'K', score: 5});
myScrabbleTiles.push({ tile: 'Z', score: 10});
myScrabbleTiles.push({ tile: 'X', score: 8});
// pushing multiple objects in one push below
myScrabbleTiles.push({ tile: 'D', score: 2},{ tile: 'A', score: 1} );
console.log( ...myScrabbleTiles );

// 4. Remove the last tile from myScrabbleTiles.
// popping off last value - giving lostTile that value with let,
// can call on that lostTile variable later
let lostTile = myScrabbleTiles.pop(myScrabbleTiles[myScrabbleTiles.length-1]);
console.log( myScrabbleTiles);
// testing out lostTile variable created with pop
console.log( 'see you later', lostTile );
// or
// myScrabbleTiles.pop() - does same thing - auto knocks off last index
// push to end - give it a value
// pop off end
// shift to front - give it a value
// unshift off front

// 5. Add the following new tile to myScrabbleTiles:
/*
  { tile: 'F', score : 4 }
*/
// curly brackets inside parenthesis denotes object being pushed
myScrabbleTiles.push({ tile: 'F', score: 4});
console.log( myScrabbleTiles );

// 6. Complete this function. It needs to be given an array of tile objects. The function will use a for-loop and return the sum of all the scores in the given array.
function sumTiles(anArray) {
  // holds sum of tile object scores
  let sum = 0;
  // for loop to iterate over anArray input, and add each score to sum variable
  for ( i = 0; i < anArray.length; i++){
    console.log( 'the tile looks like:', anArray[i])
    sum = sum + anArray[i].score;
  }
  console.log( 'sum is:', sum );
  return sum
}

console.log( 'sumTiles returns:', sumTiles( myScrabbleTiles ));

// for (let anItem of anArray){
// anItem rather than anArray[i]
// }


// 7. Use the function above to get the total score for myScrabbleTiles and assign the value to a variable called "myScore".
// calling function and setting it equal to the new variable myScore
let myScore = sumTiles(myScrabbleTiles)

// 8. Check whether or not your score is higher than the highScore.
// 8-1 If your score is higher, change highScore to the new high score.
// if conditional - doesn't have to be nested inside functions or loops
if ( myScore > highScore ){
  highScore = myScore
  console.log( 'We have a new high score!')
}

// if statement with ternary operator
// myScore > highScore ? highScore = myScore :

console.log( 'The high score is now:', highScore );
// DONE!