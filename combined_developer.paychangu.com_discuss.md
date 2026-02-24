---
url: "https://developer.paychangu.com/discuss"
title: "Discussions"
---

[00\\
\\
**Inline Payment Integration in React/Laravel SPA – Need Full Control of Responses Without Redirects** \\
\\
I'm integrating Paychangu's inline payment system into a React + Laravel Single Page Application (SPA). My goal is to:\\
\\
Posted by Pilirani Zimba20 days ago](https://developer.paychangu.com/discuss/68305a4635329500369b77a9) [00\\
\\
**Escrow Services for Marketplace Payments** \\
\\
We're working on a payment solution for marketplace transactions in Malawi, where buyers pay using Airtel Money or TNM Mpamba, and funds need to be held securely until the purchase is complete, then released to the seller—or returned to the buyer if it falls through. We'd like PayChangu to handle the payment processing and fund management for this.\\
\\
Posted by Vandross Chowe3 months ago](https://developer.paychangu.com/discuss/67e0cabd6e96f800450e4f3b)

- [Recent](https://developer.paychangu.com/discuss?sorting=recent)
- [Unanswered](https://developer.paychangu.com/discuss?sorting=open)



0

## Escrow Services for Marketplace Payments

3 months ago by Vandross Chowe

We're working on a payment solution for marketplace transactions in Malawi, where buyers pay using Airtel Money or TNM Mpamba, and funds need to be held securely until the purchase is complete, then released to the seller—or returned to the buyer if it falls through. We'd like PayChangu to handle the payment processing and fund management for this.

Is an escrow service (holding funds until release is authorized) already available at PayChangu?

- If yes:
1. How does it work with your API?


     2\. Does it fully support Airtel Money and TNM Mpamba?


     3\. Are there extra fees beyond the standard 3% per transaction?


     4\. How soon could I start testing it in your sandbox?


     \- If no:


     1\. Could PayChangu develop this as a custom feature?


     2\. What would be the setup process and timeline?


     3\. Would there be additional costs for building it?

We're eager to explore using PayChangu for this and would appreciate a reply with details.

Thank you!

﻿

Add Comment

Label

URL

Languages

Text

ASP

C

CoffeeScript

Clojure

C++

C#

CSS

cURL

Cypher

D

Diff

Dockerfile

Erlang

Go

GraphQL

Groovy

Handlebars

HAML

Haxe

HTML

HTTP

Java

JavaScript

Jinja2

JSON

JSX

Julia

Kotlin

LESS

Liquid

Lua

Markdown

Mermaid

MySQL

Node.js

Objective-C

OCaml

Perl

PHP

Postgres

PowerShell

Python

R

Ruby

Rust

SASS

Scala

SCSS

Shell

Smarty

Solidity

SQL

Stylus

Swift

TOML

Twig

TypeScript

XML

YAML

Remove Tab

Reusable

Reuse Content<

New Content

Components

<Accordion/>

<Cards/>

<Columns/>

<Tabs/>

Blocks

Link\[Title\](URL)

Heading 1#

Heading 2##

Heading 3###

Blockquote>

Callout>📘

Bulleted List-

Numbered List1.

Check List\- \[ \]

Code\`\`\`

Divider\-\-\-

Image

Image!\[Alt text\](URL)

Recipe

Table

Custom HTML

Mermaid Diagram

Embeds

YouTube

GitHub Gist

PDF

JSFiddle

Iframe

Youtube

GitHub Gist

PDF

JSFiddle

Iframe

No results

😀

grinning

😃

smiley

😄

smile

😁

grin

😆

laughing

😅

sweat\_smile

🤣

rofl

😂

joy

🙂

slightly\_smiling\_face

🙃

upside\_down\_face

🫠

melting\_face

😉

wink

😊

blush

😇

innocent

🥰

smiling\_face\_with\_three\_hearts

😍

heart\_eyes

🤩

star\_struck

😘

kissing\_heart

😗

kissing

☺️

relaxed

😚

kissing\_closed\_eyes

😙

kissing\_smiling\_eyes

🥲

smiling\_face\_with\_tear

😋

yum

😛

stuck\_out\_tongue

Customize label…



0

## Inline Payment Integration in React/Laravel SPA – Need Full Control of Responses Without Redirects

20 days ago by Pilirani Zimba

I'm integrating Paychangu's inline payment system into a React + Laravel Single Page Application (SPA). My goal is to:

✅ Process payments without redirecting users to external success/failure URLs.

✅ Capture payment responses directly in my application (success, failed, pending).

✅ Display custom feedback to users based on the API response.

Current Challenge:

Paychangu's default flow seems to rely on redirects (callback\_url, return\_url), but I need to handle everything client-side in my React app.

What I Need:

A way to suppress redirects and keep users on the same page.

Access to raw payment responses (success/failure) via JavaScript callbacks.

Best practices for securely validating payments without relying on redirect-based webhooks.

Questions:

Does Paychangu support fully client-side response handling?

Is there a way to disable redirects and only use JS callbacks?

How should I verify payments securely on the backend (Laravel) without relying on return URLs?

Looking for guidance from the Paychangu team or anyone who has implemented this!

﻿

Add Comment

Label

URL

Languages

Text

ASP

C

CoffeeScript

Clojure

C++

C#

CSS

cURL

Cypher

D

Diff

Dockerfile

Erlang

Go

GraphQL

Groovy

Handlebars

HAML

Haxe

HTML

HTTP

Java

JavaScript

Jinja2

JSON

JSX

Julia

Kotlin

LESS

Liquid

Lua

Markdown

Mermaid

MySQL

Node.js

Objective-C

OCaml

Perl

PHP

Postgres

PowerShell

Python

R

Ruby

Rust

SASS

Scala

SCSS

Shell

Smarty

Solidity

SQL

Stylus

Swift

TOML

Twig

TypeScript

XML

YAML

Remove Tab

Reusable

Reuse Content<

New Content

Components

<Accordion/>

<Cards/>

<Columns/>

<Tabs/>

Blocks

Link\[Title\](URL)

Heading 1#

Heading 2##

Heading 3###

Blockquote>

Callout>📘

Bulleted List-

Numbered List1.

Check List\- \[ \]

Code\`\`\`

Divider\-\-\-

Image

Image!\[Alt text\](URL)

Recipe

Table

Custom HTML

Mermaid Diagram

Embeds

YouTube

GitHub Gist

PDF

JSFiddle

Iframe

Youtube

GitHub Gist

PDF

JSFiddle

Iframe

No results

😀

grinning

😃

smiley

😄

smile

😁

grin

😆

laughing

😅

sweat\_smile

🤣

rofl

😂

joy

🙂

slightly\_smiling\_face

🙃

upside\_down\_face

🫠

melting\_face

😉

wink

😊

blush

😇

innocent

🥰

smiling\_face\_with\_three\_hearts

😍

heart\_eyes

🤩

star\_struck

😘

kissing\_heart

😗

kissing

☺️

relaxed

😚

kissing\_closed\_eyes

😙

kissing\_smiling\_eyes

🥲

smiling\_face\_with\_tear

😋

yum

😛

stuck\_out\_tongue

Customize label…



[00\\
\\
**Inline Payment Integration in React/Laravel SPA – Need Full Control of Responses Without Redirects** \\
\\
I'm integrating Paychangu's inline payment system into a React + Laravel Single Page Application (SPA). My goal is to:\\
\\
Posted by Pilirani Zimba20 days ago](https://developer.paychangu.com/discuss/68305a4635329500369b77a9) [00\\
\\
**Escrow Services for Marketplace Payments** \\
\\
We're working on a payment solution for marketplace transactions in Malawi, where buyers pay using Airtel Money or TNM Mpamba, and funds need to be held securely until the purchase is complete, then released to the seller—or returned to the buyer if it falls through. We'd like PayChangu to handle the payment processing and fund management for this.\\
\\
Posted by Vandross Chowe3 months ago](https://developer.paychangu.com/discuss/67e0cabd6e96f800450e4f3b)

- [Recent](https://developer.paychangu.com/discuss?sorting=recent)
- [Unanswered](https://developer.paychangu.com/discuss?sorting=open)



[00\\
\\
**Inline Payment Integration in React/Laravel SPA – Need Full Control of Responses Without Redirects** \\
\\
I'm integrating Paychangu's inline payment system into a React + Laravel Single Page Application (SPA). My goal is to:\\
\\
Posted by Pilirani Zimba20 days ago](https://developer.paychangu.com/discuss/68305a4635329500369b77a9) [00\\
\\
**Escrow Services for Marketplace Payments** \\
\\
We're working on a payment solution for marketplace transactions in Malawi, where buyers pay using Airtel Money or TNM Mpamba, and funds need to be held securely until the purchase is complete, then released to the seller—or returned to the buyer if it falls through. We'd like PayChangu to handle the payment processing and fund management for this.\\
\\
Posted by Vandross Chowe3 months ago](https://developer.paychangu.com/discuss/67e0cabd6e96f800450e4f3b)

- [Recent](https://developer.paychangu.com/discuss?sorting=recent)
- [Unanswered](https://developer.paychangu.com/discuss?sorting=open)



# Ask a Question

﻿

Post Question [Cancel](https://developer.paychangu.com/discuss)

Label

URL

Languages

Text

ASP

C

CoffeeScript

Clojure

C++

C#

CSS

cURL

Cypher

D

Diff

Dockerfile

Erlang

Go

GraphQL

Groovy

Handlebars

HAML

Haxe

HTML

HTTP

Java

JavaScript

Jinja2

JSON

JSX

Julia

Kotlin

LESS

Liquid

Lua

Markdown

Mermaid

MySQL

Node.js

Objective-C

OCaml

Perl

PHP

Postgres

PowerShell

Python

R

Ruby

Rust

SASS

Scala

SCSS

Shell

Smarty

Solidity

SQL

Stylus

Swift

TOML

Twig

TypeScript

XML

YAML

Remove Tab

Reusable

Reuse Content<

New Content

Components

<Accordion/>

<Cards/>

<Columns/>

<Tabs/>

Blocks

Link\[Title\](URL)

Heading 1#

Heading 2##

Heading 3###

Blockquote>

Callout>📘

Bulleted List-

Numbered List1.

Check List\- \[ \]

Code\`\`\`

Divider\-\-\-

Image

Image!\[Alt text\](URL)

Recipe

Table

Custom HTML

Mermaid Diagram

Embeds

YouTube

GitHub Gist

PDF

JSFiddle

Iframe

Youtube

GitHub Gist

PDF

JSFiddle

Iframe

No results

😀

grinning

😃

smiley

😄

smile

😁

grin

😆

laughing

😅

sweat\_smile

🤣

rofl

😂

joy

🙂

slightly\_smiling\_face

🙃

upside\_down\_face

🫠

melting\_face

😉

wink

😊

blush

😇

innocent

🥰

smiling\_face\_with\_three\_hearts

😍

heart\_eyes

🤩

star\_struck

😘

kissing\_heart

😗

kissing

☺️

relaxed

😚

kissing\_closed\_eyes

😙

kissing\_smiling\_eyes

🥲

smiling\_face\_with\_tear

😋

yum

😛

stuck\_out\_tongue

Customize label…



PayChangu authenticates your API requests using your account’s API keys. If you do not include your key when making an API request or use one that is incorrect or outdated, PayChangu returns an error.

All API requests exist in either test or live mode, and one mode cannot be manipulated by data in the other. To get your live and test API keys sign up [here](https://in.paychangu.com/).

## Obtaining your API Keys   [Skip link to Obtaining your API Keys](https://developer.paychangu.com/docs/api-keys\#obtaining-your-api-keys)

Your API keys are available on your PayChangu Dashboard. Follow the steps below to access them:

Log in to your PayChangu dashboard

Navigate to **settings** **Select API Keys & Webhooks** on the settings tab

![](https://files.readme.io/aac267b250f43d3af1f260ffbe43404638404ed5231307faedf9453118da3dde-dash_keys.png)

Updated8 days ago

* * *

Did this page help you?

Yes

No



> ### 📱  Mobile Money
>
> You can also use this endpoint to send to mobile money. Instead of the account number, you enter the mobile money number using the Airtel Money or TNM Mpamba [bank\_uuid](https://developer.paychangu.com/reference/get-banks).

### Initiating Bank Transfer   [Skip link to Initiating Bank Transfer](https://developer.paychangu.com/docs/bank-account\#initiating-bank-transfer)

To complete a bank transfer, adhere to these steps:

- Gather the necessary information: Typically, you only need the recipient’s details. However, for specific transfers, the sender’s details may also be required.
- Obtain the necessary bank uuid: Send a request to our [bank’s endpoints](https://developer.paychangu.com/reference/get-banks) to retrieve the correct bank uuid required for the transfer.
- Submit the details to the “ [Bank Payout](https://developer.paychangu.com/reference/bank-payout)” endpoint. Refer to the example requests in the following section for guidance.

### Prerequisites   [Skip link to Prerequisites](https://developer.paychangu.com/docs/bank-account\#prerequisites)

1. Finalize your KYC process and confirm that your account is fully approved for transactions.
2. Activate this feature by submitting a request through [email](mailto:hie@paychangu.com) or our [support form.](https://paychangu.com/contact-sales)

Bank Payout Sample Request

```rdmd-code lang-javascript theme-light

curl --request POST \
     --url https://api.paychangu.com/direct-charge/payouts/initialize \
     --header 'accept: application/json' \
     --header 'content-type: application/json' \
     --data '
{
  "payout_method": "bank_transfer",
  "bank_uuid": "82310dd1-ec9b-4fe7-a32c-2f262ef08681",
  "amount": "10000",
  "charge_id": "PC-TR2344567534",
  "bank_account_name": "Madalitso Kamwendo",
  "bank_account_number": "1001000010"
}
'
```

> ### 🗒️  Sample in other languages check [here](https://developer.paychangu.com/reference/bank-payout).

You'll get a response like this:

200 OK

```rdmd-code lang-asp theme-light

{
    "status": "success",
    "message": "Payout request submitted successfully.",
    "data": {
        "transaction": {
            "charge_id": "PC-TR2344567534",
            "ref_id": "97073812876",
            "trans_id": null,
            "currency": "MK",
            "amount":10000,
            "first_name": null,
            "last_name": null,
            "email": null,
            "type": "API Payout",
            "trace_id": null,
            "status": "pending",
            "mobile": "0",
            "attempts": 1,
            "mode": "live",
            "created_at": "2025-01-23T17:03:28.000000Z",
            "completed_at": null,
            "event_type": "api.payout",
            "transaction_charges": {
                "currency": "MK",
                "amount": "0"
            },
            "recipient_account_details": {
                "bank_uuid": "82310dd1-ec9b-4fe7-a32c-2f262ef08681",
                "bank_name": "National Bank of Malawi",
                "account_name": "Madalitso Kamwendo",
                "account_number": "1001000010"
            }
        }
    }
}
```

Verify your transfer status, there are many ways to do this:

1. You can get the transfer status using the [transfer status endpoint](https://developer.paychangu.com/reference/single-bank-payout-details).
2. If [webhooks](https://developer.paychangu.com/docs/webhooks) are enabled on your dashboard, check the transfer webhooks to verify the transaction status.

Updated9 days ago

* * *

Did this page help you?

Yes

No



Direct charge via bank transfer enables you to create account details (including an account number and bank) instantly, allowing customers to make payments conveniently through instant bank transfers.

> ### 🚧  Bank Transfer Support
>
> Bank transfer is currently only supported for MWK transactions.

**The Process**

Collecting payments through a bank transfer charge is simple and hassle-free:

1. Use the bank [transfer charge endpoint](https://developer.paychangu.com/reference/charge-via-bank-transfer) to initiate a charge and generate unique account details for the customer to make their payment.
2. The customer makes a payment by transferring funds to the generated account.
3. We send a webhook to notify you once the payment is received.
4. You confirm the payment and proceed to fulfill the customer’s order.

![](https://files.readme.io/fafd89cbe9c63e357282a4af19794bd33327a75ef57503c923ad22e77320ab2d-PayChangu_.jpg)

**Initiating the Charge**

To initiate the charge, you'll call the [bank transfer charge endpoint](https://developer.paychangu.com/reference/charge-via-bank-transfer). You'll need to specify:

- charge\_id: A unique reference code that you'll generate for each transaction.
- amount: The amount to be charged for the transaction.
- currency: The currency to be used for the charge ( always use"MWK").
- payment\_method: The payment method use ( "mobile\_bank\_transfer" )

cURL

```rdmd-code lang-asp theme-light

curl --request POST \
     --url https://api.paychangu.com/direct-charge/payments/initialize \
     --header 'Authorization: Bearer sec-test-2Xhuyv2Plb24DQMG26CN2sDKYzyoFMEM' \
     --header 'accept: application/json' \
     --header 'content-type: application/json' \
     --data '
{
  "payment_method": "mobile_bank_transfer",
  "amount": "1000",
  "currency": "MWK",
  "charge_id": "PC-YR6D43446"
}
'
```

If the charge is created successfully, you'll get a successful response containing the generated account details.

Success

```rdmd-code lang-asp theme-light

{
  "status": "success",
  "message": "Payment initialized successfully.",
  "data": {
    "payment_account_details": {
      "bank_name": "Centenary Bank",
      "account_number": "2652455380",
      "account_name": "PayChangu",
      "account_expiration_timestamp": 1736805724
    },
    "transaction": {
      "amount": 1000,
      "charge_id": "PC-YR6D43446",
      "ref_id": "25274666909",
      "type": "Direct API Payment",
      "trace_id": "OiG8diXHAbw3Y7yz4sZwuY610GdIc1dy",
      "status": "pending",
      "mobile": "0",
      "attempts": 1,
      "currency": "MK",
      "mode": "sandbox",
      "created_at": "2025-01-13T21:02:04.000000Z",
      "event_type": "api.charge.payment",
      "transaction_charges": {
        "currency": "MK",
        "amount": "20"
      },
      "authorization": {
        "channel": "Mobile Bank Transfer",
      }
    }
  }
}
```

### Completing the Payment   [Skip link to Completing the Payment](https://developer.paychangu.com/docs/bank-transfer\#completing-the-payment)

The `data.payment_account_details ` object contains the account details for the transfer: the bank name ( `bank_name`), account number ( `account_number)` account expiration (" `account_expiration_timestamp`"), get the amount on `data.transaction` amount ( `amount`). Pass the details on to your customer, and they can make an instant bank transfer into the account (for instance, from their bank app or USSD using the **Instant transfer option** available on all Malawian banks ). The account expires in 1 hour from the time generated.

> ### ⚙️  Testing Tip
>
> In [Test Mode](https://developer.paychangu.com/docs/test), bank transfers are automatically approved and processed within a few seconds.

### Webhooks   [Skip link to Webhooks](https://developer.paychangu.com/docs/bank-transfer\#webhooks)

Your webhook endpoint can process the event and finalize the customer’s order. For assistance with configuring webhooks, refer to our [webhook setup guide](https://developer.paychangu.com/docs/webhooks).

Within your webhook handler, you can verify the payment and allocate the purchased items or services to your customers. For more information, check out our [Charge Verification guide](https://developer.paychangu.com/reference/single-transaction).

Updated9 days ago

* * *

Did this page help you?

Yes

No



![](https://files.readme.io/d7f8cac6b341499ba042072071aa26931cd3dfdccda1b48a0c42043f56a927e7-small-logo.png)

## Page Not Found



To verify a Mobile Money or Bank Transfer payment, use the Charge Verification [Mobile Money endpoint](https://developer.paychangu.com/reference/verify-direct-charge-status) or [Bank endpoint](https://developer.paychangu.com/reference/single-transaction), passing in the charge ID in the URL. You can get the charge ID from the `chargeId` field that's present in the response you get after creating a transaction, or in the [webhook](https://developer.paychangu.com/reference/webhooks) payload for any transaction.

Below is a sample code of how to implement server-side validation

Mobile MoneyBANK

```rdmd-code lang-asp theme-light

curl -X GET "https://api.paychangu.com/mobile-money/payments/{{chargeId}}/verify"
-H "Accept: application/json"
-H "Authorization: Bearer {secret_key}"
```

```rdmd-code lang-asp theme-light

curl --request GET \
     --url https://api.paychangu.com/direct-charge/transactions/{{charge_id}}/details \
     --header 'Authorization: Bearer {secret_key}' \
     --header 'accept: application/json'
```

## Verification response   [Skip link to Verification response](https://developer.paychangu.com/docs/charge-verification\#verification-response)

Here's a sample verification response

Mobile money success responseBank success response

```rdmd-code lang-json theme-light

{
  "status": "successful",
  "message": "Payment authorized and completed successfully.",
  "data": {
    "amount": 100,
    "charge_id": "ksni",
    "ref_id": "29263119322",
    "trans_id": null,
    "first_name": "Kim",
    "last_name": "Banda",
    "email": "yourmail@gmail.com",
    "type": "Direct API Payment",
    "status": "success",
    "mobile": "+265993xxxx40",
    "attempts": 1,
    "currency": "MK",
    "mode": "Live",
    "created_at": "2024-08-18T14:45:11.000000Z",
    "completed_at": "2024-08-18T14:52:44.000000Z",
    "event_type": "api.charge.payment",
    "mobile_money": {
      "name": "Airtel Money",
      "ref_id": "20be6c20-adeb-4b5b-a7ba-0769820df4fb",
      "country": "Malawi"
    },
    "transaction_charges": {
      "currency": "MK",
      "amount": "4"
    },
    "authorization": {
      "channel": "Mobile Money",
      "card_number": null,
      "expiry": null,
      "brand": null,
      "provider": "Airtel Money",
      "mobile_number": null,
      "completed_at": "2024-08-18T14:52:44.000000Z"
    },
    "logs": []
  }
}
```

```rdmd-code lang-asp theme-light

{
  "status": "success",
  "message": "Transaction retrieved successfully.",
  "data": {
    "transaction": {
      "charge_id": "PTC12383",
      "ref_id": "75513659949",
      "trans_id": null,
      "currency": "MK",
      "amount": 1000,
      "first_name": null,
      "last_name": null,
      "email": null,
      "type": "Direct API Payment",
      "trace_id": "v0atWHs0NLEN3vbTAL4DKFLm59dVHuRM",
      "status": "success",
      "mobile": "0",
      "attempts": 1,
      "mode": "live",
      "created_at": "2025-02-17T21:14:35.000000Z",
      "completed_at": "2025-02-17T21:18:40.000000Z",
      "event_type": "api.charge.payment",
      "transaction_charges": {
        "currency": "MK",
        "amount": "20"
      },
      "authorization": {
        "channel": "Mobile Bank Transfer",
        "card_number": null,
        "expiry": null,
        "brand": null,
        "provider": null,
        "mobile_number": null,
        "payer_bank_uuid":"82310dd1-ec9b-4fe7-a32c-2f262ef08681",
        "payer_bank": "National Bank of Malawi",
        "payer_account_number": "1007134421",
        "payer_account_name": "Jonathan Manda",
        "completed_at": "2025-02-17T21:18:40.000000Z"
      },
      "logs": [\
        {\
          "type": "log",\
          "message": "Attempted to pay with bank transfer",\
          "created_at": "2025-02-17T21:14:35.000000Z"\
        },\
        {\
          "type": "log",\
          "message": "Bank transfer payment processed successfully.",\
          "created_at": "2025-02-17T21:18:40.000000Z"\
        }\
      ]
    }
  }
}
```

Updated9 days ago

* * *

Did this page help you?

Yes

No



For developers seeking greater flexibility and control, our Direct Charge option is the perfect solution. With our APIs, you can handle customer payment information directly while designing your own UI and payment flow. This empowers you to create a fully customized experience that aligns with your app’s unique needs and branding.

> ### 📘  Direct Charge
>
> Direct Charge requires separate integrations for each payment method you wish to support, which can be complex. It’s best suited for scenarios where your customers rely on a specific payment method, such as mobile money or bank transfer payments.

## How does Direct Charge Work?   [Skip link to How does Direct Charge Work?](https://developer.paychangu.com/docs/direct-charge-momo\#how-does-direct-charge-work)

Direct Charge involves three main steps:

1. **Initiating the Payment:** Send transaction and customer payment details to the relevant charge endpoints to begin the process.
2. **Authorize the charge:** The customer completes authorization with their payment provider, such as a [Mobile Money](https://developer.paychangu.com/docs/mobilemoney) provider or [Bank](https://developer.paychangu.com/docs/bank-transfer), to finalize the charge.
3. **Verifying the Payment**: As a precaution, use our [Webhooks](https://developer.paychangu.com/docs/webhooks) or [Charge verify transaction](https://developer.paychangu.com/docs/charge-verification) endpoint to confirm the payment’s success before providing any value to the customer.

The steps may vary depending on the payment method. For example, card payments might require multiple authorization stages. Each method’s guide provides specific details.

**Direct Charge Options**

Here are the different methods available for Direct Charge, each with unique requirements and authorization processes. Explore detailed guides for each type:

1. **[Mobile Money](https://developer.paychangu.com/docs/mobilemoney)**
2. **[Bank Transfer](https://developer.paychangu.com/docs/bank-transfer)**
3. **Card**

Updated9 days ago

* * *

Did this page help you?

Yes

No



![](https://files.readme.io/d7f8cac6b341499ba042072071aa26931cd3dfdccda1b48a0c42043f56a927e7-small-logo.png)

## Page Not Found



This endpoint allows you to retrieve detailed information about a specific transaction. By providing the `Charge ID`, you can obtain comprehensive details about the transaction, including its status, amount, currency, and other relevant metadata.

Mobile MoneyBank

```rdmd-code lang-curl theme-light

curl -X GET "https://api.paychangu.com/mobile-money/payments/{{chargeId}}/details"
-H "Accept: application/json"
-H "Authorization: Bearer {secret_key}"
```

```rdmd-code lang-asp theme-light

curl --request GET \
     --url https://api.paychangu.com/direct-charge/transactions/{{charge_id}}/details \
     --header 'Authorization: Bearer {secret_key}' \
     --header 'accept: application/json'
```

## Verification response   [Skip link to Verification response](https://developer.paychangu.com/docs/get-single-charge-details\#verification-response)

Here's a sample verification response

Money moneyBank

```rdmd-code lang-json theme-light

{
  "status": "successful",
  "message": "Payment authorized and completed successfully.",
  "data": {
    "amount": 65,
    "charge_id": "TRAU28987693",
    "ref_id": "40725788795",
    "trans_id": "83822270-958d-4fb7-a370-ec132e8c5b06",
    "first_name": "Kim",
    "last_name": "Darry",
    "email": "mail@yourdomain.com",
    "status": "successful",
    "mobile": "+265992xxxx20",
    "attempts": 1,
    "currency": "MWK",
    "mode": "live",
    "created_at": "2024-06-14T15:43:25.000000Z",
    "completed_at": "2024-06-14T15:43:58.000000Z",
    "mobile_money": {
      "name": "Airtel Money",
      "ref_id": "20be6c20-adeb-4b5b-a7ba-0769820df4fb",
      "country": "Malawi"
    }
  }
```

```rdmd-code lang-c theme-light

{
  "status": "success",
  "message": "Transaction retrieved successfully.",
  "data": {
    "transaction": {
      "charge_id": "PTC12383",
      "ref_id": "75513659949",
      "trans_id": null,
      "currency": "MK",
      "amount": 1000,
      "first_name": null,
      "last_name": null,
      "email": null,
      "type": "Direct API Payment",
      "trace_id": "v0atWHs0NLEN3vbTAL4DKFLm59dVHuRM",
      "status": "success",
      "mobile": "0",
      "attempts": 1,
      "mode": "live",
      "created_at": "2025-02-17T21:14:35.000000Z",
      "completed_at": "2025-02-17T21:18:40.000000Z",
      "event_type": "api.charge.payment",
      "transaction_charges": {
        "currency": "MK",
        "amount": "20"
      },
      "authorization": {
        "channel": "Mobile Bank Transfer",
        "card_number": null,
        "expiry": null,
        "brand": null,
        "provider": null,
        "mobile_number": null,
        "payer_bank_uuid": "82310dd1-ec9b-4fe7-a32c-2f262ef08681",
        "payer_bank": "National Bank of Malawi",
        "payer_account_number": "1007134421",
        "payer_account_name": "Jonathan Manda",
        "completed_at": "2025-02-17T21:18:40.000000Z"
      },
      "logs": [\
        {\
          "type": "log",\
          "message": "Attempted to pay with bank transfer",\
          "created_at": "2025-02-17T21:14:35.000000Z"\
        },\
        {\
          "type": "log",\
          "message": "Bank transfer payment processed successfully.",\
          "created_at": "2025-02-17T21:18:40.000000Z"\
        }\
      ]
    }
  }
}
```

Updated9 days ago

* * *

Did this page help you?

Yes

No



You can install the **PayChangu Gateway for GiveWP** plugin either in a quick way or manually install it when you don't have Internet access.

**Quick installation​**

Complete the following steps to install the plugin directly from your admin dashboard:

1. Log in to your Wordpress dashboard as admin.
2. Navigate to **Plugins** on the left sidebar.
3. Click **Add New** on the top of the page. You are redirected to the following page.

![](https://files.readme.io/ba12039-woocommerce-add-plugins-881cff56db3d128af10586411bb033f3.png)

4. Type: **PayChangu Payment Gateway for GiveWp** in the Search plugins field on the top right. You should see the plugin in the search results.
![](https://files.readme.io/22049a0-Screenshot_2024-04-23_at_7.04.50_PM.png)
5. Click Install Now to install the plugin.

6. Click Activate when the installation is done.


> ### 👍  Success
>
> **Congratulations!** You have successfully installed and activated the **PayChangu Payment Gateway for GiveWp** plugin.

**Manual installation​**

1. Download the latest version of the plugin from the [WordPress Official marketplace](https://wordpress.org/plugins/paychangu-payment-gateway-for-givewp/).
2. Log in to your Wordpress dashboard as admin.
3. Navigate to **Plugins** on the left sidebar.
4. Click **Add New** on the top of the page. You are redirected to the following page:

![](https://files.readme.io/1e52c3c-woocommerce-add-plugins-881cff56db3d128af10586411bb033f3.png)

1. Click Upload Plugin.
2. Upload the plugin `.zip` file you downloaded at Step 1.:

![](https://files.readme.io/530c2a7-woocommerce-upload-plugin-974feee548a739e1ccf86ad30e3579fe.png)

3. Click **Activate** when the installation is done.

> ### 👍  Success
>
> **Congratulations**! You have successfully installed and activated the **PayChangu Payment Gateway for GiveWP** plugin.

**Configure the GiveWp plugin**

1. Click on “ **Donations** \> and click on Settings.
2. From this page, click the “ **Payment Gateways**” tab and choose **PayChangu** link. You will be presented with the Paychangu Settings Screen
3. Configure your **PayChangu** settings accordingly.

Updated9 days ago

* * *

Did this page help you?

Yes

No



**An example**

Here's what an implementation of PayChangu Inline Checkout on a checkout page could look like:

![**Sample code** <https://codepen.io/paychangu/pen/JjqKWdr>](https://files.readme.io/f047fa7f46e08d55e7ebdc165641d3e45725f28b6869a136265b8c941708b654-checkout.gif)

**Image code** [https://codepen.io/paychangu/pen/JjqKWdr](https://codepen.io/paychangu/pen/JjqKWdr)

> ### 📃  Try it out
>
> Use test card **4242 4242 4242 4242** Airtel Money Number **990000000**

### Let’s break down the main functions of this code:   [Skip link to Let’s break down the main functions of this code:](https://developer.paychangu.com/docs/inline-popup\#lets-break-down-the-main-functions-of-this-code)

First, you include the PayChangu Inline library with a script tag:

JavaScript

```rdmd-code lang-javascript theme-light

<script src="https://in.paychangu.com/js/popup.js"></script>
```

Next up is the payment button. This is the button the customer clicks after they've reviewed their order and are ready to pay you. You'll attach an onclick event handler to this button that calls makePayment(), a custom JS function you're going to write.

JavaScript

```rdmd-code lang-javascript theme-light

 <div id="wrapper"></div>
<button type="button" onClick="makePayment()">Pay Now</button>
```

Finally, in the makePayment() function, you call the PayChanguCheckout() function with some custom parameters:

JavaScript

```rdmd-code lang-javascript theme-light

function makePayment(){
      PaychanguCheckout({
        "public_key": "pub-test-HYSBQpa5K91mmXMHrjhkmC6mAjObPJ2u",
        "tx_ref": '' + Math.floor((Math.random() * 1000000000) + 1),
        "amount": 1000,
        "currency": "MWK",
        "callback_url": "https://example.com/callbackurl",
        "return_url": "https://example.com/returnurl",
        "customer":{
          "email": "yourmail@example.com",
          "first_name":"Mac",
          "last_name":"Phiri",
        },
        "customization": {
          "title": "Test Payment",
          "description": "Payment Description",
        },
        "meta": {
          "uuid": "uuid",
          "response": "Response"
        }
      });
    }
    </script>
```

## Sample inline Implementation   [Skip link to Sample inline Implementation](https://developer.paychangu.com/docs/inline-popup\#sample-inline-implementation)

You can embed PayChangu on your page using our PayChanguCheckout() JavaScript function. The function responds to your request in accordance with your request configurations. If you specify a callback\_url in your request, the function will redirect your users to the provided callback URL when they complete the payment.

JavaScript

```rdmd-code lang-javascript theme-light

<form>
  <script src="https://in.paychangu.com/js/popup.js"></script>
  <div id="wrapper"></div>
  <button type="button" onClick="makePayment()">Pay Now</button>
  </form>
<script>
    function makePayment(){
      PaychanguCheckout({
        "public_key": "pub-test-HYSBQpa5K91mmXMHrjhkmC6mAjObPJ2u",
        "tx_ref": '' + Math.floor((Math.random() * 1000000000) + 1),
        "amount": 1000,
        "currency": "MWK",
        "callback_url": "https://example.com/callbackurl",
        "return_url": "https://example.com/returnurl",
        "customer":{
          "email": "yourmail@example.com",
          "first_name":"Mac",
          "last_name":"Phiri",
        },
        "customization": {
          "title": "Test Payment",
          "description": "Payment Description",
        },
        "meta": {
          "uuid": "uuid",
          "response": "Response"
        }
      });
    }
    </script>
```

## After the Payment   [Skip link to After the Payment](https://developer.paychangu.com/docs/inline-popup\#after-the-payment)

Four things will happen when a payment is successful:

- We’ll redirect you to your `callback_url` with status `tx_ref` after payment is complete.
- We’ll send you a webhook if you have it enabled. Learn more about webhooks and see examples [here](https://developer.paychangu.com/reference/webhooks).
- We’ll send an email receipt to your customer if the payment was successful (unless you’ve disabled this feature).
- We’ll send you an email notification (unless you’ve disabled this feature).

On your server, you should handle the redirect and always [verify the final state of the transaction](https://developer.paychangu.com/docs/transaction-verification).

## What if the Payment Fails?   [Skip link to What if the Payment Fails?](https://developer.paychangu.com/docs/inline-popup\#what-if-the-payment-fails)

If the payment attempt fails (for instance, due to insufficient funds), you don’t need to take any action. The payment page will remain open, allowing the customer to try again until the payment succeeds or they choose to cancel. Once the customer cancels or after multiple failed attempts, we will redirect to the `return_url` with the query parameters `tx_ref` and status of failed.

If you have webhooks enabled, we’ll send you a notification for each failed payment attempt. This can be useful if you want to reach out to customers who experienced issues with their payment. See our [webhooks guide](https://developer.paychangu.com/docs/webhooks) for an example.

Updated9 days ago

* * *

Did this page help you?

Yes

No



## Collect Payments   [Skip link to Collect Payments](https://developer.paychangu.com/docs/introduction\#collect-payments)

Here are a few ways to quickly integrate PayChangu into your projects. Once completed, you will be able to receive payments from customers worldwide.

**PayChangu Standard Checkout**

The [Standard Checkout](https://developer.paychangu.com/docs/standard-checkout) integration is simple. Use our API on your server to generate a payment link, redirect your customer to this link, and we’ll handle the rest, redirecting back to you once the payment is complete. [check it here](https://developer.paychangu.com/docs/standard-checkout)

**PayChangu Inline Checkout**

Our primarily client-side integration is simple to implement. Add the JavaScript library to your checkout page and link it to your payment button. When the customer clicks the payment button, our popup will appear on your website to handle the process and redirect you to you upon completion. [check it here](https://developer.paychangu.com/docs/docs/inline-popup)

**Mobile Money Direct Charge**

Build your own UI and payment flow, gather your customers’ payment information, and charge them directly using our API for Both Airtel Money and TNM Mpamba. [check it here](https://developer.paychangu.com/docs/mobilemoney)

**Bank Transfer Direct Charge**

This allows you to collect payments from your customers via Instant Bank Transfer. Create your own custom user interface and payment process, collect your customers’ payment details seamlessly, and manage direct charges using our API. [check it here](https://developer.paychangu.com/docs/bank-transfer)

**SDKs and Plugins**

Easily integrate PayChangu with your platform using any of our [SDKs](https://www.paychangu.com/sdks) or for those using eCommerce platforms like WordPress, [WooCommerce](https://paychangu.readme.io/reference/woocommerce), or [Give](https://paychangu.readme.io/reference/givewp)! we offer compatible plugins.

If you prefer not to write code, you can choose from the following options:

**[Payment Links](https://paychangu.com/payment-link):** Effortlessly collect payments by generating and sharing a simple payment link with your customers. This feature allows you to provide a seamless checkout experience without the need for a website or custom integration. Just create a link and send it via email, social media, or messaging apps, making it easy for your customers to pay.

Updated9 days ago

* * *

Did this page help you?

Yes

No



You can initiate transfers (or payouts) either individually or in bulk directly from your PayChangu available balance. Transfers can be made to bank accounts and mobile money wallets.

This guide outlines key details you need to understand about transfers. Start here, then explore specific examples for various types of transfers on their dedicated pages.

[**Mobile Money**\\
\\
Airtel Money](https://developer.paychangu.com/docs/mobile-money) [**Bank Accounts**\\
\\
All Malawian banks and mobile money](https://developer.paychangu.com/docs/bank-account)

* * *

## How Transfers Work   [Skip link to How Transfers Work](https://developer.paychangu.com/docs/introduction-2\#how-transfers-work)

You can initiate a transfer either directly from your [dashboard](https://in.paychangu.coml/) or by leveraging the transfer APIs.

To make a transfer via API, send a POST request to the create transfer endpoint. The specific details may vary depending on the type of transfer, but you’ll generally need to provide:

- `amount`
- `currency`
- `bank_uuid` identify a bank or mobile money
- `bank_account_number` used for Bank transfers or mobile money numbers.
- `bank_account_name`
- `charge_id`

You can also specify:

`email`, `first_name`, `last_name` for mobile money transfers, the `mobile_money_operator_ref_id` is required. You can retrieve the mobile operator ID by using the [get operator id endpoint](https://developer.paychangu.com/reference/supported-momo-operators). for banks `bank_uuid` is required works for also mobile money you can retrieve the `uuid` using [Get banks endpoint](https://developer.paychangu.com/reference/get-banks).

Updated9 days ago

* * *

Did this page help you?

Yes

No



This documentation provides an overview of how you can collect payments from your customers through mobile money, without redirecting them to a separate page.

**The Process**

Collecting payments through Mobile Money is simple and hassle-free:

1. You call our [API to create a charge](https://developer.paychangu.com/reference/charge-mobile-money) and pass in the customer's mobile number.
2. Your customer completes the payment by authorizing it with their mobile money provider.
3. We send a webhook to notify you once the payment is received.
4. You confirm the payment and proceed to fulfill the customer’s order.

Your webhook endpoint can process the event and finalize the customer’s order. For assistance with configuring webhooks, refer to our [webhook setup guide](https://developer.paychangu.com/docs/webhooks).

Within your webhook handler, you can verify the payment and allocate the purchased items or services to your customers. For more information, check out our [Charge Verification guide](https://developer.paychangu.com/docs/charge-verification).

Updated9 days ago

* * *

Did this page help you?

Yes

No



> ### 🚧  NOTICE
>
> This endpoint only support Mobile Money if your planning on sending to both mobile money and banks then use the [bank method](https://developer.paychangu.com/docs/bank-account) it support both Airtel Money, TNM Mpamba and Banks.

Mobile money transfers are different from bank transfers because they use different systems, but both send money instantly, so the recipient gets it right away.

### Mobile Money Sample Request   [Skip link to Mobile Money Sample Request](https://developer.paychangu.com/docs/mobile-money\#mobile-money-sample-request)

**Initiating Bank Transfer**

To complete a Mobile Money transfer, adhere to these steps:

- Obtain the necessary Get Operator ID. Send a request to [get the operators](https://developer.paychangu.com/reference/get-operator)’ endpoints to retrieve the correct bank operator ID required for the transfer.

cURL

```rdmd-code lang-asp theme-light

curl --request POST \
     --url https://api.paychangu.com/mobile-money/payments/initialize \
     --header 'accept: application/json' \
     --header 'content-type: application/json' \
     --data '
{
  "mobile_money_operator_ref_id": "20be6c20-adeb-4b5b-a7ba-0769820df4fb",
  "mobile": "0990000000",
  "amount": "1000",
  "charge_id": "PC-64FU65435"
}
'
```

> ### 🗒️  Sample in other languages check [here](https://developer.paychangu.com/reference/charge-mobile-money).

### Handling the Response   [Skip link to Handling the Response](https://developer.paychangu.com/docs/mobile-money\#handling-the-response)

After initiating a transfer, you will receive a response like this:

200 OK

```rdmd-code lang-asp theme-light

"status": "success",
  "message": "Payment initiated successfully.",
  "data": {
    "amount": 1000,
    "charge_id": "PC-64FU65435",
    "ref_id": "95652259752",
    "trans_id": "f28e10a6-5d71-4499-9ac3-fdce917fae98",
    "first_name": null,
    "last_name": null,
    "email": null,
    "status": "pending",
    "mobile": "+265990xxxx00",
    "attempts": 2,
    "currency": "MWK",
    "mode": "live",
    "created_at": "2024-06-15T00:21:33.000000Z",
    "completed_at": null,
    "mobile_money": {
      "name": "Airtel Money",
      "ref_id": "20be6c20-adeb-4b5b-a7ba-0769820df4fb",
      "country": "Malawi"
    }
  }
}
```

There are some important details here:

`status.data.status` is the status of the transfer. `status.data.charge_id` is the ID of the transfer. You can use this ID to [fetch details](https://developer.paychangu.com/reference/single-charge-details) about this transfer later.

Updated8 days ago

* * *

Did this page help you?

Yes

No



PayChangu API errors can be grouped into three main categories. The validation errors, PayChangu errors, and provider errors.

They are usually returned in this format with the 400 HTTP status code:

JSON

```rdmd-code lang-json theme-light

{
  "message": {
    "callback_url": [\
      "The callback url field is required."\
    ]
  },
  "status": "failed",
  "data": null
}
```

## Provider Errors   [Skip link to Provider Errors](https://developer.paychangu.com/docs/paychangu-errors\#provider-errors)

Provider errors are returned from the payment provider. Below are some possible provider errors you can expect:

**DECLINED&#xA;**

Transaction declined.

**TIMED\_OUT**

Response timed out

**EXPIRED\_CARD&#xA;**

Transaction declined due to expired card

**INSUFFICIENT\_FUNDS**

Transaction declined due to insufficient funds

**AUTHENTICATION\_FAILED**

3DS authentication failed

**NOT\_ENROLLED\_3D\_SECURE&#xA;**

Cardholder is not enrolled in 3D Secure

**EXCEEDED\_RETRY\_LIMIT**

Transaction retry limit exceeded

**CARD\_NOT\_ENROLLED**

The card is not enrolled for 3DS authentication

**AUTHENTICATION\_NOT\_AVAILABLE**

Authentication is not currently available

**AUTHENTICATION\_ATTEMPTED**

Authentication was attempted but the card issuer did not perform the authentication

**CARD\_DOES\_NOT\_SUPPORT\_3DS**

The card does not support 3DS authentication

Updated9 days ago

* * *

Did this page help you?

Yes

No



> ### 📘  Visit SDKs page
>
> **[Click here](https://www.paychangu.com/sdks)**

Updated9 days ago

* * *

Did this page help you?

Yes

No



PayChangu provides access to your resources through RESTful endpoints, allowing you to test the API. You can also access your test API credentials and keys from [here](https://in.paychangu.com/user/api).

You can also **simulate** our Standard Checkout and explore integrations using various programming languages by [clicking here](https://developer.paychangu.com/reference/initiate-transaction).

## HTTP Request Sample   [Skip link to HTTP Request Sample](https://developer.paychangu.com/docs/standard-checkout\#http-request-sample)

We provide cURL request samples so you can quickly test each endpoint on your terminal or command line. Need a quick how-to for making cURL requests? Just use an HTTP client such as Postman, like the rest of us!

## Requests and Responses   [Skip link to Requests and Responses](https://developer.paychangu.com/docs/standard-checkout\#requests-and-responses)

Both request body data and response data are formatted as JSON. Content type for responses are always of the type `application/JSON`. You can use the PayChangu API in [test mode](https://developer.paychangu.com/docs/test), which does not affect your live data. The [API key](https://developer.paychangu.com/docs/api-keys) you use to authenticate the request determines whether the request is live mode or test mode

## Initiate Transaction   [Skip link to Initiate Transaction](https://developer.paychangu.com/docs/standard-checkout\#initiate-transaction)

| Parameter | Required | Description |
| --- | --- | --- |
| secret\_key string | Yes | This is important for creating payment links |
| callback\_url url | Yes | This is your IPN URL, which is essential for receiving payment notifications. Successful transactions will redirect to this URL after payment. The {tx\_ref} is returned, so you don’t need to include it in your URL. |
| return\_url url | Yes | Once the customer cancels or after multiple failed attempts, we will redirect to the return\_url with the query parameters tx\_ref and status of failed. |
| tx\_ref string | Optional | Your transaction reference. This MUST be unique for every transaction. |
| first\_name string | Optional | This is the first name of your customer. |
| last\_name string | Optional | This is the last name of your customer. |
| email string | Optional | This is the email address of your customer. Transaction notification will be sent to this email address |
| currency string | Yes | Currency to charge in. \[ 'MWK', 'USD' \] |
| amount int32 | Yes | Amount to charge the customer. |
| customization array | Optional | {<br>"title":"Title of payment",<br>"description":"Description of payment",<br>} |
| meta array | Optional | You can pass on extra information here. |

cURL

```rdmd-code lang-curl theme-light

curl -X POST "https://api.paychangu.com/payment"
-H "Accept: application/json"
-H "Authorization: Bearer {secret_key}"
-d "{
    "amount": "100",
    "currency": "MWK",
    "email": "yourmail@example.com",
    "first_name":"Kelvin",
    "last_name":"Banda",
    "callback_url": "https://webhook.site/9d0b00ba-9a69-44fa-a43d-a82c33c36fdc",
    "return_url": "https://webhook.site",
    "tx_ref": '' + Math.floor((Math.random() * 1000000000) + 1),
    "customization": {
      "title": "Test Payment",
      "description": "Payment Description",
    },
    "meta": {
      "uuid": "uuid",
      "response": "Response"
    }
}"
```

Explore integrations using various programming languages by [clicking here](https://developer.paychangu.com/reference/initiate-transaction).

**Response**

JSON

```rdmd-code lang-json theme-light

{
  "message": "Hosted payment session generated successfully.",
  "status": "success",
  "data": {
    "event": "checkout.session:created",
    "checkout_url": "https://checkout.paychangu.com/923677185321",
    "data": {
      "tx_ref": "ae041eae-6abd-4602-a949-56fbd65c29fe",
      "currency": "MWK",
      "amount": 100,
      "mode": "live",
      "status": "pending"
    }
  }
}
```

When you provide the user with the returned link, they will be directed to our checkout page to complete the payment, as shown below.

![](https://files.readme.io/bc8c92b60dc54684730bc53e93dcf817445a557af9dcc3714a327303ad1e4764-Screenshot_2025-01-01_at_8.41.55_pm.png)

**What happens when the user completes the transaction on the page?**

When the user enters their payment details, PayChangu will validate and then charge the card. Once the charge is completed, we will:

1. Call your specified redirect\_url and post the response to you. We will also append your transaction ID (transaction\_id), transaction reference (tx\_ref), and the transaction status.

2. Call your webhook URL (if one is set).

3. Send an email to you and your customer on the successful payment.


Before providing value to the customer, please make a server-side call to our transaction verification endpoint to confirm the status of the transaction.

## After the Payment   [Skip link to After the Payment](https://developer.paychangu.com/docs/standard-checkout\#after-the-payment)

Four things will happen when a payment is successful:

- We’ll redirect you to your `callback_url` with status `tx_ref` after payment is complete.
- We’ll send you a webhook if you have it enabled. Learn more about webhooks and see examples [here](https://developer.paychangu.com/docs/webhooks).
- If the payment was successful, we’ll email a receipt to your customer (unless you’ve disabled this feature).
- We’ll send you an email notification (unless you’ve disabled this feature).

On your server, you should handle the redirect and always [verify the final state of the transaction](https://developer.paychangu.com/docs/webhooks).

## What if the Payment Fails?   [Skip link to What if the Payment Fails?](https://developer.paychangu.com/docs/standard-checkout\#what-if-the-payment-fails)

If the payment attempt fails (for instance, due to insufficient funds), you don’t need to take any action. The payment page will remain open, allowing the customer to try again until the payment succeeds or they choose to cancel. Once the customer cancels or after multiple failed attempts, we will redirect to the `return_url` with the query parameters `tx_ref` and status of failed.

If you have webhooks enabled, we’ll send you a notification for each failed payment attempt. This can be useful if you want to reach out to customers who experienced issues with their payment. See our [webhooks guide](https://developer.paychangu.com/docs/webhooks) for an example.

Updated9 days ago

* * *

Did this page help you?

Yes

No



**Test mode**

Test mode allows you to work with test credit cards and mobile money numbers, create test products and prices, and simulate transactions to ensure your integration functions as expected. This feature is designed to help you detect and resolve any bugs or issues in your PayChangu implementation before going live with real payments.

Once you’ve created a PayChangu account, you’ll find a set of test [API keys](https://developer.paychangu.com/docs/api-keys) in your PayChangu Dashboard [setting page](https://dashboard.paychangu.com/manage/settings). These keys allow you to generate and retrieve simulated data by interacting with the PayChangu API. To begin accepting real payments, you’ll need to submit your compliance to activate your account, switch off test mode, and update your integration with live [API keys](https://developer.paychangu.com/docs/api-keys).

## Test Cards   [Skip link to Test Cards](https://developer.paychangu.com/docs/test\#test-cards)

To simulate a payment via card , use test cards from the following list.

| Brand | Card Number | Type | CVC | Date |
| --- | --- | --- | --- | --- |
| VISA | 4242 4242 4242 4242 | 3DS SUCCESS | Any 3 digits | Any future date |
| VISA | 4000 0000 0000 3220 | 3DS TIMEOUT | Any 3 digits | Any future date |
| VISA | 4000 0000 0000 9995 | 3DS INSUFFICIENT | Any 3 digits | Any future date |
| VISA | 4000 0000 0000 0002 | 3DS DECLINED | Any 3 digits | Any future date |
| MASTERCARD | 5555 5555 5555 4444 | 3DS SUCCESS | Any 3 digits | Any future date |
| MASTERCARD | 5200 0000 0000 0008 | 3DS ERROR | Any 3 digits | Any future date |

**OTPs**

For 3DS, use the following OTP: `1234`

## Mobile Money Test Number   [Skip link to Mobile Money Test Number](https://developer.paychangu.com/docs/test\#mobile-money-test-number)

| Provider | Mobile Number( Without 0 ) | Type |
| --- | --- | --- |
| Airtel Money | 990000000 | SUCCESS |
| Airtel Money | 990000001 | FAILED |
| TNM Mpamba | 899817565 | SUCCESS |
| TNM Mpamba | 899817566 | FAILED |

Updated8 days ago

* * *

Did this page help you?

Yes

No



After a successful charge, you need to verify with PayChangu that the payment was successful before providing value to your customer on your website. For every transaction, you must supply a transaction ID.

Here are some important things to check when verifying the payment:

- Verify that the transaction reference matches the one you generated.
- Verify that the status of the transaction is successful.
- Verify that the currency of the payment matches the expected currency.
- Verify that the amount paid is greater than or equal to the expected amount. If the amount is greater, you can provide the customer with the value and refund the excess.

To verify a payment, use the verify transaction endpoint by passing in the transaction ID in the URL. You can obtain the transaction ID from the `tx_ref` present in the response you receive after creating a transaction or in the [webhook](https://developer.paychangu.com/reference/webhooks) payload for any transaction.

Below is a sample code of how to implement server-side validation

cURL

```rdmd-code lang-curl theme-light

curl -X GET "https://api.paychangu.com/verify-payment/{tx_ref}"
-H "Accept: application/json"
-H "Authorization: Bearer {secret_key}"
```

## Verification response   [Skip link to Verification response](https://developer.paychangu.com/docs/transaction-verification\#verification-response)

Here's a sample verification response

JSON

```rdmd-code lang-json theme-light

{
  "status": "success",
  "message": "Payment details retrieved successfully.",
  "data": {
    "event_type": "checkout.payment",
    "tx_ref": "PA54231315",
    "mode": "live",
    "type": "API Payment (Checkout)",
    "status": "success",
    "number_of_attempts": 1,
    "reference": "26262633201",
    "currency": "MWK",
    "amount": 1000,
    "charges": 40,
    "customization": {
      "title": "iPhone 10",
      "description": "Online order",
      "logo": null
    },
    "meta": null,
    "authorization": {
      "channel": "Card",
      "card_number": "230377******0408",
      "expiry": "2035-12",
      "brand": "MASTERCARD",
      "provider": null,
      "mobile_number": null,
      "completed_at": "2024-08-08T23:21:22.000000Z"
    },
    "customer": {
      "email": "yourmail@example.com",
      "first_name": "Mac",
      "last_name": "Phiri"
    },
    "logs": [\
      {\
        "type": "log",\
        "message": "Attempted to pay with card",\
        "created_at": "2024-08-08T23:20:59.000000Z"\
      },\
      {\
        "type": "log",\
        "message": "Processing and verification of card payment completed successfully.",\
        "created_at": "2024-08-08T23:21:22.000000Z"\
      }\
    ],
    "created_at": "2024-08-08T23:20:21.000000Z",
    "updated_at": "2024-08-08T23:20:21.000000Z"
  }
}
```

Updated9 days ago

* * *

Did this page help you?

Yes

No



Webhooks play a crucial role in your payment integration. They enable PayChangu to inform you about events occurring in your account, such as a successful payment or a failed transaction.

A webhook URL is an endpoint on your server designed to receive notifications about these events. When an event takes place, a POST request will be made to that endpoint with a JSON body that includes details about the event, such as the event type and the related data.

## When to use webhooks   [Skip link to When to use webhooks](https://developer.paychangu.com/docs/webhooks\#when-to-use-webhooks)

Webhooks are compatible with all types of payment methods. By setting up a webhook, you allow us to inform you when payments are completed. Within your webhook endpoint, you can then:

- Email a customer when a payment fails.
- Update your order records when the status of a pending payment is updated to successful.

## Structure of a webhook payload   [Skip link to Structure of a webhook payload](https://developer.paychangu.com/docs/webhooks\#structure-of-a-webhook-payload)

Here are some sample webhook payloads for transfers and payments:

successful paymentAPI Payout

```rdmd-code lang-curl theme-light

{
  "event_type": "api.charge.payment",
  "currency": "MWK",
  "amount": 1000,
  "charge": "20",
  "mode": "test",
  "type": "Direct API Payment",
  "status": "success",
  "charge_id": "5d676fg",
  "reference": "71308131545",
  "authorization": {
    "channel": "Mobile Bank Transfer",
    "card_details": null,
    "bank_payment_details": {
      "payer_bank_uuid":"82310dd1-ec9b-4fe7-a32c-2f262ef08681"
      "payer_bank": "National Bank of Malawi",
      "payer_account_number": "10010000",
      "payer_account_name": "Jonathan Manda"
    },
    "mobile_money": null,
    "completed_at": "2025-01-15T19:53:18.000000Z"
  },
  "created_at": "2025-01-15T19:53:18.000000Z",
  "updated_at": "2025-01-15T19:53:18.000000Z"
}

```

```rdmd-code lang-asp theme-light

{
  "event_type":"api.payout",
  "charge_id":"4567tfuty",
  "reference":"54438943842",
  "first_name":null,
  "last_name":null,
  "email":null,
  "currency":"MWK",
  "amount":1000,
  "charge":"0",
  "mode":"live",
  "type":"API Payout",
  "status":"success",
  "recipient_account_details":{"bank_name":"National Bank of Malawi",
  "bank_uuid":"82310dd1-ec9b-4fe7-a32c-2f262ef08681",
  "account_name":"Nohaata Seven",
  "account_number":"1007534422"
  }
}

```

### Enabling webhooks   [Skip link to Enabling webhooks](https://developer.paychangu.com/docs/webhooks\#enabling-webhooks)

Here's how to set up a webhook on your PayChangu account:

- Log in to your [dashboard](https://dashboard.paychangu.com/manage/settings) and click on Settings
- Navigate to API & Webhooks to add your webhook URL
- Check all the boxes and save your settings

![](https://files.readme.io/568f0f4e66d2dfcc76f4c682a1a6d93349534e1803c084c9eeac48f4950ce78a-dash_keys.png)

## Implementing a Webhook   [Skip link to Implementing a Webhook](https://developer.paychangu.com/docs/webhooks\#implementing-a-webhook)

Creating a webhook endpoint on your server is similar to writing any other API endpoint, but there are a few important details to keep in mind:

## Authentication of Webhook Requests   [Skip link to Authentication of Webhook Requests](https://developer.paychangu.com/docs/webhooks\#authentication-of-webhook-requests)

To ensure that the request received on your webhook is actually coming from PayChangu, it is necessary to carry out a validation check on the incoming request. This is achieved through the “Signature” header, which is always present in the header of each webhook request. The value of the “Signature” header is a SHA-256 HMAC hash of the webhook payload sent to your server.

To verify the validity of the webhook (confirming it is from PayChangu), generate the SHA-256 HMAC hash of the webhook payload using your web secret key, which is generated on your dashboard. The resulting hash should then be compared with the value of the “Signature” header in the request headers. If the generated hash matches the “Signature” header value, the webhook is a valid request from PayChangu. Otherwise, it is an invalid request that has either been tampered with or originated from an untrusted source.

Example Code To Authenticate Webhook Request (PHP)

```rdmd-code lang-asp theme-light

function handleWebhookEvent(){
// retrieve request body
$payload = file_get_contents('php://input');
// retrieve all headers
$headers = getallheaders();
$computedSignature = hash_hmac('sha256', $payload, $webhookSecret);
/* change the value of webhookSecret to the webhook secret generated on your
merchant dashboard */
$webhookSecret = 'your_webhook_secret_key';
// generate hash of the webhook payload using the secret key
$computedSignature = hash_hmac('sha256', $payload, $webhookSecret);
// compare the computed signature of the incoming request with the value on the
"Signature" header
if($computedSignature != $headers['Signature']) {
/* request may have been tampered with or is likely from another source */
/* enter code to discard webhook */
}
else{
/* request is from PayChangu */
/* enter code to implement on the basis of the data on the webhook payload */
}
}
```

> ### 🔗  Authentication In JavaScript (Node.js
>
> [Click here](https://developer.paychangu.com/recipes/webhook-authentication-in-javascript-nodejs)

## Responding to Webhook Requests   [Skip link to Responding to Webhook Requests](https://developer.paychangu.com/docs/webhooks\#responding-to-webhook-requests)

To acknowledge receipt of a webhook, your endpoint must return a 200 HTTP status code. Any other response codes, including 3xx codes, will be considered a failure. The response body or headers do not matter to us.

> ### 📍
>
> If we do not receive a 200 status code (for example, if your server is unreachable), we will retry the webhook call three times, with a 30-minute interval between each attempt.

## Don't rely solely on webhooks   [Skip link to Don't rely solely on webhooks](https://developer.paychangu.com/docs/webhooks\#dont-rely-solely-on-webhooks)

Have a backup strategy in place in case your webhook endpoint fails. For instance, if your webhook endpoint is encountering server errors, you won’t be notified of new customer payments because the webhook requests will fail.

To mitigate this, we recommend setting up a background job that regularly polls for the status of any pending transactions using the [transaction verification endpoint](https://developer.paychangu.com/docs/transaction-verification), or for direct charge use [charge verification endpoint](https://developer.paychangu.com/reference/charge-verification-momo). For example, you could check every hour until a successful or failed response is returned.

## Always Re-query   [Skip link to Always Re-query](https://developer.paychangu.com/docs/webhooks\#always-re-query)

Whenever you receive a webhook notification, before providing the customer with any value, you should call our API again to verify the received details and ensure that the data has not been compromised.

For example, when you receive a successful payment notification, you can use our [transaction verification endpoint](https://developer.paychangu.com/docs/transaction-verification), or for direct charge use [charge verification endpoint](https://paychangu.readme.io/reference/charge-verification-momo). to confirm the status of the transaction before confirming the customer’s order.

Updated8 days ago

* * *

Did this page help you?

Yes

No



Welcome to the PayChangu Developer Documentation! Here, you’ll discover how to create seamless and innovative payment solutions using the powerful PayChangu API.

Provide your customers with the option to pay by card or mobile money, ensuring a seamless checkout experience. Collect payment information quickly and securely.

> ### ⚙️  Before you can do anything
>
> Make sure you have a PayChangu account sign up by clicking [here](https://in.paychangu.com/register). With this account, you can start the integration process and [test](https://developer.paychangu.com/docs/test) sending transactions to PayChangu.

### Get started quickly!   [Skip link to Get started quickly!](https://developer.paychangu.com/docs/welcome\#get-started-quickly)

### Accept Payments

[![Quickstart](https://files.readme.io/7d5c4ee848bea081670c09f43730f34f988d1edbc46fb0f1beb592772bc840a7-Screenshot_2025-01-16_at_11.28.18_pm.png)](https://developer.paychangu.com/docs/introduction)

Accept payments seamlessly from cards, bank accounts, and mobile money wallets.

### Disbursement

[![SDKs and Plugins](https://files.readme.io/d9b874265201be00e99150de830abf0cf815ad604d4d3d5268e48fd67caeb292-Screenshot_2025-01-16_at_11.28.33_pm.png)](https://developer.paychangu.com/docs/introduction-2)

Facilitate instant transfers to bank accounts and mobile money wallets with a single API.

### SDKs

[![SDKs and Plugins](https://files.readme.io/d9b874265201be00e99150de830abf0cf815ad604d4d3d5268e48fd67caeb292-Screenshot_2025-01-16_at_11.28.33_pm.png)](https://paychangu.com/sdks)

Seamlessly connect PayChangu to your platform with any of our SDKs for quick integration.

### Plugins

[![SDKs and Plugins](https://files.readme.io/d9b874265201be00e99150de830abf0cf815ad604d4d3d5268e48fd67caeb292-Screenshot_2025-01-16_at_11.28.33_pm.png)](https://developer.paychangu.com/docs/woocommerce-1)

Explore our no-code plugin directory and begin receiving payments effortlessly.

Updated 8 days ago

* * *

Did this page help you?

Yes

No



WHMCS is a full-featured web hosting client management panel that gives you all the tools you need to start a web hosting business.

It enables you to create a purchasing cart for your website, allowing visitors to buy hosting services through your site.

**Installation**

- Existing WHMCS installation on your web server.
- Supported Web Servers: Apache and Nginx
- PHP (5.5.19 or more recent) and extensions, MySQL and web browser
- cURL (7.34.0 or more recent)
- OpenSSL v1.0.1 or more recent

**Install**

1. Download the [WHMCH PayChangu Here](https://github.com/Paychangu-Limited/PayChangu-whmcs)
2. Copy `paychangu.php` in modules/gateways to the /modules/gateways/ folder of your WHMCS installation.
3. Copy `paychangu.php` in modules/gateways/callback to the /modules/gateways/callback folder of your WHMCS installation.

Updated9 days ago

* * *

Did this page help you?

Yes

No



You can install the **PayChangu Gateway for WooCommerce** plugin either in a quick way or manually install it when you don't have Internet access to the WooCommerce store.

**Quick installation​**

Complete the following steps to install the plugin directly from your admin dashboard:

1. Log in to your WooCommerce dashboard as admin.
2. Navigate to **Plugins** on the left sidebar.
3. Click **Add New** on the top of the page. You are redirected to the following page.

![](https://files.readme.io/ba12039-woocommerce-add-plugins-881cff56db3d128af10586411bb033f3.png)

4. Type: **PayChangu Payment Gateway** for WooCommerce in the Search plugins field on the top right. You should see the plugin in the search results.

![](https://files.readme.io/34e337a-Screenshot_2024-03-20_at_5.41.27_PM.png)

5. Click Install Now to install the plugin.

6. Click Activate when the installation is done.


> ### 👍  Success
>
> **Congratulations!** You have successfully installed and activated the **PayChangu Payment Gateway for WooCommerce** plugin.

**Manual installation​**

1. Download the latest version of the plugin from the [WordPress Official marketplace](https://wordpress.org/plugins/paychangu-gateway-for-woocommerce/).
2. Log in to your WooCommerce dashboard as admin.
3. Navigate to **Plugins** on the left sidebar.
4. Click **Add New** on the top of the page. You are redirected to the following page:

![](https://files.readme.io/1e52c3c-woocommerce-add-plugins-881cff56db3d128af10586411bb033f3.png)

1. Click Upload Plugin.
2. Upload the plugin `.zip` file you downloaded at Step 1.:

![](https://files.readme.io/530c2a7-woocommerce-upload-plugin-974feee548a739e1ccf86ad30e3579fe.png)

3. Click **Activate** when the installation is done.

> ### 👍  Success
>
> **Congratulations**! You have successfully installed and activated the **PayChangu Payment Gateway for WooCommerce** plugin.

**Configure the WooCommerce plugin**

1. Click on “ **WooCommerce** \> Settings” from the left menu and click the “ **Payments**” tab.
2. Click on the **PayChangu** link from the available Checkout Options
3. Configure your **PayChangu** settings accordingly.

Updated9 days ago

* * *

Did this page help you?

Yes

No



# Webhook Authentication In JavaScript (Node.js

This JavaScript file implements a secure webhook endpoint using Express.js. It validates incoming webhook requests from PayChangu to ensure they are genuine and untampered. The validation is done by comparing a computed hash of the request payload with the Signature header sent in the webhook request.

IN THIS RECIPE

1. Import required modules
2. Set Up App
3. Capture Raw Body

•••

1. Define Webhook Route
2. Extract and Validate
3. Process Webhook
4. Respond
5. Start Server

📨Open Recipe

JavaScript

```
xxxxxxxxxx
```

56

```
});
```

1

```
// Step 1: Import required modules
```

2

```
const crypto = require('crypto');
```

3

```
const express = require('express');
```

4

```
​
```

5

```
// Step 2: Initialize Express app
```

6

```
const app = express();
```

7

```
// Set your webhook secret key (replace with your actual secret key)
```

8

```
const webhookSecret = 'your_webhook_secret_key';
```

9

```
​
```

10

```
// Step 3: Middleware to capture raw body for validation
```

11

```
app.use(express.raw({ type: 'application/json' }));
```

12

```
​
```

13

```
// Step 4: Webhook endpoint to handle requests
```

14

```
app.post('/webhook', (req, res) => {
```

15

```
    try {
```

16

```
        // Step 5: Extract the raw request body
```

17

```
        const payload = req.body.toString();
```

18

```
​
```

19

```
        // Step 6: Retrieve the "Signature" header
```

20

```
        const signature = req.headers['signature'];
```

21

```
​
```

22

```
        // Step 7: Check if the "Signature" header is missing
```

23

```
        if (!signature) {
```

24

```
            res.status(400).send('Missing signature header');
```

25

```
            return;
```

26

```
        }
```

📨

Webhook Authentication In JavaScript (Node.js

This JavaScript file implements a secure webhook endpoint using Express.js. It validates incoming webhook requests from PayChangu to ensure they are genuine and untampered. The validation is done by comparing a computed hash of the request payload with the Signature header sent in the webhook request.

8 Steps

Open Recipe

Steps to Authenticate Webhook Requests in PHP

This PHP script provides a secure implementation to handle and authenticate webhook requests from PayChangu. It ensures that the incoming request originates from PayChangu by verifying the payload’s integrity using an HMAC SHA-256 hash. The verification process prevents unauthorized or tampered requests from being processed.

9 Steps

Open Recipe

🦉

# Recipe Title

Recipe Description

​x

```

```

1{"success":true}

#### Title



# Webhook Authentication In JavaScript (Node.js

This JavaScript file implements a secure webhook endpoint using Express.js. It validates incoming webhook requests from PayChangu to ensure they are genuine and untampered. The validation is done by comparing a computed hash of the request payload with the Signature header sent in the webhook request.

IN THIS RECIPE

1. Import required modules
2. Set Up App
3. Capture Raw Body

•••

1. Define Webhook Route
2. Extract and Validate
3. Process Webhook
4. Respond
5. Start Server

📨Open Recipe

JavaScript

```
xxxxxxxxxx
```

56

```
});
```

1

```
// Step 1: Import required modules
```

2

```
const crypto = require('crypto');
```

3

```
const express = require('express');
```

4

```
​
```

5

```
// Step 2: Initialize Express app
```

6

```
const app = express();
```

7

```
// Set your webhook secret key (replace with your actual secret key)
```

8

```
const webhookSecret = 'your_webhook_secret_key';
```

9

```
​
```

10

```
// Step 3: Middleware to capture raw body for validation
```

11

```
app.use(express.raw({ type: 'application/json' }));
```

12

```
​
```

13

```
// Step 4: Webhook endpoint to handle requests
```

14

```
app.post('/webhook', (req, res) => {
```

15

```
    try {
```

16

```
        // Step 5: Extract the raw request body
```

17

```
        const payload = req.body.toString();
```

18

```
​
```

19

```
        // Step 6: Retrieve the "Signature" header
```

20

```
        const signature = req.headers['signature'];
```

21

```
​
```

22

```
        // Step 7: Check if the "Signature" header is missing
```

23

```
        if (!signature) {
```

24

```
            res.status(400).send('Missing signature header');
```

25

```
            return;
```

26

```
        }
```

📨

Webhook Authentication In JavaScript (Node.js

This JavaScript file implements a secure webhook endpoint using Express.js. It validates incoming webhook requests from PayChangu to ensure they are genuine and untampered. The validation is done by comparing a computed hash of the request payload with the Signature header sent in the webhook request.

8 Steps

Open Recipe

Steps to Authenticate Webhook Requests in PHP

This PHP script provides a secure implementation to handle and authenticate webhook requests from PayChangu. It ensures that the incoming request originates from PayChangu by verifying the payload’s integrity using an HMAC SHA-256 hash. The verification process prevents unauthorized or tampered requests from being processed.

9 Steps

Open Recipe

📨

# Webhook Authentication In JavaScript (Node.js

This JavaScript file implements a secure webhook endpoint using Express.js. It validates incoming webhook requests from PayChangu to ensure they are genuine and untampered. The validation is done by comparing a computed hash of the request payload with the Signature header sent in the webhook request.

Use crypto for hashing and express to create the server.

Initialize an Express app and define the webhook secret key.

Use express.raw() middleware to access the unparsed body.

Create a POST /webhook route.

•Get the raw payload (req.body).

•Retrieve the Signature header.

•Compute the HMAC SHA-256 hash.

•Compare the computed hash with the Signature header.

If valid, parse the payload and log or process the data.

Send appropriate HTTP status codes for valid or invalid requests.

Listen on port 3000 and log a confirmation message.

56

```
});
```

1

```
// Step 1: Import required modules
```

2

```
const crypto = require('crypto');
```

3

```
const express = require('express');
```

4

```
​
```

5

```
// Step 2: Initialize Express app
```

6

```
const app = express();
```

7

```
// Set your webhook secret key (replace with your actual secret key)
```

8

```
const webhookSecret = 'your_webhook_secret_key';
```

9

```
​
```

10

```
// Step 3: Middleware to capture raw body for validation
```

11

```
app.use(express.raw({ type: 'application/json' }));
```

12

```
​
```

13

```
// Step 4: Webhook endpoint to handle requests
```

14

```
app.post('/webhook', (req, res) => {
```

15

```
    try {
```

16

```
        // Step 5: Extract the raw request body
```

17

```
        const payload = req.body.toString();
```

18

```
​
```

19

```
        // Step 6: Retrieve the "Signature" header
```

20

```
        const signature = req.headers['signature'];
```

21

```
​
```

22

```
        // Step 7: Check if the "Signature" header is missing
```

23

```
        if (!signature) {
```

24

```
            res.status(400).send('Missing signature header');
```

25

```
            return;
```

26

```
        }
```

1{"success":true}

#### Title



| time | status | user agent |  |
| :-- | :-- | :-- | :-- |
| Make a request to see history. |

#### URL Expired

The URL for this request expired after 30 days.

This documentation provides an overview of how to send money to a bank account

payout\_method

string

required

Defaults to bank\_transfer

Payout method

bank\_uuid

string

required

Uuid of the bank to send to. The list of banks is got from the Get Banks endpoint

amount

string

required

The amount of money to be sent

charge\_id

string

required

Used to Identify the transaction. This MUST be unique for every transaction.

bank\_account\_name

string

required

Recipient Name

bank\_account\_number

string

required

Recipient account number for banks or phone number (265...) for Airtel Money and TNM Mpamba

email

string

This is the email address of your customer. Transaction notification will be sent to this email address. Optional

first\_name

string

This is the first name of your customer. Optional

last\_name

string

This is the last name of your customer. Optional

# `` 200      200

object

status

string

message

string

data

object

transaction

object

transaction object

# `` 400      400

object

status

string

message

string

data

string

Updated 9 days ago

* * *

Did this page help you?

Yes

No

ShellNodeRubyPHPPython

[Log in to use your API keys](https://developer.paychangu.com/login?redirect_uri=/reference/bank-payout)

```

xxxxxxxxxx

1curl --request POST \

2     --url https://api.paychangu.com/direct-charge/payouts/initialize \

3     --header 'accept: application/json' \

4     --header 'content-type: application/json' \

5     --data '

6{

7  "payout_method": "bank_transfer"

8}

9'

```

```

xxxxxxxxxx

35
}

1

{

2  "status": "success",

3  "message": "Payout request submitted successfully.",

4

  "data": {

5

    "transaction": {

6      "charge_id": "TRX683932Ygis898jjnyghvtgu",

7      "ref_id": "97073812876",

8      "trans_id": null,

9      "currency": "MK",

10      "amount": 3000,

11      "first_name": null,

12      "last_name": null,

13      "email": null,

14      "type": "API Payout",

15      "trace_id": null,

16      "status": "pending",

17      "mobile": "0",

18      "attempts": 1,

19      "mode": "live",

20      "created_at": "2025-01-23T17:03:28.000000Z",

21      "completed_at": null,

22      "event_type": "api.payout",

23

      "transaction_charges": {

24        "currency": "MK",

25        "amount": "0"

```

Updated 9 days ago

* * *

Did this page help you?

Yes

No



| time | status | user agent |  |
| :-- | :-- | :-- | :-- |
| Make a request to see history. |

#### URL Expired

The URL for this request expired after 30 days.

# `` 200      200

object

message

string

status

string

data

object

# `` 400      400

object

Updated 9 days ago

* * *

Did this page help you?

Yes

No

ShellNodeRubyPHPPython

[Log in to use your API keys](https://developer.paychangu.com/login?redirect_uri=/reference/bills-payments)

```

xxxxxxxxxx

1curl --request GET \

2     --url https://api.paychangu.com/bill_payment/get-operators \

3     --header 'accept: application/json'

```

```

xxxxxxxxxx



1

{

2  "message": "All Operators",

3  "status": "success",

4  "data": {}

5}

```

Updated 9 days ago

* * *

Did this page help you?

Yes

No



| time | status | user agent |  |
| :-- | :-- | :-- | :-- |
| Make a request to see history. |

#### URL Expired

The URL for this request expired after 30 days.

This documentation provides an overview of how you can collect payments from your customers through mobile money, without redirecting them to a separate page.

mobile

string

required

The phone number of the customer to make the payment.

mobile\_money\_operator\_ref\_id

string

required

Defaults to 20be6c20-adeb-4b5b-a7ba-0769820df4fb

Mobile Money Operator ref\_id get them using get supported Operators end point.

amount

string

required

The amount of money to be paid

charge\_id

string

required

Used to Identify the transaction. This MUST be unique for every transaction.

email

string

This is the email address of your customer. Transaction notification will be sent to this email address. Optional

first\_name

string

This is the first name of your customer. Optional

last\_name

string

This is the last name of your customer. Optional

# `` 200      200

json

# `` 400      400

object

status

string

message

string

data

string

Updated 9 days ago

* * *

You can then verify the payment and credit your customer with whatever they paid for. See our guide.

- [Charge Verification](https://developer.paychangu.com/reference/charge-verification-momo)

Did this page help you?

Yes

No

ShellNodeRubyPHPPython

[Log in to use your API keys](https://developer.paychangu.com/login?redirect_uri=/reference/charge-mobile-money)

```

xxxxxxxxxx

1curl --request POST \

2     --url https://api.paychangu.com/mobile-money/payments/initialize \

3     --header 'accept: application/json' \

4     --header 'content-type: application/json' \

5     --data '

6{

7  "mobile_money_operator_ref_id": "20be6c20-adeb-4b5b-a7ba-0769820df4fb"

8}

9'

```

```

xxxxxxxxxx

24



1"status": "success",

2  "message": "Payment initiated successfully.",

3

  "data": {

4    "amount": 50,

5    "charge_id": "27",

6    "ref_id": "95652259752",

7    "trans_id": "f28e10a6-5d71-4499-9ac3-fdce917fae98",

8    "first_name": "Mac",

9    "last_name": "Phiri",

10    "email": "youremail@domain.com",

11    "status": "pending",

12    "mobile": "+265997xxxx50",

13    "attempts": 2,

14    "currency": "MWK",

15    "mode": "live",

16    "created_at": "2024-06-15T00:21:33.000000Z",

17    "completed_at": null,

18

    "mobile_money": {

19      "name": "Airtel Money",

20      "ref_id": "20be6c20-adeb-4b5b-a7ba-0769820df4fb",

21      "country": "Malawi"

22    }

23  }

24}

```

Updated 9 days ago

* * *

You can then verify the payment and credit your customer with whatever they paid for. See our guide.

- [Charge Verification](https://developer.paychangu.com/reference/charge-verification-momo)

Did this page help you?

Yes

No



![](https://files.readme.io/d7f8cac6b341499ba042072071aa26931cd3dfdccda1b48a0c42043f56a927e7-small-logo.png)

## Page Not Found



| time | status | user agent |  |
| :-- | :-- | :-- | :-- |
| Make a request to see history. |

#### URL Expired

The URL for this request expired after 30 days.

Create dynamic virtual accounts to facilitate instant payments through bank transfers. Before getting started, we recommend reviewing the [method overview](https://developer.paychangu.com/docs/bank-transfer-1) for a better understanding.

amount

string

required

The amount of money to be paid

currency

string

required

Currency to charge in. \[ 'MWK' \]

payment\_method

string

required

Defaults to mobile\_bank\_transfer

charge\_id

string

required

Used to Identify the transaction. This MUST be unique for every transaction.

email

string

This is the email address of your customer. Transaction notification will be sent to this email address. Optional

first\_name

string

This is the first name of your customer. Optional

last\_name

string

This is the last name of your customer. Optional

# `` 200      200

object

status

string

message

string

data

object

payment\_account\_details

object

payment\_account\_details object

transaction

object

transaction object

# `` 400      400

object

status

string

message

string

data

string

Updated 9 days ago

* * *

Did this page help you?

Yes

No

ShellNodeRubyPHPPython

[Log in to use your API keys](https://developer.paychangu.com/login?redirect_uri=/reference/charge-via-bank-transfer)

```

xxxxxxxxxx

1curl --request POST \

2     --url https://api.paychangu.com/direct-charge/payments/initialize \

3     --header 'accept: application/json' \

4     --header 'content-type: application/json' \

5     --data '

6{

7  "payment_method": "mobile_bank_transfer"

8}

9'

```

```

xxxxxxxxxx

54
}

1

{

2  "status": "success",

3  "message": "Payment initialized successfully.",

4

  "data": {

5

    "payment_account_details": {

6      "bank_name": "Centenary Bank",

7      "account_number": "2652493369",

8      "account_name": "PayChangu Dev",

9      "account_expiration_timestamp": 1739830475

10    },

11

    "transaction": {

12      "charge_id": "PTC12383",

13      "ref_id": "75513659949",

14      "trans_id": null,

15      "currency": "MK",

16      "amount": 1020,

17      "first_name": null,

18      "last_name": null,

19      "email": null,

20      "type": "Direct API Payment",

21      "trace_id": "v0atWHs0NLEN3vbTAL4DKFLm59dVHuRM",

22      "status": "pending",

23      "mobile": "0",

24      "attempts": 1,

25      "mode": "live",

```

Updated 9 days ago

* * *

Did this page help you?

Yes

No



| time | status | user agent |  |
| :-- | :-- | :-- | :-- |
| Make a request to see history. |

#### URL Expired

The URL for this request expired after 30 days.

operator

string

required

Defaults to 123

Operator ID of the network.

amount

string

required

Defaults to 100

Amount of bill.

phone

string

required

Defaults to 0900000000

Mobile phone of the customer e.g 265000000000 without the plus symbol.

callback\_url

string

required

Defaults to https://webhook.site/

This is your IPN url, it is important for receiving payment notification webhooks

# `` 200      200

object

message

string

status

string

data

object

user\_id

string

type

string

amount

integer

Defaults to 0

biller

integer

Defaults to 0

charge

integer

Defaults to 0

ref

string

track

integer

Defaults to 0

trx\_ref

integer

Defaults to 0

recipientPhone

string

senderPhone

string

updated\_at

string

created\_at

string

id

integer

Defaults to 0

# `` 400      400

object

Updated 9 days ago

* * *

Did this page help you?

Yes

No

ShellNodeRubyPHPPython

[Log in to use your API keys](https://developer.paychangu.com/login?redirect_uri=/reference/create-bill)

```

xxxxxxxxxx

12

1curl --request POST \

2     --url https://api.paychangu.com/bill_payment/create \

3     --header 'accept: application/json' \

4     --header 'content-type: application/json' \

5     --data '

6{

7  "operator": "123",

8  "amount": "100",

9  "phone": "0900000000",

10  "callback_url": "https://webhook.site/"

11}

12'

```

```

xxxxxxxxxx

19



1

{

2  "message": "Topup  created",

3  "status": "success",

4

  "data": {

5    "user_id": "1111-1111-11111-11111-111111",

6    "type": "2",

7    "amount": 100,

8    "biller": 123,

9    "charge": 3,

10    "ref": "MZqAzUtjgToZ7pib",

11    "track": 13362120,

12    "trx_ref": 13362120,

13    "recipientPhone": "265000000000",

14    "senderPhone": null,

15    "updated_at": "2023-04-24T10:25:12.000000Z",

16    "created_at": "2023-04-24T10:25:12.000000Z",

17    "id": 27

18  }

19}

```

Updated 9 days ago

* * *

Did this page help you?

Yes

No



| time | status | user agent |  |
| :-- | :-- | :-- | :-- |
| Make a request to see history. |

#### URL Expired

The URL for this request expired after 30 days.

This endpoint enables you to retrieve all the banks we currently support in processing payments.

# `` 200      200

object

status

string

message

string

data

array of objects

data

object

uuid

string

name

string

# `` 400      400

object

Updated 9 days ago

* * *

Did this page help you?

Yes

No

ShellNodeRubyPHPPython

```

xxxxxxxxxx

1curl --request GET \

2     --url 'https://api.paychangu.com/direct-charge/payouts/supported-banks?currency=MWK' \

3     --header 'accept: application/json'

```

```

xxxxxxxxxx

46
}

1

{

2  "status": "success",

3  "message": "Retrieved successfully.",

4

  "data": [\
\
5\
\
    {\
\
6      "uuid": "82310dd1-ec9b-4fe7-a32c-2f262ef08681",\
\
7      "name": "National Bank of Malawi"\
\
8    },\
\
9\
\
    {\
\
10      "uuid": "5b9f76b1-620a-4eb9-8848-43d1e3e372dd",\
\
11      "name": "NBS Bank Limited"\
\
12    },\
\
13\
\
    {\
\
14      "uuid": "87e62436-0553-4fb5-a76d-f27d28420c5b",\
\
15      "name": "Ecobank Malawi Limited"\
\
16    },\
\
17\
\
    {\
\
18      "uuid": "b064172a-8a1b-4f7f-aad7-81b036c46c57",\
\
19      "name": "FDH Bank Limited"\
\
20    },\
\
21\
\
    {\
\
22      "uuid": "e7447c2c-c147-4907-b194-e087fe8d8585",\
\
23      "name": "Standard Bank Limited"\
\
24    },\
\
25\
\
    {\
\
```\
\
Updated 9 days ago\
\
* * *\
\
Did this page help you?\
\
Yes\
\
No



| time | status | user agent |  |
| :-- | :-- | :-- | :-- |
| Make a request to see history. |

#### URL Expired

The URL for this request expired after 30 days.

This endpoint enables you to retrieve all the mobile money operators that we currently support in processing payments. **CLICK TRY IT**

# `` 200      200

object

status

string

message

string

data

array of objects

data

object

id

integer

Defaults to 0

name

string

ref\_id

string

short\_code

string

logo

string

supported\_country

object

supported\_country object

# `` 400      400

object

Updated 9 days ago

* * *

Did this page help you?

Yes

No

ShellNodeRubyPHPPython

```

xxxxxxxxxx

1curl --request GET \

2     --url https://api.paychangu.com/mobile-money/ \

3     --header 'accept: application/json'

```

```

xxxxxxxxxx

28
}

1

{

2  "status": "success",

3  "message": "Supported mobile money operators retrieved successfully.",

4

  "data": [\
\
5\
\
    {\
\
6      "id": 1,\
\
7      "name": "TNM Mpamba",\
\
8      "ref_id": "27494cb5-ba9e-437f-a114-4e7a7686bcca",\
\
9      "short_code": "tnm",\
\
10      "logo": null,\
\
11\
\
      "supported_country": {\
\
12        "name": "Malawi",\
\
13        "currency": "MWK"\
\
14      }\
\
15    },\
\
16\
\
    {\
\
17      "id": 2,\
\
18      "name": "Airtel Money",\
\
19      "ref_id": "20be6c20-adeb-4b5b-a7ba-0769820df4fb",\
\
20      "short_code": "airtel",\
\
21      "logo": null,\
\
22\
\
      "supported_country": {\
\
23        "name": "Malawi",\
\
24        "currency": "MWK"\
\
25      }\
\
```\
\
Updated 9 days ago\
\
* * *\
\
Did this page help you?\
\
Yes\
\
No



| time | status | user agent |  |
| :-- | :-- | :-- | :-- |
| Make a request to see history. |

#### URL Expired

The URL for this request expired after 30 days.

amount

string

required

Amount to charge the customer.

currency

string

required

Defaults to MWK

Currency to charge in. \[ 'MWK', 'USD' \]

tx\_ref

string

Your transaction reference. This MUST be unique for every transaction.

first\_name

string

This is the first\_name of your customer.

last\_name

string

This is the last\_name of your customer. (optional)

callback\_url

string

required

This is your IPN url, it is important for receiving payment notification. Successful transactions redirects to this url after payment. {tx\_ref} is returned, so you don't need to pass it with your url

return\_url

string

required

Once the customer cancels or after multiple failed attempts, we will redirect to the return\_url with the query parameters tx\_ref and status of failed. (optional)

email

string

This is the email address of your customer. Transaction notification will be sent to this email address (optional)

meta

string

You can pass extra information here. (optional)

uuid

string

(optional)

customization

object

customization object

# `` 200      200

object

message

string

status

string

data

object

event

string

checkout\_url

string

data

object

data object

# `` 400      400

object

status

string

message

string

data

string

Updated 9 days ago

* * *

- [Transaction verification](https://developer.paychangu.com/reference/transaction-verification)

Did this page help you?

Yes

No

ShellNodeRubyPHPPython

[Log in to use your API keys](https://developer.paychangu.com/login?redirect_uri=/reference/initiate-transaction)

```

xxxxxxxxxx

1curl --request POST \

2     --url https://api.paychangu.com/payment \

3     --header 'accept: application/json' \

4     --header 'content-type: application/json' \

5     --data '{"currency":"MWK"}'

```

```

xxxxxxxxxx

15



1

{

2  "message": "Hosted payment session generated successfully.",

3  "status": "success",

4

  "data": {

5    "event": "checkout.session:created",

6    "checkout_url": "https://test-checkout.paychangu.com/7887951180",

7

    "data": {

8      "tx_ref": "98993331-d4f4-4840-899f-7b46cacbb9f4",

9      "currency": "MWK",

10      "amount": 1000,

11      "mode": "sandbox",

12      "status": "pending"

13    }

14  }

15}

```

Updated 9 days ago

* * *

- [Transaction verification](https://developer.paychangu.com/reference/transaction-verification)

Did this page help you?

Yes

No



PayChangu APIs offer powerful payment solutions tailored for your application. Not sure how to start? Visit our [Welcome](https://developer.paychangu.com/docs/welcome) page for a step-by-step guide to begin your integration journey.

PayChangu APIs adhere to RESTful principles for seamless and consistent integration:

1. **Request Methods:** We utilize standard HTTP methods like `GET`, `POST`, and `PUT` for communication, with HTTP response codes indicating the status and errors.
2. **Data Format:** All responses are in JSON format. Ensure your API requests include a `Content-Type` header set to `application/json`.
3. **Authentication:** Every endpoint requires authentication using your API keys. Make sure to securely include them in your requests.

Updated 9 days ago

* * *

Did this page help you?

Yes

No

Updated 9 days ago

* * *

Did this page help you?

Yes

No



| time | status | user agent |  |
| :-- | :-- | :-- | :-- |
| Make a request to see history. |

#### URL Expired

The URL for this request expired after 30 days.

This documentation provides an overview of how to send money to mobile money.

mobile

string

required

The phone number of the customer to receive the money

mobile\_money\_operator\_ref\_id

string

required

Mobile Money Operator ref\_id

amount

string

required

The amount of money to be sent

charge\_id

string

required

Used to Identify the transaction. This MUST be unique for every transaction.

email

string

This is the email address of your customer. Transaction notification will be sent to this email address. Optional

first\_name

string

This is the first name of your customer. Optional

last\_name

string

This is the last name of your customer. Optional

transaction\_status

string

\[optional\] used for sandbox Mode only .This takes only one of two values, namely, "failed" and "successful". Default value is "successful"

# `` 200      200

object

status

string

message

string

data

object

amount

number

Defaults to 0

charge\_id

string

ref\_id

string

trans\_id

string

first\_name

string

last\_name

string

email

string

type

string

trace\_id

string

status

string

mobile

string

attempts

integer

Defaults to 0

currency

string

mode

string

created\_at

string

completed\_at

string

event\_type

string

mobile\_money

object

mobile\_money object

transaction\_charges

object

transaction\_charges object

authorization

object

authorization object

# `` 400      400

object

status

string

message

string

data

string

Updated 9 days ago

* * *

Did this page help you?

Yes

No

ShellNodeRubyPHPPython

[Log in to use your API keys](https://developer.paychangu.com/login?redirect_uri=/reference/mobile-money-payout)

```

xxxxxxxxxx

1curl --request POST \

2     --url https://api.paychangu.com/mobile-money/payouts/initialize \

3     --header 'accept: application/json' \

4     --header 'content-type: application/json'

```

```

xxxxxxxxxx

41
}

1

{

2  "status": "success",

3  "message": "Payout processed successfully.",

4

  "data": {

5    "amount": 610.2,

6    "charge_id": "6789",

7    "ref_id": "86662145330",

8    "trans_id": null,

9    "first_name": null,

10    "last_name": null,

11    "email": null,

12    "type": "API Payout",

13    "trace_id": null,

14    "status": "success",

15    "mobile": "+265992xxxx20",

16    "attempts": 1,

17    "currency": "MK",

18    "mode": "sandbox",

19    "created_at": "2025-01-06T18:25:37.000000Z",

20    "completed_at": "2025-01-06T18:25:37.000000Z",

21    "event_type": "api.payout",

22

    "mobile_money": {

23      "name": "Airtel Money",

24      "ref_id": "20be6c20-adeb-4b5b-a7ba-0769820df4fb",

25      "country": "Malawi"

```

Updated 9 days ago

* * *

Did this page help you?

Yes

No



| time | status | user agent |  |
| :-- | :-- | :-- | :-- |
| Make a request to see history. |

#### URL Expired

The URL for this request expired after 30 days.

This endpoint helps you fetch the details of a transfer. By providing the `Charge ID`, you can obtain comprehensive details about the transfer, including its status, amount, currency, and other relevant metadata

charge\_id

string

required

Defaults to 12354

# `` 200      200

object

status

string

message

string

data

object

charge\_id

string

ref\_id

string

trans\_id

string

currency

string

amount

integer

Defaults to 0

first\_name

string

last\_name

string

email

string

type

string

trace\_id

string

status

string

mobile

string

attempts

integer

Defaults to 0

mode

string

created\_at

string

completed\_at

string

event\_type

string

transaction\_charges

object

transaction\_charges object

recipient\_account\_details

object

recipient\_account\_details object

# `` 400      400

object

Updated 9 days ago

* * *

Did this page help you?

Yes

No

ShellNodeRubyPHPPython

[Log in to use your API keys](https://developer.paychangu.com/login?redirect_uri=/reference/single-bank-payout-details)

```

xxxxxxxxxx

1curl --request GET \

2     --url https://api.paychangu.com/direct-charge/payouts/12354/details \

3     --header 'accept: application/json'

```

```

xxxxxxxxxx

33
}

1

{

2  "status": "successful",

3  "message": "Transaction details retrieved successfully",

4

  "data": {

5    "charge_id": "TRX683932Ygis898jjnyghvtguuu",

6    "ref_id": "33722634970",

7    "trans_id": null,

8    "currency": "MK",

9    "amount": 1000,

10    "first_name": null,

11    "last_name": null,

12    "email": null,

13    "type": "API Payout",

14    "trace_id": null,

15    "status": "failed",

16    "mobile": "0",

17    "attempts": 1,

18    "mode": "live",

19    "created_at": "2025-01-23T22:46:06.000000Z",

20    "completed_at": null,

21    "event_type": "api.payout",

22

    "transaction_charges": {

23      "currency": "MK",

24      "amount": "0"

25    },

```

Updated 9 days ago

* * *

Did this page help you?

Yes

No



| time | status | user agent |  |
| :-- | :-- | :-- | :-- |
| Make a request to see history. |

#### URL Expired

The URL for this request expired after 30 days.

# `` 200      200

object

status

string

message

string

data

object

current\_page

integer

Defaults to 0

total\_pages

integer

Defaults to 0

per\_page

integer

Defaults to 0

next\_page\_url

string

data

array of objects

data

object

charge\_id

string

ref\_id

string

trans\_id

string

currency

string

amount

integer

Defaults to 0

first\_name

string

last\_name

string

email

string

type

string

trace\_id

string

status

string

mobile

string

attempts

integer

Defaults to 0

mode

string

created\_at

string

completed\_at

string

event\_type

string

transaction\_charges

object

transaction\_charges object

recipient\_account\_details

object

recipient\_account\_details object

# `` 400      400

object

Updated 9 days ago

* * *

Did this page help you?

Yes

No

ShellNodeRubyPHPPython

[Log in to use your API keys](https://developer.paychangu.com/login?redirect_uri=/reference/single-bank-payout-details-copy)

```

xxxxxxxxxx

1curl --request GET \

2     --url https://api.paychangu.com/direct-charge/payouts \

3     --header 'accept: application/json'

```

```

xxxxxxxxxx

41
}

1

{

2  "status": "success",

3  "message": "Transactions retrieved successfully.",

4

  "data": {

5    "current_page": 1,

6    "total_pages": 1,

7    "per_page": 20,

8    "next_page_url": null,

9

    "data": [\
\
10\
\
      {\
\
11        "charge_id": "4567tfuty",\
\
12        "ref_id": "54438943842",\
\
13        "trans_id": null,\
\
14        "currency": "MK",\
\
15        "amount": 1000,\
\
16        "first_name": null,\
\
17        "last_name": null,\
\
18        "email": null,\
\
19        "type": "API Payout",\
\
20        "trace_id": null,\
\
21        "status": "success",\
\
22        "mobile": "0",\
\
23        "attempts": 1,\
\
24        "mode": "live",\
\
25        "created_at": "2025-01-24T06:46:40.000000Z",\
\
```\
\
Updated 9 days ago\
\
* * *\
\
Did this page help you?\
\
Yes\
\
No



| time | status | user agent |  |
| :-- | :-- | :-- | :-- |
| Make a request to see history. |

#### URL Expired

The URL for this request expired after 30 days.

This endpoint enables you to retrieve all the mobile money operators that we currently support in processing payments. **click TRY IT**

chargeId

string

required

Defaults to 12354

# `` 200      200

object

status

string

message

string

data

object

amount

integer

Defaults to 0

charge\_id

string

ref\_id

string

trans\_id

string

first\_name

string

last\_name

string

email

string

type

string

trace\_id

string

status

string

mobile

string

attempts

integer

Defaults to 0

currency

string

mode

string

created\_at

string

completed\_at

string

event\_type

string

mobile\_money

object

mobile\_money object

transaction\_charges

object

transaction\_charges object

authorization

object

authorization object

logs

array of objects

logs

object

type

string

message

string

created\_at

string

# `` 400      400

object

Updated 9 days ago

* * *

Did this page help you?

Yes

No

ShellNodeRubyPHPPython

[Log in to use your API keys](https://developer.paychangu.com/login?redirect_uri=/reference/single-charge-details)

```

xxxxxxxxxx

1curl --request GET \

2     --url https://api.paychangu.com/mobile-money/payments/12354/details \

3     --header 'accept: application/json'

```

```

xxxxxxxxxx

53
}

1

{

2  "status": "success",

3  "message": "Transaction retrieved successfully.",

4

  "data": {

5    "amount": 50,

6    "charge_id": "74536",

7    "ref_id": "36013728295",

8    "trans_id": "e90ec6c4-18b0-4503-b2df-ee19436b31d6",

9    "first_name": null,

10    "last_name": null,

11    "email": null,

12    "type": "Direct API Payment",

13    "trace_id": "wS3bV5uZkWEnKPv8r9Cv0ikII4BzuJ2S",

14    "status": "success",

15    "mobile": "+265992xxxx20",

16    "attempts": 1,

17    "currency": "MK",

18    "mode": "live",

19    "created_at": "2025-01-03T22:39:48.000000Z",

20    "completed_at": "2025-01-03T22:40:10.000000Z",

21    "event_type": "api.charge.payment",

22

    "mobile_money": {

23      "name": "Airtel Money",

24      "ref_id": "20be6c20-adeb-4b5b-a7ba-0769820df4fb",

25      "country": "Malawi"

```

Updated 9 days ago

* * *

Did this page help you?

Yes

No



| time | status | user agent |  |
| :-- | :-- | :-- | :-- |
| Make a request to see history. |

#### URL Expired

The URL for this request expired after 30 days.

This endpoint helps you fetch the details of a transfer. By providing the `Charge ID`, you can obtain comprehensive details about the transfer, including its status, amount, currency, and other relevant metadata

chargeId

string

required

Defaults to 12354

# `` 200      200

object

status

string

message

string

data

object

amount

number

Defaults to 0

charge\_id

string

ref\_id

string

trans\_id

string

first\_name

string

last\_name

string

email

string

type

string

status

string

mobile

string

attempts

integer

Defaults to 0

currency

string

mode

string

created\_at

string

completed\_at

string

event\_type

string

mobile\_money

object

mobile\_money object

transaction\_charges

object

transaction\_charges object

# `` 400      400

object

Updated 9 days ago

* * *

Did this page help you?

Yes

No

ShellNodeRubyPHPPython

[Log in to use your API keys](https://developer.paychangu.com/login?redirect_uri=/reference/single-charge-details-copy)

```

xxxxxxxxxx

1curl --request GET \

2     --url https://api.paychangu.com/mobile-money/payments/12354details \

3     --header 'accept: application/json'

```

```

xxxxxxxxxx

31
}

1

{

2  "status": "success",

3  "message": "Transaction retrieved successfully.",

4

  "data": {

5    "amount": 50.75,

6    "charge_id": "jvivuiviu",

7    "ref_id": "87452449015",

8    "trans_id": "bc35c29a-df2c-45e5-a15e-42d594589b8e",

9    "first_name": null,

10    "last_name": null,

11    "email": null,

12    "type": "API Payout",

13    "status": "success",

14    "mobile": "+265992xxxx20",

15    "attempts": 1,

16    "currency": "MK",

17    "mode": "live",

18    "created_at": "2024-07-17T21:22:41.000000Z",

19    "completed_at": "2024-07-17T21:22:44.000000Z",

20    "event_type": "api.payout",

21

    "mobile_money": {

22      "name": "Airtel Money",

23      "ref_id": "20be6c20-adeb-4b5b-a7ba-0769820df4fb",

24      "country": "Malawi"

25    },

```

Updated 9 days ago

* * *

Did this page help you?

Yes

No



| time | status | user agent |  |
| :-- | :-- | :-- | :-- |
| Make a request to see history. |

#### URL Expired

The URL for this request expired after 30 days.

This endpoint enables you to retrieve a single Bank Transfer transaction.

charge\_id

string

required

Defaults to 12354

# `` 200      200

object

status

string

message

string

data

object

transaction

object

transaction object

# `` 400      400

object

Updated 9 days ago

* * *

Did this page help you?

Yes

No

ShellNodeRubyPHPPython

[Log in to use your API keys](https://developer.paychangu.com/login?redirect_uri=/reference/single-transaction)

```

xxxxxxxxxx

1curl --request GET \

2     --url https://api.paychangu.com/direct-charge/transactions/12354%20/details \

3     --header 'accept: application/json'

```

```

xxxxxxxxxx

54
}

1

{

2  "status": "success",

3  "message": "Transaction retrieved successfully.",

4

  "data": {

5

    "transaction": {

6      "charge_id": "PTC12383",

7      "ref_id": "75513659949",

8      "trans_id": null,

9      "currency": "MK",

10      "amount": 1000,

11      "first_name": null,

12      "last_name": null,

13      "email": null,

14      "type": "Direct API Payment",

15      "trace_id": "v0atWHs0NLEN3vbTAL4DKFLm59dVHuRM",

16      "status": "success",

17      "mobile": "0",

18      "attempts": 1,

19      "mode": "live",

20      "created_at": "2025-02-17T21:14:35.000000Z",

21      "completed_at": "2025-02-17T21:18:40.000000Z",

22      "event_type": "api.charge.payment",

23

      "transaction_charges": {

24        "currency": "MK",

25        "amount": "20"

```

Updated 9 days ago

* * *

Did this page help you?

Yes

No



| time | status | user agent |  |
| :-- | :-- | :-- | :-- |
| Make a request to see history. |

#### URL Expired

The URL for this request expired after 30 days.

This endpoint enables you to retrieve all the mobile money operators that we currently support in processing payments. **CLICK TRY IT**

# `` 200      200

object

status

string

message

string

data

array of objects

data

object

id

integer

Defaults to 0

name

string

ref\_id

string

short\_code

string

logo

string

supports\_withdrawals

boolean

Defaults to true

supported\_country

object

supported\_country object

# `` 400      400

object

Updated 9 days ago

* * *

Did this page help you?

Yes

No

ShellNodeRubyPHPPython

```

xxxxxxxxxx

1curl --request GET \

2     --url https://api.paychangu.com/mobile-money \

3     --header 'accept: application/json'

```

```

xxxxxxxxxx

30
}

1

{

2  "status": "success",

3  "message": "Supported mobile money operators retrieved successfully.",

4

  "data": [\
\
5\
\
    {\
\
6      "id": 1,\
\
7      "name": "TNM Mpamba",\
\
8      "ref_id": "27494cb5-ba9e-437f-a114-4e7a7686bcca",\
\
9      "short_code": "tnm",\
\
10      "logo": null,\
\
11      "supports_withdrawals": false,\
\
12\
\
      "supported_country": {\
\
13        "name": "Malawi",\
\
14        "currency": "MWK"\
\
15      }\
\
16    },\
\
17\
\
    {\
\
18      "id": 2,\
\
19      "name": "Airtel Money",\
\
20      "ref_id": "20be6c20-adeb-4b5b-a7ba-0769820df4fb",\
\
21      "short_code": "airtel",\
\
22      "logo": null,\
\
23      "supports_withdrawals": true,\
\
24\
\
      "supported_country": {\
\
25        "name": "Malawi",\
\
```\
\
Updated 9 days ago\
\
* * *\
\
Did this page help you?\
\
Yes\
\
No



![](https://files.readme.io/d7f8cac6b341499ba042072071aa26931cd3dfdccda1b48a0c42043f56a927e7-small-logo.png)

## Page Not Found



| time | status | user agent |  |
| :-- | :-- | :-- | :-- |
| Make a request to see history. |

#### URL Expired

The URL for this request expired after 30 days.

This endpoint helps developers to query the final status of a Direct Charge transaction. This can be used to check transactions after they have been attempted.

chargeId

int32

required

Defaults to 2345

You can get the charge ID from the chargeId field that's present in the response

# `` 200      200

object

status

string

message

string

data

object

amount

integer

Defaults to 0

charge\_id

string

ref\_id

string

trans\_id

string

first\_name

string

last\_name

string

email

string

type

string

status

string

mobile

string

attempts

integer

Defaults to 0

currency

string

mode

string

created\_at

string

completed\_at

string

event\_type

string

mobile\_money

object

mobile\_money object

transaction\_charges

object

transaction\_charges object

authorization

object

authorization object

logs

array

logs

# `` 400      400

object

Updated 9 days ago

* * *

Did this page help you?

Yes

No

ShellNodeRubyPHPPython

[Log in to use your API keys](https://developer.paychangu.com/login?redirect_uri=/reference/verify-direct-charge-status)

```

xxxxxxxxxx

1curl --request GET \

2     --url https://api.paychangu.com/mobile-money/payments/2345/verify \

3     --header 'accept: application/json'

```

```

xxxxxxxxxx

41
}

1

{

2  "status": "successful",

3  "message": "Payment authorized and completed successfully.",

4

  "data": {

5    "amount": 100,

6    "charge_id": "2345",

7    "ref_id": "29263119322",

8    "trans_id": null,

9    "first_name": "Kim",

10    "last_name": "Banda",

11    "email": "yourmail@gmail.com",

12    "type": "Direct API Payment",

13    "status": "success",

14    "mobile": "+265993xxxx40",

15    "attempts": 1,

16    "currency": "MK",

17    "mode": "Live",

18    "created_at": "2024-08-18T14:45:11.000000Z",

19    "completed_at": "2024-08-18T14:52:44.000000Z",

20    "event_type": "api.charge.payment",

21

    "mobile_money": {

22      "name": "Airtel Money",

23      "ref_id": "20be6c20-adeb-4b5b-a7ba-0769820df4fb",

24      "country": "Malawi"

25    },

```

Updated 9 days ago

* * *

Did this page help you?

Yes

No



| time | status | user agent |  |
| :-- | :-- | :-- | :-- |
| Make a request to see history. |

#### URL Expired

The URL for this request expired after 30 days.

This endpoint helps developers to query the final status of a transaction. This can be used to check transactions of all payment types after they have been attempted. Except MoMo [Direct MoMo Charge](https://paychangu.readme.io/reference/verify-direct-charge-status).

tx\_ref

int32

required

Defaults to 2345

Obtain the transaction ID from the tx\_ref present in the response you receive after creating a transaction

# `` 200      200

object

status

string

message

string

data

object

event\_type

string

tx\_ref

string

mode

string

type

string

status

string

number\_of\_attempts

integer

Defaults to 0

reference

string

currency

string

amount

integer

Defaults to 0

charges

integer

Defaults to 0

customization

object

customization object

meta

string

authorization

object

authorization object

customer

object

customer object

logs

array of objects

logs

object

type

string

message

string

created\_at

string

created\_at

string

updated\_at

string

# `` 400      400

object

Updated 9 days ago

* * *

Did this page help you?

Yes

No

ShellNodeRubyPHPPython

[Log in to use your API keys](https://developer.paychangu.com/login?redirect_uri=/reference/verify-transaction-status)

```

xxxxxxxxxx

1curl --request GET \

2     --url https://api.paychangu.com/verify-payment/2345 \

3     --header 'accept: application/json'

```

```

xxxxxxxxxx

50
}

1

{

2  "status": "success",

3  "message": "Payment details retrieved successfully.",

4

  "data": {

5    "event_type": "checkout.payment",

6    "tx_ref": "PA54231315",

7    "mode": "live",

8    "type": "API Payment (Checkout)",

9    "status": "success",

10    "number_of_attempts": 1,

11    "reference": "26262633201",

12    "currency": "MWK",

13    "amount": 1000,

14    "charges": 40,

15

    "customization": {

16      "title": "iPhone 10",

17      "description": "Online order",

18      "logo": null

19    },

20    "meta": null,

21

    "authorization": {

22      "channel": "Card",

23      "card_number": "230377******0408",

24      "expiry": "2035-12",

25      "brand": "MASTERCARD",

```

Updated 9 days ago

* * *

Did this page help you?

Yes

No



![](https://files.readme.io/d7f8cac6b341499ba042072071aa26931cd3dfdccda1b48a0c42043f56a927e7-small-logo.png)

## Page Not Found