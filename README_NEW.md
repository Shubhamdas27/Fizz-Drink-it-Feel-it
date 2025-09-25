# 🥤 Fizzi - Drink it, Feel it!

A modern, interactive soda e-commerce website built with **Next.js 14**, **Three.js**, **GSAP animations**, and **Stripe payments**.

![Fizzi Preview](https://img.shields.io/badge/Status-Live-success?style=for-the-badge)
![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-blue?style=for-the-badge&logo=typescript)
![Stripe](https://img.shields.io/badge/Stripe-Payment-blueviolet?style=for-the-badge&logo=stripe)

## ✨ Features

### 🛍️ **E-Commerce Functionality**
- **Product Catalog**: 5 delicious Fizzi flavors (Cherry, Grape, Lemon Lime, Strawberry, Watermelon)
- **Shopping Cart**: Individual purchases and variety packs
- **Stripe Integration**: Secure payment processing in Indian Rupees (₹)
- **Order Success**: Beautiful confirmation pages with order tracking

### 🎨 **Interactive Design**
- **3D Animations**: Three.js powered product visualizations
- **GSAP Transitions**: Smooth scroll-triggered animations
- **3D Models**: Interactive soda cans with flavor labels
- **Responsive Design**: Works perfectly on all devices

### 💳 **Payment System**
- **Currency**: Indian Rupees (₹) - No more dollars!
- **Secure Processing**: Stripe-powered checkout
- **Demo Mode**: Works without Stripe configuration
- **Test Cards**: Full testing capability

### 🎯 **Modern Tech Stack**
- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS
- **Animations**: GSAP + ScrollTrigger
- **3D Graphics**: Three.js + React Three Fiber
- **CMS**: Prismic (headless CMS)
- **Payments**: Stripe API
- **Font**: Montserrat (Google Fonts)

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Shubhamdas27/Fizz-Drink-it-Feel-it.git
   cd Fizz-Drink-it-Feel-it
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.local.example .env.local
   # Edit .env.local with your Stripe keys
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   ```
   http://localhost:3000
   ```

## 💳 Stripe Setup

### Get Your Stripe Keys
1. Go to [Stripe Dashboard](https://dashboard.stripe.com/register)
2. Create a **FREE** account
3. Navigate to **Developers > API Keys**
4. Copy your test keys

### Update Environment Variables
```bash
# .env.local
STRIPE_SECRET_KEY=sk_test_your_actual_secret_key
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_your_actual_publishable_key
NEXT_PUBLIC_DOMAIN=http://localhost:3000
```

### Test Cards
- **Success**: `4242 4242 4242 4242`
- **Decline**: `4000 0000 0000 0002`
- **3D Secure**: `4000 0000 0000 3220`

## 🛍️ Product Pricing

| Product | Price (₹) |
|---------|-----------|
| Individual Fizzi | ₹249 |
| Variety Pack (5 flavors) | ₹1,099 |

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── shop/              # Shop page with products
│   ├── success/           # Payment success page
│   └── api/checkout/      # Stripe API route
├── components/            # Reusable components
│   ├── SodaCan.tsx       # 3D soda can model
│   ├── ShopButton.tsx    # Custom navigation button
│   └── ...
├── slices/               # Prismic slices
│   ├── Hero/            # Landing section with 3D scene
│   ├── Carousel/        # Product carousel
│   └── ...
├── lib/                 # Utility functions
│   └── stripe.ts       # Stripe configuration
└── utils/              # Helper functions
    └── currency.ts     # Indian Rupee formatting
```

## 🎨 Design Features

- **Color Scheme**: Vibrant oranges and sky blues
- **Typography**: Montserrat font family
- **Layout**: Grid-based responsive design
- **Animations**: Scroll-triggered GSAP animations
- **3D Elements**: Interactive product models

## 🔧 Development Commands

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run format       # Format code with Prettier
```

## 📱 Screenshots & Demo

### 🏠 Home Page
- Interactive hero section with 3D animations
- Flavor carousel with product showcase
- Smooth scroll transitions

### 🛒 Shop Page
- Complete product catalog
- Add to cart functionality  
- Stripe checkout integration

### ✅ Success Page
- Order confirmation
- Payment receipt
- Continue shopping options

## 🌟 Key Achievements

✅ **Converted all pricing from USD to Indian Rupees (₹)**  
✅ **Implemented secure Stripe payment processing**  
✅ **Created responsive shop interface with 5 product variants**  
✅ **Built 3D interactive product visualizations**  
✅ **Added smooth GSAP scroll animations**  
✅ **Integrated Prismic headless CMS**  
✅ **Implemented error handling and demo mode**  

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/AmazingFeature`
3. Commit your changes: `git commit -m 'Add some AmazingFeature'`
4. Push to the branch: `git push origin feature/AmazingFeature`
5. Open a Pull Request

## 📄 License

This project is licensed under the Apache 2.0 License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Prismic** for the headless CMS
- **Stripe** for secure payment processing
- **Three.js** for 3D graphics
- **GSAP** for smooth animations
- **Tailwind CSS** for styling

## 📞 Support

If you have any questions or need help setting up:

- Check the [STRIPE_SETUP.md](STRIPE_SETUP.md) for payment setup
- Check the [STRIPE_ERROR_FIX.md](STRIPE_ERROR_FIX.md) for troubleshooting
- Open an issue on GitHub

---

**Made with ❤️ by Shubham Das**

🔗 **Live Demo**: [Add your deployment URL here]  
🛒 **Shop Now**: Experience the fizzy goodness!