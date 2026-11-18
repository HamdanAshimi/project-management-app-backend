import Task from "../models/Task.js";
import Project from "../models/Project.js";

export async function createTask(req, res) {
  try {
    const { text } = req.body;

    if (!text) {
      return res.status(400).json({
        message: "Task text is required",
      });
    }

    const project = await Project.findOne({
      _id: req.params.projectId,
      user: req.user._id,
    });

    if (!project) {
      return res.status(404).json({
        message: "Project not found",
      });
    }

    const task = await Task.create({
      text,
      project: project._id,
      user: req.user._id,
    });

    res.status(201).json({
      message: "Task created successfully",
      task,
    });
  } catch (error) {
    console.error("CREATE TASK ERROR:", error);

    res.status(500).json({
      message: "Server error",
    });
  }
}

// Get all tasks for a project
export const getTasks = async (req, res) => {
  try {
    const project = await Project.findOne({
      _id: req.params.projectId,
      user: req.user._id,
    });

    if (!project) {
      return res.status(404).json({
        message: "Project not found",
      });
    }

    const tasks = await Task.find({
      project: project._id,
      user: req.user._id,
    });

    res.status(200).json({ tasks });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// Get a single task
export const getTask = async (req, res) => {
  try {
    const task = await Task.findOne({
      _id: req.params.taskId,
      project: req.params.projectId,
      user: req.user._id,
    });

    if (!task) {
      return res.status(404).json({
        message: "Task not found",
      });
    }

    res.status(200).json({ task });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// Update a task
export const updateTask = async (req, res) => {
  try {
    const { text } = req.body;

    if (!text || !text.trim()) {
      return res.status(400).json({
        message: "Task text is required",
      });
    }

    const task = await Task.findOneAndUpdate(
      {
        _id: req.params.taskId,
        project: req.params.projectId,
        user: req.user._id,
      },
      { text: text.trim() },
      { new: true, runValidators: true },
    );

    if (!task) {
      return res.status(404).json({
        message: "Task not found",
      });
    }

    res.status(200).json({
      message: "Task updated successfully",
      task,
    });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// Delete a task
export const deleteTask = async (req, res) => {
  try {
    const task = await Task.findOneAndDelete({
      _id: req.params.taskId,
      project: req.params.projectId,
      user: req.user._id,
    });

    if (!task) {
      return res.status(404).json({
        message: "Task not found",
      });
    }

    res.status(200).json({
      message: "Task deleted successfully",
    });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
