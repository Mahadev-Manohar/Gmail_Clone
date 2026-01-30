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
      const apiBase = import.meta.env.VITE_API_URL || '';
      const response = await fetch(`${apiBase}/api/login`, {
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
            <div className="google-logo" aria-hidden="true">
              {/* Google "G" logo - flat multicolor (matches accounts.google.com) */}
              <svg viewBox="0 0 24 24" width="48" height="48" xmlns="http://www.w3.org/2000/svg">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
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
                placeholder="Email"
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
                Forgot Email?
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
