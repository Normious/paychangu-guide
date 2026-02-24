# 💳 PayChangu Integration Demo — Teaching Project

> A complete beginner-friendly project for learning PayChangu payment integration.
> Built for university students in Malawi. 🇲🇼

## 🚀 Quick Start

### Frontend Only (No Backend)
1. Open `index.html` in your browser
2. Replace `PUBLIC_KEY` in `script.js` with your test key
3. Click "Pay" and explore!

### With Backend (Full Verification)
```bash
cd backend
npm install
cp .env.example .env
# Edit .env and add your keys
node server.js
# Open http://localhost:3000
```

## 📁 Files
| File | Purpose |
|--|--|
| `index.html` | Checkout page (customer-facing) |
| `style.css` | Page styling |
| `script.js` | Payment logic (frontend) |
| `backend/server.js` | Secure verification server |
| `backend/.env.example` | Key configuration template |
| `TEACHING_GUIDE.md` | Full workshop guide for instructors |

## 🔑 Get Your Keys
1. Sign up at [paychangu.com](https://paychangu.com)
2. Dashboard → Settings → API Keys
3. Use **test keys** (start with `pub-test-`) during development

## 📚 Full Guide
See `TEACHING_GUIDE.md` for the complete workshop, concept explanations, and presentation slides.
