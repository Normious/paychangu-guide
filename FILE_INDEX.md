# 🗺️ FILE_INDEX.md — Navigation Guide for All Project Files

Use this file to quickly find what you're looking for.

---

## 📁 Complete File Tree

```
paychangu-demo/
│
├── 📄 FILE_INDEX.md          ← YOU ARE HERE — navigation guide
├── 📄 README.md              ← Technical documentation & setup
├── 📄 QUICK_START.md         ← 5-minute setup guide
├── 📄 TEACHING_GUIDE.md      ← Full workshop (concepts + slides + Q&A)
├── 📄 STUDENT_HANDOUT.md     ← Printable one-pager for students
├── 📄 PROJECT_SUMMARY.md     ← Complete project overview
│
├── 🌐 index.html             ← Shop checkout page (open in browser)
├── 🎨 style.css              ← Page styling & layout
├── ⚙️  script.js              ← Frontend payment logic
│
└── 📁 backend/
    ├── 🖥️  server.js          ← Node.js verification server
    ├── 📦 package.json       ← npm dependencies
    └── 🔒 .env.example       ← Secret key template (copy to .env)
```

---

## 📖 Documents — What's Inside Each

### `README.md`
**Who should read it:** Developers, instructors setting up the project
**Contents:**
- Project description and goals
- Quick start instructions (both frontend and full-stack)
- File structure overview
- Where to get PayChangu keys
- Link to full teaching guide

---

### `QUICK_START.md`
**Who should read it:** Anyone setting up the demo for the first time
**Contents:**
- Option A: Frontend-only setup (2 minutes, no Node.js)
- Option B: Full-stack setup with backend (5 minutes)
- PayChangu test card details
- Troubleshooting table
- Next steps

---

### `TEACHING_GUIDE.md`
**Who should read it:** Instructors running the workshop; students who want deep understanding
**Contents:**
- Part 1: What is PayChangu + how payments work (flow diagram)
- Part 2: All key terms explained with Malawi-specific analogies
- Part 3: Code walkthrough file by file
- Part 4: Security deep dive (fraud prevention, verification)
- Part 5: Full 60–90 min workshop plan with 15 slide outlines + speaker notes
- Part 6: Bonus — flow diagram, troubleshooting, deployment, live mode switch

---

### `STUDENT_HANDOUT.md`
**Who should read it:** Students attending the workshop
**Best used as:** Printed A4 reference sheet during the session
**Contents:**
- Visual payment flow diagram
- All key terms in a quick-reference table
- Project file structure
- The 4 code steps with real snippets
- Common mistakes table
- Test vs Live comparison
- Webhook explanation
- Going-live checklist
- PayChangu API endpoints

---

### `PROJECT_SUMMARY.md`
**Who should read it:** Instructors, reviewers, students wanting the big picture
**Contents:**
- Project purpose and audience
- What was built (frontend + backend + docs)
- Key concepts covered with cross-references
- Security architecture diagram
- Full technical stack with justifications
- Complete payment flow (all branches)
- Suggested 4-week learning progression
- Customisation guide for students
- Real-world applicability examples

---

## 🌐 Frontend Files

### `index.html`
**Role:** The customer-facing shop page
**Key sections inside the file:**
- `<header>` — Shop logo and test mode badge
- `.product-card` — Product display and customer form
- `#payBtn` — The payment trigger button
- `#paymentResult` — Success/failure result display
- `.explainer-box` — Teaching aid showing what's happening
- `#txLog` — Real-time transaction log (for demo only)
- `<script src="https://in.paychangu.com/js/popup.js">` — PayChangu library
- `<script src="script.js">` — Our payment code

**To customise:** Change product name, price display, form fields, or branding in this file.

---

### `style.css`
**Role:** Visual design and layout
**Key sections inside the file:**
- `:root {}` — CSS variables (change colors here for rebranding)
- `.site-header` — Top navigation bar
- `.product-card` — Product display grid
- `.price-tag` — Price styling
- `.customer-form` — Input fields
- `.btn-pay` — Big blue pay button
- `.payment-result` — Success/failure screen
- `.explainer-box` — Yellow teaching aid box
- `.tx-log` — Dark console-style transaction log
- `@media` — Mobile responsive rules

**To customise:** Edit `:root` variables to change the color scheme instantly.

---

### `script.js`
**Role:** Frontend payment brain
**Key functions inside the file:**

