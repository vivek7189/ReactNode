/**
 * Created by vivek.kumar1 on 6/1/16.
 */

 var express = require('express');
 var proxy = require('express-http-proxy');
 var app = express();
 app.use('/',express.static('./'));
 app.use('/boot', express.static(__dirname + '/node_modules/bootstrap/dist/'));
// now start the server
//app.use('/proxy',proxy('https://www.snapdeal.com/get/offers/jsonList/diwali-offers'));


app.use('/proxy', proxy('https://www.snapdeal.com/', {
  forwardPath: function(req, res) {
    req.url='https://www.snapdeal.com/get/offers/jsonList/diwali-offers'
     var data =require('url').parse(req.url).path;
       console.log(data);
    return data;
  }
}));
var server = app.listen(8002,function (){
     console.log('Listening on port :',server.address().port);
})

