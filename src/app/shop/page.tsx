"use client";

import { Bounded } from "@/components/Bounded";
import Image from "next/image";
import { redirectToCheckout } from "@/lib/stripe";
import { useState } from "react";

interface Product {
  id: string;
  name: string;
  flavor: string;
  price: number;
  image: string;
  description: string;
}

const products: Product[] = [
  {
    id: "1",
    name: "Fizzi Soda",
    flavor: "Cherry",
    price: 249,
    image: "/labels/cherry.png",
    description: "Refreshing cherry flavored fizzy drink with natural cherry extract."
  },
  {
    id: "2",
    name: "Fizzi Soda",
    flavor: "Grape",
    price: 249,
    image: "/labels/grape.png",
    description: "Bold grape flavor with a perfect fizzy kick."
  },
  {
    id: "3",
    name: "Fizzi Soda",
    flavor: "Lemon Lime",
    price: 249,
    image: "/labels/lemon-lime.png",
    description: "Crisp and citrusy lemon lime combination for the perfect refreshment."
  },
  {
    id: "4",
    name: "Fizzi Soda",
    flavor: "Strawberry",
    price: 249,
    image: "/labels/strawberry.png",
    description: "Sweet strawberry flavor with a delightful fizzy sensation."
  },
  {
    id: "5",
    name: "Fizzi Soda",
    flavor: "Watermelon",
    price: 249,
    image: "/labels/watermelon.png",
    description: "Juicy watermelon taste that's perfect for summer refreshment."
  }
];

export default function ShopPage() {
  const [loading, setLoading] = useState<string | null>(null);

  const handleBuyNow = async (product: Product) => {
    // Check if Stripe is configured
    const publishableKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY;
    const isStripeConfigured = publishableKey && publishableKey !== 'pk_test_your_stripe_publishable_key_here';
    
    if (!isStripeConfigured) {
      alert(`Demo Mode: ${product.flavor} Fizzi - ₹${product.price}\n\nTo enable real payments, please configure Stripe keys in .env.local file.\n\nSee STRIPE_SETUP.md for instructions.`);
      return;
    }

    setLoading(product.id);
    try {
      await redirectToCheckout([
        {
          name: product.name,
          flavor: product.flavor,
          description: product.description,
          price: product.price,
          image: `${window.location.origin}${product.image}`,
          quantity: 1,
        },
      ]);
    } catch (error) {
      console.error('Checkout error:', error);
      alert('Failed to proceed to checkout. Please try again.');
    } finally {
      setLoading(null);
    }
  };

  const handleVarietyPack = async () => {
    // Check if Stripe is configured
    const publishableKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY;
    const isStripeConfigured = publishableKey && publishableKey !== 'pk_test_your_stripe_publishable_key_here';
    
    if (!isStripeConfigured) {
      alert(`Demo Mode: Variety Pack - ₹1,099\n\nIncludes all 5 flavors!\n\nTo enable real payments, please configure Stripe keys in .env.local file.\n\nSee STRIPE_SETUP.md for instructions.`);
      return;
    }

    setLoading('variety-pack');
    try {
      const varietyPackItems = products.map(product => ({
        name: product.name,
        flavor: product.flavor,
        description: product.description,
        price: Math.round(1099 / products.length), // Distribute variety pack price
        image: `${window.location.origin}${product.image}`,
        quantity: 1,
      }));

      await redirectToCheckout(varietyPackItems);
    } catch (error) {
      console.error('Checkout error:', error);
      alert('Failed to proceed to checkout. Please try again.');
    } finally {
      setLoading(null);
    }
  };
  return (
    <Bounded>
      <div className="min-h-screen bg-gradient-to-b from-yellow-300 to-orange-300">
        {/* Header Section */}
        <div className="text-center py-16">
          <h1 className="text-7xl font-black uppercase text-orange-500 md:text-8xl lg:text-9xl mb-6">
            Shop Fizzi
          </h1>
          <p className="text-2xl text-sky-950 font-semibold max-w-2xl mx-auto">
            Discover our delicious range of fizzy sodas in amazing flavors
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 pb-16">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white/20 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Product Image */}
              <div className="relative h-64 flex items-center justify-center mb-6">
                <div className="relative w-32 h-48">
                  <Image 
                    src={product.image} 
                    alt={`${product.flavor} Fizzi Soda`}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Product Info */}
              <div className="text-center">
                <h3 className="text-3xl font-bold text-sky-950 mb-2">
                  {product.name}
                </h3>
                <p className="text-xl font-semibold text-orange-600 mb-3">
                  {product.flavor}
                </p>
                <p className="text-sky-950 mb-4 text-sm">
                  {product.description}
                </p>
                <p className="text-2xl font-black text-sky-950 mb-6">
                  ₹{product.price}
                </p>

                {/* Buy Now Button */}
                <button
                  onClick={() => handleBuyNow(product)}
                  disabled={loading === product.id}
                  className="w-full rounded-xl bg-orange-600 px-6 py-4 text-center text-lg font-bold uppercase tracking-wide text-white transition-colors duration-150 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                >
                  {loading === product.id ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Processing...
                    </>
                  ) : (
                    'Buy Now'
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center py-16 bg-sky-950/10">
          <h2 className="text-5xl font-black text-sky-950 mb-4">
            Can&apos;t decide?
          </h2>
          <p className="text-xl text-sky-950 mb-8 max-w-xl mx-auto">
            Try our variety pack with all flavors included!
          </p>
          <button 
            onClick={handleVarietyPack}
            disabled={loading === 'variety-pack'}
            className="rounded-xl bg-sky-950 px-8 py-4 text-center text-xl font-bold uppercase tracking-wide text-white transition-colors duration-150 hover:bg-sky-800 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
          >
            {loading === 'variety-pack' ? (
              <>
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                Processing...
              </>
            ) : (
              'Get Variety Pack - ₹1,099'
            )}
          </button>
        </div>
      </div>
    </Bounded>
  );
}