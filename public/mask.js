$("#selectService").change(function () {
        let id = $(this).val();
        $.get(`/getServises/${id}`).then(
                function(data){
                        console.log('я тут');
                        $("#inputService").val(data.Price);
                }
        )
}).trigger("change")

$("#dateRecord").change(function () {
        let date = $(this).val();     
       // console.log('date в mask.js:',date);
        $.get(`/getRecordByDate/${date}`).then(
                
                /*function(data){
                       console.log('я тут'); 
                       q.render('indexMain',data); 
                }*/
        )
}).trigger("change")
