import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

// Check if Stripe keys are properly configured
const stripeSecretKey = process.env.STRIPE_SECRET_KEY;

if (!stripeSecretKey || stripeSecretKey === 'sk_test_your_stripe_secret_key_here') {
  console.error('❌ Stripe Secret Key not configured properly!');
  console.error('Please update your .env.local file with valid Stripe keys from https://dashboard.stripe.com/test/apikeys');
}

const stripe = new Stripe(stripeSecretKey || 'dummy_key', {
  apiVersion: '2025-08-27.basil',
});

export async function POST(request: NextRequest) {
  try {
    // Check if Stripe is properly configured
    if (!stripeSecretKey || stripeSecretKey === 'sk_test_your_stripe_secret_key_here') {
      return NextResponse.json(
        { 
          error: 'Stripe not configured. Please add your Stripe keys to .env.local file.',
          details: 'Visit https://dashboard.stripe.com/test/apikeys to get your keys.'
        },
        { status: 500 }
      );
    }

    const body = await request.json();
    const { items, successUrl, cancelUrl } = body;

    // Create line items for Stripe
    const lineItems = items.map((item: any) => ({
      price_data: {
        currency: 'inr',
        product_data: {
          name: `${item.name} - ${item.flavor}`,
          description: item.description,
          images: item.image ? [item.image] : [],
        },
        unit_amount: item.price * 100, // Convert to paise (Indian currency cents)
      },
      quantity: item.quantity || 1,
    }));

    // Create Checkout Sessions from body params
    const session = await stripe.checkout.sessions.create({
      line_items: lineItems,
      mode: 'payment',
      success_url: successUrl || `${process.env.NEXT_PUBLIC_DOMAIN}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: cancelUrl || `${process.env.NEXT_PUBLIC_DOMAIN}/shop`,
      currency: 'inr',
      payment_method_types: ['card'],
      billing_address_collection: 'required',
      shipping_address_collection: {
        allowed_countries: ['IN'], // Only allow shipping to India
      },
    });

    return NextResponse.json({ url: session.url });
  } catch (err: any) {
    console.error('Stripe checkout error:', err);
    
    // Handle specific Stripe errors
    if (err.type === 'StripeAuthenticationError') {
      return NextResponse.json(
        { 
          error: 'Invalid Stripe API key. Please check your Stripe configuration.',
          details: 'Make sure you have added valid Stripe keys to your .env.local file.'
        },
        { status: 401 }
      );
    }
    
    return NextResponse.json(
      { 
        error: 'Error creating checkout session',
        details: err.message || 'Unknown error occurred'
      },
      { status: 500 }
    );
  }
}