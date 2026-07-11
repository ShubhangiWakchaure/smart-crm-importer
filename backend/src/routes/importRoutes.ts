import { Router } from "express";
import upload from "../middleware/upload.js";
import { importCSV } from "../controllers/importController.js";
const router = Router();

router.post(
  "/import",
  upload.single("file"),
  importCSV
);

export default router;