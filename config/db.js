const mongoose = require('mongoose');

const DB_URL = "mongodb+srv://kdkrisnaaa:CJL3seaXbWPZ5zFO@cluster0.jlhrvwy.mongodb.net/todo-list"

const db = mongoose.connect(DB_URL);

module.exports = db;