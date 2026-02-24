# ⚡ PayChangu Demo — 5-Minute Quick Start

Get the demo running in under 5 minutes. No experience needed.

---

## ✅ Option A: Frontend Only (2 minutes, no installation)

> Best for: Exploring the UI, classroom demos, no Node.js installed

**Step 1 — Get your test key**
1. Go to [paychangu.com](https://paychangu.com) → Sign up (free)
2. Dashboard → Settings → API Keys
3. Copy your **Public Key** (starts with `pub-test-`)

**Step 2 — Paste your key**
Open `script.js` and replace line 8:
```javascript
// BEFORE:
PUBLIC_KEY: "pub-test-XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",

// AFTER (your real test key):
PUBLIC_KEY: "pub-test-abc123yourrealkeyhere",
```

**Step 3 — Open the page**
Double-click `index.html` → Opens in your browser.

**Step 4 — Test a payment**
- Fill in the customer form (test data is pre-filled)
- Click **"Pay MK 150,000 Now"**
- PayChangu popup opens → use test card/number
- Watch the Transaction Log at the bottom

🎉 Done! Payment flow is working.

---

## ✅ Option B: Full Stack with Backend (5 minutes)

> Best for: Complete verification flow, realistic integration

**Requirements:** Node.js installed ([nodejs.org](https://nodejs.org))

```bash
# Step 1 — Go into the backend folder
cd backend

# Step 2 — Install dependencies (one time only)
npm install

# Step 3 — Create your .env file
cp .env.example .env
```

**Step 4 — Edit `.env` with your keys:**
```env
PAYCHANGU_PUBLIC_KEY=pub-test-your-key-here
PAYCHANGU_SECRET_KEY=sec-test-your-key-here
PORT=3000
```

```bash
# Step 5 — Start the server
node server.js
```

**Step 6 — Open the shop:**
Go to → [http://localhost:3000](http://localhost:3000)

**Step 7 — Enable real backend verification in `script.js`:**

Find the comment block starting with `// In a real app, you would call your backend here:` and uncomment those lines.

🎉 Done! Full payment + verification flow is working.

---

## 🧪 PayChangu Test Card Details

Use these when the payment popup asks for card details:

| Field | Value |
|--|--|
| Card Number | `4084 0841 1115 4340` |
| Expiry | Any future date |
| CVV | Any 3 digits |

For Airtel Money / TNM sandbox — use any valid-format phone number.

---

## 🔍 If Something Doesn't Work

| Problem | Fix |
|--|--|
| Popup doesn't open | Check console (F12) for errors. Is your public key correct? |
| `PaychanguCheckout is not defined` | The PayChangu script tag is missing or failed to load — check internet |
| Backend 500 error | Check `.env` file exists and has correct secret key |
| CORS error | Make sure you're accessing via `http://localhost:3000`, not `file://` |
| Webhook not firing | Use [ngrok](https://ngrok.com) to expose localhost: `npx ngrok http 3000` |

---

## 📂 Next Steps

- 📖 Read `TEACHING_GUIDE.md` for full concept explanations
- 🖨️ Print `STUDENT_HANDOUT.md` for workshop attendees
- 🗺️ See `FILE_INDEX.md` for a map of every file
