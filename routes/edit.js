
const {MainViewModel} = require( '../models');
const db = require( '../utils/sqlitedb');

module.exports = (r, q) => {
    db.getRecords().then(item => {
        if(item) {
            db.getRecords().then(records => {
                db.getService().then(service => {
                    db.getTypeAnimal().then(typeAnimal =>{
                        let model = records.map(element => {
                        return new MainViewModel("Veterinaty Clinic" , element, service , typeAnimal, item);             
                        });
                        console.log('item: ', model);
                        q.render('indexMain', {records:model});  
                    });
                });
            });

        } else {
            q.redirect('/');
        }
        
    });
}
/*
module.exports = (r,q) =>{
    db.getService().then(service => {
        db.getTypeAnimal().then(typeAnimal =>{
            let model = new MainViewModel('Veterinary clinic', null, service, typeAnimal, null);
            console.log('item: ', model);
            q.render('indexEdit', model);
        });
    });
}*/