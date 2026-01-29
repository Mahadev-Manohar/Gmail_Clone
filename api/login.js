/**
 * Vercel Serverless Function: POST /api/login
 * Validates username/password against env vars ADMIN_USERNAME and ADMIN_PASSWORD.
 */
export default async function handler(req, res) {
  // Allow CORS for same-origin; adjust if frontend is on a different domain
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  const { username, password } = req.body || {};
  const validUsername = process.env.ADMIN_USERNAME;
  const validPassword = process.env.ADMIN_PASSWORD;

  if (!validUsername || !validPassword) {
    return res.status(500).json({
      success: false,
      message: 'Server configuration error',
    });
  }

  if (username === validUsername && password === validPassword) {
    return res.status(200).json({
      success: true,
      message: 'Login successful',
    });
  }

  return res.status(401).json({
    success: false,
    message: 'Invalid username or password',
  });
}
