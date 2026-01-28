import React from 'react'
import './EmailList.css'

function EmailList({ emails, selectedEmail, onEmailSelect, onDelete, onArchive, onStar, currentView }) {
  const formatDate = (timestamp) => {
    const date = new Date(timestamp)
    const now = new Date()
    const diffTime = Math.abs(now - date)
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))

    if (diffDays === 1) {
      return date.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' })
    } else if (diffDays < 7) {
      return date.toLocaleDateString('en-US', { weekday: 'short' })
    } else {
      return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
    }
  }

  const handleStarClick = (e, email) => {
    e.stopPropagation()
    onStar(email.id)
  }

  return (
    <div className="email-list">
      <div className="email-list-header">
        <div className="email-list-controls">
          <button className="control-button" title="Select">
            <span className="material-icons">check_box_outline_blank</span>
          </button>
          <button className="control-button" title="Refresh">
            <span className="material-icons">refresh</span>
          </button>
          <button className="control-button" title="More">
            <span className="material-icons">more_vert</span>
          </button>
        </div>
        <div className="email-list-toolbar">
          <button className="toolbar-button" title="Archive">
            <span className="material-icons">archive</span>
          </button>
          <button className="toolbar-button" title="Report spam">
            <span className="material-icons">report</span>
          </button>
          <button className="toolbar-button" title="Delete">
            <span className="material-icons">delete</span>
          </button>
          <button className="toolbar-button" title="Mark as read">
            <span className="material-icons">drafts</span>
          </button>
          <button className="toolbar-button" title="Move to">
            <span className="material-icons">drive_file_move</span>
          </button>
          <button className="toolbar-button" title="Labels">
            <span className="material-icons">label</span>
          </button>
          <button className="toolbar-button" title="More">
            <span className="material-icons">more_vert</span>
          </button>
        </div>
        <div className="email-list-pagination">
          <button className="pagination-button" title="Newer">
            <span className="material-icons">chevron_left</span>
          </button>
          <span className="pagination-text">1-{Math.min(50, emails.length)} of {emails.length}</span>
          <button className="pagination-button" title="Older">
            <span className="material-icons">chevron_right</span>
          </button>
        </div>
      </div>

      <div className="email-list-items">
        {emails.map((email) => (
          <div
            key={email.id}
            className={`email-item ${selectedEmail?.id === email.id ? 'selected' : ''} ${!email.read ? 'unread' : ''}`}
            onClick={() => onEmailSelect(email)}
          >
            <div className="email-item-checkbox">
              <button
                className="checkbox-button"
                onClick={(e) => {
                  e.stopPropagation()
                }}
              >
                <span className="material-icons">check_box_outline_blank</span>
              </button>
            </div>
            <div className="email-item-left">
              <button
                className="star-button"
                onClick={(e) => handleStarClick(e, email)}
              >
                <span className={`material-icons ${email.starred ? 'starred' : ''}`}>
                  {email.starred ? 'star' : 'star_border'}
                </span>
              </button>
              <div className="email-sender">
                {currentView === 'sent' && email.to ? `To: ${email.to}` : email.from}
              </div>
            </div>
            <div className="email-item-content">
              <div className="email-subject-line">
                <span className="email-subject">{email.subject || '(No subject)'}</span>
                {email.body && (
                  <span className="email-preview"> - {email.body.substring(0, 100)}{email.body.length > 100 ? '...' : ''}</span>
                )}
              </div>
            </div>
            <div className="email-item-right">
              <span className="email-date">{formatDate(email.timestamp)}</span>
              <div className="email-actions">
                <button
                  className="action-button"
                  onClick={(e) => {
                    e.stopPropagation()
                    onArchive(email.id)
                  }}
                  title="Archive"
                >
                  <span className="material-icons">archive</span>
                </button>
                <button
                  className="action-button"
                  onClick={(e) => {
                    e.stopPropagation()
                    onDelete(email.id)
                  }}
                  title="Delete"
                >
                  <span className="material-icons">delete</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default EmailList

