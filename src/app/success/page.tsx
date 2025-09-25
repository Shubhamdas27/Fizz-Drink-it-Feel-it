"use client";

import { Bounded } from "@/components/Bounded";
import ShopButton from "@/components/ShopButton";
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function SuccessPage() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get('session_id');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // You can verify the session here with Stripe if needed
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <Bounded>
        <div className="min-h-screen bg-gradient-to-b from-green-300 to-yellow-300 flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-orange-600 mx-auto mb-4"></div>
            <p className="text-xl text-sky-950">Processing your order...</p>
          </div>
        </div>
      </Bounded>
    );
  }

  return (
    <Bounded>
      <div className="min-h-screen bg-gradient-to-b from-green-300 to-yellow-300">
        <div className="text-center py-16">
          {/* Success Icon */}
          <div className="mb-8">
            <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg 
                className="w-12 h-12 text-white" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={3} 
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
          </div>

          {/* Success Message */}
          <h1 className="text-6xl font-black uppercase text-green-600 md:text-7xl lg:text-8xl mb-6">
            Order Success!
          </h1>
          
          <div className="max-w-2xl mx-auto mb-8">
            <p className="text-2xl text-sky-950 font-semibold mb-4">
              🎉 Thank you for your purchase!
            </p>
            <p className="text-xl text-sky-950 mb-2">
              Your Fizzi sodas are on their way!
            </p>
            <p className="text-lg text-sky-700">
              You will receive a confirmation email shortly with your order details.
            </p>
            {sessionId && (
              <p className="text-sm text-sky-600 mt-4">
                Order ID: {sessionId.slice(0, 20)}...
              </p>
            )}
          </div>

          {/* Order Info */}
          <div className="bg-white/20 backdrop-blur-sm rounded-3xl p-8 max-w-md mx-auto mb-8">
            <h3 className="text-2xl font-bold text-sky-950 mb-4">
              What&apos;s Next?
            </h3>
            <div className="space-y-3 text-left">
              <div className="flex items-center">
                <span className="text-green-500 mr-3">✓</span>
                <span className="text-sky-950">Payment processed successfully</span>
              </div>
              <div className="flex items-center">
                <span className="text-green-500 mr-3">✓</span>
                <span className="text-sky-950">Order confirmation sent</span>
              </div>
              <div className="flex items-center">
                <span className="text-yellow-500 mr-3">⏳</span>
                <span className="text-sky-950">Preparing your order</span>
              </div>
              <div className="flex items-center">
                <span className="text-blue-500 mr-3">📦</span>
                <span className="text-sky-950">Ships within 2-3 business days</span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <ShopButton 
              href="/shop" 
              className="px-8 py-4"
            >
              Continue Shopping
            </ShopButton>
            
            <ShopButton 
              href="/" 
              className="px-8 py-4 bg-sky-950 hover:bg-sky-800"
            >
              Back to Home
            </ShopButton>
          </div>
        </div>
      </div>
    </Bounded>
  );
}