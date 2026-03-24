const model = require('../models/articleModel');

exports.create = (req, res) => {
    model.createArticle(req.body, (err, result) => {
        if (err) return res.status(500).json(err);
        res.status(201).json(result);
    });
};

exports.getAll = (req, res) => {
    model.getAllArticles((err, rows) => {
        res.json(rows);
    });
};

exports.getOne = (req, res) => {
    model.getArticleById(req.params.id, (err, row) => {
        if (!row) return res.status(404).json({ message: "Not found" });
        res.json(row);
    });
};

exports.update = (req, res) => {
    model.updateArticle(req.params.id, req.body, (err) => {
        res.json({ message: "Updated" });
    });
};

exports.delete = (req, res) => {
    model.deleteArticle(req.params.id, (err) => {
        res.json({ message: "Deleted" });
    });
};

exports.search = (req, res) => {
    model.searchArticles(req.query.query, (err, rows) => {
        res.json(rows);
    });
};
