 db.collection('comments', function(err, collection) {



        collection.insert(wine, {safe:true}, function(err, result) {
            if (err) {
                res.send({'error':'An error has occurred'});
            } else {
                console.log('Success: ' + JSON.stringify(result[0]));
                  res.send(req.body);
            }
       });
    });