const Task = require("../models/Task");

//create task

exports.createTask = async(req, res) => {
    try{
        console.log(req.body);
        const task = await Task.create(req.body);
        res.status(201).json(task);
    }
    catch(error){
        res.status(400).json({error: error.message});
    }
};