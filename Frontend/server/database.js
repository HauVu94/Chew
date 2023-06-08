const sqlite3 = require('sqlite3').verbose();
const md5 = require('md5');

const DBSOURCE = 'db.sqlite'

let db = new sqlite3.Databse(DBSOURCE, (err) => {
    if (err) {
        // Cannot open database
        console.error(err.message)
        throw err
    }else {
        console.log('Connected to the SQLite database. ')
        db.run('CREATE TABLE user(\n' +
            '            id INTEGER,\n' +
            '            firstName TEXT,\n' +
            '            lastName TEXT,\n' +
            '            birthDate INTEGER,\n' +
            '            email TEXT,\n' +
            '            phone INTEGER,\n' +
            '            roles TEXT,\n' +
            '            profilePic BLOB\n' +
            '        )',
            (err) => {
            if (err){
                // tabel already created
            }else {
                // table just created, creatomg some rows.
                var insert = "INSERT INTO user VALUES (?, ?, ?, ?, ?, ?, ?, ?)"
                db.run(insert, ['0', 'Marcus', 'Cin', 250800, 'test@mail.com', '12345678', 'Teacher', 'pfpic.jpeg'])
            }
            }
            )
    }
})

module.exports = db

const db1 = require('./database.js')