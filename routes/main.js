const {MainViewModel} = require( '../models');
const db = require( '../utils/sqlitedb');

module.exports = (r, q) => {
    db.getRecords().then(item => {
        if(item) {
            db.getRecords().then(records => {
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