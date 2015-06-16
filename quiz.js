// Quiz : `async`

// 1. Suppose that we wanted to start three asynchronous functions (`funcA`, `funcB`, `funcC`) all at once, and then run a fourth function (`funcD`) on all of their results. Which `async` method would we use, and how could we write it?

// 2. Now assume that `funcA`, `funcB`, and `funcC` are all successive transformations on some piece of data - in synchronous code, we might have written something like `funcC( funcB( funcA( someInput ) ) )`. What `async` method would we use in that situation? How would we write it?

// 3. Suppose that we still wanted to start those same three functions in the same order, but didn't necessarily want to pass in the result from one function as an input to the next - for whatever reason, maybe the functions are just too different for that to make sense. In that case, which `async` method might we want to use? How would we write it?

// 4. Take a look at the following code. In what order will each of those functions (probably) execute?

// async.series([
//     function() { ... }, //funcA,
//     function() { ... }, //funcB,
//     function() { ... }, //funcC
//   ],
//   function(){
//     async.parallel([
//         function() { ... }, //funcD
//         function() { ... }, //funcE
//         function() { ... }, //funcF
//       ],
//       function(err, results) { ... }, //funcG
//     );
//   }
// );
// funcE();

// 5. Write an example of how `async.series` might look if written using anonymous functions instead of named ones. Use an array of 'task' functions, *not* an object.
