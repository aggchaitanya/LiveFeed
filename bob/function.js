
            $(function(){               
            //     $('#select_link').click(function(e){
            //         e.preventDefault();
            //         console.log('select_link clicked');
                    
            //         var data = {};
            //         data.name = "ramu";
            //         data.message = "tttytyt";
                    
            //         $.ajax({
                 
            //             type: 'POST',
            //             data: JSON.stringify(data),
            //             contentType: 'application/json',
            //             url: 'http://localhost:3000/endpoint', 
            //             success: function(data) {
            //                 console.log('success');
            //                 console.log(JSON.stringify(data));
            //             }
            //         });
 
            //     });             
            // }



var $iFrame=$('#yoyo');    
$('.bobmarley').hover(){
    var src= this.href /* not sure of source*/
    $iFrame.show().attr('src', src);
},function(){
   $iFrame.hide()
};





}

            );

