const asyncHandler = require("express-async-handler");

// @desc Get tasks
//@route GET /api/tasks
//@access private
const getTasks = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Get tasks" });
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
  res.status(200).json({ message: "Created task" });
});

// @desc Update tasks
//@route PUT /api/tasks
//@access private
const updateTask = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Update task ${req.params.id}` });
});

// @desc Delete tasks
//@route DELETE /api/tasks
//@access private
const deleteTask = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Delete task ${req.params.id}` });
});

module.exports = {
  getTasks,
  createTask,
  updateTask,
  deleteTask,
};
