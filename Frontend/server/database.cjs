const sqlite3 = require('sqlite3').verbose();

const DBSOURCE = 'chew.sqlite';

let db = new sqlite3.Database(DBSOURCE, (err) => {
    if (err) {
        // Cannot open database
        console.error(err.message);
        throw err;
    } else {
        console.log('Connected to the SQLite ddatabase.');

        db.run(`CREATE TABLE IF NOT EXISTS user(
            id INTEGER,
            firstName TEXT,
            lastName TEXT,
            birthDate INTEGER,
            email TEXT,
            phone INTEGER,
            roles TEXT,
            profilePic BLOB,
            username TEXT,
            password TEXT
        )`);

        db.run(`CREATE TABLE IF NOT EXISTS member(
            userId INTEGER,
            instituteId INTEGER,
            familyId INTEGER
        )`);

        db.run(`CREATE TABLE IF NOT EXISTS family(
            familyId INTEGER,
            lastName TEXT
        )`);

        db.run(`CREATE TABLE IF NOT EXISTS institute(
            instituteId INTEGER
        )`);

        // db.run(`CREATE TABLE IF NOT EXISTS fridge(
        //     fridgeId INTEGER
        // )`);

        db.run(`CREATE TABLE IF NOT EXISTS fridge(
            fridgeId INTEGER
        )`);

        db.run(`CREATE TABLE IF NOT EXISTS foodItem(
            quantity INTEGER,
            bestBeforeDate INTEGER,
            fridgeId INTEGER,
            ingredientId INTEGER
        )`);

        db.run(`CREATE TABLE IF NOT EXISTS ingredient(
            ingredientName TEXT
        )`);

        db.run(`CREATE TABLE IF NOT EXISTS ingredientQuantity(
            quantity INTEGER,
            recipeId INTEGER
        )`);

        db.run(`CREATE TABLE IF NOT EXISTS recipe(
            recipeId INTEGER,
            name TEXT,
            description TEXT
        )`);

        // Database tables for profile page are created here
        db.run(`CREATE TABLE IF NOT EXISTS profileBadges(
            badgeId INTEGER,
            badgeIcon BLOB,
            description TEXT
        )`);

        // Database tables for shopping cart
        db.run(`CREATE TABLE IF NOT EXISTS shoppingcart(
            cartId INTEGER,
            quantity INTEGER,
            ingredientName TEXT,
            description TEXT
        )`);

        // Insert values into the user table
        const insertUser = "INSERT INTO user VALUES (?, ?, ?, ?, ?, ?, ?, ?,?,?)";
        db.run(insertUser, ['1', 'Marcus', 'Cin', 250800, 'test@mail.com', '12345678', 'Teacher', 'pfpic.jpeg', 'Haavar123', 123]);

        // Retrieve and print data from the user table
        db.all("SELECT * FROM user", [], (err, rows) => {
            if (err) {
                throw err;
            }

            rows.forEach((row) => {
                console.log(row);
            });
        });
    }
});


module.exports = db;
