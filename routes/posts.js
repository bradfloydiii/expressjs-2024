import express from "express";
import posts from "../models/posts.js";
const router = express.Router();

// GET /api/posts
router.get("/", (req, res) => {
  const limit = parseInt(req.query.limit) || 10;
  if (!isNaN(limit) && limit > 0) {
    return res.status(200).json(posts.slice(0, limit));
  }

  res.status(200).json(posts);
});

// GET /api/posts/:id
router.get("/:id", (req, res, next) => {
  const id = parseInt(req.params.id);
  const post = posts.find((post) => post.id === id);

  if (!post) {
    const error = new Error(`Post with id: ${id} not found`);
    error.status = 404;

    return next(error);
  }

  res.status(200).json(post);
});

// POST /api/posts
router.post("/", (req, res, next) => {
  const { title, content } = req.body;

  if (!title || !content) {
    const error = new Error(`Please include title and content`);
    error.status = 400;

    return next(error);
  }

  const newPost = { id: posts.length + 1, title, content };
  posts.push(newPost);

  res.status(201).json(posts);
});

// PUT /api/posts/:id
router.put("/:id", (req, res, next) => {
  const id = parseInt(req.params.id);

  if (!id || isNaN(id) || id < 1) {
    const error = new Error(`Invalid post id`);
    error.status = 400;

    return next(error);
  }

  const { title, content } = req.body;

  if (!title || !content) {
    const error = new Error(`Please include title and content`);
    error.status = 400;

    return next(error);
  }

  let post = posts.find((post) => post.id === id);

  if (!post) {
    const error = new Error(`Post with id: ${id} not found`);
    error.status = 400;

    return next(error);
  }

  post.title = title;
  post.content = content;

  res.status(200).json(posts);
});

// DELETE /api/posts/:id
router.delete("/:id", (req, res, next) => {
  const id = parseInt(req.params.id);

  if (!id || isNaN(id) || id < 1) {
    const error = new Error(`Invalid post id`);
    error.status = 400;

    return next(error);
  }

  posts = posts.filter((post) => post.id !== id);

  res.status(200).json(posts);
});

export default router;
