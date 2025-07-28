import { SERVER_URL } from "../config/env.js";
import { workflowClient } from "../config/upstash.js";
import Subscription from "../models/subscription.model.js";

export const getSubscriptions = async (req, res, next) => {
  try {
    const subscriptions = await Subscription.find({ user: req.user._id });
    res.status(200).json({
      success: true,
      data: subscriptions,
    });
  } catch (error) {
    next(error);
  }
};

export const getSubscription = async (req, res, next) => {
  try {
    const subscription = await Subscription.findById(req.params.id).populate(
      "user",
      "-password"
    );
    if (!subscription) {
      return res.status(404).json({
        success: false,
        message: "Subscription not found",
      });
    }
    res.status(200).json({
      success: true,
      data: subscription,
    });
  } catch (error) {
    next(error);
  }
};

export const createSubscription = async (req, res, next) => {
  try {
    const newSubscription = await Subscription.create({
      ...req.body,
      user: req.user._id,
    });

    await workflowClient.trigger({
      url: `${SERVER_URL}/api/v1/workflows/subscription/reminder`,
      body: {
        subscriptionId: newSubscription._id,
      },
      headers: {
        "content-type": "application/json",
      },
    });

    res.status(201).json({
      success: true,
      data: newSubscription,
    });
  } catch (error) {
    next(error);
  }
};

export const updateSubscription = async (req, res, next) => {
  try {
    const updatedSubscription = await Subscription.findByIdAndUpdate(
      { ...req.body, _id: req.params.id },
      { new: true, runValidators: true }
    );

    if (!updatedSubscription) {
      return res.status(404).json({
        success: false,
        message: "Subscription not found",
      });
    }

    res.status(200).json({
      success: true,
      data: updatedSubscription,
    });
  } catch (error) {
    next(error);
  }
};

export const deleteSubscription = async (req, res, next) => {
  try {
    const subscription = await Subscription.findByIdAndDelete({
      _id: req.params.id,
    });

    if (!subscription) {
      return res.status(404).json({
        success: false,
        message: "Subscription not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Subscription deleted successfully",
    });
  } catch (error) {
    next(error);
  }
};

export const getSubscriptionsByUser = async (req, res, next) => {
  try {
    if (req.user._id !== req.params.id) {
      return res.status(403).json({
        success: false,
        message: "You are not authorized to view this user's subscriptions",
      });
    }
    const subscriptions = await Subscription.find({ user: req.params.id });

    res.status(200).json({
      success: true,
      data: subscriptions,
    });
  } catch (error) {
    next(error);
  }
};

export const cancelSubscription = async (req, res, next) => {
  try {
    if (req.user._id !== req.params.id) {
      return res.status(403).json({
        success: false,
        message: "You are not authorized to cancel this user's subscriptions",
      });
    }

    const subscription = await Subscription.findById(req.params.id);
    if (!subscription) {
      return res.status(404).json({
        success: false,
        message: "Subscription not found",
      });
    }

    subscription.status = "cancelled";
    await subscription.save();

    res.status(200).json({
      success: true,
      data: subscription,
    });
  } catch (error) {
    next(error);
  }
};

export const getUpcomingRenewals = async (req, res, next) => {
  try {
    const upcomingRenewals = await Subscription.find({
      user: req.user._id,
      renewalDate: { $gte: new Date() },
    }).sort({ renewalDate: 1 });

    res.status(200).json({
      success: true,
      data: upcomingRenewals,
    });
  } catch (error) {
    next(error);
  }
};
