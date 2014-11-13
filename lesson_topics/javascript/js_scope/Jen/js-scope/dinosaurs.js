// VARIABLE SCOPES

// global vars (any time!)

var tRex = "Tyrannosaurus Rex";

tRex; // we're gonna see an output of "Tyrannosaurus Rex" -- that's expected


// local vars (just inside of the function)

function clone(dino) {
	var d = dino; // our local var d, born inside of the park. I mean, this function.
	console.log(d + " " + d); // we said we'd mastered cloning....
}

d; // this line should give you a reference error! womp womp. it's because it's outside of the function, and that var is locked in by the curly-brace fences.

// just to mix it up let's see what happens when we use a global var inside of a function

var dinosaur = "lady"; // all of the dinosaurs in Jurassic Park are female

var chaosTheory = function() {
	dinosaur = "mom"; // life finds a way
	console.log(dinosaur);
}

chaosTheory(); // calling our function
dinosaur; // after we've run that function, we're gonna see an output of "mom" because that global var can be manipulated anywhere it wants! life DOES find a way.


// vars declared in object functions -- so local we can't get them even from inside the object besides  (there's a bonus lesson in here about context!)

var securitySystem = {
	fences: "enabled",
	electrified: true,
	linesOfCode: 2000000, // that's a lot to debug
	crash: function() {
		var power = "down";
		this.fences = "disabled"; // hey, there's this again! it means we're going to change the state of the fence property on our current securitySystem object (try taking the this keyword off of fences, and see what happens!)
		this.electrified = false; // also using this to set the boolean (it's a shortcut for securitySystem.electrified)
		alert("The fences are " + power + "!"); // we can access power here, because it's in the function
		return securitySystem; // this return statement stops us from having to call securitySystem just to see our object
	},
	reboot: function() {
	    this.fences = "enabled"; // sets securitySystem's fences (we know it's their because of this) to "enabled" (note: if you call this function without calling crash first, it'll just stay the same)
	    this.electrified = true; // put the electricity back on
	    tRex = "back in the paddock"; // this is just here to show that global vars can, indeed, be assigned new values anywhere
	    alert("Jurassic Park is back online.");
	    return securitySystem;
    }
}

power; // nope
securitySystem.power; // nice try, you can't
 get it
securitySystem.crash; // hey, that's our function definition
tRex.crash; // no dice here (remember tRex from earlier?)
crash; // also undefined
securitySystem.crash(); // this is how we shut down Jurassic Park
securitySystem.reboot(); // bringing it back online






