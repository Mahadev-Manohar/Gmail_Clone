# Gmail Clone

A complete replica of Gmail built with React, featuring a modern UI and full email functionality. All data is stored locally using localStorage (no database required).

## Features

- 🔐 **Authentication**
  - Login page with username/password validation
  - Backend API for credential verification
  - Protected routes

- 📧 **Email Management**
  - Compose new emails
  - Reply to emails
  - Delete emails
  - Archive emails
  - Star/unstar emails
  - Save drafts

- 📁 **Email Organization**
  - Inbox
  - Sent
  - Drafts
  - Starred
  - Archived

- 🔍 **Search**
  - Search emails by subject, sender, or content

- 🎨 **Modern UI**
  - Gmail-like interface
  - Responsive design
  - Material Icons
  - Smooth animations

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Install frontend dependencies:
```bash
npm install
```

2. Install backend dependencies:
```bash
cd backend
npm install
cd ..
```

3. Configure backend credentials:
   - The backend uses a `.env` file in the `backend` folder
   - Default credentials are set in `backend/.env`:
     ```
     USERNAME=admin
     PASSWORD=password123
     PORT=3000
     ```
   - You can modify these values as needed

### Running the Application

You need to run both the frontend and backend servers:

**Terminal 1 - Backend Server:**
```bash
cd backend
npm start
```
The backend will run on `http://localhost:3000`

**Terminal 2 - Frontend Server:**
```bash
npm run dev
```
The frontend will run on `http://localhost:5173`

### Login

1. Open your browser and navigate to `http://localhost:5173`
2. You will be redirected to the login page
3. Enter the credentials from `backend/.env`:
   - Username: `admin`
   - Password: `password123`
4. After successful login, you'll be redirected to the Gmail inbox

### Build for Production

**Frontend:**
```bash
npm run build
```

The built files will be in the `dist` directory.

**Backend:**
The backend can be run in production mode using:
```bash
cd backend
npm start
```

## Project Structure

```
CTF-gmail/
├── backend/
│   ├── server.js              # Express server with login API
│   ├── package.json           # Backend dependencies
│   ├── .env                   # Backend credentials (not in git)
│   └── .env.example           # Example env file
├── src/
│   ├── components/
│   │   ├── Login.jsx          # Login component
│   │   ├── Login.css          # Login styles
│   │   ├── Sidebar.jsx        # Navigation sidebar
│   │   ├── EmailList.jsx      # List of emails
│   │   ├── EmailView.jsx      # Email detail view
│   │   └── ComposeEmail.jsx   # Compose email modal
│   ├── utils/
│   │   └── emailStorage.js    # localStorage management
│   ├── AppRouter.jsx          # Router with authentication
│   ├── GmailApp.jsx           # Main Gmail app component
│   ├── GmailApp.css           # Gmail app styles
│   ├── main.jsx               # React entry point
│   └── index.css              # Global styles
├── index.html
├── package.json
└── vite.config.js
```

## Data Storage

All emails are stored in the browser's localStorage. The app comes pre-loaded with sample emails to help you get started. You can:

- Compose and send new emails
- All emails persist across page refreshes
- Clear localStorage to reset all data

## API Endpoints

### POST `/api/login`
Authenticates a user with username and password.

**Request Body:**
```json
{
  "username": "admin",
  "password": "password123"
}
```

**Success Response (200):**
```json
{
  "success": true,
  "message": "Login successful"
}
```

**Error Response (401):**
```json
{
  "success": false,
  "message": "Invalid username or password"
}
```

## Technologies Used

**Frontend:**
- React 18
- React Router DOM
- Vite
- Material Icons
- Google Sans Font
- CSS3

**Backend:**
- Node.js
- Express
- CORS
- dotenv

## Browser Support

Works best in modern browsers (Chrome, Firefox, Safari, Edge).

