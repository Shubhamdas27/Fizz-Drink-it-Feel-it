import React from 'react';

interface PrismicPriceTextProps {
  price?: number;
  currency?: string;
  className?: string;
}

export default function PrismicPriceText({ 
  price = 249, 
  currency = 'INR', 
  className = '' 
}: PrismicPriceTextProps) {
  const formatPrice = (amount: number, curr: string) => {
    if (curr === 'INR') {
      return `₹${amount}`;
    }
    return `₹${amount}`; // Default to INR for Indian market
  };

  return (
    <span className={`font-bold ${className}`}>
      {formatPrice(price, currency)}
    </span>
  );
}