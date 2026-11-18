import express from "express";

import {
  createTask,
  getTasks,
  getTask,
  updateTask,
  deleteTask,
} from "../controllers/taskController.js";

import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

// Create a task
router.post("/projects/:projectId/tasks", protect, createTask);

// Get all tasks for a project
router.get("/projects/:projectId/tasks", protect, getTasks);

// Get a single task
router.get("/projects/:projectId/tasks/:taskId", protect, getTask);

// Update a task
router.put("/projects/:projectId/tasks/:taskId", protect, updateTask);

// Delete a task
router.delete("/projects/:projectId/tasks/:taskId", protect, deleteTask);

export default router;
