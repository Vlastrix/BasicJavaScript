
function main() {
   firstRow();
   moveFirstRow();
   secondRow();
   moveSecondRow();
   firstRow();
   moveFirstRow();
   secondRow();
   moveSecondRow();
   firstRow();
   goToCenter();
}

function firstRow() {
   putBeeper();
   move();
   move();
   putBeeper();
   move();
   move();
   putBeeper();
}

function secondRow() {
   move();
   putBeeper();
   move();
   move();
   putBeeper();
   move();
}

function moveFirstRow() {
   turnLeft();
   move();
   turnLeft();
}

function moveSecondRow () {
   turnRight();
   move();
   turnRight();
}

function goToCenter () {
   turnRight();
   move();
   turnRight();
   move();
   turnLeft();
   move();
   turnRight();
   move();
   turnRight();
   turnRight();
}
