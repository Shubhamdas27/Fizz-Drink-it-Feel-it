# 🔧 Fix Stripe Payment Error (401 Unauthorized)

## 🚨 Problem

You're getting a 401 error because Stripe API keys are not properly configured.

## ✅ Solution

### Step 1: Get Your Stripe Keys

1. Go to [Stripe Dashboard](https://dashboard.stripe.com/register)
2. Create a **FREE** Stripe account
3. Navigate to **Developers > API Keys**
4. Copy these keys:
   - **Publishable key** (starts with `pk_test_`)
   - **Secret key** (starts with `sk_test_`)

### Step 2: Update Environment Variables

Open your `.env.local` file and replace the placeholder values:

```bash
# Replace these with your actual Stripe keys:
STRIPE_SECRET_KEY=sk_test_51ABC123... # Your actual secret key
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_51XYZ789... # Your actual publishable key
```

### Step 3: Restart Server

```bash
npm run dev
```

## 🧪 Test Cards (Once Fixed)

- **Success**: `4242 4242 4242 4242`
- **Decline**: `4000 0000 0000 0002`
- Use any future date for expiry
- Use any 3-digit CVC

## 💡 Current Behavior

- **Without Stripe Keys**: Shows demo mode with fake checkout
- **With Stripe Keys**: Real payment processing

## 🔒 Security Note

- Test keys (starting with `sk_test_` and `pk_test_`) are safe to use
- Never share your live/production keys
- The `.env.local` file should not be committed to git

---

**Your payment system will work perfectly once you add the Stripe keys!** 🚀
