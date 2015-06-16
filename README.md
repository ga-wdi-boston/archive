![General Assembly Logo](http://i.imgur.com/ke8USTq.png)

## Objectives
- Be able to explain what 'asynchronous' means, and why JavaScript can run asynchronous processes.
- Write a simple asynchronous process using callbacks.
- Use core functions from the `async` module (such as `series`, `parallel`, and `waterfall`) to build simple asynchronous processes.

## Prerequisites
- Node basics (esp. `require`)
- The `http` Node module

## Asynchronous vs Synchronous

This is Synchronous Steve.

<img src="http://img4.wikia.nocookie.net/__cb20110630173259/muppet/images/e/e1/Bert_smile.png" height="300">

Steve sometimes has a difficult time getting chores done around the house. Every Sunday, like clockwork, he goes through the following routine:
First, he loads the dishwasher. Then, he turns it on and runs it. When the dishwasher is done, he unloads it and dries all the dishes. Next, he starts a load of laundry in the washing machine; when this load finishes, he puts it into the dryer. Once the dryer is done, he takes the clothes out and folds all of them. Finally, after a long day of work, Steve sits down to watch some TV : *Orange Is The New Black*.

Just kidding. He watches *Game of Thrones*.

<hr>

This is Asynchronous Andy, Synchronous Steve's roommate.

<img src="http://img2.wikia.nocookie.net/__cb20100901224144/muppet/images/2/2e/ErnieFullFigure-NEW.jpg" height="300">

Although he's less consistent about exactly how he does it, somehow Andy manages to be much more efficient at chores than Steve does. First, Andy loads the dishwasher. Once he's started the dishwasher, he then puts his first load of laundry into the washing machine. As it turns out, his first load of laundry finishes before the dishwasher is done, so he puts in a second load of laundry and moves the first load of laundry to the dryer. Suddenly, he hears a *ding* - the dishwasher is done. He leaves the laundry alone for a minute to start drying the dishes and putting them away. About halfway through the dishes, Andy hears the washing machine finish, so he quickly pops back over to the washing machine, moves his second load into the dryer, and starts it running. He then returns to the dishes and finishes drying them. Finally, while he waits for the dryer to finish, Andy gets an early start on *Game Of Thrones* (and accidentally spoils a big plot point for Steve...)

<hr>

Most of the code we've written and seen so far is *synchronous*; each step runs in its entirety, start to finish, before the next step begins. This is easy to follow and predict, but, as you can see from the two roommates above, *asynchronous* behavior - not always waiting until one task is finished before starting the next one - can sometimes produce better results.

The key to Andy's chore strategy is that he is getting notifications from the washing machine and dishwasher - when he sees that one of these processes has been completed, he interrupts whatever he is currently doing, does some short task, and then resumes what he was doing before. This is particularly useful when Andy is waiting for something else (such as the dishwasher) to finish.

How do we write code in JavaScript that can mimic this kind of behaviour? The answer is something we touched on back in Unit 1 - event handlers. When new events trigger pre-configured event handlers, those handlers asynchronously add their callbacks to the callback queue; these callbacks then get executed one by one, in order.

One common function in JavaScript that behaves asynchronously is `setTimeout`; when its timer runs down to zero, it triggers a callback.

```javascript
var funcA = function() {
  setTimeout(function(){console.log("Timer is done.");}, 1000);
}
```

If we were to write another line of code after `setTimeOut`, it's possible that this line might execute before the timeout would be over.
```javascript
var funcA = function() {
  console.log("funcA begins");
  setTimeout(function(){ console.log("Timer is done."); }, 1000)
  console.log("Launched just after timeout is set.")
}
```

Try running this code - what do you get?

## Writing Asynchronous Processes in JS

Of course, just because asynchronous code doesn't *always* wait doesn't mean that there's no order to things. Clothes have to go through the washing machine before they go in the dryer. Dishes must be loaded into the dishwasher before they can be washed (and, subsequently, dried). How can we preserve this order when code is run asynchronously?

One way to do this might be to actually call each stage of the process *from within the callback of the previous stage*. This ensures that the next step in a linear process runs no sooner than the end of the previous step, while still keeping things asynchronous.

```javascript
var funcA = function() {
  console.log("Called funcA");
  setTimeout(funcB, 1000);
  console.log("Not waiting!")
}

var funcB = function() {
  console.log("Called funcB");
}

funcA();
=> "Called funcA"
=> "Not waiting!"
=> "Called funcB"
```

If we'd wanted, we could have written this with callbacks as well, like so:
```javascript
var funcA = function(){
  console.log("Called funcA");
  setTimeout(function() {console.log("Called first anonymous callback")}, 1000);
  console.log("Not waiting!")
}
```

We could also have made it a three-stage process by adding another timeout to our callback.
```javascript
var funcA = function() {
  console.log("Called original function");
  setTimeout(function() {
    console.log("Called first callback");
    setTimeout(function() {
      console.log("Called second callback");
    }, 1000);
  }, 1000);
}

```

### Lab : Asynchronous Processes in JS (20 mins);

In pairs, use `setTimeout` to set up a five-stage serial (one after the other) asynchronous process using callbacks. Each of these functions must print out one of the following lines before calling the next callback:

"There once was a man from Nantucket"
"Who kept all his cash in a bucket."
"But his daughter, named Nan,"
"Ran away with a man,"
"And as for the bucket, Nantucket (Nan took it)."

Then, individually, see if you can set up a three-stage serial process as follows, using setTimeout.
* The original function, `funcA`, takes in a string as an argument and calculates its length.
* The first callback takes this length and squares it.
* The second callback takes the result of the first callback, adds 5 to it, and prints the new result to the console.

Try playing around with the intervals on setTimeout; does the code still work correctly?

## The `async` Module

Although it's possible to write an asynchronous process using callbacks alone, it gets more and more difficult to do as you add steps and complexity. Fortunately, there's a tool to make this all easier - a module called `async` ([https://github.com/caolan/async](https://github.com/caolan/async))

`async` provides us with methods that take callbacks as arguments, and structure them for us (behind the scenes) so that they execute in a particular way. Although there are many, many methods within the `async` module, each of which can be used for a variety of tasks, we're going to focus on only three today: `series`, `waterfall`, and `parallel`.

<!-- Add diagrams at a future date. -->

## `async.series`

`async.series` is used to launch a set of callbacks in order. It takes up to two arguments : an array of 'task' callbacks, and a optional final callback that ordinarily gets triggered by the last 'task' in the array. This final callback is generally responsible both for dealing with `results`, an array of the results of each task in the array and for handling any errors that might arise.

```javascript
async.series([
    function (callback) {
      ...
      callback(error, result);
    },
    function (callback) {
      ...
      callback(error, result);
    },
    function (callback) {
      ...
      callback(error, result);
    },
  ],
  function (err, results) {
    ...
  }
);
```

If an error is hit and passed up through a callback, `.series` will immediately jump to the final callback (so that the error can be handled) and then **exit** - the process will not be resumed if an error was hit.

<!-- ### Lab : `async.series`

Lets look at using the `async` module in conjunction with a real-world asynchronous process - http requests.

In teams of three, write an asynchronous process using `async.series` that, in order, does the following:

1. Makes a GET request to "http://jsonplaceholder.typicode.com/posts"
2. Makes a POST request to "http://jsonplaceholder.typicode.com/posts"
3. Makes a GET request to "http://jsonplaceholder.typicode.com/posts/1"
4. Makes a POST request to "http://jsonplaceholder.typicode.com/posts/1"
5. Makes a GET request to "http://jsonplaceholder.typicode.com/comments?postId=1"

Then, once those requests are all done, it should print out all of the results. -->

## `async.waterfall`

Like `async.series`, `async.waterfall` is also used to launch a set of callbacks in order. However, the two are different in that `waterfall` will automatically pass in the result(s) from each task as the input(s) to the next task. This make a lot of sense for asynchronous processes that are transformative - converting data from one form to another.

`async.waterfall` takes up to two arguments : an array of 'task' callbacks, and a optional final callback that ordinarily gets triggered by the last 'task' in the array. This final callback is generally responsible both for dealing with `results` (an array of the results of each task in the array) and for handling any errors that might arise.

```javascript
async.series([
    function (callback) {
      ...
      callback(error, resultA, resultB, resultC );
    },
    function (argA, argB, argC, callback) {
      ...
      callback(error, resultA, resultB);
    },
    function (argA, argB, callback) {
      ...
      callback(error, resultA, resultB, resultC, resultD);
    }
  ],
  function (err, results) { //or 'result' if the prior callback yields only one result value.
    ...
  }
);
```

<!-- ### Lab : `async.waterfall`

In teams of three, write an asynchronous process using `async.waterfall` that
1. Makes a GET request to "http://"
2. Pulls out the ____ field, and
3. Makes a POST request to "http://" -->

## `async.parallel`

Unlike `series` and `watefall`, `async.parallel` is used not to order a set of callbacks, but (as the name implies) to run a set of callbacks in parallel. In practical terms, this just means that all callbacks will get called at once, and that the final callback will only trigger once all parallel 'tasks' are complete (or if an error is hit).

```javascript
async.parallel([
    function (callback) {
      ...
      callback(error, result);
    },
    function (callback) {
      ...
      callback(error, result);
    },
    function (callback) {
      ...
      callback(error, result);
    }
  ],
  function (err, results) {
    // This callback will not be triggered until all three of the
    ...
  }
);
```

<!-- ### Lab : `async.parallel`

In teams of three, write an asynchronous process that makes GET requests to all of the following URLs.
* "http://"
* "http://"
* "http://"
* "http://"
* "http://"
Once all requests have completed, the program should then ______ . -->

------------------------------
### Further Reading
- Take a skim through the [official documentation](https://github.com/caolan/async) for `async`; it's got resources there on all of the module's different methods.
- If you haven't already, try out [NodeSchool](http://nodeschool.io/#workshopper-list)'s tutorial on the `async` module, called `Async You`.
