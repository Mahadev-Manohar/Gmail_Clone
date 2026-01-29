import React, { useState } from 'react';
import './Login.css';

function Login({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const response = await fetch('http://localhost:5000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (data.success) {
        onLogin();
      } else {
        setError(data.message || 'Invalid username or password');
      }
    } catch (err) {
      setError('Couldn\'t sign you in. Please check your connection and try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <div className="login-wrapper">
        <div className="login-content">
          <div className="login-header">
            <div className="google-logo">
              <svg viewBox="0 0 75 24" width="75" height="24" xmlns="http://www.w3.org/2000/svg">
                <g fill="none" fillRule="evenodd">
                  <path d="M67.954 16.303c-1.33 0-2.278-.608-2.886-1.804l7.967-3.3-.27-.68C71.23 9.19 69.557 8.67 67.954 8.67c-2.37 0-4.196 1.97-4.196 4.388 0 2.416 1.826 4.39 4.196 4.39 2.829 0 3.976-1.992 4.212-3.045h-4.212v-2.18h7.077c.088.47.135.96.135 1.46 0 4.99-3.318 8.733-7.956 8.733-4.633 0-8.784-3.74-8.784-8.33 0-4.59 4.151-8.33 8.784-8.33 2.602 0 4.447 1.11 5.83 2.8l-2.38 2.38c-.907-.87-2.367-1.52-3.45-1.52z" fill="#4285F4"/>
                  <path d="M36.954 16.303c-1.33 0-2.278-.608-2.886-1.804l7.967-3.3-.27-.68C40.23 9.19 38.557 8.67 36.954 8.67c-2.37 0-4.196 1.97-4.196 4.388 0 2.416 1.826 4.39 4.196 4.39 2.829 0 3.976-1.992 4.212-3.045h-4.212v-2.18h7.077c.088.47.135.96.135 1.46 0 4.99-3.318 8.733-7.956 8.733-4.633 0-8.784-3.74-8.784-8.33 0-4.59 4.151-8.33 8.784-8.33 2.602 0 4.447 1.11 5.83 2.8l-2.38 2.38c-.907-.87-2.367-1.52-3.45-1.52z" fill="#EA4335"/>
                  <path d="M19.954 16.303c-1.33 0-2.278-.608-2.886-1.804l7.967-3.3-.27-.68C23.23 9.19 21.557 8.67 19.954 8.67c-2.37 0-4.196 1.97-4.196 4.388 0 2.416 1.826 4.39 4.196 4.39 2.829 0 3.976-1.992 4.212-3.045h-4.212v-2.18h7.077c.088.47.135.96.135 1.46 0 4.99-3.318 8.733-7.956 8.733-4.633 0-8.784-3.74-8.784-8.33 0-4.59 4.151-8.33 8.784-8.33 2.602 0 4.447 1.11 5.83 2.8l-2.38 2.38c-.907-.87-2.367-1.52-3.45-1.52z" fill="#FBBC04"/>
                  <path d="M3.954 16.303c-1.33 0-2.278-.608-2.886-1.804l7.967-3.3-.27-.68C7.23 9.19 5.557 8.67 3.954 8.67c-2.37 0-4.196 1.97-4.196 4.388 0 2.416 1.826 4.39 4.196 4.39 2.829 0 3.976-1.992 4.212-3.045H1.964v-2.18h7.077c.088.47.135.96.135 1.46 0 4.99-3.318 8.733-7.956 8.733C-3.39 20.723-7.54 16.983-7.54 12.393c0-4.59 4.151-8.33 8.784-8.33 2.602 0 4.447 1.11 5.83 2.8l-2.38 2.38c-.907-.87-2.367-1.52-3.45-1.52z" fill="#34A853"/>
                </g>
              </svg>
            </div>
            <h1 className="login-title">Sign in</h1>
            {/* <p className="login-subtitle">Use your Google Account</p> */}
          </div>

          <form onSubmit={handleSubmit} className="login-form">
            <div className="form-group">
              <input
                id="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Username"
                required
                autoComplete="username"
                className={error ? 'input-error' : ''}
                autoFocus
              />
              {error && username && (
                <div className="error-message-inline">
                  {error}
                </div>
              )}
            </div>

            {username && (
              <div className="form-group password-group">
                <div className="password-input-wrapper">
                  <input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    required
                    autoComplete="current-password"
                    className={error ? 'input-error' : ''}
                  />
                  {password && (
                    <button
                      type="button"
                      className="password-toggle"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <span className="material-icons">visibility_off</span>
                      ) : (
                        <span className="material-icons">visibility</span>
                      )}
                    </button>
                  )}
                </div>
                {error && password && (
                  <div className="error-message-inline">
                    {error}
                  </div>
                )}
              </div>
            )}

            <div className="form-footer">
              <a href="#" className="forgot-link" onClick={(e) => e.preventDefault()}>
                Forgot username?
              </a>
              {!username && (
                <button 
                  type="button"
                  className="create-account-link"
                  onClick={(e) => {
                    e.preventDefault();
                    // Could navigate to create account page
                  }}
                >
                  Create account
                </button>
              )}
            </div>

            <div className="button-group">
              <button 
                type="button"
                className="link-button"
                onClick={(e) => {
                  e.preventDefault();
                  // Guest mode or cancel
                }}
              >
                Guest mode
              </button>
              <button 
                type="submit" 
                className="next-button"
                disabled={loading || !username || (username && !password)}
              >
                {loading ? 'Signing in...' : 'Next'}
              </button>
            </div>
          </form>

          <div className="login-footer">
            <select className="language-select">
              <option value="en">English (United States)</option>
              <option value="es">Español</option>
              <option value="fr">Français</option>
            </select>
            <div className="footer-links">
              <a href="#" onClick={(e) => e.preventDefault()}>Help</a>
              <a href="#" onClick={(e) => e.preventDefault()}>Privacy</a>
              <a href="#" onClick={(e) => e.preventDefault()}>Terms</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
