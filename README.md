# Token-Based Authentication - Backend

This is the backend service for a token-based authentication system, built using **Node.js, Express.js, MongoDB, and JWT**.

## 🚀 Tech Stack

- **Framework**: Express.js
- **Database**: MongoDB
- **Authentication**: JWT (jsonwebtoken)
- **Validation**: Yup
- **Security**: bcrypt (Password Hashing)
- **Middleware**: Express JSON, CORS

## 📌 Features

- **User Registration** (Email/Phone, Name, Hashed Password)
- **User Login**
- **Token Validation** (Middleware)
- **Protected API Endpoint** (Requires valid token)
- **Token Expiry Handling** (Unauthorized response after expiry)
