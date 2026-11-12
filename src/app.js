import express from "express";
import authRoutes from "./routes/authRoutes.js";
import projectRoutes from "./routes/projectRoutes.js";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "Project Management API is running",
  });
});

app.use("/api/auth", authRoutes);
app.use("/api/projects", projectRoutes);

export default app;
