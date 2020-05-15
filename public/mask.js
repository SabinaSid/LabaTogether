$("#selectService").change(function () {
        let id = $(this).val();
        $.get(`/getServises/${id}`).then(
                function(data){
                        $("#inputService").val(data.Price);
                }
        )
}).trigger("change")

$("#dateRecord").change(function () {
        let date = $(this).val();     
        $.get(`/getRecordByDate/${date}`,
                function(data){
                        $("table tbody tr").remove();
                        data.forEach(x => {
                              let tr=`<tr> 
                                        <td>   </td>
                                        <td>  ${x.Date} </td>
                                        <td>  ${x.Time} </td>
                                        <td>  ${x.NameOwner} </td>
                                        <td>  ${x.NumberOwner} </td>
                                        <td>  ${x.NameAnimal} </td>
                                        <td>  ${x.TypeAnimal} </td>
                                        <td>  ${x.ServiceName} </td>
                                        <td>  ${x.Price} </td>
                                        <td>  
                                                <div>
                                                        <a class="btn btn-secondary btn-lg" href="/edit/${x.IDRecord}">&#9998;</a>
                                                        <a class="btn btn-secondary btn-lg" href="/delete/${x.IDRecord}">&#128465;</a>

                                                </div>
                                        </td>
                                        </tr>
                                        `  ;
                                $("table tbody").append(tr);
                                
                                
                        });
                        
                }
        ).catch((err)=>{
                console.log("ошибка в mask", err);
        });
})
