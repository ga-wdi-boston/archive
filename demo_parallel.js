var async = require('async'),
    http = require('http');

async.parallel(
  {
    google: function(callback){
      // Do some stuff
      // callback(null, "Result 1");
      http.get("http://www.google.com", function(response){
        var responseBody = "";
        response.setEncoding('utf8');
        response.on('data', function(chunk){responseBody += chunk;});
        response.on('end', function(){
          callback(null, "Google: " + responseBody.length);
        });
      }).on('error', function(e){
        callback(e);
      })
    },
    yahoo: function(callback){
      // Do some stuff
      // callback(null, "Result 2");
      http.get("http://www.yahoo.com", function(response){
        var responseBody = "";
        response.setEncoding('utf8');
        response.on('data', function(chunk){responseBody += chunk;});
        response.on('end', function(){
          callback(null, "Yahoo: " + responseBody.length);
        });
      }).on('error', function(e){
        callback(e);
      })
    },
    amazon: function(callback){
      // Do some stuff
      // callback(null, "Result 3");
      http.get("http://www.amazon.com", function(response){
        var responseBody = "";
        response.setEncoding('utf8');
        response.on('data', function(chunk){responseBody += chunk;});
        response.on('end', function(){
          callback(null, "Amazon: " + responseBody.length);
        });
      }).on('error', function(e){
        callback(e);
      })
    },
  },
  function(err, results){
    if(err) {console.error(err);}

    console.log(results);


  }
);
