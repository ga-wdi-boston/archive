#JS Scope

###Variable Scope

- **Global variables** (for everyone)
- **Local variables** (mind the fences)
- Variables that live in object functions 
	- Oh yeah, objects can have functions!
	- Speaking of objects…
	
###Context
- Remember ```this```? It sounds like a scope but it isn't.
- It's a **context**
- The difference: scope is function-based, and context is object-based
	- Variable **scope** deals with where a variable is accessible, and how wide-ranging that access is (locked into a function, or freely available).
	- **Context**, noted by the ```this``` keyword, lets us know which object we're working with right now.

####Coming Up Next

- Next week, we'll look at **closures**, which will add more context (but not ```this``` kind of context, ha!) to scopes and curly brace fences.