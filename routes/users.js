import express from "express";
const router = express.Router();

let users = [
  {
    id: 1,
    firstname: "Bradley",
    lastname: "Floyd III",
    job: "Quantum Solutions",
  },
  { id: 2, firstname: "Zander", lastname: "Waldman", job: "MRM" },
  { id: 3, firstname: "John", lastname: "Doe", job: "GM" },
  { id: 4, firstname: "Jane", lastname: "Doe", job: "Ford" },
];

router.get("/", (req, res) => {
  const limit = parseInt(req.query.limit) || 10;
  if (!isNaN(limit) && limit > 0) {
    return res.status(200).json(users.slice(0, limit));
  }

  res.status(200).json(users);
});

router.get("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const post = users.find((post) => post.id === id);
  if (!post) {
    return res.status(404).json({ message: `User with id: ${id} not found` });
  }

  res.status(200).json(post);
});

export default router;
