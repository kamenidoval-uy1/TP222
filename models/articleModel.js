const db = require('../db');

exports.createArticle = (data, callback) => {
    const { titre, contenu, auteur, date, categorie, tags } = data;
    db.run(
        `INSERT INTO articles (titre, contenu, auteur, date, categorie, tags) VALUES (?, ?, ?, ?, ?, ?)`,
        [titre, contenu, auteur, date, categorie, tags],
        function(err) {
            callback(err, { id: this.lastID });
        }
    );
};

exports.getAllArticles = (callback) => {
    db.all(`SELECT * FROM articles`, [], callback);
};

exports.getArticleById = (id, callback) => {
    db.get(`SELECT * FROM articles WHERE id = ?`, [id], callback);
};

exports.updateArticle = (id, data, callback) => {
    const { titre, contenu, categorie, tags } = data;
    db.run(
        `UPDATE articles SET titre=?, contenu=?, categorie=?, tags=? WHERE id=?`,
        [titre, contenu, categorie, tags, id],
        callback
    );
};

exports.deleteArticle = (id, callback) => {
    db.run(`DELETE FROM articles WHERE id=?`, [id], callback);
};

exports.searchArticles = (query, callback) => {
    db.all(
        `SELECT * FROM articles WHERE titre LIKE ? OR contenu LIKE ?`,
        [`%${query}%`, `%${query}%`],
        callback
    );
};
