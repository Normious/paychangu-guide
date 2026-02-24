# 🎓 PayChangu Integration — Student Workshop Handout
### TechShop Malawi Demo Project | Print & Keep

---

## 📌 The Big Picture — How Online Payments Work

```
YOU (Customer)        YOUR WEBSITE          PAYCHANGU           BANK/MOBILE
     │                    │                    │                    │
     │ 1. Click "Pay"     │                    │                    │
     │───────────────────>│                    │                    │
     │                    │ 2. Open popup      │                    │
     │                    │───────────────────>│                    │
     │ 3. Enter PIN/Card  │                    │                    │
     │───────────────────────────────────────>│                    │
     │                    │                    │ 4. Charge account  │
     │                    │                    │───────────────────>│
     │                    │ 5. Webhook notify  │                    │
     │                    │<───────────────────│                    │
     │                    │ 6. Verify payment  │                    │
     │                    │───────────────────>│                    │
     │ 7. "Order done!"   │                    │                    │
     │<───────────────────│                    │                    │
```

---

## 🔑 Key Terms — Quick Reference

| Term | Simple Meaning | Analogy |
|--|--|--|
| **Public Key** | Your shop's identity code | Your shop name & address |
| **Secret Key** | Your private password | Your bank PIN — NEVER share |
| **tx_ref** | Unique order ID you create | Receipt number |
| **Callback URL** | Where customer goes after paying | "Return to merchant" page |
| **Webhook** | Silent background notification | Courier calling your phone |
| **Verification** | Confirming payment is real | Calling the bank to confirm |
| **Sandbox** | Test mode — no real money | Monopoly money |
| **Live Mode** | Real money transactions | Real Kwacha |

---

## 📁 Project Files at a Glance

```
paychangu-demo/
├── index.html        ← Shop page (what customer sees)
├── style.css         ← Page design & colors
├── script.js         ← Payment logic (YOUR CODE)
└── backend/
    ├── server.js     ← Secure verification server
    ├── .env          ← Your secret keys (NEVER on GitHub)
    └── package.json  ← Node.js dependencies
```

---

## 🔐 The #1 Security Rule

```
✅ Public Key  → Can go in JavaScript (frontend)
❌ Secret Key  → NEVER in JavaScript. Backend ONLY.
```

**Why?** Anyone can press F12 and read your JavaScript. Your secret key gives full access to your PayChangu account. Treat it like your bank PIN.

---

## 💻 The 4 Steps of Payment Integration

### Step 1 — Generate a Unique Transaction Reference
```javascript
function generateTxRef() {
  const timestamp = Date.now();           // e.g., 1723456789012
  const random = Math.random()
    .toString(36).substring(2,8)
    .toUpperCase();                       // e.g., "AB3X7K"
  return `SHOP-${timestamp}-${random}`; // "SHOP-1723456789012-AB3X7K"
}
```
> Every payment needs a unique ID — like a receipt number.

---

### Step 2 — Open the Payment Popup
```javascript
PaychanguCheckout({
  public_key: "pub-test-your-key",     // Your identity
  tx_ref: generateTxRef(),             // Unique order ID
  amount: 150000,                      // MK 150,000
  currency: "MWK",
  customer: {
    email: "customer@email.com",
    first_name: "Chisomo",
    phone_number: "+265999000000",
  },
  onSuccess: function(data) {
    // Payment done — NOW verify on backend!
    verifyOnBackend(data.tx_ref);
  },
  onDismiss: function() {
    // Customer closed popup without paying
    showMessage("Payment cancelled.");
  },
});
```

---

### Step 3 — Frontend Calls Backend to Verify
```javascript
// In your onSuccess callback:
async function verifyOnBackend(txRef) {
  const response = await fetch('/api/verify-payment', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ tx_ref: txRef }),
  });
  const result = await response.json();

  if (result.success) {
    showSuccessPage(); // ✅ Real payment confirmed!
  } else {
    showError("Verification failed."); // ❌ Fraud caught!
  }
}
```

---

### Step 4 — Backend Verifies with PayChangu
```javascript
// In server.js (backend — uses SECRET KEY)
app.post('/api/verify-payment', async (req, res) => {
  const { tx_ref } = req.body;

  const response = await axios.get(
    `https://api.paychangu.com/verify-payment/${tx_ref}`,
    { headers: { Authorization: `Bearer ${SECRET_KEY}` } }
  );

  const data = response.data.data;

  if (data.status === 'success' && data.amount >= EXPECTED_AMOUNT) {
    return res.json({ success: true });  // ✅ Confirmed!
  } else {
    return res.json({ success: false }); // ❌ Rejected!
  }
});
```

---

## ⚠️ Common Mistakes — Avoid These!

| ❌ Don't Do This | ✅ Do This Instead |
|--|--|
| Secret key in `script.js` | Secret key in `.env` on server only |
| Trust `onSuccess` alone | Always verify on backend |
| Same `tx_ref` for two orders | Generate fresh `tx_ref` each time |
| Ignore `onDismiss` | Handle cancel gracefully |
| Skip amount verification | Always check amount matches |
| Test with live keys | Test with test keys first |
| Deploy without HTTPS | Always use HTTPS in production |

---

## 🔄 Test vs Live Mode Comparison

| | Sandbox (Test) | Live |
|--|--|--|
| **Key prefix** | `pub-test-` / `sec-test-` | `pub-live-` / `sec-live-` |
| **Real money?** | ❌ No | ✅ Yes |
| **Use when** | Building & testing | Launched product |
| **Airtel/TNM?** | Test numbers work | Real phone numbers |

**To switch to live:** Change keys in `.env` + update `TEST_MODE: false` in `script.js`

---

## 🔔 What is a Webhook?

A webhook is PayChangu calling YOUR server automatically after payment — even if the customer loses internet.

```
Without webhook:  Customer pays → internet drops → your server never knows 😟
With webhook:     Customer pays → internet drops → PayChangu calls your server ✅
```

**Set your webhook URL in:** PayChangu Dashboard → Settings → Webhooks

---

## 🚀 Going Live Checklist

- [ ] Tested all scenarios in sandbox (success, cancel, fail)
- [ ] Switched to live API keys in `.env`
- [ ] Website is on HTTPS (not HTTP)
- [ ] `callback_url` and webhook URL use real domain
- [ ] Backend is running on a server (not localhost)
- [ ] Made one small real test payment and confirmed it worked
- [ ] Set up webhook URL in PayChangu dashboard

---

## 📡 PayChangu API Endpoints (Reference)

| Action | Method | URL |
|--|--|--|
| Verify payment | GET | `https://api.paychangu.com/verify-payment/{tx_ref}` |
| Get mobile operators | GET | `https://api.paychangu.com/mobile-money` |
| Direct MoMo charge | POST | `https://api.paychangu.com/mobile-money/payments` |
| Check MoMo status | GET | `https://api.paychangu.com/mobile-money/payments/{id}/verify` |

All requests need: `Authorization: Bearer YOUR_SECRET_KEY`

---

## 🆘 If You're Stuck

1. Press **F12** in browser → Console tab → look for red error messages
2. Check the Transaction Log on the demo page
3. Check the terminal where `node server.js` is running
4. Read `QUICK_START.md` troubleshooting section
5. Visit [developer.paychangu.com](https://developer.paychangu.com) for official docs

---

*PayChangu Integration Workshop | Malawi 🇲🇼 | Keep this handout for reference*
