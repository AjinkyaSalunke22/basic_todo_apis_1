import Tasks from "../models/taskModel.js";

export const createTodoController = (req, res) => {
  const { id } = req.body;

  if (!Tasks[id]) {
    const Task = req.body;
    Tasks[id] = Task;
    return res
      .status(201)
      .json({ message: "Task created successfully", Task: Tasks[id] });
  } else {
    return res.status(409).json({ message: "Task id already present" });
  }
};

export const getTodoController = (req, res) => {
  const id = req.params.id;

  if (Tasks[id]) {
    return res.status(200).json({ message: "Task found", data: Tasks[id] });
  } else {
    return res.status(404).json({ message: "Task not found" });
  }
};

export const getTodosController = (req, res) => {
  if (JSON.stringify(Tasks) !== "{}") {
    return res.status(200).json({ message: "Tasks found", data: Tasks });
  } else {
    return res.status(404).json({ message: "Tasks not found" });
  }
};

export const updateTodoController = (req, res) => {
  const id = req.params.id;
  const Task = req.body;

  if (Tasks[id]) {
    Tasks[id] = Task;
    return res
      .status(200)
      .json({ message: "Task updated successfully", data: Tasks[id] });
  } else {
    return res.status(404).json({ message: "Task not found" });
  }
};

export const deleteTodoController = (req, res) => {
  const id = req.params.id;

  if (Tasks[id]) {
    delete Tasks[id];
    return res.status(200).json({ message: "Task deleted successfully" });
  } else {
    return res.status(404).json({ message: "Task not found" });
  }
};
