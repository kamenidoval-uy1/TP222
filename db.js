const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('./blog.db', (err) => {
    if (err) console.error(err.message);
    else console.log("Base connectée");
});

db.run(`
CREATE TABLE IF NOT EXISTS articles (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    titre TEXT,
    contenu TEXT,
    auteur TEXT,
    date TEXT,
    categorie TEXT,
    tags TEXT
)
`);

module.exports = db;
