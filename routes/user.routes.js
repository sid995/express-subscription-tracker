import { Router } from "express";
import { getUser, getUsers } from "../controllers/user.controller.js";
import authorize from "../middlewares/auth.middleware.js";

const userRouter = Router();

userRouter.get("/", getUsers);

userRouter.get("/:id", authorize, getUser);

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
