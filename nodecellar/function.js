
            $(function(){               
                $('#select_link').click(function(e){
                    e.preventDefault();
                    console.log('select_link clicked');
                    
                    var data = {};
                    data.name = "ramu";
                    data.message = "wassup";
                    
                    $.ajax({
                 
                        type: 'POST',
                        data: JSON.stringify(data),
                        contentType: 'application/json',
                        url: 'http://localhost:3000/endpoint', 
                        success: function(data) {
                            console.log('success');
                            console.log(JSON.stringify(data));
                        }
                    });
 
                });             
            });

