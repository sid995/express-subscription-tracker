import { Router } from "express";

const userRouter = Router();

userRouter.get("/", (req, res) => {
  res.send("GET User Endpoint");
});

userRouter.get("/:id", (req, res) => {
  res.send(`GET User Endpoint for ID: ${req.params.id}`);
});

userRouter.post("/", (req, res) => {
  res.send("POST User Endpoint");
});

userRouter.put("/:id", (req, res) => {
  res.send(`PUT User Endpoint for ID: ${req.params.id}`);
});

userRouter.delete("/:id", (req, res) => {
  res.send(`DELETE User Endpoint for ID: ${req.params.id}`);
});

export default userRouter;
