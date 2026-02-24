/*
  ============================================================
  script.js — PayChangu Payment Integration Logic
  ============================================================
  This file is the BRAIN of our payment integration.
  It handles:
    1. Generating a unique transaction reference (tx_ref)
    2. Collecting customer details from the form
    3. Calling PayChangu's popup library
    4. Handling success and cancellation callbacks
    5. (Simulated) verifying the payment

  Real-world analogy:
    This file is like the bank teller.
    The customer (index.html) hands over money (fills the form).
    The teller (script.js) processes it through the banking
    system (PayChangu) and comes back with a receipt.
  ============================================================
*/

// ============================================================
// 🔑 CONFIGURATION
// ============================================================
// WARNING: In a REAL application, your public key comes from
// your PayChangu dashboard. Your SECRET KEY must NEVER be
// placed here — it belongs only on your server (backend).
//
// Analogy: A public key is like your shop's phone number —
// anyone can see it. A secret key is like your PIN code —
// keep it private!
// ============================================================

const CONFIG = {
  // Replace this with your actual PayChangu PUBLIC key
  // Get it from: https://paychangu.com → Dashboard → API Keys
  PUBLIC_KEY: "pub-test-5cpNQZjF5aNFK4rlCYWGoTPsyneKHwe8",

  // The amount to charge in Malawian Kwacha
  AMOUNT: 150000,

  // Currency — MWK for Malawi
  CURRENCY: "MWK",

  // Where PayChangu sends the customer AFTER payment on their server
  // This is YOUR page that shows a "Thank you" message
  CALLBACK_URL: "https://a80d-102-70-96-110.ngrok-free.app/payment-success",

  // Where PayChangu calls YOUR BACKEND silently (webhook)
  // This runs in the background — customer never sees this
  RETURN_URL: "https://a80d-102-70-96-110.ngrok-free.app/api/webhook",

  // Are we in test mode or live mode?
  // Always start with true (test). Set to false only when going live.
  TEST_MODE: true,
};

// ============================================================
// 📝 STEP 1: GENERATE UNIQUE TRANSACTION REFERENCE
// ============================================================
// Every payment needs a unique ID — like a receipt number.
// This ID allows you to track this specific payment in your
// records and in PayChangu's dashboard.
//
// Analogy: When you buy something at a supermarket, the receipt
// has a unique number like "TXN-20240815-00042". This is the same.
// ============================================================

function generateTxRef() {
  const timestamp = Date.now(); // Milliseconds since 1970 — always unique!
  const random = Math.random().toString(36).substring(2, 8).toUpperCase();
  const txRef = `SHOP-${timestamp}-${random}`;

  addLog(`info`, `🆔 Generated Transaction Reference: ${txRef}`);
  return txRef;
}

// ============================================================
// 📋 STEP 2: COLLECT CUSTOMER DETAILS FROM THE FORM
// ============================================================
// We read what the customer typed in the HTML form.
// PayChangu needs this to:
//   - Pre-fill the payment popup
//   - Send receipt emails
//   - Show customer details in your dashboard
// ============================================================

function getCustomerDetails() {
  const details = {
    firstName: document.getElementById("firstName").value.trim(),
    lastName: document.getElementById("lastName").value.trim(),
    email: document.getElementById("email").value.trim(),
    phone: document.getElementById("phone").value.trim(),
  };

  // Simple validation — make sure nothing is empty
  if (!details.firstName || !details.email || !details.phone) {
    throw new Error("Please fill in all required fields (First Name, Email, Phone).");
  }

  // Basic email check
  if (!details.email.includes("@")) {
    throw new Error("Please enter a valid email address.");
  }

  addLog("info", `👤 Customer: ${details.firstName} ${details.lastName} (${details.email})`);
  return details;
}

// ============================================================
// 💳 STEP 3: INITIALIZE THE PAYMENT
// ============================================================
// This is the main function called when the "Pay" button is clicked.
// It puts everything together and calls PayChangu's popup.
// ============================================================

