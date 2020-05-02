$("#selectService").change(function () {
        let id = $(this).val();
        $.get(`/getServises/${id}`).then(
                function(data){
                        console.log('я тут');
                        $("#inputService").val(data.Price);
                }
        )
}).trigger("change")


exports.ExportDate = function(){
        $("#dateRecord").change(function () {
                let date_ = $(this).val();
         
                module.exports = date_;
               //  module.exports.dateMask = date; 
                // console.log('date в mask.js:',date);
                // $.get(`/getRecordByDate/${date}`).then(
                         /*function(data){
                                console.log('я тут'); 
                                q.render('indexMain',data); 
                         }*/
                 //)
         }).trigger("change")
}


//module.exports = {date_};
