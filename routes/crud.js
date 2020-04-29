const { MainViewModel } = require('../models');
let db = require('../utils/sqlitedb');

//сделано
exports.get = (r, q) => {
    db.getRecords(+r.params.id).then(item => {
        if(item) {
            console.log(item);
            db.getRecords().then(record => {
                db.getService().then(service => {
                    db.getTypeAnimal().then(typeAnimal=>{
                        let model = new MainViewModel("Veterinaty Clinic" , record, service, typeAnimal, item);
                        console.log('item: ', item);
                        q.render('indexMain', model);  
                    });  
                });
            });
        } else {
            q.redirect('/');
        }
    });
}

//сделано
exports.add = (r, q) => {
    db.getTypeAnimal(+r.body.typeAnimal).then(typeAnimal=>{
        r.body.IDTypeAnimal = typeAnimal.id;
            db.getService(+r.body.service).then(service=>{
                r.body.IDService=service.id;
                db.addRecord(r.body).then(x=>{
                    q.redirect('/');
                });
            });       
    });
}
//сделано
exports.update = (r, q) => {
    r.body.id = +r.body.id;
    db.getTypeAnimal(+r.body.typeAnimal).then(typeAnimal => {
        r.body.IDTypeAnimal = typeAnimal.id;
        db.getService(+r.body.service).then(service=>{
           r.body.IDService=service.id;
            db.updateRecord(r.body).then(y => {
                q.redirect('/');
            });
        });       
    });
};


//сделано
exports.delete = (r, q) => {
    db.removeRecord(+r.params.id).then(x=>{
        q.redirect('/');
    });
};

exports.getServises = (r, q) => {
    db.getService(+r.params.id).then(item => {
        q.json(item);
    });
}