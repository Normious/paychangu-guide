# 💳 PayChangu Payment Integration — Complete Teaching Guide
### For University Students in Malawi | HTML, CSS & JavaScript
### Built by a Senior Fintech Software Engineer

---

> **Who is this for?**
> Students who know basic HTML and CSS but have never integrated a payment system before.
> We will explain EVERYTHING — from what a "secret key" is, to why fraud happens if you skip verification.

---

## 📁 Project Structure

```
paychangu-demo/
│
├── index.html          ← The shop page (what customers see)
├── style.css           ← How the page looks (colors, layout)
├── script.js           ← The payment brain (JavaScript)
│
└── backend/
    ├── server.js       ← The secure server (Node.js)
    ├── package.json    ← Node.js dependencies list
    └── .env.example    ← Template for secret keys (copy to .env)
```

---

# PART 1: CONCEPT EXPLANATION (Before Writing Any Code)

---

## 🤔 What is PayChangu?

PayChangu is a **payment gateway** built for Malawi and the region. Think of it like this:

> 🏪 **Analogy:** Imagine you run a shop in Lilongwe. You want to accept Airtel Money, TNM Mpamba, and bank card payments — but you don't want to deal with each mobile network separately. So you hire a company (PayChangu) that handles all of those payment methods for you. You just tell them "collect MK 150,000 from this customer" and they do the hard work. When the money arrives, they send it to your account (minus a small fee).

PayChangu supports:
- **Airtel Money** 📱
- **TNM Mpamba** 📱
- **Bank Cards** (Visa/Mastercard) 💳
- **Bank Transfers** 🏦

---

## 🔄 How Online Payments Work (Simple Flow Diagram)

```
CUSTOMER                  YOUR WEBSITE           PAYCHANGU              BANK/MOBILE MONEY
    │                          │                     │                         │
    │  1. Clicks "Pay"         │                     │                         │
    │─────────────────────────>│                     │                         │
    │                          │                     │                         │
    │                          │  2. Opens PayChangu │                         │
    │                          │     popup with      │                         │
    │                          │     amount & details│                         │
    │                          │────────────────────>│                         │
    │                          │                     │                         │
    │  3. Enters phone/PIN     │                     │                         │
    │<─────────────────────────│────────────────────>│                         │
    │                          │                     │  4. Charges phone/card  │
    │                          │                     │────────────────────────>│
    │                          │                     │                         │
    │                          │                     │  5. Bank confirms       │
    │                          │                     │<────────────────────────│
    │                          │                     │                         │
    │                          │  6. Notifies your   │                         │
    │                          │     backend (webhook│                         │
    │                          │<────────────────────│                         │
    │                          │                     │                         │
    │                          │  7. Backend verifies│                         │
    │                          │     payment is real │                         │
    │                          │────────────────────>│                         │
    │                          │                     │                         │
    │  8. "Payment Success!"   │                     │                         │
    │<─────────────────────────│                     │                         │
```

---

## 🔑 Key Terms Explained in Simple Language

### 1. Public Key
> **What it is:** A code that identifies YOUR shop to PayChangu.
>
> **Analogy:** It's like your shop's name and address — everyone can see it. When you call a supplier, you say "Hello, I'm TechShop Malawi." That's your public identity.
>
> **Is it safe to show?** YES — it can be in your JavaScript (frontend).
>
> **Looks like:** `pub-test-abc123xyz456...`

---

### 2. Secret Key
> **What it is:** A private password that proves you really own this PayChangu account.
>
> **Analogy:** It's like the PIN code for your bank account. You never write your PIN on your shop window. If someone else gets your PIN, they can access your money.
>
> **Is it safe to show?** ABSOLUTELY NOT — it must ONLY be on your server (backend), never in JavaScript that runs in the browser.
>
> **Looks like:** `sec-test-xyz789...`

---

### 3. Transaction Reference (tx_ref)
> **What it is:** A unique ID you create for each payment attempt. No two payments should ever have the same reference.
>
> **Analogy:** When you buy something at Shoprite, your receipt has a unique number like `TXN-20240815-00042`. If you want to dispute a purchase, the shop uses that number to look up the exact transaction in their system.
>
> **In our code:** We generate it like this: `SHOP-1723456789012-ABC123`

