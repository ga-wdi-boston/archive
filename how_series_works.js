// Definition
var series = function(tasks, final) {
  var results = [];

  function middleman (err, result) {
    if (err) {
      final(err, results);
    } else {
      results.push(result);
      var nextTask = tasks.shift();
      if (nextTask) {
        nextTask(middleman);
      } else {
        final(null, results);
      }
    }
  }
  var firstTask = tasks.shift();
  firstTask(middleman);
}

// Use case
series(
  [
    function(middleman){
      console.log("Starting first callback.")
      setTimeout(function(){
        middleman(null, "RESULT 1")
      }, 1000);
    },
    function(middleman){
      console.log("Starting second callback.")
      setTimeout(function(){
        middleman(null, "RESULT 2")
      }, 1000);
    },
    function(middleman){
      console.log("Starting third callback.")
      setTimeout(function(){
        middleman(null, "RESULT 3")
      }, 1000);
    }
  ],
  function(err, results) {
    if (err) {throw err;}
    console.log(results);
  }
);
