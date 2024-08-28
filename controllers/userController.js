import users from "../models/users.js";

export const getUsers = (req, res, next) => {
  const limit = parseInt(req.query.limit) || 10;

  if (isNaN(limit) || limit < 1) {
    const error = new Error(`Invalid limit`);
    error.status = 400;

    return next(error);
  }

  if (!isNaN(limit) && limit > 0) {
    return res.status(200).json(users.slice(0, limit));
  }

  res.status(200).json(users);
};

export const getUser = (req, res, next) => {
  const id = parseInt(req.params.id);

  if (!id || isNaN(id) || id < 1) {
    const error = new Error(`Invalid user id`);
    error.status = 400;

    return next(error);
  }

  const post = users.find((post) => post.id === id);

  if (!post) {
    const error = new Error(`User with id: ${id} not found`);
    error.status = 400;

    return next(error);
  }

  res.status(200).json(post);
};
