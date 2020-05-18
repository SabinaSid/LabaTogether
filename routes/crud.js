const { MainViewModel } = require('../models');
let db = require('../utils/sqlitedb');

//сделано
exports.get = (r, q) => {
    db.getRecords(+r.params.id).then(item => {
        if(item) {
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
    db.getTypeAnimal(+r.body.IDTypeAnimal).then(TypeAnimal=>{
        r.body.IDTypeAnimal = TypeAnimal.ID;
        let anim=TypeAnimal;
            db.getService(+r.body.IDService).then(Service=>{
                let serv=Service;
                r.body.IDService=Service.ID;
                db.addRecord(r.body).then(x=>{
                    db.getLastRecord().then(record=>{
                        let log={
                            whatDo:`Добавление записи:${record.ID},${record.Date},${record.Time},${record.NameOwner},${record.NumberOwner},${record.NameAnimal},${anim.Name},${serv.Name},${serv.Price}руб.`,
                            whenDo:new Date().toISOString()
                        };
                        console.log(log);
                        db.addLogger(log);
                    });                
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
        let anim=TypeAnimal;
        db.getService(+r.body.IDService).then(Service=>{
           r.body.IDService=Service.ID;
           let serv=Service;
            db.updateRecord(r.body).then(y => {
                db.getRecords(r.body.id).then(record=>{
                    let log={
                        whatDo:`Редактирование записи:${r.body.id},${record.Date},${record.Time},${record.NameOwner},${record.NumberOwner},${record.NameAnimal},${anim.Name},${serv.Name},${serv.Price}руб.`,
                        whenDo:new Date().toISOString()
                    }
                    console.log(log);
                    db.addLogger(log);
                });
                q.redirect('/');
            });
        });       
    });
};


//сделано
exports.delete = (r, q) => {
    db.getRecords(+r.params.id).then(record=>{
        db.getTypeAnimal(+record.IDTypeAnimal).then(TypeAnimal => {
            let anim=TypeAnimal;
            db.getService(+record.IDService).then(Service=>{
               let serv=Service;
               db.removeRecord(+r.params.id).then(x=>{
                let log={
                    whatDo:`Удаление записи:${r.params.id},${record.Date},${record.Time},${record.NameOwner},${record.NumberOwner},${record.NameAnimal},${anim.Name},${serv.Name},${serv.Price}руб.`,
                    whenDo:new Date().toISOString()
                }
                console.log(log);
                db.addLogger(log);
                q.redirect('/');
            });
            });       
        });
        
    });
    
};

//
exports.getServises = (r, q) => {
    db.getService(+r.params.id).then(item => {
        q.json(item);
    });
}
exports.getRecordByDate= (r, q) => {
    db.getRecordByDate(r.params.date).then(records => {
        q.status(200);
        console.log('CRUD по нужной дате:',records)
        records.forEach(x => {
            let log={
                whatDo:`Получение записи по дате ${r.params.date}:${x.IDRecord},${x.Date},${x.Time},${x.NameOwner},${x.NumberOwner},${x.NameAnimal},${x.TypeAnimal},${x.ServiceName},${x.Price}руб.`,
                whenDo:new Date().toISOString()
            };
            console.log(log);
            db.addLogger(log);
            
        });
       q.json(records);
    });
}