import React, { useRef, useEffect } from 'react'
import './ProfileDropdown.css'
import { useNavigate } from 'react-router-dom';



function ProfileDropdown({ isOpen, onClose, userInfo, onLogout }) {
  const dropdownRef = useRef(null)
  const navigate = useNavigate();

  const handleSignOut = () => {
    onLogout();           // reset auth state
    navigate('/login', { replace: true }); // go to login
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div className="profile-dropdown-overlay" onClick={onClose}>
      <div className="profile-dropdown" ref={dropdownRef} onClick={(e) => e.stopPropagation()}>
        <div className="profile-header">
          <div className="profile-avatar-large">
            {userInfo?.initials || 'P'}
          </div>
          <div className="profile-info">
            <div className="profile-name">{userInfo?.name || 'User Name'}</div>
            <div className="profile-email">{userInfo?.email || 'user@example.com'}</div>
          </div>
        </div>
        
        <div className="profile-divider"></div>
        
        <div className="profile-options">
          <button className="profile-option">
            <span className="material-icons">account_circle</span>
            <span>Manage your Google Account</span>
          </button>
        </div>
        
        <div className="profile-divider"></div>
        
        <div className="profile-options">
          <button className="profile-option">
            <span className="material-icons">person_add</span>
            <span>Add another account</span>
          </button>
        </div>
        
        <div className="profile-divider"></div>
        
        <div className="profile-options">
          <button className="profile-option">
            <span className="material-icons">settings</span>
            <span>Settings</span>
          </button>
          <button className="profile-option">
            <span className="material-icons">feedback</span>
            <span>Send feedback</span>
          </button>
          <button className="profile-option">
            <span className="material-icons">help</span>
            <span>Help</span>
          </button>
        </div>
        
        <div className="profile-divider"></div>
        
        <div className="profile-options">
          <button className="profile-option">
            <span className="profile-option-text">Privacy Policy</span>
          </button>
          <button className="profile-option">
            <span className="profile-option-text">Terms of Service</span>
          </button>
        </div>
        
        <div className="profile-divider"></div>
        
        <div className="profile-options">
          <button className="profile-option sign-out" onClick={handleSignOut}>
            <span>Sign out</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProfileDropdown

