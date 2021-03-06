
const {MainViewModel} = require( '../models');
const db = require( '../utils/sqlitedb');

module.exports = (r,q) =>{
    db.getService().then(service => {
        db.getTypeAnimal().then(typeAnimal =>{
            let model = new MainViewModel('Veterinary clinic', null, service, typeAnimal, null);
            q.render('indexEdit', model);
        });
    });
}