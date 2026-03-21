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

exports.updateTask = async(req, res) => {
    try{

        const id = req.params.id;

        const updateTask = await Task.findByIdAndUpdate(
            id,
            req.body,
            {returnDocument: 'after'}
        );

        if(!updateTask){
            return res.status(404).json({error:"Task not Found"});
        }

        res.json(updateTask);
    }

    catch (error){
        res.status(400).json({error:error.message});
    }

};

exports.getTasks = async(req, res) => {
    try{
        const tasks = await Task.find();
        res.json(tasks);
    }
    catch(error){
        res.status(400).json({error: error.message});
    }
};

exports.getTask = async(req, res) => {
    try{
        const id = req.params.id;
        const task = await Task.findById(id);
        
        if(!task){
            return res.status(404).json({error: "Task not Found"});
        }
        
        res.json(task);
    }
    catch(error){
        res.status(400).json({error: error.message});
    }
};

exports.deleteTask = async(req, res) => {
    try{
        const id = req.params.id;
        const deletedTask = await Task.findByIdAndDelete(id);
        
        if(!deletedTask){
            return res.status(404).json({error: "Task not Found"});
        }
        
        res.json({message: "Task deleted successfully", deletedTask});
    }
    catch(error){
        res.status(400).json({error: error.message});
    }
};