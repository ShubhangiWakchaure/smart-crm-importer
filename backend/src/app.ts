import express from "express";
import cors from "cors";

import importRoutes from "./routes/importRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Smart CRM Importer Backend is Running 🚀",
  });
});
app.use("/api", importRoutes);

export default app;