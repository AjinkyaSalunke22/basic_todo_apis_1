import Users from "../models/userModel.js";

export const createUserController = (req, res) => {
  const { id, name } = req.body;

  if (Users[id]) {
    return res.status(409).json({ message: "User id already present" });
  } else {
    Users[id] = { id, name };
    return res
      .status(201)
      .json({ message: "User created successfully", user: Users[id] });
  }
};

export const getUserController = (req, res) => {
  const id = req.params.id;

  if (Users[id]) {
    return res.status(200).json({ message: "User found", data: Users[id] });
  } else {
    return res.status(404).json({ message: "User not found" });
  }
};

export const getUsersController = (req, res) => {
  if (JSON.stringify(Users) === "{}") {
    return res.status(404).json({ message: "Users not found" });
  } else {
    return res.status(200).json({ message: "Users found", data: Users });
  }
};

export const updateUserController = (req, res) => {
  const id = req.params.id;
  const user = req.body;

  if (Users[id]) {
    Users[id] = user;
    return res
      .status(200)
      .json({ message: "User updated successfully", data: Users[id] });
  } else {
    return res.status(404).json({ message: "User not found" });
  }
};

export const deleteUserController = (req, res) => {
  const id = req.params.id;

  if (Users[id]) {
    delete Users[id];
    return res.status(200).json({ message: "User deleted successfully" });
  } else {
    return res.status(404).json({ message: "User not found" });
  }
};
