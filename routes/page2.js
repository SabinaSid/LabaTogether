const {MainViewModel} = require( '../models');
const db = require( '../utils/sqlitedb');

module.exports = (r, q) => {
            let model = new MainViewModel('Vet Clinic');
            q.render('indexEdit', model);
}