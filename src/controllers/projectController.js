import Project from "../models/Project.js";

export async function createProject(req, res) {
  try {
    const { title, description, dueDate } = req.body;

    if (!title || !description || !dueDate) {
      return res.status(400).json({
        message: "Please provide all required fields",
      });
    }

    const project = await Project.create({
      title,
      description,
      dueDate,
      user: req.user._id,
    });

    res.status(201).json({
      message: "Project created successfully",
      project,
    });
  } catch (error) {
    console.error("CREATE PROJECT ERROR:", error);

    res.status(500).json({
      message: "Server error",
    });
  }
}

export async function getProjects(req, res) {
  try {
    const projects = await Project.find({
      user: req.user._id,
    }).sort({ createdAt: -1 });

    res.status(200).json({
      projects,
    });
  } catch (error) {
    console.error("GET PROJECTS ERROR:", error);

    res.status(500).json({
      message: "Server error",
    });
  }
}

export async function getProject(req, res) {
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

    res.status(200).json({
      project,
    });
  } catch (error) {
    console.error("GET PROJECT ERROR:", error);

    res.status(500).json({
      message: "Server error",
    });
  }
}

export async function updateProject(req, res) {
  try {
    const { title, description, dueDate } = req.body;

    const project = await Project.findOne({
      _id: req.params.projectId,
      user: req.user._id,
    });

    if (!project) {
      return res.status(404).json({
        message: "Project not found",
      });
    }

    if (title !== undefined) project.title = title;
    if (description !== undefined) project.description = description;
    if (dueDate !== undefined) project.dueDate = dueDate;

    await project.save();

    res.status(200).json({
      message: "Project updated successfully",
      project,
    });
  } catch (error) {
    console.error("UPDATE PROJECT ERROR:", error);

    res.status(500).json({
      message: "Server error",
    });
  }
}

export async function deleteProject(req, res) {
  try {
    const project = await Project.findOneAndDelete({
      _id: req.params.projectId,
      user: req.user._id,
    });

    if (!project) {
      return res.status(404).json({
        message: "Project not found",
      });
    }

    res.status(200).json({
      message: "Project deleted successfully",
    });
  } catch (error) {
    console.error("DELETE PROJECT ERROR:", error);

    res.status(500).json({
      message: "Server error",
    });
  }
}
