// Email storage using localStorage (no database)

const STORAGE_KEY = 'gmail_emails'

// Initialize with sample emails if storage is empty
const initializeSampleEmails = () => {
  const existing = localStorage.getItem(STORAGE_KEY)
  if (!existing) {
    const sampleEmails = [
      // Inbox emails
      {
        id: '1',
        from: 'welcome@gmail.com',
        to: 'you@gmail.com',
        subject: 'Welcome to Gmail',
        body: 'Welcome to Gmail! This is a sample email to get you started. You can compose new emails, reply to messages, and organize your inbox.',
        timestamp: new Date(Date.now() - 86400000).toISOString(), // 1 day ago
        read: false,
        starred: false,
        archived: false,
        sent: false,
        draft: false,
        spam: false,
        trash: false,
        snoozed: false,
        important: false
      },
      {
        id: '2',
        from: 'team@example.com',
        to: 'you@gmail.com',
        subject: 'Project Update',
        body: 'Hi there,\n\nJust wanted to give you an update on the project. Everything is going well and we\'re on track to meet our deadline.\n\nLet me know if you have any questions.\n\nBest regards,\nTeam',
        timestamp: new Date(Date.now() - 3600000).toISOString(), // 1 hour ago
        read: false,
        starred: true,
        archived: false,
        sent: false,
        draft: false,
        spam: false,
        trash: false,
        snoozed: false,
        important: true
      },
      {
        id: '3',
        from: 'newsletter@tech.com',
        to: 'you@gmail.com',
        subject: 'Weekly Tech Newsletter',
        body: 'Check out this week\'s top tech stories:\n\n1. New AI breakthroughs\n2. Latest framework updates\n3. Developer tools roundup\n\nRead more on our website!',
        timestamp: new Date(Date.now() - 172800000).toISOString(), // 2 days ago
        read: true,
        starred: false,
        archived: false,
        sent: false,
        draft: false,
        spam: false,
        trash: false,
        snoozed: false,
        important: false
      },
      // Sent emails
      {
        id: '4',
        from: 'you@gmail.com',
        to: 'colleague@example.com',
        subject: 'Meeting Follow-up',
        body: 'Hi,\n\nThanks for the great meeting today. I\'ve attached the notes we discussed.\n\nLooking forward to our next steps.\n\nBest,\nYou',
        timestamp: new Date(Date.now() - 7200000).toISOString(), // 2 hours ago
        read: true,
        starred: false,
        archived: false,
        sent: true,
        draft: false,
        spam: false,
        trash: false,
        snoozed: false,
        important: false
      },
      {
        id: '5',
        from: 'you@gmail.com',
        to: 'friend@example.com',
        subject: 'Re: Weekend Plans',
        body: 'Sounds great! Let\'s meet at the coffee shop at 2 PM.\n\nSee you there!',
        timestamp: new Date(Date.now() - 259200000).toISOString(), // 3 days ago
        read: true,
        starred: false,
        archived: false,
        sent: true,
        draft: false,
        spam: false,
        trash: false,
        snoozed: false,
        important: false
      },
      // Draft emails
      {
        id: '6',
        from: 'you@gmail.com',
        to: 'boss@company.com',
        subject: 'Quarterly Report',
        body: 'Hi,\n\nI wanted to share the quarterly report with you. Please review and let me know your thoughts.\n\nThanks!',
        timestamp: new Date(Date.now() - 3600000).toISOString(), // 1 hour ago
        read: false,
        starred: false,
        archived: false,
        sent: false,
        draft: true,
        spam: false,
        trash: false,
        snoozed: false,
        important: false
      },
      {
        id: '7',
        from: 'you@gmail.com',
        to: 'client@business.com',
        subject: 'Proposal Discussion',
        body: 'Dear Client,\n\nI wanted to follow up on our proposal. I believe this solution would be perfect for your needs.\n\nLet me know if you have any questions.',
        timestamp: new Date(Date.now() - 86400000).toISOString(), // 1 day ago
        read: false,
        starred: false,
        archived: false,
        sent: false,
        draft: true,
        spam: false,
        trash: false,
        snoozed: false,
        important: false
      },
      // Archived email
      {
        id: '8',
        from: 'old@example.com',
        to: 'you@gmail.com',
        subject: 'Old Newsletter',
        body: 'This is an archived email from last month.',
        timestamp: new Date(Date.now() - 2592000000).toISOString(), // 30 days ago
        read: true,
        starred: false,
        archived: true,
        sent: false,
        draft: false,
        spam: false,
        trash: false,
        snoozed: false,
        important: false
      },
      // Starred email (already in inbox)
      {
        id: '9',
        from: 'important@company.com',
        to: 'you@gmail.com',
        subject: 'Important Announcement',
        body: 'This is an important email that you starred.',
        timestamp: new Date(Date.now() - 43200000).toISOString(), // 12 hours ago
        read: true,
        starred: true,
        archived: false,
        sent: false,
        draft: false,
        spam: false,
        trash: false,
        snoozed: false,
        important: true
      }
    ]
    localStorage.setItem(STORAGE_KEY, JSON.stringify(sampleEmails))
  }
}

// Get all emails
export const getEmails = () => {
  initializeSampleEmails()
  const emails = localStorage.getItem(STORAGE_KEY)
  return emails ? JSON.parse(emails) : []
}

// Save an email (create or update)
export const saveEmail = (email) => {
  const emails = getEmails()
  const existingIndex = emails.findIndex(e => e.id === email.id)
  
  if (existingIndex >= 0) {
    emails[existingIndex] = email
  } else {
    emails.push(email)
  }
  
  localStorage.setItem(STORAGE_KEY, JSON.stringify(emails))
  return email
}

// Delete an email
export const deleteEmail = (emailId) => {
  const emails = getEmails()
  const filtered = emails.filter(e => e.id !== emailId)
  localStorage.setItem(STORAGE_KEY, JSON.stringify(filtered))
}

// Archive an email
export const archiveEmail = (emailId) => {
  const emails = getEmails()
  const email = emails.find(e => e.id === emailId)
  if (email) {
    email.archived = !email.archived
    localStorage.setItem(STORAGE_KEY, JSON.stringify(emails))
  }
}

// Mark email as read
export const markAsRead = (emailId) => {
  const emails = getEmails()
  const email = emails.find(e => e.id === emailId)
  if (email) {
    email.read = true
    localStorage.setItem(STORAGE_KEY, JSON.stringify(emails))
  }
}

// Star/unstar an email
export const toggleStar = (emailId) => {
  const emails = getEmails()
  const email = emails.find(e => e.id === emailId)
  if (email) {
    email.starred = !email.starred
    localStorage.setItem(STORAGE_KEY, JSON.stringify(emails))
  }
}

