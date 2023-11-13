const Todo = require('../models/todo');

module.exports = {
    getAllTodo: async (req, res) => {
        const user = req.user

        const todos = await Todo.find({userID: user._id}).populate("userID", ["_id", "name"]);

        res.json({
            message: "Berhasil mendapatkan data todo",
            data: todos,
        })
    },

    getTodoById: async (req, res) => {
        const { id } = req.params;

        try {
        const todo = await Todo.findById(id).populate("userID", ["_id", "name"]);

        if (!todo) {
            return res.status(404).json({
            message: "Todo tidak ditemukan",
            });
        }

        res.json({
            message: "Berhasil mendapatkan detail todo",
            data: todo,
        });
        } catch (error) {
        res.status(500).json({
            message: "Gagal mendapatkan detail todo",
            error: error.message,
        });
        }
    },
    
    createTodo: async (req, res) => {
        let data = req.body

        await Todo.create(data)

        res.json({
            message: "Berhasil membuat data todo"
        })
    },

    updateTodo: async (req, res) => {
        const { id } = req.params;
        const newData = req.body;
    
        try {
          const todo = await Todo.findByIdAndUpdate(
            id,
            newData,
            { new: true } // Mengembalikan data yang sudah diupdate
          );
    
          if (!todo) {
            return res.status(404).json({
              message: "Todo tidak ditemukan",
            });
          }
    
          res.json({
            message: "Berhasil mengubah data todo",
            data: todo,
          });
        } catch (error) {
          res.status(500).json({
            message: "Gagal mengubah data todo",
            error: error.message,
          });
        }
      },
    
      deleteTodo: async (req, res) => {
        const { id } = req.params;
    
        try {
          const todo = await Todo.findByIdAndDelete(id);
    
          if (!todo) {
            return res.status(404).json({
              message: "Todo tidak ditemukan",
            });
          }
    
          res.json({
            message: "Berhasil menghapus data todo",
            data: todo,
          });
        } catch (error) {
          res.status(500).json({
            message: "Gagal menghapus data todo",
            error: error.message,
          });
        }
      },
    
      deleteAllTodo: async (req, res) => {
        const user = req.user;
    
        try {
          const result = await Todo.deleteMany({ userID: user.id });
    
          res.json({
            message: "Berhasil menghapus semua data todo",
            data: result,
          });
        } catch (error) {
          res.status(500).json({
            message: "Gagal menghapus semua data todo",
            error: error.message,
          });
        }
      },
}