// script file for constructor

// The dice 

// Create an object
var knot = {
	sides: 6,

	roll: function() {
		Math.floor(this.sides * Math.random() +1)
	}
}

// Create a constructor function
var Centdice = function(sides) {
	this.sides = sides;

	this.roll = function() {
		return Math.floor(this.sides * Math.random() +1);
	}
}

var randy = new Centdice(500);