---

### 4. Callback URL
> **What it is:** The web address (URL) PayChangu sends the customer TO after payment is done.
>
> **Analogy:** It's like telling your courier company: "After you deliver the package, bring the signed receipt to my office at 5 Robert Mugabe Road." The customer "comes back" to this page after paying.
>
> **Example:** `https://techshop.mw/payment-success`

---

### 5. Webhook
> **What it is:** A URL on YOUR SERVER where PayChangu sends an automatic notification the moment a payment is completed — even if the customer closed their browser.
>
> **Analogy:** Imagine a customer pays for something in your shop, but immediately walks out before you can give them the receipt. A good supplier (PayChangu) will call you on your phone to say "payment confirmed!" — even if the customer is already gone. That phone call is the webhook.
>
> **Why it matters:** If a customer pays and then their internet disconnects, the webhook ensures YOUR SERVER still gets notified. This is more reliable than waiting for the customer to be redirected back.

---

### 6. Payment Verification
> **What it is:** The process of YOUR SERVER asking PayChangu: "Is this payment really real?"
>
> **Analogy:** A customer shows you a receipt. Instead of just believing them, you call the bank to confirm: "Did MK 150,000 really come from this person?" The bank confirms it. Only then do you release the goods.
>
> **Why it's critical:** Without verification, a clever person could fake a payment by triggering the "success" function in JavaScript without actually paying.

---

### 7. Sandbox vs Live Mode

| | Sandbox (Test) | Live |
|--|--|--|
| **What is it?** | Pretend payments | Real money |
| **Who pays?** | Nobody — it's fake | Real customers |
| **Use for** | Building & testing | After launch |
| **Key prefix** | `pub-test-` / `sec-test-` | `pub-live-` / `sec-live-` |

> **Analogy:** Sandbox mode is like practicing with Monopoly money. You can test everything without losing (or receiving) real Kwacha. When you're confident everything works, you switch to "live" mode.

---

## ⚠️ Why Verification MUST Happen on the Backend

This is the most important security concept. Read carefully.

**The Problem:** JavaScript runs in the browser. Anyone can open their browser's DevTools (press F12) and run any JavaScript they want. A fraudster could type this in the console:

```javascript
// Fraudster runs this in the browser console!
handlePaymentSuccess({ tx_ref: "FAKE-TX-999", status: "success" });
```

If your "success" logic only lives in the browser, this would trick your system into thinking a payment succeeded — even though no money changed hands.

**The Solution:** Move the verification to your backend server. The fraudster cannot run code on your server. Your server calls PayChangu with your SECRET KEY, and PayChangu confirms whether the payment is real.

```
Browser (untrusted)    →    Your Server (trusted)    →    PayChangu
"I paid! ref=FAKE-99"  →    "Is ref=FAKE-99 real?"   →    "NO — not found"
                       ←    "Verification FAILED"     ←
```

---

## 🚨 Common Beginner Mistakes

| ❌ Mistake | ✅ Correct Approach |
|--|--|
| Putting secret key in JavaScript | Secret key only in backend `.env` file |
| Trusting the frontend `onSuccess` callback alone | Always verify on the backend |
| Using the same `tx_ref` twice | Generate a new unique ref for every payment |
| Not handling `onDismiss` | Always handle when customer closes popup |
| Going live before testing thoroughly | Test every scenario in sandbox first |
| Hardcoding amounts in frontend only | Verify amount on backend matches your expected price |
| Not using HTTPS in production | Always use HTTPS — PayChangu may require it |

---

# PART 2: CODE WALKTHROUGH

---

## File 1: `index.html` — The Shop Page

**Purpose:** This is what the customer sees. It shows the product, collects their details, and has the "Pay" button.

**Key parts to understand:**

```html
<!-- 1. We load the PayChangu library from their server -->
<script src="https://in.paychangu.com/js/popup.js"></script>
```
> Think of this like installing a payment machine in your shop. PayChangu provides the machine; you just plug it in.

```html
<!-- 2. The Pay button calls our JavaScript function -->
<button onclick="initiatePayment()">Pay MK 150,000 Now</button>
```
> When clicked, our `initiatePayment()` function in `script.js` runs.

