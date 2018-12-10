/*
**
* Primary File for API
**
*/

// dependency
var http = require('http');
var urlHttp = require('url');

// create server and server should response for all requests
var httpServer = http.createServer(function(req,resp){

  // get urlHttp query and parse it
  var parsedUrl = urlHttp.parse(req.url, true);

  // get pathname
  var urlPath = parsedUrl.pathname;
  var trimmedPath = urlPath.replace(/^\/+|\/+$/g,'');

  // get query string as an object
  var queryStringObject = parsedUrl.query;
  console.log("QueryStringObject: ", queryStringObject);

  // get http method
  var httpMethod = req.method;
  //console.log("HTTP Method: " + httpMethod);

  //send response to client
  resp.end('Hello World\n');

  // log all requests
  console.log("Request received on path: " + trimmedPath + " with http method: " + httpMethod);

});

// server listen to port 4000
httpServer.listen(4000, function() {
  console.log("Http Server is running and listening at port 4000");
});
