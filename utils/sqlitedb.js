const sqlite = require('sqlite3').verbose();
const path = 'VetClinic.db';

function connection() {
    return new sqlite.Database(path, err => {
        if (err) console.error('Database connect. ', err.message);
        else console.log('Database is connected');
    });
}

exports.getTypeAnimal = function (id) {
    return new Promise((resolve, reject) => {
        let query = 'Select * FROM TypeAnimal';
        let params = [];
        if (id) {
            query += ' WHERE ID = ?';
            params.push(id);
        }

        connection().all(query, params, (err, result) => {
            if (err) reject(err);
            else {
                if (id) {
                    result = result[0];
                }
                resolve(result);
            }
        }).close();
    });
}
exports.getService = function (id) {
    return new Promise((resolve, reject) => {
        let query = 'Select * FROM Service';
        let params = [];
        if (id) {
            query += ' WHERE ID = ?';
            params.push(id);
        }

        connection().all(query, params, (err, result) => {
            if (err) reject(err);
            else {
                if (id) {
                    result = result[0];
                }
                resolve(result);
            }
        }).close();
    });
}

exports.getRecords = function (id) {
    console.log(id);
    return new Promise((resolve, reject) => {
        let context = connection();
        let params = [];
        let query = `select 
        r.ID[IDRecord],
        r.Date,
        r.Time,
        r.NameOwner,
        r.NumberOwner,
        r.NameAnimal,
        t.Name [TypeAnimal],
        s.Name [ServiceName],
        s.Price,
        r.IDService,
        r.IDTypeAnimal
        FROM Record r 
        join Service s on r.IDService=s.ID
        join TypeAnimal t on r.IDTypeAnimal=t.ID`;

        if (id) {
            query += ' WHERE r.ID = ?';
            params.push(id);
        }
        context.all(query,params, (err, result) => {
            if (err) 
                reject(err);
            
            else {
                    if (id) {
                        result = result[0];
                    }

                    resolve(result);
                };
            
        }).close();
    });
}

exports.getRecordByDate = function (date) {
    console.log("дата выбрана:",date);
    return new Promise((resolve, reject) => {
        let context = connection();
        let params = [];
        let query = `select 
        r.ID[IDRecord],
        r.Date,
        r.Time,
        r.NameOwner,
        r.NumberOwner,
        r.NameAnimal,
        t.Name [TypeAnimal],
        s.Name [ServiceName],
        s.Price,
        r.IDService,
        r.IDTypeAnimal
        FROM Record r 
        join Service s on r.IDService=s.ID
        join TypeAnimal t on r.IDTypeAnimal=t.ID`;

        if (date) {
            query += ' WHERE r.Date = ?';
            params.push(date);
        }
        context.all(query,params, (err, result) => {
            if (err) 
                reject(err);
            
            else {
                    /*if (date) {
                        result = result[0];
                    }*/

                    resolve(result);
                };
            
        }).close();
    });
}

exports.addRecord = function (record) {   
    return new Promise((resolve, reject) => {
        if (!record) {
            reject({ message: 'record is empty' });
            return;
        }
        console.log("запись:", record);
        let dateNow = new Date().toISOString().split('T')[0];
        let query = 'INSERT INTO Record (Date, Time, NameOwner, NumberOwner,NameAnimal,IDTypeAnimal,IDService) VALUES(?,?,?,?,?,?,?)';
        let params = [
            record.Date || dateNow,
            record.Time || '',
            record.NameOwner || '',
            record.NumberOwner || '',
            record.NameAnimal || '',
            record.IDTypeAnimal || 1,
            record.IDService || 1,
        ];
        connection().run(query, params, (err, result) => {
            if (err) reject(err);
            else resolve(result);
        }).close();
    });
}

exports.updateRecord = function (record) {
    return new Promise((resolve, reject) => {
        if (!record.id) {
            reject({ message: 'record is empty' });
            return;
        }
        let dateNow = new Date().toISOString().split('T')[0];
        let query = `UPDATE Record SET 
                                        Date = ?,
                                        Time = ?,
                                        NameOwner = ?,
                                        NumberOwner = ?,
                                        NameAnimal = ?,
                                        IDTypeAnimal =?,
                                        IDService =?
                                      WHERE id = ?`;
        let params = [
            record.Date || dateNow,
            record.Time || '',
            record.NameOwner || '',
            record.NumberOwner || '',
            record.NameAnimal || '',
            record.IDTypeAnimal || 1,
            record.IDService || 1,
            record.id
        ];
        connection().run(query, params, (err, result) => {
            if (err) reject(err);
            else resolve(result);
        }).close();
    });
}

exports.removeRecord = function (id) {
    return new Promise((resolve, reject) => {
        if (!id) {
            reject({ message: 'id is empty' });
            return;
        }

        let query = "DELETE FROM Record WHERE ID = ?";
        let params = [id];

        connection().run(query, params, (err, result) => {
            if (err) reject(err);
            else resolve(result);
        }).close();
    });
}

exports.getLastRecord = function () {
    return new Promise((resolve, reject) => {
        let context = connection();
        let query = `SELECT * FROM Record ORDER BY id DESC LIMIT 1`;

        context.all(query, (err, result) => {
            if (err) {
                reject(err);
            }
            else {
                result = result ? result[0] : null;
                resolve(result);
            }
        }).close();
    });
}