```html
<!-- 3. The form collects customer details -->
<input type="text" id="firstName" />
<input type="email" id="email" />
<input type="tel" id="phone" />
```
> PayChangu needs these to send the customer a receipt and to show in your dashboard.

---

## File 2: `style.css` — The Look

**Purpose:** Makes the page look professional. Uses CSS variables for easy rebranding.

**Key learning:** CSS variables let you change the entire color scheme in one place:
```css
:root {
  --primary: #1a56db;   /* Change this ONE line to restyle everything */
  --success: #057a55;
  --danger:  #e02424;
}
```

---

## File 3: `script.js` — The Payment Brain

This is the most important file. Let's walk through it step by step.

### Step 1: Configuration
```javascript
const CONFIG = {
  PUBLIC_KEY: "pub-test-XXXX...",  // Your public key (safe in frontend)
  AMOUNT: 150000,                  // MK 150,000
  CURRENCY: "MWK",
  CALLBACK_URL: "http://localhost:3000/payment-success",
};
```
> This is like filling in a bank transfer form before going to the bank. We set up all the details first.

### Step 2: Generate Unique Transaction Reference
```javascript
function generateTxRef() {
  const timestamp = Date.now();  // E.g., 1723456789012
  const random = Math.random().toString(36).substring(2, 8).toUpperCase();
  return `SHOP-${timestamp}-${random}`;  // E.g., SHOP-1723456789012-ABC123
}
```
> Like a receipt number printer at a supermarket. Every receipt gets a different number.

### Step 3: Collect Customer Details
```javascript
function getCustomerDetails() {
  return {
    firstName: document.getElementById("firstName").value,
    email: document.getElementById("email").value,
    phone: document.getElementById("phone").value,
  };
}
```
> We read what the customer typed in the form.

### Step 4: Call PayChangu Popup
```javascript
PaychanguCheckout({
  public_key: CONFIG.PUBLIC_KEY,
  tx_ref: txRef,
  amount: CONFIG.AMOUNT,
  currency: "MWK",
  customer: { email, first_name, last_name, phone_number },
  onSuccess: function(data) { /* handle success */ },
  onDismiss: function() { /* handle cancel */ },
});
```
> This opens PayChangu's payment window. The customer enters their mobile money PIN or card details there — NOT on our page. This is safer because we never see their PIN.

### Step 5: Handle Success
```javascript
onSuccess: function(data) {
  // data.tx_ref = "SHOP-1723456789012-ABC123"
  // Call our backend to verify!
  fetch('/api/verify-payment', {
    method: 'POST',
    body: JSON.stringify({ tx_ref: data.tx_ref })
  });
}
```
> Don't trust this alone. Send the reference to your backend.

---

## File 4: `backend/server.js` — The Secure Verifier

**Purpose:** The backend server that holds the SECRET KEY and verifies payments with PayChangu.

### The Verification Endpoint

```javascript
app.post("/api/verify-payment", async (req, res) => {
  const { tx_ref } = req.body;

  // Call PayChangu with our SECRET KEY
  const response = await axios.get(
    `https://api.paychangu.com/verify-payment/${tx_ref}`,
    {
      headers: { "Authorization": `Bearer ${PAYCHANGU_SECRET_KEY}` }
    }
  );

  // Check the response
  if (response.data.status === "success" &&
      response.data.data.amount >= EXPECTED_AMOUNT) {
    // ✅ Payment is real and correct amount!
    return res.json({ success: true });
  } else {
    // ❌ Something is wrong
    return res.status(402).json({ success: false });
  }
});
```

**Critical: Verify the AMOUNT too!**

If someone changes the amount in browser DevTools (from 150,000 to 100), your backend catches it because it checks `amount >= EXPECTED_AMOUNT`.

---

# PART 3: SECURITY DEEP DIVE

---

## 🔐 Why the Secret Key Must Stay on the Backend

```
❌ WRONG (Secret key in frontend JavaScript — never do this):
const SECRET_KEY = "sec-test-abc123...";  // Anyone with F12 can see this!

