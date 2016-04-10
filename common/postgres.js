const Promises = require('bluebird');
const Postgres = require('pg-promise');
const Settings = require('../settings.js');

var repository = require('./repository.js');

var options = {
    promiseLib: Promises,
    extend: function (db) {
        this.action = repository.getRepo(db);
    }
};

var db, pgp = Postgres(options);

if (typeof process.env.DATABASE_URL !== 'undefined') {
    db = pgp(process.env.DATABASE_URL.toString() + '?ssl=true');
} else {
    db = pgp(Settings.database);
}

module.exports = {
    db: db,
    pgp: pgp
};
