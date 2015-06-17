var http = require('http'),
    async = require('async');

async.waterfall(
  [
    // Start with eggs
    function(callback){
      callback(null, "eggs");
    },
    // Crack eggs
    function(input, callback){
      function crack(eggs) {return ["egg yolk", "egg white"];}
      callback(null, crack(input));
      //callback(null, "Output from Stage 2");
    },
    // Whisk eggs
    function(input, callback){
      function mix(eggParts) {return "mixed eggs";}
      callback(null, mix(input));
      //callback(null, "Output from Stage 3");
    },
    // Fry eggs
    function(input, callback) {
      function fry(eggMixture) {return "empty omelette";}
      callback(null, fry(input));
    },
    // Fill omelette
    function(input, callback) {
      function fill(omelette) {return "stuffed omelette";}
      callback(null, fill(input));
    }
  ],
  //Serve the omelette
  function(err, result){
    if (err) {console.error(err);}
    console.log("Enjoy your tasty, delicious " + result);
  }
)
