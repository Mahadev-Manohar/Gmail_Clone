import React from 'react'
import './EmailView.css'

function EmailView({ email, onDelete, onArchive, onStar, onReply, onBack }) {
  const formatDate = (timestamp) => {
    const date = new Date(timestamp)
    return date.toLocaleString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: '2-digit'
    })
  }

  // Check if body contains HTML tags
  const isHTML = (text) => {
    if (!text) return false
    return /<[a-z][\s\S]*>/i.test(text)
  }

  return (
    <div className="email-view">
      <div className="email-view-header">
        <button className="back-button" onClick={onBack} title="Back to inbox">
          <span className="material-icons">arrow_back</span>
        </button>
        <div className="email-view-subject">
          <h1>{email.subject || '(No subject)'}</h1>
        </div>
        <div className="email-view-actions">
          <button
            className="view-action-button"
            onClick={() => onArchive(email.id)}
            title="Archive"
          >
            <span className="material-icons">archive</span>
          </button>
          <button
            className="view-action-button"
            onClick={() => onDelete(email.id)}
            title="Delete"
          >
            <span className="material-icons">delete</span>
          </button>
          <button
            className="view-action-button"
            title="Mark as unread"
          >
            <span className="material-icons">mail</span>
          </button>
          <button
            className="view-action-button"
            title="Snooze"
          >
            <span className="material-icons">schedule</span>
          </button>
          <button
            className="view-action-button"
            onClick={() => onStar(email.id)}
            title={email.starred ? 'Unstar' : 'Star'}
          >
            <span className={`material-icons ${email.starred ? 'starred' : ''}`}>
              {email.starred ? 'star' : 'star_border'}
            </span>
          </button>
          <button
            className="view-action-button"
            title="More"
          >
            <span className="material-icons">more_vert</span>
          </button>
        </div>
      </div>

      <div className="email-view-content">
        <div className="email-view-meta">
          <div className="email-view-from">
            <div className="sender-avatar">
              {email.from.charAt(0).toUpperCase()}
            </div>
            <div className="sender-info">
              <div className="sender-name-row">
                <span className="sender-name">{email.from}</span>
                {email.to && <span className="sender-email-inline">to me</span>}
              </div>
              {email.to && <div className="sender-email">{email.to}</div>}
            </div>
          </div>
          <div className="email-view-date">
            {formatDate(email.timestamp)}
          </div>
        </div>

        <div className="email-view-body">
          {isHTML(email.body) ? (
            <div dangerouslySetInnerHTML={{ __html: email.body }} />
          ) : (
            email.body.split('\n').map((paragraph, index) => (
              <p key={index}>{paragraph || <br />}</p>
            ))
          )}
        </div>
      </div>

      <div className="email-view-footer">
        <div className="reply-buttons">
          <button className="reply-button" onClick={onReply}>
            <span className="material-icons">reply</span>
            <span>Reply</span>
          </button>
          <button className="reply-button">
            <span className="material-icons">reply_all</span>
            <span>Reply all</span>
          </button>
          <button className="reply-button">
            <span className="material-icons">forward</span>
            <span>Forward</span>
          </button>
        </div>
        <div className="email-view-footer-actions">
          <button className="footer-action-button" title="Filter messages like this">
            <span className="material-icons">filter_list</span>
          </button>
          <button className="footer-action-button" title="Print">
            <span className="material-icons">print</span>
          </button>
          <button className="footer-action-button" title="More">
            <span className="material-icons">more_vert</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default EmailView

