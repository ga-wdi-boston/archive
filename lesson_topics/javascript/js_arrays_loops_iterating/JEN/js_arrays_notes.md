#JS ARRAYS

Whiteboard/pseudocode everything before going into console

https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript

use methods off array prototype and iterate over it

name 3 sites and how folks may iterate 

* (twitter- iterate over tweets, who you're following)
* (espn- score, leagues)

In JS to instantiate an array:

	var students = [];
	
Hip Hop Arrays project

####ask for 3 volunteers to stand up, write names in an array, have them move accordingly
var students = ["Zach", "Kaitlin", "Jordan"]

* students.length to get length
* students.length = 2 (to remove Jordan)
* students.pop() would return ("Jordan") *(opposite of push)*
	*doesn't work without parens()
* students.push("Jordan"); 
* students.reverse();

* to call out middle one - students[1] (arrays start with index 0)

Open console to play around with JS

*students[students.length - 1]

have the students pair up and demo the methods from 'hip hop arrays' in week 01  (slice, splice)

a = [1,2,3,4,5,6,7]
a.slice(2,2) = []
a.slice(2,4) = [3,4]
a.slice(2,-2) = [3,4,5]
a.splice(2,4) = [3, 4, 5, 6] 

splice- (starting point index, how many to cut out)
slice- (starting point index, cut out up to the index but do not include)

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

####How to iterate over an array with a for loop

for(var i = 0; i<10 (or students.length); i++) {

console.log(i)

or

console.log(student[i])

}

####Lab
Use kitties lab and have them create another button onclick with different array.




