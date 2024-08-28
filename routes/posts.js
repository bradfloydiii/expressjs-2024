import express from "express";
import {
  getPosts,
  getPost,
  createPost,
  updatePost,
  deletePost,
} from "../controllers/postController.js";
const router = express.Router();

// GET /api/posts
router.get("/", getPosts);

// GET /api/posts/:id
router.get("/:id", getPost);

// POST /api/posts
router.post("/", createPost);

// PUT /api/posts/:id
router.put("/:id", updatePost);

// DELETE /api/posts/:id
router.delete("/:id", deletePost);

export default router;
