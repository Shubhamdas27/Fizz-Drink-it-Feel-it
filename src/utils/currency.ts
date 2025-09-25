export function formatIndianCurrency(amount: number): string {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}

export function formatIndianPrice(amount: number): string {
  return `₹${amount.toLocaleString('en-IN')}`;
}

// Helper function to convert any dollar amounts to Indian Rupees
export function convertToINR(amount: number, fromCurrency: string = 'USD'): number {
  if (fromCurrency === 'USD') {
    // Approximate conversion rate (you can update this with live rates)
    return Math.round(amount * 83); // 1 USD ≈ 83 INR
  }
  return amount;
}

// Ensure all prices display in Indian Rupees
export function displayPrice(amount: number, currency: string = 'INR'): string {
  if (currency === 'USD') {
    // Convert USD to INR
    const inrAmount = convertToINR(amount, 'USD');
    return `₹${inrAmount.toLocaleString('en-IN')}`;
  }
  return `₹${amount.toLocaleString('en-IN')}`;
}