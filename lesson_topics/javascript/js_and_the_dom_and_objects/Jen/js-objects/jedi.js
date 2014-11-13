// JS Objects Recap!


// Instantiating an object

var lightsaber = { 
	color: "green",
	owner: "Luke",
	age: 1
};

// Instantiating an object with the Object constructor

var milleniumFalcon = new Object();

milleniumFalcon.pilot = "Han Solo";
milleniumFalcon.copilot = "Chewie";

// Our Jedi constructor -- makes a new Jedi with name, level, and lightsaber properties set to values that match the arguments given (or undefined if not enough arguments are given)

function Jedi(name, level, lightsaber){ 
	this.name = name; 
	this.level = level; 
	this.lightsaber = lightsaber;
}

// Getting the keys of an object

var falconKeys = Object.keys(milleniumFalcon); // this will end up containing an array that includes ["pilot", "copilot"]


// Looping through an object's properties with a for...in loop

for (i in lightsaber) { 
	console.log(i + ": " + lightsaber[i]); // prints to the console the name of the property (i) and the value of the property (lightsaber[i]), with a colon and a space in between
}