✅ CORRECT (Secret key in backend .env file):
# .env file on your server (nobody outside can read this)
PAYCHANGU_SECRET_KEY=sec-test-abc123...
```

If a criminal finds your secret key, they can:
- Call PayChangu's API pretending to be you
- Initiate refunds to themselves
- Access all your transaction data

---

## 🛡️ How Verification Prevents Fraud

**Scenario: The Clever Cheater**

1. Customer opens the checkout page
2. Presses F12 → Console in Chrome
3. Types: `handlePaymentSuccess({ tx_ref: "FAKE-TXN" })`
4. Your frontend shows "Payment Successful!" 😱

**With backend verification:**

1. Frontend calls backend: `POST /api/verify-payment { tx_ref: "FAKE-TXN" }`
2. Backend calls PayChangu: `GET /verify-payment/FAKE-TXN` with secret key
3. PayChangu responds: `{ status: "failed", message: "Transaction not found" }`
4. Backend returns error to frontend
5. Frontend shows "Verification failed" — cheater caught! ✅

---

## 🔔 How Webhooks Improve Reliability

**Problem without webhooks:**
1. Customer pays ✅
2. Customer's internet disconnects 📵
3. PayChangu tries to redirect customer to `callback_url` — fails
4. YOUR backend never knows the payment happened
5. Order never confirmed — customer upset!

**Solution with webhooks:**
1. Customer pays ✅
2. Customer's internet disconnects 📵
3. PayChangu calls YOUR SERVER directly (webhook) — server is always online ✅
4. Your server receives the notification and marks order as paid ✅
5. When customer reconnects, they see their order is confirmed ✅

---

# PART 4: PAYMENT FLOW DIAGRAM

```
┌─────────────────────────────────────────────────────────────────┐
│                    PAYMENT FLOW OVERVIEW                        │
└─────────────────────────────────────────────────────────────────┘

  ┌──────────┐        ┌──────────────┐        ┌──────────────────┐
  │ CUSTOMER │        │  YOUR SITE   │        │    PAYCHANGU     │
  │ (Browser)│        │  (Backend)   │        │      API         │
  └────┬─────┘        └──────┬───────┘        └────────┬─────────┘
       │                     │                         │
       │  [1] Clicks Pay     │                         │
       │────────────────────>│ (generates tx_ref)      │
       │                     │                         │
       │  [2] PopUp Opens    │                         │
       │<────────────────────│────────────────────────>│
       │                     │                         │
       │  [3] Enters PIN/Card│                         │
       │────────────────────>│────────────────────────>│
       │                     │                         │
       │                     │  [4] WEBHOOK (bg call)  │
       │                     │<────────────────────────│
       │                     │                         │
       │                     │  [5] Verify payment     │
       │                     │────────────────────────>│
       │                     │  "Is this real?" + sk   │
       │                     │                         │
       │                     │  [6] "Yes, confirmed"   │
       │                     │<────────────────────────│
       │                     │                         │
       │  [7] Order Confirmed│                         │
       │<────────────────────│                         │
       │                     │                         │

  sk = Secret Key (never seen by browser)
