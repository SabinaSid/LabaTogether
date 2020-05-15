const {MainViewModel} = require( '../models');
const db = require( '../utils/sqlitedb');

module.exports = (r, q) => {
    db.getRecords().then(item => {
        if(item) {
            //console.log(item);
            var d=new Date().toISOString().split('T')[0];
            db.getRecordByDate(d).then(records => {
                        let model = records.map(element => {
                        return new MainViewModel("Veterinaty Clinic" , element, null, null, item);             
                        });
                        q.render('indexMain', {records:model});  
                    });  
        } else {
            q.redirect('/');
        }
    });
}