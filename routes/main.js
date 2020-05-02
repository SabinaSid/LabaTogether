const {MainViewModel} = require( '../models');
const db = require( '../utils/sqlitedb');
let dt = require('../public/mask');
/*
module.exports = (r, q) => {
    db.getRecords().then(item => {
        if(item) {
            //console.log(item);
            db.getRecords().then(records => {
                        let model = records.map(element => {
                        return new MainViewModel("Veterinaty Clinic" , element, null, null, item);             
                        });
                        //console.log("item: ", item);
                        console.log('{records:modelmainjs',{records:model});
                        q.render('indexMain', {records:model});  
                    });  
        } else {
            q.redirect('/');
        }
    });
}
$("#dateRecord").change(function () {
     _date_ = $(this).val();
}).trigger("change")*/

module.exports = (r, q) => {
    //const date = require('../public/mask');
    //var date= new Date().toISOString().split('T')[0]   
    console.log('Переданная дата: ', dt.ExportDate);
   /* db.getRecordByDate(dt.ExportDate).then(records => {
        console.log('CRUD по нужной дате:',records)
       let model = records.map(element => {
            console.log('element',element);
            return new MainViewModel("Veterinaty Clinic" , element, null, null, records);             
            });
        console.log('{records:model',{records:model});   
        q.render('indexMain', {records:model}); */
      //  q.json(item);
    //});
}
/*
module.exports = (r, q) => {
    db.getRecords().then(item => {
        if(item) {
            //console.log(item);
            db.getRecords().then(records => {
                        let model = records.map(element => {
                        return new MainViewModel("Veterinaty Clinic" , element, null, null, item);             
                        });
                        //console.log("item: ", item);
                        console.log('{records:modelmainjs',{records:model});
                        q.render('indexMain', {records:model});  
                    });  
        } else {
            q.redirect('/');
        }
    });
}*/