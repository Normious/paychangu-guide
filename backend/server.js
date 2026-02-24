/*
  ============================================================
  server.js — PayChangu Backend (Node.js + Express)
  ============================================================
  This is the BACKEND (server-side) of our payment system.

  WHY DO WE NEED A BACKEND?
  ==========================
  Imagine you're a shopkeeper. A customer comes in and says
  "I already paid — check my receipt." You don't just BELIEVE
  them — you call the bank to confirm the payment is real.

  This server IS the shopkeeper calling the bank (PayChangu).
  It uses the SECRET KEY to make that call safely.

  The customer (browser) can NEVER see the secret key because
  it lives only on this server.

  HOW TO RUN THIS SERVER:
  ==========================
  1. Make sure Node.js is installed
  2. Open terminal in this folder
  3. Run: npm install express axios cors dotenv
  4. Create a .env file (see .env.example)
  5. Run: node server.js
  6. Server starts at http://localhost:3000
  ============================================================
*/

// ---- LOAD DEPENDENCIES ----
const express = require("express");
const axios   = require("axios");     // For making HTTP requests to PayChangu
const cors    = require("cors");      // Allows our HTML page to call this server
require("dotenv").config();           // Loads secret keys from .env file

const app  = express();
const PORT = process.env.PORT || 3000;

// ---- MIDDLEWARE ----
app.use(cors());                      // Allow cross-origin requests from our frontend
app.use(express.json());              // Parse JSON request bodies
app.use(express.static("."));         // Serve our HTML/CSS/JS files

// ============================================================
// 🔑 SECRET KEY
// ============================================================
// This comes from the .env file — NOT hardcoded here!
// NEVER paste your secret key directly in code.
// NEVER commit .env to GitHub (add it to .gitignore).
// ============================================================
const PAYCHANGU_SECRET_KEY = process.env.PAYCHANGU_SECRET_KEY;
const PAYCHANGU_VERIFY_URL = "https://api.paychangu.com/verify-payment";

if (!PAYCHANGU_SECRET_KEY) {
  console.error("❌ PAYCHANGU_SECRET_KEY is not set in .env file!");
  console.error("   Create a .env file with: PAYCHANGU_SECRET_KEY=sec-test-your-key-here");
}

// ============================================================
// 📡 ENDPOINT 1: VERIFY PAYMENT
// ============================================================
// Our frontend calls this after PayChangu says "success".
// We then verify with PayChangu's API using our SECRET KEY.
//
// Flow:
//   Frontend → POST /api/verify-payment → PayChangu API → Response
//
// URL: POST http://localhost:3000/api/verify-payment
// Body: { "tx_ref": "SHOP-1234567890-ABC123" }
// ============================================================

app.post("/api/verify-payment", async (req, res) => {
  const { tx_ref } = req.body;

  // Validate input
  if (!tx_ref) {
    return res.status(400).json({
      success: false,
      message: "tx_ref (transaction reference) is required.",
    });
  }

  console.log(`\n🔍 Verifying payment for tx_ref: ${tx_ref}`);

  try {
    // ---- CALL PAYCHANGU'S VERIFICATION API ----
    // This is the "calling the bank" step.
    // We use our SECRET KEY in the Authorization header.
    // PayChangu checks their database and tells us if the payment is real.

    const response = await axios.get(
      `${PAYCHANGU_VERIFY_URL}/${tx_ref}`,
      {
        headers: {
          "Authorization": `Bearer ${PAYCHANGU_SECRET_KEY}`,
          "Accept": "application/json",
        },
        timeout: 10000, // 10 second timeout
      }
    );

    const paymentData = response.data;
    console.log("📦 PayChangu verification response:", JSON.stringify(paymentData, null, 2));

    // ---- VERIFY THE PAYMENT IS GENUINE ----
    // We check three things:
    //   1. Status is "success"
    //   2. Amount matches what we expect
    //   3. Currency is correct
    //
    // WHY CHECK AMOUNT?
    // A clever attacker might change the amount on the frontend
    // (e.g., change MK 150,000 to MK 100). Our backend catches this!

    const EXPECTED_AMOUNT   = 150000;
    const EXPECTED_CURRENCY = "MWK";

    if (
      paymentData.status === "success" &&
      paymentData.data.status === "success" &&
      paymentData.data.amount >= EXPECTED_AMOUNT &&
      paymentData.data.currency === EXPECTED_CURRENCY
    ) {
      console.log(`✅ Payment VERIFIED for tx_ref: ${tx_ref}`);

      // In a real app, save the verified order to your database here:
      // await db.orders.create({ tx_ref, status: 'paid', customer_email: ... });

      return res.json({
        success: true,
        message: "Payment verified successfully.",
        data: {
          tx_ref: tx_ref,
          amount: paymentData.data.amount,
          currency: paymentData.data.currency,
          status: "verified",
        },
      });

    } else {
      // PayChangu said the payment was NOT successful
      console.warn(`⚠️  Payment NOT verified for tx_ref: ${tx_ref}`);
      console.warn("   PayChangu data:", paymentData.data);

      return res.status(402).json({
        success: false,
        message: "Payment verification failed. Payment was not completed.",
        data: paymentData.data,
      });
    }

  } catch (error) {
    // Network error or PayChangu is down
    console.error("❌ Error calling PayChangu API:", error.message);

    if (error.response) {
      console.error("   PayChangu returned:", error.response.status, error.response.data);
    }

    return res.status(500).json({
      success: false,
      message: "Could not reach PayChangu verification server. Please try again.",
      error: error.message,
    });
  }
});

