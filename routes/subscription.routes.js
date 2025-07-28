import { Router } from "express";
import {
  cancelSubscription,
  createSubscription,
  deleteSubscription,
  getSubscription,
  getSubscriptions,
  getSubscriptionsByUser,
  getUpcomingRenewals,
  updateSubscription,
} from "../controllers/subscription.controller.js";
import authorize from "../middlewares/auth.middleware.js";

const subscriptionRouter = Router();

subscriptionRouter.get("/", authorize, getSubscriptions);

subscriptionRouter.get("/:id", authorize, getSubscription);

subscriptionRouter.post("/", authorize, createSubscription);

subscriptionRouter.put("/:id", authorize, updateSubscription);

subscriptionRouter.delete("/:id", authorize, deleteSubscription);

subscriptionRouter.get("/user/:id", authorize, getSubscriptionsByUser);

subscriptionRouter.put("/:id/cancel", authorize, cancelSubscription);

subscriptionRouter.get("/upcoming-renewals", authorize, getUpcomingRenewals);

export default subscriptionRouter;
