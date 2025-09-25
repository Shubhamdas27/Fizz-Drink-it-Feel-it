import { loadStripe } from '@stripe/stripe-js';

// Check if publishable key is configured
const publishableKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY;

if (!publishableKey || publishableKey === 'pk_test_your_stripe_publishable_key_here') {
  console.warn('⚠️ Stripe Publishable Key not configured properly!');
  console.warn('Please update your .env.local file with valid Stripe keys from https://dashboard.stripe.com/test/apikeys');
}

// Make sure to call `loadStripe` outside of a component's render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(
  publishableKey || 'dummy_key'
);

export default stripePromise;

// Helper function to redirect to Stripe Checkout
export const redirectToCheckout = async (items: any[]) => {
  // Check if Stripe is configured before attempting checkout
  if (!publishableKey || publishableKey === 'pk_test_your_stripe_publishable_key_here') {
    alert('Stripe payment is not configured. Please contact the administrator.');
    return;
  }

  const stripe = await stripePromise;
  
  if (!stripe) {
    throw new Error('Stripe failed to initialize');
  }

  try {
    const response = await fetch('/api/checkout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        items,
        successUrl: `${window.location.origin}/success`,
        cancelUrl: `${window.location.origin}/shop`,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      // Handle specific error messages from the API
      if (data.error) {
        console.error('Checkout API Error:', data.error);
        if (data.details) {
          console.error('Details:', data.details);
        }
        
        // Show user-friendly error message
        if (response.status === 401 || response.status === 500) {
          alert(`Payment system not available: ${data.error}\n\nPlease contact support.`);
        } else {
          alert(`Error: ${data.error}`);
        }
        return;
      }
      throw new Error('Checkout failed');
    }

    if (data.error) {
      throw new Error(data.error);
    }

    // Redirect to Stripe Checkout
    window.location.href = data.url;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};