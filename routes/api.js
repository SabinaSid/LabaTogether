let db = require("../utils/sqlitedb");

exports.info = (r,q)=>{
    q.render('api');
};

exports.auth = (r, q, next) => {
    db.getRole(r.query).then(role =>{
        r.isAdmin = role === 'Admin';
        r.isUser = role === 'Admin' || role === 'User';
        if(r.isUser){
            next();
        }
        else {
            q.status(401).json('Login or password is incorrect')
        }
    });
};


exports.get = (r,q) => {
    db.getTasks(+r.query.id).then(item => {
        q.json(item || {});
        
    });
};

exports.add = (r,q)=> {
    db.getStatuses(+r.body.status).then(status=>{
        r.body.status = status;
        db.addTask(r.body).then(x => {
            db.getLastTask().then(task =>{
                q.json(task);
            });
        });
    });
};