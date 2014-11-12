var movies = [{name: "Goonies", rating: 10}, {name: "Spice World", rating: 9}, {name: "Titanic", rating: 5}];


for(var i = 0; i < movies.length; i++){
	var movie = movies[i];
	console.log(movie.rating);
	if (movie.rating > 8)
		console.log(movie.name + " is a GREAT film!");
	else
		console.log(movie.name + " SUCKS!");
}









for(var i = 0; i < people.length; i++){
	console.log("The element at index " + i + " is:" + people[i]);
}



var mixed=[1, "two", "three", true];

console.log("Decrementing For Loop:");

for(var cats = mixed.length -2; cats >= 1; cats--){
	console.log("The element at index " + cats + "is: " + mixed[cats]);
}


var veggies=["Asparagus", "Brussel Sprouts", "Kale", "Broccoli"];

var i=0;
while (veggies[i]){
	console.log(veggies[i]);
	i++;
}
------------------------------------------------------------------

for(var i=0; veggies[i]; i++){
	console.log(veggies[i]);
}


// This is a For Loop!
var people=["Marc", "Lorin", "Jen"];

for(var cat = 0; cat < people.length; cat++){
	console.log("The element at index " + cat + " is: " + people[cat]);
}



// This is a While Loop!
var veggies=["Kale", "Lettuce", "Broccoli"];

var cat=0;
while (veggies[cat]){
	alert(veggies[cat]);
	cat++;
}

// This is the For Loop version of the While Loop above:
for(var cat=0; veggies[cat]; cat++){
	alert(veggies[cat]);
}


