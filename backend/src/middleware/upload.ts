import multer from "multer";
import path from "path";

const storage = multer.diskStorage({
  destination: "src/uploads",

  filename: (req, file, cb) => {
    const uniqueName =
      Date.now() + path.extname(file.originalname);

    cb(null, uniqueName);
  },
});

const upload = multer({
  storage,

  fileFilter(req, file, cb) {
    if (file.mimetype !== "text/csv") {
      return cb(new Error("Only CSV files are allowed."));
    }

    cb(null, true);
  },
});

export default upload;