function initiatePayment() {
  addLog("info", "🚀 Payment initiated by user…");

  // Step 3a: Collect form data — stop if something is wrong
  let customer;
  try {
    customer = getCustomerDetails();
  } catch (err) {
    showError(err.message);
    addLog("error", `❌ Validation error: ${err.message}`);
    return;
  }

  // Step 3b: Generate a unique transaction reference
  const txRef = generateTxRef();

  // Step 3c: Show loading state (disable button while processing)
  setLoadingState(true);

  addLog("info", `💰 Preparing payment of MK ${CONFIG.AMOUNT.toLocaleString()} …`);

  // Step 3d: Call PayChangu's popup library
  // ============================================================
  // PaychanguCheckout is provided by the script we loaded in HTML:
  // <script src="https://in.paychangu.com/js/popup.js"></script>
  //
  // We pass it a configuration object with all payment details.
  // Think of this like filling in a bank transfer form.
  // ============================================================

  try {
    PaychanguCheckout({
      // ---- IDENTITY ----
      // Your PUBLIC key — identifies your shop to PayChangu
      public_key: CONFIG.PUBLIC_KEY,

      // ---- TRANSACTION DETAILS ----
      tx_ref: txRef,          // Our unique order ID
      amount: CONFIG.AMOUNT,  // How much to charge
      currency: CONFIG.CURRENCY, // MWK

      // ---- REDIRECT URLS ----
      // After payment, PayChangu sends the customer back here
      callback_url: CONFIG.CALLBACK_URL,
      return_url: CONFIG.RETURN_URL,

      // ---- CUSTOMER DETAILS ----
      // Pre-fill the payment popup with customer info
      customer: {
        email: customer.email,
        first_name: customer.firstName,
        last_name: customer.lastName,
        phone_number: customer.phone,
      },

      // ---- CUSTOMIZATION ----
      // Make the popup look like your brand
      customization: {
        title: "TechShop Malawi",
        description: `Payment for Smartphone X Pro — Order ${txRef}`,
        logo: "", // URL to your logo image (optional)
      },

      // ---- META ----
      // Extra data you want to attach to this transaction
      meta: {
        order_id: txRef,
        product: "Smartphone X Pro",
        shop: "TechShop Malawi",
      },

      // ============================================================
      // 🎉 CALLBACK: onSuccess
      // ============================================================
      // This function runs when the customer completes payment.
      // PayChangu calls it automatically after a successful payment.
      //
      // IMPORTANT: Do NOT trust this alone! A clever person could
      // trigger this callback without actually paying. That is why
      // you MUST verify on the backend (see server.js).
      //
      // Analogy: This is like the customer handing you a receipt.
      // You should check with the bank (backend) that the receipt is real.
      // ============================================================
      onSuccess: function (data) {
        addLog("success", `✅ PayChangu reports SUCCESS. tx_ref: ${data.tx_ref}`);
        addLog("warn", `⚠️  Now verifying with backend… (do not trust frontend alone!)`);
        handlePaymentSuccess(data);
      },

      // ============================================================
      // ❌ CALLBACK: onDismiss
      // ============================================================
      // This runs when the customer closes the payment popup
      // without completing payment. They changed their mind.
      //
      // Analogy: Customer walked up to the till but then left the
      // shop without buying. No payment was taken.
      // ============================================================
      onDismiss: function () {
        addLog("warn", "🚪 Customer closed the payment popup (dismissed).");
        handlePaymentDismissed();
      },

      // Some versions of the library use onClose instead
      onClose: function () {
        addLog("warn", "🚪 Payment popup closed.");
        handlePaymentDismissed();
      },
    });

    addLog("info", "🪟 PayChangu popup opened successfully.");

  } catch (err) {
    // This can happen if the PayChangu script didn't load
    // (e.g., no internet connection, or wrong public key format)
    setLoadingState(false);
    addLog("error", `❌ Failed to open PayChangu: ${err.message}`);
    showError(`Could not open payment window. Please check your internet connection and try again.\n\nTechnical detail: ${err.message}`);
  }
}

// ============================================================
// ✅ STEP 4: HANDLE SUCCESSFUL PAYMENT
// ============================================================
// PayChangu calls our onSuccess callback with payment data.
// We then simulate verification (in real life, call your backend).
// ============================================================

function handlePaymentSuccess(data) {
  addLog("info", `📦 Payment data received: ${JSON.stringify(data)}`);

  // In a real app, you would call your backend here:
  fetch('/api/verify-payment', { method: 'POST', body: JSON.stringify({ tx_ref: data.tx_ref }) })
    .then(res => res.json())
    .then(result => {
      if (result.status === 'success') showSuccessUI(data);
      else showError('Payment verification failed');
    });

  // For this demo, we simulate a successful verification
  // simulateBackendVerification(data.tx_ref, function(verified) {
  //   setLoadingState(false);

  //   if (verified) {
  //     addLog("success", `🏆 Payment VERIFIED! Order confirmed.`);
  //     showSuccessUI(data);
  //   } else {
  //     addLog("error", `❌ Verification FAILED. Payment rejected.`);
  //     showFailureUI("Payment could not be verified. Please contact support.");
  //   }
  // });
}

// ============================================================
// 🚪 STEP 5: HANDLE PAYMENT DISMISSAL
// ============================================================

function handlePaymentDismissed() {
  setLoadingState(false);
  showFailureUI("You closed the payment window. Your order was not completed. You can try again.");
}