// ============================================================
// 📡 ENDPOINT 2: WEBHOOK RECEIVER
// ============================================================
// PayChangu calls this URL AUTOMATICALLY after payment.
// This happens in the background — the customer never sees it.
//
// Think of this like a delivery courier calling you to say
// "Package delivered!" even before you check your door.
//
// URL: POST http://yourdomain.com/api/webhook
// (Set this as your webhook URL in PayChangu dashboard)
// ============================================================

app.post("/api/webhook", async (req, res) => {
  const webhookData = req.body;

  console.log("\n🔔 WEBHOOK RECEIVED from PayChangu:");
  console.log(JSON.stringify(webhookData, null, 2));

  // ---- PROCESS THE WEBHOOK DATA ----
  // PayChangu sends us transaction details automatically.
  // We can use this to update our database even if the customer
  // closed their browser before we showed them a success page.

  const { event, data } = webhookData;

  if (event === "payment.success" && data && data.status === "success") {
    const tx_ref = data.tx_ref;

    console.log(`✅ Webhook: Payment confirmed for tx_ref: ${tx_ref}`);

    // In a real app:
    // 1. Verify the payment with PayChangu API (same as above)
    // 2. Update your database: mark order as paid
    // 3. Send confirmation email to customer
    // 4. Trigger fulfilment (ship the product, activate account, etc.)

  } else if (event === "payment.failed") {
    console.log(`❌ Webhook: Payment failed for tx_ref: ${data?.tx_ref}`);
    // Handle failed payment (maybe notify customer, restore stock, etc.)
  }

  // IMPORTANT: Always respond with 200 OK quickly!
  // If we don't respond, PayChangu will retry the webhook multiple times.
  return res.status(200).json({ received: true });
});

// ============================================================
// 📄 ROUTE: PAYMENT SUCCESS PAGE
// ============================================================
// This is the page customers land on AFTER paying.
// PayChangu redirects them here from the callback_url.
// ============================================================

app.get("/payment-success", async (req, res) => {
  const { tx_ref } = req.query;

  console.log(`\n🎉 Customer returned after payment:`);
  console.log(`   tx_ref: ${tx_ref}`);

  let paymentStatus = "unknown";

  if (tx_ref) {
    try {
      const response = await axios.get(
        `${PAYCHANGU_VERIFY_URL}/${tx_ref}`,
        {
          headers: {
            "Authorization": `Bearer ${PAYCHANGU_SECRET_KEY}`,
            "Accept": "application/json",
          },
          timeout: 10000,
        }
      );

      const paymentData = response.data;
      console.log("🔎 /payment-success verification:", JSON.stringify(paymentData, null, 2));

      if (
        paymentData.status === "success" &&
        paymentData.data &&
        paymentData.data.status === "success"
      ) {
        paymentStatus = "success";
      } else {
        paymentStatus = "failed";
      }
    } catch (error) {
      console.error("❌ Error verifying payment on /payment-success:", error.message);
      paymentStatus = "error";
    }
  }

  const isSuccess = paymentStatus === "success";

  res.send(`
    <!DOCTYPE html>
    <html>
    <head><title>Payment ${isSuccess ? "Successful" : "Result"}</title>
    <style>body{font-family:Arial;text-align:center;padding:60px;background:#f3f4f6}
    .card{background:#fff;padding:40px;border-radius:12px;max-width:500px;margin:auto}
    .icon{font-size:3rem;margin-bottom:16px}
    h1{color:${isSuccess ? "#057a55" : "#e02424"}}</style></head>
    <body>
    <div class="card">
      <div class="icon">${isSuccess ? "✅" : "❌"}</div>
      <h1>${isSuccess ? "Payment Successful!" : "Payment Unsuccessful"}</h1>
      <p>Transaction Reference: <strong>${tx_ref || "N/A"}</strong></p>
      <p>Status: <strong>${paymentStatus}</strong></p>
      <p><a href="http://127.0.0.1:8080/">← Back to Shop</a></p>
    </div>
    </body></html>
  `);
});

// ============================================================
// 🚀 START SERVER
// ============================================================

app.listen(PORT, () => {
  console.log("\n============================================================");
  console.log("  TechShop Malawi — PayChangu Demo Backend");
  console.log("============================================================");
  console.log(`  🌐 Server running at: http://localhost:${PORT}`);
  console.log(`  🛍️  Shop page: http://localhost:${PORT}/index.html`);
  console.log(`  📡 Verify endpoint: POST http://localhost:${PORT}/api/verify-payment`);
  console.log(`  🔔 Webhook endpoint: POST http://localhost:${PORT}/api/webhook`);
  console.log(`  🔑 Secret key loaded: ${PAYCHANGU_SECRET_KEY ? "✅ YES" : "❌ NOT SET"}`);
  console.log("============================================================\n");
});

module.exports = app;
