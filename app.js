const express = require('express');
const app = express();

const connectDB = require('./config/db');
require('dotenv').config();

//middleware
app.use(express.json());

const taskRoutes = require('./routes/taskRoutes');
app.use('/api/tasks', taskRoutes);

app.get('/', (req, res) => {
    res.send("API is working");
});

//database connection
connectDB();

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server is running on Port ${PORT}`);
});
