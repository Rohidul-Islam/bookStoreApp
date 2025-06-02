# Bookstore Backend

A Node.js/Express backend for the Bookstore application with MongoDB database.

## Features

- RESTful API endpoints
- MongoDB integration
- Book management (CRUD operations)
- User authentication
- Error handling
- Environment configuration

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- MongoDB
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-backend-repo-url>
cd bookstore-backend
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory with your MongoDB connection string:
```
PORT=4000
MONGODB_URI=your_mongodb_connection_string
```

4. Start the server:
```bash
npm start
```

The server will be running at `http://localhost:4000`

## API Endpoints

### Books
- GET `/book` - Get all books
- POST `/book/populate` - Populate database with initial books

### Users
- POST `/user/register` - Register a new user
- POST `/user/login` - Login user

## Environment Variables

Create a `.env` file with the following variables:
```
PORT=4000
MONGODB_URI=your_mongodb_connection_string
```

## Available Scripts

- `npm start` - Start the server
- `npm run dev` - Start the server with nodemon

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- Cors
- Dotenv

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request 