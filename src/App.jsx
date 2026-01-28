import React, { useState, useEffect } from 'react'
import Sidebar from './components/Sidebar'
import EmailList from './components/EmailList'
import EmailView from './components/EmailView'
import ComposeEmail from './components/ComposeEmail'
import ProfileDropdown from './components/ProfileDropdown'
import { getEmails, saveEmail, deleteEmail, archiveEmail, markAsRead, populateInbox } from './utils/emailStorage'
import './App.css'

function App() {
  const [currentView, setCurrentView] = useState('inbox')
  const [selectedEmail, setSelectedEmail] = useState(null)
  const [emails, setEmails] = useState([])
  const [showCompose, setShowCompose] = useState(false)
  const [editingDraft, setEditingDraft] = useState(null)
  const [searchQuery, setSearchQuery] = useState('')
  const [showProfileDropdown, setShowProfileDropdown] = useState(false)
  const [userInfo] = useState({
    name: 'snapeMastery',
    email: 'snape@gmail.com',
    initials: 'SM'
  })

  useEffect(() => {
    // Populate inbox with sample emails on first load if needed
    const allEmails = getEmails()
    const inboxEmails = allEmails.filter(e => !e.archived && !e.sent && !e.spam && !e.trash)
    if (inboxEmails.length < 20) {
      populateInbox()
    }
  }, [])

  useEffect(() => {
    setSelectedEmail(null) // Clear selected email when view changes
    loadEmails()
  }, [currentView])

  const loadEmails = () => {
    const allEmails = getEmails()
    let filtered = []

    switch (currentView) {
      case 'inbox':
        filtered = allEmails.filter(e => !e.archived && !e.sent && !e.draft && !e.spam && !e.trash)
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
        filtered = allEmails.filter(e => !e.archived && !e.sent && !e.draft && !e.spam && !e.trash)
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
    // If it's a draft, open it in compose window for editing
    if (email.draft) {
      // Locked drafts are fixed challenge content: open read-only instead of editable compose
      if (email.locked) {
        setSelectedEmail(email)
        setEditingDraft(null)
        setShowCompose(false)
      } else {
        setEditingDraft(email)
        setShowCompose(true)
        setSelectedEmail(null)
      }
    } else {
      setSelectedEmail(email)
      if (!email.read) {
        markAsRead(email.id)
        loadEmails()
      }
    }
  }

  const handleSendEmail = (emailData) => {
    // If sending a draft, delete the draft and create sent email
    const emailId = editingDraft?.id || Date.now().toString()
    if (editingDraft) {
      deleteEmail(editingDraft.id)
    }
    saveEmail({
      ...emailData,
      id: emailId,
      sent: true,
      draft: false,
      timestamp: new Date().toISOString(),
      read: true
    })
    setShowCompose(false)
    setEditingDraft(null)
    loadEmails()
  }

  const handleSaveDraft = (emailData) => {
    // If editing an existing draft, use its ID, otherwise create new ID
    const draftId = editingDraft?.id || Date.now().toString()
    saveEmail({
      ...emailData,
      id: draftId,
      draft: true,
      timestamp: editingDraft?.timestamp || new Date().toISOString()
    })
    setShowCompose(false)
    setEditingDraft(null)
    loadEmails()
  }

  const handleDeleteEmail = (emailId) => {
    deleteEmail(emailId)
    if (selectedEmail?.id === emailId) {
      setSelectedEmail(null)
    }
    if (editingDraft?.id === emailId) {
      setEditingDraft(null)
      setShowCompose(false)
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
          onCompose={() => {
            setEditingDraft(null)
            setShowCompose(true)
          }}
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
              currentView={currentView}
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
          draft={editingDraft}
          onSend={handleSendEmail}
          onSaveDraft={handleSaveDraft}
          onDeleteDraft={handleDeleteEmail}
          onClose={() => {
            setShowCompose(false)
            setEditingDraft(null)
          }}
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

