import express from "express";
import crop from "./img_cropper";
import logger from "../middleware/logger";

const routes = express.Router();

routes.use(logger);

routes.get("/", (req: express.Request, res: express.Response) => {
  res.send("Welcome to Image manipulation API.");
});

routes.use("/crop", crop);

export default routes;
