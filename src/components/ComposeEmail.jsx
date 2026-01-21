import React, { useState } from 'react'
import './ComposeEmail.css'

function ComposeEmail({ replyTo, draft, onSend, onSaveDraft, onClose, onDeleteDraft }) {
  // If editing a draft, load draft data; otherwise use replyTo or empty
  const [to, setTo] = useState(draft ? draft.to : (replyTo ? replyTo.from : ''))
  const [cc, setCc] = useState(draft ? draft.cc || '' : '')
  const [bcc, setBcc] = useState(draft ? draft.bcc || '' : '')
  const [subject, setSubject] = useState(
    draft ? draft.subject : (replyTo ? `Re: ${replyTo.subject}` : '')
  )
  const [body, setBody] = useState(
    draft ? draft.body : (replyTo ? `\n\n---\nOn ${new Date(replyTo.timestamp).toLocaleString()}, ${replyTo.from} wrote:\n\n${replyTo.body}` : '')
  )
  const [showCc, setShowCc] = useState(!!(draft && draft.cc))
  const [showBcc, setShowBcc] = useState(!!(draft && draft.bcc))

  const handleSend = () => {
    if (!to.trim()) {
      alert('Please enter a recipient')
      return
    }
    onSend({
      id: Date.now().toString(),
      from: 'snape@gmail.com',
      to: to.trim(),
      cc: cc.trim(),
      bcc: bcc.trim(),
      subject: subject.trim(),
      body: body.trim(),
      timestamp: new Date().toISOString(),
      read: false,
      starred: false,
      archived: false,
      sent: true,
      draft: false
    })
  }

  const handleSaveDraft = () => {
    onSaveDraft({
      id: Date.now().toString(),
      from: 'snape@gmail.com',
      to: to.trim(),
      cc: cc.trim(),
      bcc: bcc.trim(),
      subject: subject.trim(),
      body: body.trim(),
      timestamp: new Date().toISOString(),
      read: false,
      starred: false,
      archived: false,
      sent: false,
      draft: true
    })
  }

  return (
    <div className="compose-overlay">
      <div className="compose-window">
        <div className="compose-header">
          <h2>New Message</h2>
          <div className="compose-header-actions">
            <button className="compose-header-button" onClick={onClose}>
              <span className="material-icons">minimize</span>
            </button>
            <button className="compose-header-button" onClick={onClose}>
              <span className="material-icons">fullscreen</span>
            </button>
            <button className="compose-header-button" onClick={onClose}>
              <span className="material-icons">close</span>
            </button>
          </div>
        </div>

        <div className="compose-content">
          <div className="compose-field">
            <div className="compose-field-label">To</div>
            <input
              type="text"
              className="compose-input"
              value={to}
              onChange={(e) => setTo(e.target.value)}
              placeholder="Recipients"
            />
          </div>

          {showCc && (
            <div className="compose-field">
              <div className="compose-field-label">Cc</div>
              <input
                type="text"
                className="compose-input"
                value={cc}
                onChange={(e) => setCc(e.target.value)}
                placeholder="Cc"
              />
            </div>
          )}

          {showBcc && (
            <div className="compose-field">
              <div className="compose-field-label">Bcc</div>
              <input
                type="text"
                className="compose-input"
                value={bcc}
                onChange={(e) => setBcc(e.target.value)}
                placeholder="Bcc"
              />
            </div>
          )}

          <div className="compose-field-options">
            {!showCc && (
              <button className="compose-option-button" onClick={() => setShowCc(true)}>
                Cc
              </button>
            )}
            {!showBcc && (
              <button className="compose-option-button" onClick={() => setShowBcc(true)}>
                Bcc
              </button>
            )}
          </div>

          <div className="compose-field">
            <div className="compose-field-label">Subject</div>
            <input
              type="text"
              className="compose-input"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              placeholder="Subject"
            />
          </div>

          <div className="compose-field compose-body-field">
            <textarea
              className="compose-textarea"
              value={body}
              onChange={(e) => setBody(e.target.value)}
              placeholder=""
              rows="15"
            />
          </div>
        </div>

        <div className="compose-footer">
          <div className="compose-footer-left">
            <button className="send-button" onClick={handleSend}>
              <span className="material-icons">send</span>
              <span>Send</span>
            </button>
            <button className="compose-footer-button" onClick={handleSaveDraft} title="Save draft">
              <span className="material-icons">insert_drive_file</span>
            </button>
            <button className="compose-footer-button" title="Attach files">
              <span className="material-icons">attach_file</span>
            </button>
            <button className="compose-footer-button" title="Insert link">
              <span className="material-icons">insert_link</span>
            </button>
            <button className="compose-footer-button" title="Insert emoji">
              <span className="material-icons">insert_emoticon</span>
            </button>
            <button className="compose-footer-button" title="Insert photo">
              <span className="material-icons">insert_photo</span>
            </button>
          </div>
          <button 
            className="compose-footer-button" 
            onClick={() => {
              if (draft && onDeleteDraft) {
                onDeleteDraft(draft.id)
              }
              onClose()
            }} 
            title="Delete draft"
          >
            <span className="material-icons">delete</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default ComposeEmail

