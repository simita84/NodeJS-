
module.exports = function Route(app){

  	// app.get('/', function(req, res){
   //  	res.render('index', { title   	   : 'Welcome Page',
   //                            heading 	   : 'My First Express Project',
   //                            session_data :  req.session
   //                           });
   //  	//req.session = null;
  	// });

    app.get('/', function(req, res){
      res.render('index',{ title  : 'Welcome Page',
                           heading  : 'My First Express Project' });
      //req.session = null;
    });

  	  
    

  	// app.post('/process',function(req,res){
  		
  	// 	req.session.email 		  = req.body.email;
  	// 	req.session.name  		  = req.body.name;
  	// 	req.session.sessionID 	= req.sessionID; //unique s

  	// 	req.session.save(function(){
  	// 		res.redirect('/');
  	// 	});

  	// 	//console.log("email--",req.session);
  	// });
  
 //you will add more routes and logic here but this is how to write the default route for your project
}