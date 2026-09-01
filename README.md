# CampusCart - Student Marketplace

A full-stack web application for students to buy and sell textbooks, electronics, calculators, dorm furniture, and study materials on campus.

## Project Structure

```
campuscart/
├── client/                 # React Frontend (Vite)
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/          # Student, Faculty, Admin views
│   │   ├── context/        # Auth / Global State
│   │   └── services/       # API call handlers (Axios/Fetch)
│   ├── .env.example
│   └── package.json
├── server/                 # Express Backend
│   ├── src/
│   │   ├── config/         # DB connection (MongoDB)
│   │   ├── controllers/    # Route handlers
│   │   ├── models/         # Mongoose schemas
│   │   ├── routes/         # Express routes
│   │   └── middleware/     # Auth & error handling
│   ├── .env.example
│   └── package.json
├── .gitignore
└── README.md
```

## Technology Stack

### Frontend
- **React** 18+ with Vite
- **React Router** for navigation
- **Axios** for API calls
- **Context API** for state management

### Backend
- **Express.js** for REST API
- **MongoDB** with Mongoose ODM
- **JWT** for authentication
- **bcryptjs** for password hashing
- **CORS** for cross-origin requests

## Getting Started

### Prerequisites
- Node.js (v16+)
- MongoDB (local or Atlas)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd campuscart
```

2. Install Client Dependencies
```bash
cd client
npm install
cp .env.example .env.local
```

3. Install Server Dependencies
```bash
cd ../server
npm install
cp .env.example .env
```

### Configuration

#### Server (.env)
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/campuscart
JWT_SECRET=your_jwt_secret_key
CORS_ORIGIN=http://localhost:5173
```

#### Client (.env.local)
```
VITE_API_URL=http://localhost:5000
VITE_APP_NAME=CampusCart
```

### Running the Application

#### Development Mode

**Terminal 1 - Server**
```bash
cd server
npm run dev
```

**Terminal 2 - Client**
```bash
cd client
npm run dev
```

The application will be available at:
- Frontend: http://localhost:5173
- API: http://localhost:5000

#### Production Build

**Build Frontend**
```bash
cd client
npm run build
```

**Start Server**
```bash
cd server
npm start
```

## Features

- ✅ User Authentication (Email-based)
- ✅ Product Listings with Search & Filter
- ✅ Category Management
- ✅ Seller/Buyer Profiles
- ✅ Messaging System
- ✅ Multi-role Support (Student, Faculty, Admin)
- ✅ Responsive Design

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - User login
- `GET /api/auth/profile` - Get user profile

### Listings
- `GET /api/listings` - Get all listings
- `POST /api/listings` - Create new listing
- `GET /api/listings/:id` - Get listing details
- `PUT /api/listings/:id` - Update listing
- `DELETE /api/listings/:id` - Delete listing

### Categories
- `GET /api/categories` - Get all categories
- `POST /api/categories` - Create category (Admin)

## Contributing

1. Create a feature branch (`git checkout -b feature/AmazingFeature`)
2. Commit your changes (`git commit -m 'Add AmazingFeature'`)
3. Push to the branch (`git push origin feature/AmazingFeature`)
4. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For support, email support@campuscart.com or open an issue on GitHub.

---

**Built with ❤️ for Campus Students**
