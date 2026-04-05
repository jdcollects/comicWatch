# Comic Deal Sniper AI - Updated Repo

This package updates the project to an **AI-only version** that works before your eBay developer account is approved.

## What's included

- `backend/` FastAPI backend with an AI analysis endpoint
- `mobile/` Expo React Native app with:
  - light/dark toggle
  - listing input form
  - AI recommendation output
  - full run detection like `Absolute Batman #1-5`

## Backend setup

```bash
cd backend
python -m venv .venv
# Windows PowerShell
.\.venv\Scripts\Activate.ps1
pip install -r requirements.txt
python run.py
```

Health check:
- `http://127.0.0.1:8000/health`

## Mobile setup

Create `mobile/.env` from `.env.example`.

For simulator on same computer:
```env
EXPO_PUBLIC_API_BASE_URL=http://127.0.0.1:8000
```

For phone on same Wi-Fi, replace with your computer LAN IP:
```env
EXPO_PUBLIC_API_BASE_URL=http://YOUR-COMPUTER-IP:8000
```

Run:
```bash
cd mobile
npm install
npx expo start
```

## Upload to GitHub

Unzip this package, then from the repo folder:

```bash
git init
git add .
git commit -m "Update to AI-only comic sniper app"
git branch -M main
git remote add origin YOUR_GITHUB_REPO_URL
git push -u origin main
```

## Next step after GitHub upload

Deploy `backend/` to Render as a web service.

Recommended Render settings:
- Root Directory: `backend`
- Build Command: `pip install -r requirements.txt`
- Start Command: `uvicorn app.main:app --host 0.0.0.0 --port $PORT`

Then update:
```env
EXPO_PUBLIC_API_BASE_URL=https://YOUR-RENDER-URL.onrender.com
```

## Notes

- This version does **not** need eBay API keys yet.
- It is meant to get you running immediately.
- After your eBay developer account is approved, this backend can be expanded with live search.
