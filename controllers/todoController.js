export const createTodoController = (req, res) => {
  res.send("Todo created");
};

export const getTodoController = (req, res) => {
  res.send("Get single todo");
};

export const getTodosController = (req, res) => {
  res.send("Get all todos");
};

export const updateTodoController = (req, res) => {
  res.send("Update todo");
};

export const deleteTodoController = (req, res) => {
  res.send("Delete todo");
};
