# Subscription Tracker Backend

A Node.js/Express backend for managing user subscriptions, authentication, and workflow automation. This project provides RESTful APIs for user management, subscription tracking, and integration with third-party services like Arcjet and Upstash.

## Table of Contents

- Description
- Features
- Getting Started
- API Documentation
- Environment Variables
- Future Expansion

## Description

This backend service allows users to register, authenticate, and manage their subscriptions. It supports secure JWT-based authentication, MongoDB for data storage, and integrates with Arcjet for security and Upstash for queueing/workflow automation. The project is modular, making it easy to extend and maintain.

## Features

- User registration and authentication (JWT)
- Subscription CRUD operations
- Workflow automation endpoints
- Integration with Arcjet and Upstash
- Error handling middleware

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/sid995/express-subscription-tracker.git
   cd express-subscription-tracker
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up your environment variables in `.env.development.local` (see [sample env file](.sample.env.development.local) in repo).
4. Start the server:
   ```bash
   npm run dev
   ```

## Environment Variables

See `.sample.env.development.local` for required variables:

- `PORT`, `SERVER_URL`, `NODE_ENV`, `DB_URI`, `JWT_SECRET`, `JWT_EXPIRES_IN`, `ARCJET_KEY`, `QSTASH_URL`, `QSTASH_TOKEN`, etc.

## Future Expansion

- Add payment gateway integration for managing paid subscriptions
- Implement notification system (email/SMS reminders)
- Add admin dashboard for analytics and user management
- Support OAuth/social login
- Add subscription categorization and reporting
- Integrate with more third-party APIs (e.g., Stripe, Plaid)
- Add unit and integration tests

---

Feel free to contribute or open issues for feature requests!
