import { Router } from "express";

const subscriptionRouter = Router();

subscriptionRouter.get("/", (req, res) => {
  res.send("GET all subscriptions");
});

subscriptionRouter.get("/:id", (req, res) => {
  res.send("GET subscription by ID: " + req.params.id);
});

subscriptionRouter.post("/", (req, res) => {
  res.send("POST create a new subscription");
});

subscriptionRouter.put("/:id", (req, res) => {
  res.send("PUT update a subscription with ID " + req.params.id);
});

subscriptionRouter.delete("/:id", (req, res) => {
  res.send("DELETE a subscription with ID " + req.params.id);
});

subscriptionRouter.get("/user/:id", (req, res) => {
  res.send("GET all subscriptions for the user with ID: " + req.params.id);
});

subscriptionRouter.put("/:id/cancel", (req, res) => {
  res.send("PUT cancel a subscription with ID " + req.params.id);
});

subscriptionRouter.get("/upcoming-renewals", (req, res) => {
  res.send("GET upcoming subscription renewals");
});

export default subscriptionRouter;
