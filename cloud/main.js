var fs = require( 'fs' );
var Git = require("nodegit");


Parse.Cloud.define('hello', function(req, res) {
  res.success('Hi');
});

Parse.Cloud.define('nodegit-test', function( req, res) {

    console.log( 'receive nodegit' );
    var random = ( Math.random()*100 ).toFixed(0);
  // Clone a given repository into the `./tmp` folder.
  Git.Clone("https://github.com/neekey/ps.git", "./public/tmp" + random )
      // Look up this known commit.
      .then(function(repo) {
        // Use a known commit sha from this repository.
          console.log( 'success' );
        return res.success( 'success::' + random );
      })
      .catch(function(err) {
          console.log( 'fail', err.message );
          res.error(err.message)
      });
});
