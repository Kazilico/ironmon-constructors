/*
  This class represents a battle between characters in a video game.

  It contains one default properties:
    - turn (which starts as true)
    
  It also contains a two properties partially passed in as parameters.
    - left (an instance of the Ironmon class -- the name is passed in as leftName)
    - right (also an instance of the Ironmon class -- the name is passed in as rightName)

  You'll need to create Ironmon instances in this constructor.
*/
var Game = function(leftName, rightName) {
	
	this.left = new Ironmon(leftName)
	this.right = new Ironmon(rightName)

	this.turn = true
}

/*
  If this Game's turn property is true, it becomes false.
  Otherwise, it becomes true.
*/
Game.prototype.takeTurn = function() {
	this.turn = !this.turn
}
