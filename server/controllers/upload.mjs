
import multer from "multer";
import path from "path";
import { Info } from "../service/info.mjs";

export default function initUploadsController(db) {
  const storage = multer.diskStorage({
    destination: (request, file, cb) => {
      console.log(request);
      cb(null, "./images/");
    },
    filename: (request, file, cb) => {
      console.log(request);
      console.log(file);
      cb(null, Date.now() + path.extname(file.originalname));
    },
  });

  const upload = multer({
    storage: storage,
  });

  const index = async (request, response) => {
    try {
      Info(db).then((result) => response.send(result));
    } catch (error) {
      console.log(error);
    }
  };

  return {
    index,
    upload,
  };
}

import multer from "multer";
import path from "path";
import { Info } from "../service/info.mjs";

export default function initUploadsController(db) {
  const storage = multer.diskStorage({
    destination: (request, file, cb) => {
      console.log(request);
      cb(null, "./images/");
    },
    filename: (request, file, cb) => {
      console.log(request);
      console.log(file);
      cb(null, Date.now() + path.extname(file.originalname));
    },
  });

  const upload = multer({
    storage: storage,
  });

  const index = async (request, response) => {
    try {
      Info(db).then((result) => response.send(result));
    } catch (error) {
      console.log(error);
    }
  };

  return {
    index,
    upload,
  };
}

