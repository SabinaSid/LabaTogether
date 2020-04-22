
const {MainViewModel} = require( '../models');
const db = require( '../utils/sqlitedb');

module.exports = (r, q) => {
    db.getRecords().then(record =>{
        db.getService().then (service => {
            db.getTypeAnimal().then(typeAnimal=>{
                let model = new MainViewModel('Veterinary clinic',record, service,typeAnimal);
                q.render('indexEdit', model);
            })
            
        });
    });
}