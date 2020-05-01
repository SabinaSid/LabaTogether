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
                        let model = new MainViewModel("Veterinaty Clinic" , record, service, typeAnimal, itemI);
                        console.log('item: ', itemI);
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
    db.getTypeAnimal(+r.body.IDTypeAnimal).then(TypeAnimal=>{
        r.body.IDTypeAnimal = TypeAnimal.ID;
            db.getService(+r.body.IDService).then(Service=>{
                r.body.IDService=Service.ID;
                db.addRecord(r.body).then(x=>{
                    q.redirect('/');
                });
            });       
    });
}
//сделано
exports.update = (r, q) => {
    r.body.id = r.params.id;
    db.getTypeAnimal(+r.body.IDTypeAnimal).then(TypeAnimal => {
        r.body.IDTypeAnimal = TypeAnimal.ID;
        db.getService(+r.body.IDService).then(Service=>{
           r.body.IDService=Service.ID;
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

//
exports.getServises = (r, q) => {
    db.getService(+r.params.id).then(item => {
        q.json(item);
    });
}
exports.getRecordByDate= (r, q) => {
    db.getRecordByDate(r.params.date).then(item => {
        console.log('CRUD по нужной дате:',item)
        q.json(item);
    });
}