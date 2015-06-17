var async = require('async'),
    http = require('http');

// async.series with .setTimeout
  // async.series([
  //     function(callback) {
  //       setTimeout(function(){
  //         console.log("First step. Now we wait one second.");
  //         callback(null, "First process done: this is the result.");
  //       }, 1000);
  //     },
  //     function(callback) {
  //       console.log("Second step. Now we wait two seconds.")
  //       setTimeout(function(){
  //         try {
  //           callback(null, "Second process done: this is the result.");
  //         } catch (e) {
  //           callback(e);
  //         }
  //       }, 2000);
  //     },
  //     function(callback) {
  //       console.log("Third step. Now we wait three seconds.");
  //       setTimeout(function(){
  //         try {
  //           nonexistant_variable;
  //           callback(null, "Third process done: this is the result.");
  //         } catch (e) {
  //           callback(e);
  //         }
  //       }, 1000);
  //     }
  //   ],
  //   function(err, results){
  //     if (err) {console.error(err);}
  //     console.log(results);
  //   }
  // );

// async.series
  // async.series([
  //     // First task : GET request
  //     function(callback){
  //       http.get("http://jsonplaceholder.typicode.com/users", function(response){
  //         var responseBody = "";
  //         response.on('data', function(chunk) {responseBody += chunk;});
  //         response.on('end', function(){
  //           callback(null, responseBody);
  //           // This triggers a function that's built into async.series. That function is responsible for either (a) triggering the next 'task' callback, or if there's an error, (b) triggering the final callback and passing it an error.
  //           // [async.series] "Oh cool! I'm going to launch the next function now. I'll also take your result and put it into 'results'."
  //         })
  //       }).on('error', function(e){
  //         callback(e);
  //         // [async.series] "Tough luck! I'll go get the final callback - they'll know what to do with your error."
  //       });
  //     },
  //     // Second task : POST request
  //     function(callback){
  //       var postData = JSON.stringify({"user" : "Matt"});
  //       http.request({
  //         host: "jsonplaceholder.typicode.com",
  //         path: "/users",
  //         method: "POST"
  //       }, function(response){
  //         var responseBody = "";
  //         response.on('data', function(chunk) {responseBody += chunk;});
  //         response.on('end', function(){
  //           callback(null, responseBody);
  //           // [async.series] "Oh cool! I'm going to launch the next function now. I'll also take your result and put it into 'results'."
  //         })
  //       }).on('error', function(e){
  //         callback(e);
  //         // [async.series] "Tough luck! I'll go get the final callback - they'll know what to do with your error."
  //       }).end(postData); //
  //     }
  //   ],
  //   function(err, results){
  //     if (err) {console.error(err);}
  //     console.log(results);
  //   }
  // );

// UNDER THE HOOD
  // var tasks = [ ... ]
  // var final = function() {...}
  // var results = [];
  // function trigger(error, result) {
  //   if (error) { final(error); } else {
  //     var currentTask = tasks.shift();
  //     results.push(currentTask(trigger));
  //   }
  // }

async.series([
    function(callback) {
      console.log("Entering the first callback.")
      http.get("http://jsonplaceholder.typicode.com/users", function(response){
        console.log("Receiving response...")
        var responseBody = ""
        response.on('data', function(chunk){
          console.log("chunk");
          responseBody += chunk;
        });
        response.on('end', function(){
          console.log("Full response received.");
          callback(null, responseBody);
        })
      }).on('error', function(e){
        console.log("Hit an error.")
        callback(e);
      })
    }
  ],
  function(err, results){
    if (err) {console.error(err);}
    console.log(results);
  }
);

console.log("HELLO");
