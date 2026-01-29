# Deploy Gmail Clone to Vercel – Step-by-Step Guide

This guide walks you through deploying the Gmail clone (React frontend + login API) to Vercel.

---

## How it works on Vercel

- **Frontend**: Vite builds your React app to static files in `dist`. Vercel serves them from your deployment URL.
- **Login API**: The file `api/login.js` is a **Vercel Serverless Function**. It is automatically available at **`/api/login`** on the same URL. No separate backend server is used; the `backend/` folder is only for local development.
- **Secrets**: Username and password are set in Vercel as **Environment Variables** (`ADMIN_USERNAME`, `ADMIN_PASSWORD`), not in code or in the repo.

---

## Prerequisites

- A **GitHub**, **GitLab**, or **Bitbucket** account
- Your project pushed to a Git repository (e.g. GitHub)
- A **Vercel** account (free at [vercel.com](https://vercel.com))

---

## Part 1: Prepare the Project (Already Done)

The repo is set up for Vercel:

- **Frontend**: Vite + React, builds to `dist`
- **Login API**: Vercel serverless function in `api/login.js` (same logic as your Express backend)
- **Config**: `vercel.json` tells Vercel to use Vite and output `dist`
- **Env**: Login uses `ADMIN_USERNAME` and `ADMIN_PASSWORD` (set in Vercel later)

The frontend calls `/api/login` when `VITE_API_URL` is not set (production). For local dev with your own backend, use `VITE_API_URL=http://localhost:5000` in `.env`.

---

## Part 2: Push Your Code to GitHub

1. **Create a GitHub repo** (if you haven’t):
   - Go to [github.com](https://github.com) → **New repository**
   - Name it (e.g. `gmail-clone`), leave it empty, create

2. **From your project folder**, run:

   ```bash
   git init
   git add .
   git commit -m "Prepare for Vercel deployment"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git push -u origin main
   ```

   Replace `YOUR_USERNAME` and `YOUR_REPO_NAME` with your GitHub username and repo name.

3. **Check `.gitignore`**  
   Ensure `.env`, `backend/.env`, `node_modules`, and `dist` are ignored so secrets and build artifacts are not committed.

---

## Part 3: Deploy on Vercel

### Step 1: Sign in / Sign up

1. Go to [vercel.com](https://vercel.com)
2. Click **Sign Up** or **Log In**
3. Choose **Continue with GitHub** (or GitLab/Bitbucket) and authorize Vercel

### Step 2: Import the project

1. On the Vercel dashboard, click **Add New…** → **Project**
2. You’ll see a list of repos. Find your Gmail clone repo and click **Import**
3. If the repo doesn’t appear, click **Adjust Git Connection** and connect the right Git account/organization

### Step 3: Configure the project

On the import screen:

| Setting | Value | Notes |
|--------|--------|------|
| **Framework Preset** | Vite | Should be auto-detected |
| **Root Directory** | `./` (leave default) | Project root |
| **Build Command** | `npm run build` | Default for Vite |
| **Output Directory** | `dist` | Default for Vite |
| **Install Command** | `npm install` | Default |

Leave these as-is unless you use a monorepo or custom setup.

### Step 4: Add environment variables

1. Expand **Environment Variables**
2. Add:

   | Name | Value | Environment |
   |------|--------|-------------|
   | `ADMIN_USERNAME` | Your login username | Production (and Preview if you want) |
   | `ADMIN_PASSWORD` | Your login password | Production (and Preview if you want) |

3. **Do not** commit these values; set them only in Vercel.
4. Optionally add the same variables for **Preview** if you want login to work on preview deployments.

### Step 5: Deploy

1. Click **Deploy**
2. Wait for the build to finish (usually 1–2 minutes)
3. When it’s done, you’ll get a URL like:  
   `https://your-project-name-xxxx.vercel.app`

---

## Part 4: Test the Deployment

1. Open the deployment URL in your browser.
2. You should see the **login page**.
3. Sign in with the **same username and password** you set in `ADMIN_USERNAME` and `ADMIN_PASSWORD`.
4. After a successful login, you should see the Gmail clone inbox.

If login fails:

- Check **Vercel → Project → Settings → Environment Variables** and confirm `ADMIN_USERNAME` and `ADMIN_PASSWORD`.
- In the same project, open **Deployments → latest → Functions** and check logs for `/api/login` errors.

---

## Part 5: Custom domain (optional)

1. In Vercel, open your project → **Settings** → **Domains**
2. Add your domain (e.g. `mail.yourdomain.com`)
3. Follow the instructions to add the DNS records (CNAME or A) at your domain provider
4. After DNS propagates, Vercel will issue SSL and your app will be available on your domain

---

## Part 6: Local development vs production

- **Production (Vercel)**  
  Frontend and API are on the same host. The app uses `/api/login` (no `VITE_API_URL`), and `api/login.js` runs as a serverless function.

- **Local with Vite only**  
  To use your existing Node backend (e.g. `backend/server.js` on port 5000):

  1. In the **project root**, create a `.env` file (and add it to `.gitignore`):

     ```env
     VITE_API_URL=http://localhost:5000
     ```

  2. Start your backend (e.g. `cd backend && npm start`).
  3. Start the frontend: `npm run dev`.  
  The frontend will call `http://localhost:5000/api/login` for login.

---

## Summary checklist

- [ ] Code pushed to GitHub (or GitLab/Bitbucket)
- [ ] Vercel account created and connected to Git
- [ ] Project imported from the repo
- [ ] `ADMIN_USERNAME` and `ADMIN_PASSWORD` set in Vercel Environment Variables
- [ ] Deploy completed and login tested on the deployment URL
- [ ] (Optional) Custom domain and DNS configured

If you hit a specific error (build failed, 404 on `/api/login`, login always fails, etc.), share the error message and the step you’re on and we can fix it.