```

---

# PART 5: WORKSHOP TEACHING GUIDE

---

## 📋 Workshop: Integrating PayChangu into a Web App
**Duration:** 60–90 minutes | **Audience:** University students | **Location:** Malawi

---

### Slide 1: Title Slide
**Title:** PayChangu Payment Integration for Web Developers
**Subtitle:** Building Real Payment Systems for Malawi
**Speaker notes:** "Welcome everyone. By the end of this workshop, you will have built a working payment checkout page using PayChangu — the same technology used by real businesses in Malawi. If you've ever wondered how Airtel Money payments work on websites, you're about to find out."

---

### Slide 2: What We're Building Today
**Bullets:**
- A product checkout page (like an online shop)
- Real payment integration with PayChangu
- Secure payment verification
- Success and failure handling

**Speaker notes:** "We're building a fake phone shop called 'TechShop Malawi'. Customers can click a button to pay MK 150,000 for a phone using Airtel Money, TNM Mpamba, or a bank card. We'll use PayChangu's sandbox (test mode) so no real money is involved."

---

### Slide 3: Before We Code — How Online Payments Work
**Bullets:**
- Customer clicks "Pay"
- Your website opens a payment popup
- Customer enters their phone number or card
- Money moves from customer to PayChangu
- PayChangu notifies your server
- Your server confirms the payment is real
- Order is confirmed

**Speaker notes:** "Think of PayChangu like a trusted middleman. You never handle credit card numbers or PINs — that's PayChangu's job. Your job is to tell them how much to charge and who to charge, then confirm the payment happened."

---

### Slide 4: Key Concepts — Keys, References, Callbacks
**Bullets:**
- **Public Key** — Your shop's identity (safe to show)
- **Secret Key** — Your shop's password (NEVER show publicly)
- **tx_ref** — Unique order ID you generate
- **Callback URL** — Where customer goes after paying
- **Webhook** — Silent notification to your server

**Speaker notes:** "I like to think of it like running a restaurant. Your public key is your restaurant's name and address — anyone can know it. Your secret key is the safe combination where you keep the day's cash — only you and your most trusted staff can know it."

---

### Slide 5: Live Demo — Open the Shop Page
**Demo step:** Open `index.html` in browser
**Show:** Product card, customer form, Pay button, Transaction Log

**Speaker notes:** "Let's look at what we've built. This is a simple product page. Notice the yellow box — that's our 'teaching mode' that shows what's happening behind the scenes. In a real shop, you'd remove that."

---

### Slide 6: Look at the Code — index.html
**Bullets:**
- HTML gives us structure
- We load PayChangu's script with one line
- A form collects customer details
- A button triggers our JavaScript

**Speaker notes:** "Open index.html. Notice this one line at the bottom — `<script src='https://in.paychangu.com/js/popup.js'>`. This is the only PayChangu code we need in our HTML. It gives us access to the `PaychanguCheckout` function. Think of it like plugging in a card reader at a shop counter."

---

### Slide 7: Look at the Code — script.js (Configuration)
**Code to show:**
```javascript
const CONFIG = {
  PUBLIC_KEY: "pub-test-XXXX...",
  AMOUNT: 150000,
  CURRENCY: "MWK",
};
```
**Speaker notes:** "This is where we set up the payment details. Notice we put the PUBLIC KEY here — that's safe. But you'll never see the SECRET KEY in this file. The secret key lives on the server."

---

### Slide 8: Look at the Code — Generating a tx_ref
**Code to show:**
```javascript
function generateTxRef() {
  const timestamp = Date.now();
  const random = Math.random().toString(36).substring(2, 8).toUpperCase();
  return `SHOP-${timestamp}-${random}`;
}
```
**Speaker notes:** "Every payment needs a unique ID. We combine the current timestamp (which changes every millisecond) with a random string. This guarantees no two transactions ever share the same reference. It's like printing unique receipt numbers."

---

### Slide 9: Look at the Code — PaychanguCheckout
**Code to show:**
```javascript
PaychanguCheckout({
  public_key: CONFIG.PUBLIC_KEY,
  tx_ref: txRef,
  amount: 150000,
  currency: "MWK",
  customer: { email, first_name, phone_number },
  onSuccess: function(data) { /* verify! */ },
  onDismiss: function() { /* handle cancel */ },
});
```
**Speaker notes:** "This is the magic line! We call PayChangu's function with all the payment details. PayChangu opens their secure popup — the customer enters their PIN there, not on our page. When done, PayChangu calls our onSuccess or onDismiss function."

---

### Slide 10: SECURITY — Why We Need a Backend
**Title:** ⚠️ The Fraud Problem
**Bullets:**
- Anyone can open browser DevTools (F12)
- Fraudsters can run JavaScript in the console
- `handlePaymentSuccess({tx_ref: "FAKE"})` — no money paid!
- Your frontend would show "Payment Successful" 😱
- **Solution:** ALWAYS verify on your backend server

**Speaker notes:** "This is the most important slide. I want everyone to open their browser, press F12, go to Console, and type: `console.log('I can run JavaScript!')`. See? Anyone can run code in your browser. That's why we NEVER trust the frontend alone. Our backend calls PayChangu with the secret key to double-check every payment."

---

### Slide 11: Look at the Code — Backend Verification
**Code to show:**
```javascript
// Backend calls PayChangu to verify
const response = await axios.get(
  `https://api.paychangu.com/verify-payment/${tx_ref}`,
  { headers: { "Authorization": `Bearer ${SECRET_KEY}` } }
);

