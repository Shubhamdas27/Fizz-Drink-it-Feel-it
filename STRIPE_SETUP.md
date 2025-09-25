# Stripe Payment Integration Setup

## Step 1: Get Your Stripe Keys

1. Go to [Stripe Dashboard](https://dashboard.stripe.com)
2. Create a free Stripe account if you don't have one
3. Navigate to **Developers > API Keys**
4. Copy your **Publishable key** (starts with `pk_test_`)
5. Copy your **Secret key** (starts with `sk_test_`)

## Step 2: Update Environment Variables

Open `.env.local` and replace the placeholder keys:

```bash
# Replace with your actual Stripe keys
STRIPE_SECRET_KEY=sk_test_your_actual_secret_key_here
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_your_actual_publishable_key_here

# Update domain if deploying
NEXT_PUBLIC_DOMAIN=http://localhost:3003
```

## Step 3: Test the Payment Flow

1. Start the development server: `npm run dev`
2. Go to `/shop` page
3. Click "Buy Now" on any product
4. Use Stripe test card numbers:
   - **Success**: `4242 4242 4242 4242`
   - **Decline**: `4000 0000 0000 0002`
   - Use any future date for expiry
   - Use any 3-digit CVC

## Features Implemented

✅ **Individual Product Purchases**  
✅ **Variety Pack Option**  
✅ **Indian Rupee (INR) Currency**  
✅ **Shipping Address Collection**  
✅ **Success Page with Order Confirmation**  
✅ **Loading States & Error Handling**  
✅ **Mobile Responsive Design**

## Payment Flow

1. User clicks "Buy Now" → 2. Redirect to Stripe Checkout → 3. Payment Processing → 4. Success Page

## Important Notes

- This uses Stripe Test Mode (safe for testing)
- Real payments require switching to Live Mode
- All prices are in Indian Rupees (INR)
- Shipping is restricted to India only
