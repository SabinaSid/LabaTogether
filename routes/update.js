const {MainViewModel} = require( '../models');
const db = require( '../utils/sqlitedb');


module.exports = (r, q) => {
    db.getRecords(r.params.id).then(item => {
        if(item) {
            console.log(item);
            db.getRecords().then(record => {
                db.getService().then(service => {
                    db.getTypeAnimal().then(typeAnimal=>{
                        let model = new MainViewModel("Veterinaty Clinic" , record, service, typeAnimal, item);
                        console.log('item: ', item);
                        q.render('indexEdit', model);  
                    });  
                });
            });
        } else {
            q.redirect('/');
        }
    });
}
