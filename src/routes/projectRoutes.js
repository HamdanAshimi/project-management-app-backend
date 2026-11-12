import express from "express";

import {
  createProject,
  getProjects,
  getProject,
  updateProject,
  deleteProject,
} from "../controllers/projectController.js";

import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", protect, getProjects);
router.post("/", protect, createProject);

router.get("/:projectId", protect, getProject);
router.put("/:projectId", protect, updateProject);
router.delete("/:projectId", protect, deleteProject);

export default router;
