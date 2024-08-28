import express from "express";
const router = express.Router();

let users = [
  {
    id: 1,
    firstname: "Bradley",
    lastname: "Floyd III",
    job: "Quantum Solutions",
  },
  { id: 2, firstname: "John", lastname: "Smith", job: "MRM" },
  { id: 3, firstname: "John", lastname: "Doe", job: "GM" },
  { id: 4, firstname: "Jane", lastname: "Doe", job: "Ford" },
];

router.get("/", (req, res) => {
  const limit = parseInt(req.query.limit) || 10;

  if(isNaN(limit) || limit < 1) {
    const error = new Error(`Invalid limit`);
    error.status = 400;
    
    return next(error);
  }

  if (!isNaN(limit) && limit > 0) {
    return res.status(200).json(users.slice(0, limit));
  }

  res.status(200).json(users);
});

router.get("/:id", (req, res) => {
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
});

export default router;
