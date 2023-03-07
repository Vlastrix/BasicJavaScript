
// function llamas() {
//     console.log("Hello");
//     console.log("I");
//     console.log("Like");
//     console.log("Llamas");
// }

// llamas();

// function diagonalMovement() {
//     move();
//     turnLeft();
//     move();
//     turnRight();
// }

// function placeDiagonalBeepers(){
//     putBeeper();
//     diagonalMovement();
//     putBeeper();
//     diagonalMovement();
//     putBeeper();
//     diagonalMovement();
//     putBeeper();
//     diagonalMovement();
// }

// function getMilk(bottles) {   
//     console.log("leaveHouse");
//     console.log("moveRight");
//     console.log("moveRight");
//     console.log("moveUp");
//     console.log("moveUp");
//     console.log("moveUp");
//     console.log("moveUp");
//     console.log("moveRight");
//     console.log("moveRight");
//     console.log("Buy " + bottles + " bottles of milk.");
//     console.log("moveLeft");
//     console.log("moveLeft");
//     console.log("moveDown");
//     console.log("moveDown");
//     console.log("moveDown");
//     console.log("moveDown");
//     console.log("moveLeft");
//     console.log("moveLeft");
//     console.log("enterHouse");
//   }

// getMilk(46);

function getMilk(moneyInDollars) {
    var milkCost = 1.5;
    // console.log(Math.floor(moneyInDollars/milkCost))
    console.log("Buy " + Math.trunc(moneyInDollars/milkCost) + " bottles of milk.");
}

// getMilk(5);

function something(number) {
    return number
}

var someNumber = something(4);
console.log(someNumber)
