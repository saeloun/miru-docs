---
id: macos
title: Mac OS
---

## Installation

#### 1. Clone repo to local

```bash
git clone https://github.com/saeloun/miru-web.git
```

#### 2. Install [rvm](https://rvm.io/) and [nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

(**Tip**: To allow `nvm` to automatically detect and change node versions for
your project as you `cd` into the directory follow
[this](https://github.com/nvm-sh/nvm#deeper-shell-integration))

#### 3. Install ruby 3.1.1

```bash
rvm install $(cat .ruby-version)
```

#### 4. Install Node 16.4.2(can be skipped if you followed the tip mentioned in (2)

above)

```bash
nvm install $(cat .nvmrc)
```

#### 5. Install Postgres

```bash
brew install postgresql
```

#### 6. Install elasticsearch

```bash
brew install elastic/tap/elasticsearch-full
brew services start elasticsearch-full
```

#### 7. Install Redis

```bash
brew install redis
```

#### 8. Setup the app

```bash
# Go to the miru-web app directory

bin/setup
```

#### 9. Run app in local env

```bash
foreman start -f Procfile.dev
```

#### 10. Navigate to [http://0.0.0.0:3000](http://0.0.0.0:3000)

### To receive the emails in non-production apps.

Go to `/sent_emails` for accessing the emails(for `/sent_emails` route to work,
add `EMAIL_DELIVERY_METHOD='letter_opener_web'` to `.env`)

### To setup stripe payment app and webhooks locally
Goto https://dashboard.stripe.com/apikeys and copy publishable key & secret key.
<br/>
Add them to .env file
```
STRIPE_PUBLISHABLE_KEY="<publishable key>"
STRIPE_SECRET_KEY="<secret key>"
```

Goto https://dashboard.stripe.com/webhooks/create
<br/>
Copy `endpoint_secret` from right side, which is written under: "This is your Stripe CLI webhook secret for testing your endpoint locally" and add it to .env file
```
STRIPE_WEBHOOK_ENDPOINT_SECRET="<webhook secret>"
```

Need to setup stripe-cli in order to receive webhook events and forward them to miru server
<br/>
Follow [stripe documentation](https://stripe.com/docs/payments/checkout/fulfill-orders) or run following commands for stripe-cli setup:
```
brew install stripe/stripe-cli/stripe
stripe login

stripe status
=> All services are online.
```

Start local stripe listener as follow:
```
 stripe listen --forward-to localhost:3000/webhooks/stripe/checkout/fulfillment
```

Goto http://localhost:3000/profile/edit/payment and connect the same stripe account(whose keys are used above in .env file)


## Testing in Review apps

### User Test credentials

| Role     | Email               | Password |
| -------- | ------------------- | -------- |
| Owner    | vipul@example.com   | password |
| Admin    | supriya@example.com | password |
| Employee | akhil@example.com   | password |
