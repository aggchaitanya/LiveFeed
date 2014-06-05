var express = require('express'),
    wine = require('./routes/wines');
 
var app = express();
 
app.configure(function () {
    app.use(express.logger('dev'));     /* 'default', 'short', 'tiny', 'dev' */
    app.use(express.bodyParser());
});


 app.all('*', function(req, res, next) {

    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
      
   next();
}); 


 
app.post('/endpoint', function(req, res){
   // var obj = {};
    //console.log('body: ' + JSON.stringify(req.body));
   // obj = JSON.stringify(req.body);

    //res.send(req.body);

    var wine = req.body;
    console.log('Adding wine: ' + JSON.stringify(wine));
    db.collection('wines', function(err, collection) {
        collection.insert(wine, {safe:true}, function(err, result) {
            if (err) {
                res.send({'error':'An error has occurred'});
            } else {
                console.log('Success: ' + JSON.stringify(result[0]));
                  res.send(req.body);
            }
        });
    });

  
});

app.get('/endpoint', wine.endpoint);
app.get('/wines', wine.findAll);
app.get('/wines/:id', wine.findById);
app.post('/wines', wine.addWine);
app.put('/wines/:id', wine.updateWine);
app.delete('/wines/:id', wine.deleteWine);
 
app.listen(3000);
console.log('Listening on port 3000...');
