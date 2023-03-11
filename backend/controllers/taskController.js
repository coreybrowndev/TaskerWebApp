const asyncHandler = require("express-async-handler");

const Task = require("../models/taskModel");

// @desc Get tasks
//@route GET /api/tasks
//@access private
const getTasks = asyncHandler(async (req, res) => {
  const tasks = await Task.find();
  res.status(200).json(tasks);
});

// @desc New task
//@route POST /api/tasks
//@access private
const createTask = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    //400 means bad request
    res.status(400);
    throw new Error("Please add a text field");
  }
  const task = await Task.create({
    text: req.body.text,
  });
  res.status(200).json(task);
});

// @desc Update tasks
//@route PUT /api/tasks
//@access private
const updateTask = asyncHandler(async (req, res) => {
  const task = await Task.findById(req.params.id);

  if (!task) {
    res.status(400);
    throw new Error("Task not found");
  }

  const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.status(200).json(updatedTask);
});

// @desc Delete tasks
//@route DELETE /api/tasks
//@access private
const deleteTask = asyncHandler(async (req, res) => {
  const deleteTask = await Task.findByIdAndDelete(req.params.id);

  if (!deleteTask) {
    res.status(400);
    throw new Error("Task not found");
  }

  res.status(200).json(req.params.id);
});

module.exports = {
  getTasks,
  createTask,
  updateTask,
  deleteTask,
};
