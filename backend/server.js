import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Login endpoint
app.post('/api/login', (req, res) => {
  
  const { username, password } = req.body;
  
  // console.log("uname and pswd", username, ":", password);
  // console.log("ENV ADMIN_USERNAME:", process.env.ADMIN_USERNAME);
  // console.log("ENV ADMIN_PASSWORD:", process.env.ADMIN_PASSWORD);

  const validUsername = process.env.ADMIN_USERNAME;
  const validPassword = process.env.ADMIN_PASSWORD;

  if (!validUsername || !validPassword) {
    return res.status(500).json({ 
      success: false, 
      message: 'Server configuration error' 
    });
  }

  if (username === validUsername && password === validPassword) {
    return res.json({ 
      success: true, 
      message: 'Login successful' 
    });
  } else {
    return res.status(401).json({ 
      success: false, 
      message: 'Invalid username or password' 
    });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
