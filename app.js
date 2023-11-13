const express = require('express');
const cors = require('cors')

const app = express();
const PORT = process.env.PORT || 3000;

const db = require("./config/db");
const allRoutes = require("./routes");

db.then(() => {
    console.log("Berhasil konek ke MongoDB");
})
.catch(() => {
    console.log("Gagal konek ke MongoDB");
})

app.use(cors());
app.use(express.json());
app.use(allRoutes);

app.listen(PORT, () => {
    console.log(`Server running on Port ${PORT}`);
});