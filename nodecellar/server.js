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
  var name123 = req.body.name;
  var message123 = req.body.message;



    var wine = req.body;
    console.log('Adding wine: ' + JSON.stringify(wine));

    console.log('name' + name123 + ' message ' + message123 );

    db.collection('comments', function(err, collection) {
        collection.count({'name': name123 , 'message': message123},function(err,result){
            if (result == 0){
                console.log("does not exist");

                db.collection('comments',function(err,collection){
                collection.insert(wine, {safe:true}, function(err, result) {
                 if (err) {
                  res.send({'error':'An error has occurred'});
                 } else {
                        console.log('Success: ' + JSON.stringify(result[0]));
                        res.send(req.body);
                        }
                    });
            });


            }
            else{
                console.log("exists");
                res.send("gaand mara");
            }
        });
   

    });


});

app.get('/endpoint', wine.endpoint);
app.get('/comments', wine.findAll);
app.get('/comments/:id', wine.findById);
app.post('/comments', wine.addWine);
app.put('/comments/:id', wine.updateWine);
app.delete('/comments/', wine.deleteWine);
 
app.listen(3000);
console.log('Listening on port 3000...');