// Check status AND amount
if (response.data.data.status === "success" &&
    response.data.data.amount >= EXPECTED_AMOUNT) {
  // ✅ Real payment!
}
```
**Speaker notes:** "Notice we check the AMOUNT too, not just the status. Why? Because a fraudster could change the amount on the frontend — for example, change MK 150,000 to MK 100. Our backend compares what PayChangu says was charged against what we expected."

---

### Slide 12: Test vs Live Mode
**Table:**
| | Test Mode | Live Mode |
|--|--|--|
| Keys start with | `pub-test-` | `pub-live-` |
| Real money? | No | Yes |
| Use for | Building | Production |

**Speaker notes:** "Always, always build in test mode first. I cannot stress this enough. We've all heard stories of developers accidentally charging real customers during testing. Don't be that developer. Only switch to live when you're completely confident everything works."

---

### Slide 13: Common Student Mistakes
**Bullets:**
- ❌ Secret key in JavaScript file
- ❌ Not verifying on backend
- ❌ Using same tx_ref twice
- ❌ Not handling onDismiss (customer closes popup)
- ❌ Going live without testing every scenario

**Speaker notes:** "Before I let you code, let me tell you about the mistakes I see every time I teach this. I'll read them out — put your hand up if you were about to make that mistake."

---

### Slide 14: How to Switch to Live Mode
**Steps:**
1. Log into PayChangu dashboard
2. Go to Settings → API Keys
3. Copy LIVE keys (not test keys)
4. Update your `.env` file
5. Make sure `callback_url` and webhook URLs use your real domain with HTTPS
6. Test one real MK 50 payment before launching

**Speaker notes:** "When you're ready to go live, it's just a matter of swapping your keys. But make sure everything is on HTTPS — your real domain, not localhost. PayChangu requires HTTPS for live mode."

---

### Slide 15: Questions & Practice
**Bullets:**
- Replace the public key with your test key from PayChangu
- Try making a test payment
- Open the browser console to see the logs
- Try adding a different product
- Bonus: Connect the frontend to the Node.js backend

---

## ⏱️ Demo Walkthrough Timing Guide

| Time | Activity |
|--|--|
| 0:00 – 0:10 | Introduction, what is PayChangu, concept slides |
| 0:10 – 0:20 | Key terms explained with analogies |
| 0:20 – 0:30 | Open index.html in browser, explore the UI |
| 0:30 – 0:40 | Walk through script.js step by step |
| 0:40 – 0:50 | Backend verification explanation + server.js walkthrough |
| 0:50 – 0:60 | Security: the fraud demo (F12 trick), how verification stops it |
| 0:60 – 0:75 | Students practice: add their own public key, try a test payment |
| 0:75 – 0:90 | Q&A, troubleshooting, discussion of going live |

---

## ❓ Common Student Questions and Answers

**Q: Where do I get my PayChangu keys?**
A: Sign up at paychangu.com, go to your Dashboard → Settings → API Keys. You'll see both test and live keys.

**Q: Can I use this for my final year project?**
A: Yes! Use sandbox mode during development. If you want real payments, switch to live mode — but you'll need a business account.

**Q: What if the customer loses internet during payment?**
A: That's what webhooks are for. PayChangu will notify your backend when the payment completes, regardless of the customer's connection.

**Q: What's the PayChangu transaction fee?**
A: As of the last update, it's approximately 3% per transaction. Check paychangu.com for current pricing.

**Q: Can I test without signing up?**
A: You need to sign up to get test keys. Registration is free.

**Q: Why doesn't the popup open in my code?**
A: Usually one of three reasons: (1) The PayChangu script isn't loaded (check index.html), (2) Your public key format is wrong, (3) You're offline.

**Q: Can I use this with PHP instead of Node.js?**
A: Yes! The backend verification concept is the same. Instead of `axios.get()`, use PHP's `curl` or `file_get_contents()` to call the PayChangu API.

**Q: What is CORS and why do I need it?**
A: CORS stands for Cross-Origin Resource Sharing. When your browser (running on one URL) tries to call your server (on a different URL or port), the browser blocks it for security. Adding `cors()` middleware to Express tells the browser "it's okay, I allow this."

---

# PART 6: BONUS MATERIALS

---

## 🔧 Troubleshooting Checklist

**Payment popup doesn't open:**
- [ ] Is `https://in.paychangu.com/js/popup.js` loaded in HTML?
- [ ] Is the public key correct format (`pub-test-...`)?
- [ ] Check browser console (F12) for JavaScript errors
- [ ] Are you connected to the internet?

