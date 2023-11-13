const express = require('express');
const route = express.Router();

const { 
    getAllTodo, 
    getTodoById, 
    createTodo,
    updateTodo,
    deleteTodo,
    deleteAllTodo,
} = require('../controllers/todo.controller');
const verifyToken = require('../middleware/auth');

route.get("/", verifyToken, getAllTodo); 
route.get("/:id", verifyToken, getTodoById);
route.post("/", verifyToken, createTodo);
route.put("/:id", verifyToken, updateTodo);
route.delete("/:id", verifyToken, deleteTodo);
route.delete("/:id", verifyToken, deleteAllTodo);

module.exports = route;