# Gmail Clone

A complete replica of Gmail built with React, featuring a modern UI and full email functionality. All data is stored locally using localStorage (no database required).

## Features

- 📧 **Email Management**
  - Compose new emails
  - Reply to emails
  - Delete emails
  - Archive emails
  - Star/unstar emails
  - Save drafts

- 📁 **Email Organization**
  - Inbox
  - Sent
  - Drafts
  - Starred
  - Archived

- 🔍 **Search**
  - Search emails by subject, sender, or content

- 🎨 **Modern UI**
  - Gmail-like interface
  - Responsive design
  - Material Icons
  - Smooth animations

## Getting Started

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Project Structure

```
CTF-gmail/
├── src/
│   ├── components/
│   │   ├── Sidebar.jsx          # Navigation sidebar
│   │   ├── EmailList.jsx        # List of emails
│   │   ├── EmailView.jsx        # Email detail view
│   │   └── ComposeEmail.jsx     # Compose email modal
│   ├── utils/
│   │   └── emailStorage.js      # localStorage management
│   ├── App.jsx                  # Main app component
│   ├── main.jsx                 # React entry point
│   └── index.css                # Global styles
├── index.html
├── package.json
└── vite.config.js
```

## Data Storage

All emails are stored in the browser's localStorage. The app comes pre-loaded with sample emails to help you get started. You can:

- Compose and send new emails
- All emails persist across page refreshes
- Clear localStorage to reset all data

## Technologies Used

- React 18
- Vite
- Material Icons
- Google Sans Font
- CSS3

## Browser Support

Works best in modern browsers (Chrome, Firefox, Safari, Edge).

