console.log("\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nStarting-------------")

//http server
var http = require('http');//creating a server
var fs   = require('fs');
server = http.createServer(function  (request,response) {
	// body...
	 response.writeHead(200, {'Content-type': 'text/html'});
	 console.log('Request URL', request.url);

	  if(request.url === '/')
	  {
	    fs.readFile('views/index.html', 'utf8', function (errors, contents){
	      response.write(contents); 
	      //response.write(errors); 
	      response.end();
	    });
	  } 
	  else if(request.url === '/dojo.html')
	  {
	    fs.readFile('views/dojo.html', 'utf8', function (errors, contents){
	      response.write(contents); 
	      //response.write(errors); 
	      response.end();
	    });
	  } 
	  else
	  {
	  	var html = "<div><h3>File not found !!!!!!!!!! </h3></div>"
	  	 response.end(html);
	  }
	});

server.listen(8080);
console.log("Running in localhost at port 8080");