| Function | Line (approx.) | What it does |
|--|--|--|
| `CONFIG` object | Top | Stores keys, amount, URLs |
| `generateTxRef()` | ~60 | Creates unique order reference |
| `getCustomerDetails()` | ~80 | Reads form input values |
| `initiatePayment()` | ~105 | Main function called by Pay button |
| `PaychanguCheckout({...})` | Inside initiatePayment | Opens PayChangu popup |
| `onSuccess callback` | Inside checkout | Handles successful payment |
| `onDismiss callback` | Inside checkout | Handles popup closure |
| `handlePaymentSuccess()` | ~170 | Routes success to verification |
| `handlePaymentDismissed()` | ~185 | Shows cancellation message |
| `simulateBackendVerification()` | ~200 | Simulates backend call (demo) |
| `showSuccessUI()` | ~225 | Renders success screen |
| `showFailureUI()` | ~250 | Renders failure screen |
| `setLoadingState()` | ~265 | Shows/hides spinner |
| `resetPage()` | ~275 | Resets UI for new attempt |
| `addLog()` | ~290 | Appends to transaction log |

**To customise:** Update `CONFIG.PUBLIC_KEY`, `CONFIG.AMOUNT`, `CONFIG.CURRENCY`, `CONFIG.CALLBACK_URL`.

---

## 🖥️ Backend Files

### `backend/server.js`
**Role:** Secure Node.js server that holds the secret key and verifies payments
**Key sections inside the file:**

| Section | Line (approx.) | What it does |
|--|--|--|
| Dependencies | Top | express, axios, cors, dotenv |
| `PAYCHANGU_SECRET_KEY` | ~35 | Loaded from `.env` — never hardcoded |
| `POST /api/verify-payment` | ~55 | Calls PayChangu API to confirm payment |
| `POST /api/webhook` | ~125 | Receives PayChangu's background notifications |
| `GET /payment-success` | ~165 | Post-payment redirect landing page |
| `app.listen()` | Bottom | Starts server on port 3000 |

**To customise:** Update `EXPECTED_AMOUNT` and `EXPECTED_CURRENCY` in the verify endpoint to match your product's real price.

---

### `backend/package.json`
**Role:** Lists the Node.js packages this project needs
**Dependencies:**

| Package | Purpose |
|--|--|
| `express` | Web server framework |
| `axios` | HTTP requests to PayChangu API |
| `cors` | Allows browser to call this server |
| `dotenv` | Loads `.env` file into environment |
| `nodemon` (dev) | Auto-restarts server on file changes |

**How to install all dependencies:** Run `npm install` in the `backend/` folder.

---

### `backend/.env.example`
**Role:** Template showing which environment variables are needed
**How to use:**
```bash
cp .env.example .env
# Then edit .env with your real keys
```
**Variables defined:**

| Variable | Where to get it |
|--|--|
| `PAYCHANGU_PUBLIC_KEY` | PayChangu Dashboard → API Keys |
| `PAYCHANGU_SECRET_KEY` | PayChangu Dashboard → API Keys |
| `PORT` | Choose any free port (default: 3000) |
| `TEST_MODE` | `true` for sandbox, `false` for live |
| `APP_URL` | Your domain (localhost for development) |

> ⚠️ **Never commit `.env` to GitHub.** It contains your secret key. The `.env.example` file (with placeholder values) is safe to commit.

---

## 🔍 Find Specific Topics Quickly

| I want to understand… | Go to… |
|--|--|
| What PayChangu is | `TEACHING_GUIDE.md` → Part 1 |
| What a public key is | `TEACHING_GUIDE.md` → Key Terms |
| Why secret key must be backend | `TEACHING_GUIDE.md` → Security + `server.js` comments |
| How to generate tx_ref | `script.js` → `generateTxRef()` |
| How to open payment popup | `script.js` → `PaychanguCheckout({...})` |
| How verification works | `server.js` → `/api/verify-payment` endpoint |
| What webhooks do | `server.js` → `/api/webhook` endpoint |
| How to switch to live mode | `TEACHING_GUIDE.md` → Part 6 |
| Workshop slides & speaker notes | `TEACHING_GUIDE.md` → Part 5 |
| 5-minute setup | `QUICK_START.md` |
| Printable student reference | `STUDENT_HANDOUT.md` |
| Full project overview | `PROJECT_SUMMARY.md` |
| Troubleshooting | `QUICK_START.md` → bottom section |
| Deployment to production | `TEACHING_GUIDE.md` → Deployment Notes |

---

*PayChangu Integration Teaching Project | Malawi 🇲🇼*
