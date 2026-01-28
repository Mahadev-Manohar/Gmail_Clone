import React from 'react'
import './Sidebar.css'

function Sidebar({ currentView, setCurrentView, onCompose, emails }) {
  const getUnreadCount = () => {
    return emails.filter(e => !e.read && !e.archived && !e.sent && !e.draft).length
  }

  const menuItems = [
    { id: 'inbox', label: 'Inbox', icon: 'inbox', count: getUnreadCount() },
    { id: 'starred', label: 'Starred', icon: 'star', count: null },
    { id: 'snoozed', label: 'Snoozed', icon: 'schedule', count: null },
    { id: 'sent', label: 'Sent', icon: 'send', count: null },
    { id: 'drafts', label: 'Drafts', icon: 'drafts', count: null },
    { id: 'archived', label: 'Archived', icon: 'archive', count: null },
  ]

  return (
    <aside className="sidebar">
      <button className="compose-button" onClick={onCompose}>
        <span className="material-icons">edit</span>
        <span>Compose</span>
      </button>

      <nav className="sidebar-nav">
        {menuItems.map((item) => (
          <button
            key={item.id}
            className={`nav-item ${currentView === item.id ? 'active' : ''}`}
            onClick={() => setCurrentView(item.id)}
          >
            <span className="material-icons">{item.icon}</span>
            <span className="nav-label">{item.label}</span>
            {item.count !== null && item.count > 0 && (
              <span className="nav-count">{item.count}</span>
            )}
          </button>
        ))}
      </nav>

      <div className="sidebar-footer">
        <div className="meet-section">
          <h3>Meet</h3>
          <button className="meet-button">
            <span className="material-icons">videocam</span>
            <span>New meeting</span>
          </button>
          <button className="meet-button">
            <span className="material-icons">keyboard</span>
            <span>Join a meeting</span>
          </button>
        </div>
      </div>
    </aside>
  )
}

export default Sidebar

