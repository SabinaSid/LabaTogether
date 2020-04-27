function changeFunc() {
        var selectBox = document.getElementById("selectService");
        var selectedValue = selectBox.options[selectBox.selectedIndex];
        document.getElementById("inputService").value = selectedValue.value;
};

$("#selectService").change(function () {
        let id = $(this).val();
        $.get(`/getServises/${id}`).then(
                function(data){
                        $("#inputService").val(data.Price);
                }
        )
}).trigger("change")