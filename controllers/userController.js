export const createUserController = (req, res) => {
  res.send("User created");
};

export const getUserController = (req, res) => {
  res.send("Single user");
};

export const getUsersController = (req, res) => {
  res.send("Multiple users");
};

export const updateUserController = (req, res) => {
  res.send("Update user");
};

export const deleteUserController = (req, res) => {
  res.send("User deleted");
};