**onSuccess fires but order not confirmed:**
- [ ] Are you calling backend verification?
- [ ] Is the backend server running (`node server.js`)?
- [ ] Is the secret key set in `.env` file?
- [ ] Check server terminal for error messages

**Verification always fails:**
- [ ] Is the tx_ref being passed correctly from frontend to backend?
- [ ] Is the secret key the right one (test vs live)?
- [ ] Is PayChangu's API reachable from your server?
- [ ] Check the amount — is it matching what you expected?

**Webhook not receiving data:**
- [ ] Is your server running and accessible from the internet? (localhost won't work for webhooks)
- [ ] Have you set the webhook URL in your PayChangu dashboard?
- [ ] Is the URL correct and using HTTPS?
- [ ] Use ngrok (`npx ngrok http 3000`) to expose localhost for testing

**CORS error in browser:**
- [ ] Is `cors()` middleware added to Express?
- [ ] Is the server running on the correct port?

---

## 🚀 Deployment Notes

When moving from localhost to a real server:

**1. Environment Variables**
```bash
# On your server (e.g., cPanel, VPS, Heroku)
PAYCHANGU_SECRET_KEY=sec-live-your-real-key
PAYCHANGU_PUBLIC_KEY=pub-live-your-real-key
PORT=3000
```

**2. Update URLs in script.js**
```javascript
// Change from:
CALLBACK_URL: "http://localhost:3000/payment-success",
// To:
CALLBACK_URL: "https://yourdomain.mw/payment-success",
```

**3. Use HTTPS**
PayChangu requires HTTPS for live mode. Get a free SSL certificate from Let's Encrypt.

**4. Set Webhook URL in PayChangu Dashboard**
Log in → Settings → Webhooks → Add URL: `https://yourdomain.mw/api/webhook`

**5. Test with a small amount first**
Make one real MK 50 payment to confirm everything works end-to-end.

---

## 🔄 How to Switch from Test to Live Mode

**Step 1:** Log into PayChangu Dashboard → Settings → API Keys

**Step 2:** Copy your LIVE keys (they start with `pub-live-` and `sec-live-`)

**Step 3:** Update your `.env` file on the server:
```env
PAYCHANGU_SECRET_KEY=sec-live-YOUR-REAL-KEY
PAYCHANGU_PUBLIC_KEY=pub-live-YOUR-REAL-KEY
```

**Step 4:** Update `script.js`:
```javascript
const CONFIG = {
  PUBLIC_KEY: "pub-live-YOUR-REAL-KEY",  // ← live key
  TEST_MODE: false,                        // ← set to false
};
```

**Step 5:** Restart your server and test with a small real payment.

**Step 6:** Done! 🎉

---

## 📊 Simple Payment Flow Recap (One-Page Summary)

```
FRONTEND (Browser)                     BACKEND (Server)
─────────────────                      ────────────────
1. Generate tx_ref          ─────>     (store expected amount)
2. Open PayChangu popup
3. Customer pays
4. onSuccess(data)          ─────>     5. Call PayChangu API
                                          GET /verify-payment/{tx_ref}
                                          Authorization: Bearer SECRET_KEY
                            <─────     6. "Confirmed: MK 150,000 ✅"
7. Show success page

ALSO SIMULTANEOUSLY:
PayChangu Webhook           ─────>     Webhook endpoint receives data
                                       (even if step 4 fails)
```

---

## 📱 Supported Payment Methods in Malawi

| Method | Code | Withdrawals? |
|--|--|--|
| TNM Mpamba | `tnm` | No |
| Airtel Money | `airtel` | Yes |
| Bank Card | auto | Yes |

---

*This teaching guide was created for educational use by students learning payment integration in Malawi. Always refer to the official PayChangu documentation at developer.paychangu.com for the most current API specifications.*
