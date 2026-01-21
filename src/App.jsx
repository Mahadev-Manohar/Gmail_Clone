import React, { useState, useEffect } from 'react'
import Sidebar from './components/Sidebar'
import EmailList from './components/EmailList'
import EmailView from './components/EmailView'
import ComposeEmail from './components/ComposeEmail'
import ProfileDropdown from './components/ProfileDropdown'
import { getEmails, saveEmail, deleteEmail, archiveEmail, markAsRead } from './utils/emailStorage'
import './App.css'

function App() {
  const [currentView, setCurrentView] = useState('inbox')
  const [selectedEmail, setSelectedEmail] = useState(null)
  const [emails, setEmails] = useState([])
  const [showCompose, setShowCompose] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [showProfileDropdown, setShowProfileDropdown] = useState(false)
  const [userInfo] = useState({
    name: 'User Name',
    email: 'user@example.com',
    initials: 'P'
  })

  useEffect(() => {
    setSelectedEmail(null) // Clear selected email when view changes
    loadEmails()
  }, [currentView])

  const loadEmails = () => {
    const allEmails = getEmails()
    let filtered = []

    switch (currentView) {
      case 'inbox':
        filtered = allEmails.filter(e => !e.archived && !e.sent && !e.spam && !e.trash)
        break
      case 'sent':
        filtered = allEmails.filter(e => e.sent && !e.trash)
        break
      case 'drafts':
        filtered = allEmails.filter(e => e.draft && !e.trash)
        break
      case 'starred':
        filtered = allEmails.filter(e => e.starred && !e.archived && !e.trash)
        break
      case 'archived':
        filtered = allEmails.filter(e => e.archived && !e.trash)
        break
      case 'snoozed':
        filtered = allEmails.filter(e => e.snoozed && !e.trash)
        break
      case 'important':
        filtered = allEmails.filter(e => e.important && !e.trash)
        break
      case 'spam':
        filtered = allEmails.filter(e => e.spam)
        break
      case 'trash':
        filtered = allEmails.filter(e => e.trash)
        break
      default:
        filtered = allEmails.filter(e => !e.archived && !e.sent && !e.spam && !e.trash)
    }

    if (searchQuery) {
      filtered = filtered.filter(e => 
        e.subject.toLowerCase().includes(searchQuery.toLowerCase()) ||
        e.from.toLowerCase().includes(searchQuery.toLowerCase()) ||
        e.body.toLowerCase().includes(searchQuery.toLowerCase())
      )
    }

    filtered.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp))
    setEmails(filtered)
  }

  useEffect(() => {
    loadEmails()
  }, [searchQuery])

  const handleEmailSelect = (email) => {
    setSelectedEmail(email)
    if (!email.read) {
      markAsRead(email.id)
      loadEmails()
    }
  }

  const handleSendEmail = (emailData) => {
    saveEmail({
      ...emailData,
      sent: true,
      timestamp: new Date().toISOString(),
      read: true
    })
    setShowCompose(false)
    loadEmails()
  }

  const handleSaveDraft = (emailData) => {
    saveEmail({
      ...emailData,
      draft: true,
      timestamp: new Date().toISOString()
    })
    setShowCompose(false)
    loadEmails()
  }

  const handleDeleteEmail = (emailId) => {
    deleteEmail(emailId)
    if (selectedEmail?.id === emailId) {
      setSelectedEmail(null)
    }
    loadEmails()
  }

  const handleArchiveEmail = (emailId) => {
    archiveEmail(emailId)
    if (selectedEmail?.id === emailId) {
      setSelectedEmail(null)
    }
    loadEmails()
  }

  const handleStarEmail = (emailId) => {
    const allEmails = getEmails()
    const email = allEmails.find(e => e.id === emailId)
    if (email) {
      email.starred = !email.starred
      saveEmail(email)
      loadEmails()
      if (selectedEmail?.id === emailId) {
        setSelectedEmail({ ...selectedEmail, starred: email.starred })
      }
    }
  }

  const handleViewChange = (view) => {
    setSelectedEmail(null) // Clear selected email first
    setCurrentView(view)
  }

  return (
    <div className="app">
      <header className="app-header">
        <div className="header-left">
          <button className="menu-button">
            <span className="material-icons">menu</span>
          </button>
          <div className="logo">
            <span className="material-icons">mail</span>
            <span className="logo-text">Gmail</span>
          </div>
        </div>
        <div className="search-bar">
          <span className="material-icons search-icon">search</span>
          <input
            type="text"
            placeholder="Search mail"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input"
          />
          {searchQuery && (
            <button 
              className="search-clear-button"
              onClick={() => setSearchQuery('')}
              title="Clear search"
            >
              <span className="material-icons">close</span>
            </button>
          )}
          <button className="search-filter-button" title="Show search options">
            <span className="material-icons">tune</span>
          </button>
        </div>
        <div className="header-right">
          <button className="icon-button" title="Support">
            <span className="material-icons">help_outline</span>
          </button>
          <button className="icon-button" title="Settings">
            <span className="material-icons">settings</span>
          </button>
          <button className="icon-button" title="Google apps">
            <span className="material-icons">apps</span>
          </button>
          <button 
            className="user-avatar-button" 
            title="Account"
            onClick={() => setShowProfileDropdown(!showProfileDropdown)}
          >
            <div className="user-avatar">{userInfo.initials}</div>
          </button>
        </div>
      </header>

      <div className="app-body">
        <Sidebar
          currentView={currentView}
          setCurrentView={handleViewChange}
          onCompose={() => setShowCompose(true)}
          emails={emails}
        />

        <div className="main-content">
          {selectedEmail ? (
            <EmailView
              email={selectedEmail}
              onDelete={handleDeleteEmail}
              onArchive={handleArchiveEmail}
              onStar={handleStarEmail}
              onReply={() => {
                setShowCompose(true)
              }}
              onBack={() => {
                setSelectedEmail(null)
                loadEmails()
              }}
            />
          ) : (
            <EmailList
              emails={emails}
              selectedEmail={selectedEmail}
              onEmailSelect={handleEmailSelect}
              onDelete={handleDeleteEmail}
              onArchive={handleArchiveEmail}
              onStar={handleStarEmail}
            />
          )}
          
          {!selectedEmail && emails.length === 0 && (
            <div className="empty-state">
              <span className="material-icons">inbox</span>
              <p>No emails</p>
            </div>
          )}
        </div>
      </div>

      {showCompose && (
        <ComposeEmail
          replyTo={selectedEmail}
          onSend={handleSendEmail}
          onSaveDraft={handleSaveDraft}
          onClose={() => setShowCompose(false)}
        />
      )}

      <ProfileDropdown
        isOpen={showProfileDropdown}
        onClose={() => setShowProfileDropdown(false)}
        userInfo={userInfo}
      />
    </div>
  )
}

export default App

