
module.exports = function Route(app){

   

    app.get('/', function(req, res){
      res.render('index',{ title  : 'Welcome Page',
                           heading  : 'My First Express Project' });
      //req.session = null;
    });

    // app.io.route('ready',function(req){
    //   //app.io.broadcast('new_visitor');
    //   room_name = req.data;
    //   console.log(room_name);
    //   req.io.room(room_name).broadcast('announce', {
    //      message: 'New client in the ' + room_name + 'room.'
    //   });

    // });
    
    //Verify the socket conection
     app.io.on('connection', function (req) {
      console.log('connection made');
      //console.log('\n\nLooking into req:', req);
     });

    app.io.route('disconnect', function (req) {
      console.log('__________Disconnected__________');
      //console.log('\n\nLooking into req:', req);
    });

    // // Setup the ready route, join room and broadcast to room.
    // app.io.route('ready', function(req) {
        
    //     req.io.respond({
    //       success: 'here is your acknowledegment for the ready event'
    //     });
        
    //     my_data = Math.random()*100;

    //     req.io.join(req.data);
       
    //     // req.io.room(req.data).broadcast('announce', {
    //     //     message: 'new market value is' +my_data
    //     // });
    //     app.io.room(req.data).broadcast('announce', {
    //         message: 'new market value is' +my_data
    //     });
    // });

    // // Listens to the order_ice_cream event
    // app.io.route('order_ice_cream',function(req){

    //   console.log("customer wants",req.data.type, 
    //     "ice cream of qty",req.data.quantity);

    //   req.io.emit('deliver_ice_cream',
    //       {message: 'thank you for the order'});

    // });
  // // Listens to the order_ice_cream event
  // app.io.route('order_ice_cream', function(req) {
  //     console.log('Client wants ', req.data.quantity + ' ' + req.data.type, 'ice cream');
  //     req.io.emit('deliver_ice_cream', { message: 'Thank you!!!' });
  // })


} 