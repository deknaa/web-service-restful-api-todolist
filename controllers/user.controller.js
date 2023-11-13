const Todo = require('../models/todo');
const User = require('../models/user');

module.exports = {
    getAllUser: async (req, res) => {
        const users = await User.find()

        res.json({
            message: "Berhasil mendapatkan data user",
            data: users
        })
    },

    getUserById: async (req, res) => {
        const {id} = req.params
        const users = await User.findById(id)

        res.json(users)
    },
    
    createUser: async (req, res) => {
        let data = req.body

        await User.create(data)

        res.json({
            message: "Berhasil membuat data user"
        })
    },

    getUserTodos: async (req, res) => {
        const {id} = req.params

        const todos = await Todo.find({userID: id})

        res.json(todos)
    },

}