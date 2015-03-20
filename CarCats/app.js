console.log("-----------Cat Cars app starting---------------");
 
//http server
var http = require('http');//creating a server
var fs   = require('fs');

//Create server
server = http.createServer(function  (request,response) {
	// body...
	 response.writeHead(200, {'Content-type': 'text/html'});
	 console.log('Request URL is', request.url);

	 if(request.url === '/')
	  {
	    fs.readFile('views/index.html', 'utf8', function (errors, contents){
	      response.write(contents); 
	      //response.write(errors); 
	      response.end();
	  	});
	  } 
	  else if(request.url === '/cars/index.html')
	  {
	  	 fs.readFile('views/cars/index.html', 'utf8', function (errors, contents){
	      response.write(contents); 
	      //response.write(errors); 
	      response.end();
	  	});
	  }
	   else if(request.url === '/cats/index.html')
	  {
	  	 fs.readFile('views/cats/index.html', 'utf8', function (errors, contents){
	      response.write(contents); 
	      //response.write(errors); 
	      response.end();
	  	});
	  }
	   else if(request.url === '/style.css')
	  {
	  	 fs.readFile('./styles/style.css', 'utf8', function (errors, contents){
	      response.write(contents); 
	      //response.write(errors); 
	      response.end();
	  	});
	  }
	   else if(request.url === '/images/car1.jpeg')
	  {
	  	 fs.readFile('./images/car1.jpeg', 'utf8', function (errors, contents){
	      response.write(contents); 
	      //response.write(errors); 
	      response.end();
	  	});
	  }
	    else if(request.url === '/images/car2.jpg')
	  {
	  	 fs.readFile('./images/car2.jpg', 'utf8', function (errors, contents){
	      response.write(contents); 
	      //response.write(errors); 
	      response.end();
	  	});
	  }
	    else if(request.url === '/images/car3.jpg')
	  {
	  	 fs.readFile('./images/car3.jpg', 'utf8', function (errors, contents){
	      response.write(contents); 
	      //response.write(errors); 
	      response.end();
	  	});
	  }
	   else 
	   {
   		 response.end('File not found!!!');
  		}	

	});

server.listen(8080);
console.log("Running in localhost at port 8080");