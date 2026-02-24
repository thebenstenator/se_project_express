# WTWR (What to Wear?) - Backend API

The backend API for the WTWR (What to Wear?) application. This server provides RESTful API endpoints for managing clothing items and user interactions, including creating, reading, updating, and deleting clothing items, as well as liking and disliking items.

## Deployed at

**Domain:** https://cloudcloset.1ax.us

## Frontend repo

**GitHub:** https://github.com/thebenstenator/se_project_react

## Project Pitch

[Check out this video for a quick rundown](https://drive.google.com/file/d/1VArBok_Gr9yzsUP1zmJC111nUEQh72zR/view?usp=sharing)

## About the Project

This project is part of a software engineering bootcamp and focuses on building a robust backend server with the following capabilities:

- Database management with MongoDB
- RESTful API design
- Error handling and validation
- Server deployment preparation

## Technologies Used

- **Node.js** - JavaScript runtime environment
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling tool

## Features

- Get all clothing items
- Create new clothing items
- Delete clothing items by ID
- Like/dislike clothing items
- Centralized error handling
- Data validation with Mongoose schemas

## API Endpoints

### Clothing Items

- `GET /items` - Get all clothing items
- `POST /items` - Create a new clothing item
  - Request body: `{ name, weather, imageUrl }`
- `DELETE /items/:itemId` - Delete a clothing item by ID
- `PUT /items/:itemId/likes` - Like a clothing item
- `DELETE /items/:itemId/likes` - Remove like from a clothing item

## Installation

1. Clone the repository:

```bash
git clone <your-repo-url>
```

2. Navigate to the project directory:

```bash
cd wtwr-backend
```

3. Install dependencies:

```bash
npm install
```

4. Make sure MongoDB is running on your machine at `mongodb://127.0.0.1:27017/wtwr_db`

## Running the Project

**Production mode:**

```bash
npm run start
```

**Development mode (with hot reload):**

```bash
npm run dev
```

The server will run on `http://localhost:3001` by default.

## Project Structure

```
├── models/          # Mongoose schemas
├── routes/          # API routes
├── controllers/     # Route handlers
├── app.js           # Express app setup
└── README.md
```

## Future Enhancements

- User authentication and authorization
- Input validation middleware
- Rate limiting
- Testing suite
- Deployment to remote server
