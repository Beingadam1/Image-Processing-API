import express from "express";

const logger = (req: express.Request, res: express.Response, next: () => void): void => {
  // eslint-disable-next-line no-console
  console.log(`User visted ${req.url}.`);
  next();
};

export default logger;
