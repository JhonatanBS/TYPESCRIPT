import { Router, Response, Request } from "express";

const router = Router();

export default router.get("/test", (request: Request, response: Response) => {
  response.status(200).send("API Working!");  
});