// ============================================================
// 🔒 STEP 6: SIMULATE BACKEND VERIFICATION
// ============================================================
// In a real app, this would be an API call to YOUR server.
// Your server then calls PayChangu's API with your SECRET KEY.
//
// WHY ON BACKEND?
// Because your secret key must never be exposed to the browser.
// If a thief saw your secret key, they could steal all your money.
//
// This simulation pretends the backend returned "verified = true".
// See server.js for the real implementation.
// ============================================================

function simulateBackendVerification(txRef, callback) {
  addLog("info", `🔍 Calling backend to verify tx_ref: ${txRef} …`);

  // Simulate a 1.5 second network delay (like a real API call)
  setTimeout(function() {
    addLog("info", `📡 Backend called PayChangu's verify API`);
    addLog("info", `GET https://api.paychangu.com/verify-payment/${txRef}`);
    addLog("success", `✅ PayChangu confirmed: status=success, amount=150000, currency=MWK`);

    // In this demo we always return true
    // In real life, only return true if PayChangu confirms it
    callback(true);
  }, 1500);
}

// ============================================================
// 🖥️ UI HELPER FUNCTIONS
// ============================================================

function showSuccessUI(data) {
  document.getElementById("paymentResult").style.display = "block";
  document.getElementById("paymentResult").scrollIntoView({ behavior: "smooth" });

  document.getElementById("resultIcon").textContent = "✅";
  document.getElementById("resultTitle").textContent = "Payment Successful!";
  document.getElementById("resultTitle").className = "result-success";
  document.getElementById("resultMessage").textContent =
    "Thank you! Your order has been confirmed. A receipt has been sent to your email.";

  // Show transaction details
  document.getElementById("resultDetails").innerHTML = `
    <strong>Transaction Ref:</strong> ${data.tx_ref || "N/A"}<br>
    <strong>Amount Paid:</strong> MK ${CONFIG.AMOUNT.toLocaleString()}<br>
    <strong>Status:</strong> Verified ✅<br>
    <strong>Product:</strong> Smartphone X Pro<br>
    <strong>Mode:</strong> ${CONFIG.TEST_MODE ? "Test (Sandbox)" : "Live"}
  `;

  // Hide product card
  document.querySelector(".product-card").style.display = "none";
}

function showFailureUI(message) {
  document.getElementById("paymentResult").style.display = "block";
  document.getElementById("paymentResult").scrollIntoView({ behavior: "smooth" });

  document.getElementById("resultIcon").textContent = "❌";
  document.getElementById("resultTitle").textContent = "Payment Unsuccessful";
  document.getElementById("resultTitle").className = "result-failure";
  document.getElementById("resultMessage").textContent = message;
  document.getElementById("resultDetails").innerHTML = "";

  document.querySelector(".product-card").style.display = "none";
}

function showError(message) {
  alert("⚠️ Error: " + message);
}

function setLoadingState(isLoading) {
  const btn = document.getElementById("payBtn");
  const loader = document.getElementById("loadingState");

  if (isLoading) {
    btn.style.display = "none";
    loader.style.display = "block";
  } else {
    btn.style.display = "block";
    loader.style.display = "none";
  }
}

function resetPage() {
  // Show product card again
  document.querySelector(".product-card").style.display = "grid";
  document.getElementById("paymentResult").style.display = "none";
  setLoadingState(false);
  document.getElementById("txLogContent").innerHTML =
    '<p class="log-placeholder">Logs will appear here when you click Pay…</p>';
  addLog("info", "🔄 Page reset. Ready for a new payment.");
}

// ============================================================
// 📋 TRANSACTION LOG HELPER
// ============================================================
// This log is for TEACHING PURPOSES ONLY.
// It shows students what is happening step by step.
// Remove in a real production app.
// ============================================================

function addLog(type, message) {
  const logContent = document.getElementById("txLogContent");

  // Clear placeholder text on first log
  const placeholder = logContent.querySelector(".log-placeholder");
  if (placeholder) placeholder.remove();

  const entry = document.createElement("div");
  entry.className = `log-entry ${type}`;

  const time = new Date().toLocaleTimeString("en-GB");
  entry.textContent = `[${time}] ${message}`;

  logContent.appendChild(entry);

  // Auto-scroll to bottom
  logContent.scrollTop = logContent.scrollHeight;

  // Also log to browser console for debugging
  console.log(`[PayChangu Demo] ${message}`);
}

// ============================================================
// 🚀 INITIALIZATION
// ============================================================
// Run when the page loads

document.addEventListener("DOMContentLoaded", function() {
  addLog("info", "🏪 TechShop Malawi loaded.");
  addLog("info", `🔑 Public Key: ${CONFIG.PUBLIC_KEY.substring(0, 20)}…`);
  addLog(CONFIG.TEST_MODE ? "warn" : "info",
    `🌍 Mode: ${CONFIG.TEST_MODE ? "SANDBOX (Test)" : "LIVE"}`);
  addLog("info", "⏳ Waiting for customer to click Pay…");
});
