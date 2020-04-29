
$("#selectService").change(function () {
        let id = $(this).val();
        $.get(`/getServises/${id}`).then(
                function(data){
                        $("#inputService").val(data.Price);
                }
        )
}).trigger("change")