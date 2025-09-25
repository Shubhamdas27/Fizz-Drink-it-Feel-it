# 🥤 Fizzi - Drink it, Feel it!

> A stunning 3D animated e-commerce website for the fictional soda brand Fizzi, built with cutting-edge web technologies.

[![Next.js](https://img.shields.io/badge/Next.js-14.2.4-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Stripe](https://img.shields.io/badge/Stripe-Payment-635BFF?style=for-the-badge&logo=stripe&logoColor=white)](https://stripe.com/)
[![Three.js](https://img.shields.io/badge/Three.js-r164-000000?style=for-the-badge&logo=three.js&logoColor=white)](https://threejs.org/)
[![GSAP](https://img.shields.io/badge/GSAP-3.12-88CE02?style=for-the-badge&logo=greensock&logoColor=white)](https://gsap.com/)

## 📖 Table of Contents

- [✨ Features](#-features)
- [🎯 Demo](#-demo)
- [🚀 Quick Start](#-quick-start)
- [💳 Stripe Payment Setup](#-stripe-payment-setup)
- [🛍️ E-Commerce Features](#️-e-commerce-features)
- [🎨 Design & Animations](#-design--animations)
- [📁 Project Structure](#-project-structure)
- [🔧 Technical Stack](#-technical-stack)
- [📱 Responsive Design](#-responsive-design)
- [🔨 Development](#-development)
- [🌟 Key Achievements](#-key-achievements)
- [🚀 Deployment](#-deployment)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)

## ✨ Features

### 🛍️ Complete E-Commerce Experience

- **Product Catalog**: 5 unique Fizzi flavors with detailed descriptions
- **Individual Purchases**: Buy single bottles at ₹249 each
- **Variety Pack**: Get all 5 flavors for ₹1,099 (Special offer!)
- **Secure Checkout**: Stripe-powered payment processing
- **Order Confirmation**: Beautiful success pages with order tracking
- **Demo Mode**: Works without Stripe configuration for testing

### 🎨 Immersive 3D Experience

- **Interactive 3D Models**: Realistic soda can models with flavor-specific labels
- **Smooth Animations**: GSAP-powered scroll-triggered animations
- **Dynamic Scenes**: Three.js environments with floating bubbles and effects
- **Responsive 3D**: Optimized for both desktop and mobile devices

### 💰 Indian Market Focus

- **Currency**: All prices in Indian Rupees (₹) - No more dollars!
- **Localized Pricing**: Competitive pricing for the Indian market
- **Regional Payment Methods**: Supports Indian cards and payment preferences
- **Shipping**: Configured for Indian addresses

### 🎯 Modern Web Technologies

- **Next.js 14**: Latest App Router with server components
- **TypeScript**: Full type safety throughout the codebase
- **Tailwind CSS**: Utility-first styling with custom configurations
- **Prismic CMS**: Headless content management
- **Montserrat Font**: Clean, modern typography from Google Fonts

## 🎯 Demo

🔗 **Live Website**: [Add your deployed URL here]

### Test the Payment System

Use these Stripe test cards:

- **Successful Payment**: `4242 4242 4242 4242`
- **Declined Payment**: `4000 0000 0000 0002`
- **3D Secure**: `4000 0000 0000 3220`
- **Expiry**: Any future date
- **CVC**: Any 3-digit number

## 🚀 Quick Start

### Prerequisites

```bash
Node.js 18+
npm or yarn
Git
```

### Installation Steps

1. **Clone the Repository**

   ```bash
   git clone https://github.com/Shubhamdas27/Fizz-Drink-it-Feel-it.git
   cd Fizz-Drink-it-Feel-it
   ```

2. **Install Dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Environment Setup**

   ```bash
   # Copy the environment template
   cp .env.local.example .env.local
   ```

4. **Configure Stripe (Optional for Demo)**
   Edit `.env.local`:

   ```bash
   STRIPE_SECRET_KEY=sk_test_your_stripe_secret_key
   NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_your_stripe_publishable_key
   NEXT_PUBLIC_DOMAIN=http://localhost:3000
   ```

5. **Start Development Server**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

6. **Open Your Browser**
   Navigate to `http://localhost:3000`

## 💳 Stripe Payment Setup

### Step 1: Create Stripe Account

1. Go to [Stripe Dashboard](https://dashboard.stripe.com/register)
2. Sign up for a **FREE** Stripe account
3. Verify your email address
4. Access your dashboard

### Step 2: Get API Keys

1. Navigate to **Developers** → **API Keys**
2. Copy your **Publishable key** (starts with `pk_test_`)
3. Copy your **Secret key** (starts with `sk_test_`)
4. These are test keys - safe for development

### Step 3: Configure Environment

Update your `.env.local` file:

```bash
# Stripe Configuration
STRIPE_SECRET_KEY=sk_test_51Hxxx...your_secret_key_here
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_51Hxxx...your_publishable_key_here

# Application URL
NEXT_PUBLIC_DOMAIN=http://localhost:3000
```

### Step 4: Restart Server

```bash
npm run dev
```

### Troubleshooting Stripe Setup

**Problem**: Getting 401 Unauthorized errors
**Solution**: Make sure your Stripe keys are correctly added to `.env.local`

**Problem**: Payments not processing
**Solution**: Verify you're using test keys (starting with `pk_test_` and `sk_test_`)

**Problem**: Demo mode always showing
**Solution**: Restart your development server after adding Stripe keys

## 🛍️ E-Commerce Features

### Product Catalog

| Flavor        | Price | Description                                                        |
| ------------- | ----- | ------------------------------------------------------------------ |
| 🍒 Cherry     | ₹249  | Refreshing cherry flavored fizzy drink with natural cherry extract |
| 🍇 Grape      | ₹249  | Bold grape flavor with a perfect fizzy kick                        |
| 🍋 Lemon Lime | ₹249  | Crisp and citrusy lemon lime combination                           |
| 🍓 Strawberry | ₹249  | Sweet strawberry flavor with delightful fizzy sensation            |
| 🍉 Watermelon | ₹249  | Juicy watermelon taste perfect for summer refreshment              |

### Special Offers

- **Variety Pack**: All 5 flavors for ₹1,099 (Save ₹146!)
- **Individual Purchase**: ₹249 per bottle
- **Free Shipping**: On orders above ₹500 (configurable)

### Shopping Experience

1. **Browse Products**: Interactive product carousel with 3D models
2. **Select Flavor**: Click on any product to view details
3. **Buy Now**: Instant purchase with Stripe checkout
4. **Secure Payment**: Encrypted payment processing
5. **Order Confirmation**: Immediate confirmation with order ID
6. **Success Page**: Beautiful confirmation with next steps

## 🎨 Design & Animations

### Visual Design

- **Color Palette**:
  - Primary: Orange (#EA580C, #FB923C)
  - Secondary: Sky Blue (#0C4A6E, #0EA5E9)
  - Background: Yellow (#FDE047)
- **Typography**: Montserrat font family with multiple weights
- **Layout**: Grid-based responsive design system

### 3D Elements

- **Soda Can Models**: Realistic 3D models with physics-based materials
- **Interactive Labels**: Each flavor has unique label textures
- **Dynamic Lighting**: Realistic lighting and shadows
- **Particle Effects**: Floating bubbles and atmospheric effects

### Animations

- **Scroll Triggers**: Elements animate as you scroll
- **Smooth Transitions**: GSAP-powered smooth animations
- **Loading States**: Interactive loading indicators during checkout
- **Hover Effects**: Subtle micro-interactions on buttons and products

### Page Sections

1. **Hero Section**: 3D animated landing with interactive elements
2. **Product Carousel**: Rotating showcase of all flavors
3. **Features Section**: Highlighting product benefits
4. **Call-to-Action**: Prominent shop now buttons
5. **Footer**: Contact information and links

## 📁 Project Structure

```
Fizz-Drink-it-Feel-it/
├── 📁 public/                    # Static assets
│   ├── 📁 fonts/                # Alpino font files
│   ├── 📁 hdr/                  # HDR environment maps
│   ├── 📁 labels/               # Product label textures
│   ├── Soda-can.gltf           # 3D model file
│   └── Soda-can.bin            # 3D model binary
├── 📁 src/
│   ├── 📁 app/                  # Next.js App Router
│   │   ├── 📁 api/
│   │   │   └── 📁 checkout/     # Stripe API endpoint
│   │   │       └── route.ts     # Payment processing
│   │   ├── 📁 shop/            # Shop page
│   │   │   └── page.tsx        # Product catalog
│   │   ├── 📁 success/         # Payment success
│   │   │   └── page.tsx        # Order confirmation
│   │   ├── layout.tsx          # Root layout with Montserrat font
│   │   ├── page.tsx            # Home page
│   │   └── app.css             # Global styles
│   ├── 📁 components/          # Reusable components
│   │   ├── Bounded.tsx         # Layout wrapper
│   │   ├── Button.tsx          # Prismic button component
│   │   ├── ShopButton.tsx      # Custom shop navigation
│   │   ├── SodaCan.tsx         # 3D soda can model
│   │   ├── FloatingCan.tsx     # Animated floating can
│   │   ├── Header.tsx          # Site header
│   │   ├── Footer.tsx          # Site footer
│   │   └── ViewCanvas.tsx      # 3D canvas wrapper
│   ├── 📁 slices/              # Prismic slice components
│   │   ├── 📁 Hero/            # Landing section
│   │   │   ├── index.tsx       # Hero component
│   │   │   ├── Scene.tsx       # 3D scene
│   │   │   └── Bubbles.tsx     # Particle effects
│   │   ├── 📁 Carousel/        # Product carousel
│   │   │   ├── index.tsx       # Carousel component
│   │   │   └── WavyCircles.tsx # Background effects
│   │   ├── 📁 AlternatingText/ # Text sections
│   │   ├── 📁 BigText/         # Large text displays
│   │   └── 📁 SkyDive/         # Animated text effects
│   ├── 📁 lib/                 # Utility libraries
│   │   └── stripe.ts           # Stripe client configuration
│   ├── 📁 utils/               # Helper functions
│   │   └── currency.ts         # Indian Rupee formatting
│   ├── 📁 hooks/               # React hooks
│   │   ├── useMediaQuery.ts    # Responsive utilities
│   │   └── useStore.ts         # State management
│   └── prismicio.ts            # Prismic configuration
├── 📁 customtypes/             # Prismic custom types
├── .env.local                  # Environment variables
├── .gitignore                  # Git ignore rules
├── package.json                # Dependencies and scripts
├── tailwind.config.js          # Tailwind configuration
├── tsconfig.json               # TypeScript configuration
└── README.md                   # This file
```

## 🔧 Technical Stack

### Frontend Framework

- **Next.js 14.2.4**: React framework with App Router
- **React 18**: Latest React with concurrent features
- **TypeScript 5.0**: Full type safety and developer experience

### Styling & UI

- **Tailwind CSS 3.4**: Utility-first CSS framework
- **Montserrat Font**: Modern, clean typography from Google Fonts
- **Custom CSS**: Additional styles in `app.css`

### 3D Graphics & Animation

- **Three.js**: 3D graphics library
- **@react-three/fiber**: React renderer for Three.js
- **@react-three/drei**: Useful helpers for R3F
- **GSAP 3.12**: Professional animation library
- **ScrollTrigger**: Scroll-based animations

### Payment Processing

- **Stripe**: Secure payment processing
- **@stripe/stripe-js**: Client-side Stripe integration
- **Stripe API**: Server-side payment handling

### Content Management

- **Prismic**: Headless CMS
- **@prismicio/client**: Prismic JavaScript SDK
- **@prismicio/next**: Next.js integration
- **@prismicio/react**: React components

### Development Tools

- **ESLint**: Code linting
- **Prettier**: Code formatting
- **Git**: Version control
- **npm/yarn**: Package management

## 📱 Responsive Design

### Breakpoints

```javascript
// Tailwind CSS breakpoints used
sm: 640px    // Small devices
md: 768px    // Tablets
lg: 1024px   // Laptops
xl: 1280px   // Desktops
2xl: 1536px  // Large screens
```

### Mobile Optimizations

- **Touch-Friendly**: Large tap targets for mobile users
- **Performance**: Optimized 3D rendering for mobile devices
- **Layout**: Stack-based layout on smaller screens
- **Typography**: Scalable text sizes across devices
- **Images**: Responsive images with Next.js optimization

### Desktop Features

- **3D Interactions**: Full 3D scene rendering
- **Hover Effects**: Rich hover states and animations
- **Multi-Column**: Complex grid layouts
- **Performance**: Smooth 60fps animations

## 🔨 Development

### Available Scripts

```bash
# Development
npm run dev          # Start development server (localhost:3000)
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run format       # Format code with Prettier

# Prismic
npm run slicemachine # Start Slice Machine (localhost:9999)
npm run set-up-content # Set up Prismic content
```

### Environment Variables

```bash
# Required for Stripe payments
STRIPE_SECRET_KEY=sk_test_...
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...

# Application configuration
NEXT_PUBLIC_DOMAIN=http://localhost:3000

# Prismic (auto-generated)
PRISMIC_REPOSITORY_NAME=your-repo-name
```

### Development Guidelines

1. **Code Style**: Follow the existing TypeScript and React patterns
2. **Components**: Create reusable components in `/components`
3. **Slices**: Add new Prismic slices in `/slices`
4. **Styling**: Use Tailwind utilities, avoid custom CSS when possible
5. **3D Elements**: Keep 3D components optimized for performance
6. **Testing**: Test payment flows with Stripe test cards

### Common Development Tasks

**Adding a New Product Flavor:**

1. Add label image to `/public/labels/`
2. Update `flavorTextures` in `SodaCan.tsx`
3. Add product to `products` array in `/app/shop/page.tsx`
4. Update Prismic content if needed

**Modifying Stripe Payments:**

1. Update API route in `/app/api/checkout/route.ts`
2. Modify client-side logic in `/lib/stripe.ts`
3. Test with Stripe test cards

**Adding New Animations:**

1. Use GSAP in component `useGSAP` hooks
2. Register ScrollTrigger if needed
3. Optimize for mobile performance

## 🌟 Key Achievements

### ✅ E-Commerce Implementation

- **Complete Shop**: Fully functional product catalog with 5 flavors
- **Stripe Integration**: Secure payment processing with Indian Rupees
- **Order Management**: Success pages and confirmation system
- **Error Handling**: Graceful error handling and user feedback

### ✅ 3D Experience

- **Interactive Models**: Realistic 3D soda cans with custom labels
- **Smooth Animations**: GSAP-powered scroll-triggered animations
- **Performance**: Optimized for both desktop and mobile devices
- **Visual Effects**: Particle systems and dynamic lighting

### ✅ Technical Excellence

- **Modern Stack**: Latest Next.js 14 with TypeScript and Tailwind
- **Clean Code**: Well-structured, maintainable codebase
- **Responsive Design**: Works perfectly on all screen sizes
- **SEO Optimized**: Proper meta tags and semantic HTML

### ✅ User Experience

- **Intuitive Navigation**: Clear user flow from landing to purchase
- **Fast Loading**: Optimized images and code splitting
- **Accessible**: Proper ARIA labels and keyboard navigation
- **Mobile-First**: Designed for mobile users primarily

### ✅ Indian Market Focus

- **Currency Conversion**: All pricing in Indian Rupees (₹)
- **Local Pricing**: Competitive pricing for Indian market
- **Payment Methods**: Supports Indian payment preferences
- **Regional Optimization**: Configured for Indian users

## 🚀 Deployment

### Vercel Deployment (Recommended)

1. **Connect Repository**

   ```bash
   # Push your code to GitHub (already done)
   git push origin main
   ```

2. **Deploy on Vercel**

   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Add environment variables:
     ```
     STRIPE_SECRET_KEY=sk_test_...
     NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
     NEXT_PUBLIC_DOMAIN=https://your-domain.vercel.app
     ```

3. **Deploy**
   - Click Deploy
   - Your site will be live in minutes

### Other Deployment Options

**Netlify:**

- Similar to Vercel, drag and drop or GitHub integration
- Configure build settings: `npm run build` and publish directory `out`

**Railway:**

- Connect GitHub repository
- Add environment variables
- Deploy with one click

**Traditional Hosting:**

- Run `npm run build`
- Upload the `.next` folder contents
- Configure Node.js environment

### Environment Variables for Production

```bash
# Production Stripe keys (when ready for live payments)
STRIPE_SECRET_KEY=sk_live_...
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_live_...

# Your production domain
NEXT_PUBLIC_DOMAIN=https://your-production-domain.com

# Prismic (if using)
PRISMIC_REPOSITORY_NAME=your-repo-name
```

## 🤝 Contributing

We welcome contributions! Here's how you can help:

### Ways to Contribute

- 🐛 Report bugs and issues
- 💡 Suggest new features
- 🔧 Submit pull requests
- 📖 Improve documentation
- 🎨 Enhance UI/UX

### Development Process

1. **Fork the Repository**

   ```bash
   git clone https://github.com/your-username/Fizz-Drink-it-Feel-it.git
   ```

2. **Create Feature Branch**

   ```bash
   git checkout -b feature/amazing-feature
   ```

3. **Make Changes**

   - Follow existing code style
   - Add tests if applicable
   - Update documentation

4. **Commit Changes**

   ```bash
   git commit -m "Add amazing feature"
   ```

5. **Push to Branch**

   ```bash
   git push origin feature/amazing-feature
   ```

6. **Open Pull Request**
   - Describe your changes
   - Link any related issues
   - Wait for review

### Code Standards

- **TypeScript**: Use proper typing
- **React**: Follow React best practices
- **Tailwind**: Use utility classes consistently
- **Comments**: Document complex logic
- **Testing**: Test payment flows thoroughly

## 📄 License

This project is licensed under the **Apache License 2.0** - see the [LICENSE](LICENSE) file for details.

### What this means:

- ✅ Commercial use allowed
- ✅ Modification allowed
- ✅ Distribution allowed
- ✅ Private use allowed
- ❌ No trademark use
- ❌ No liability
- ❌ No warranty

## 🙏 Acknowledgments

Special thanks to:

- **[Prismic](https://prismic.io/)** - Headless CMS platform
- **[Stripe](https://stripe.com/)** - Payment processing platform
- **[Three.js](https://threejs.org/)** - 3D graphics library
- **[GSAP](https://gsap.com/)** - Animation library
- **[Next.js Team](https://nextjs.org/)** - React framework
- **[Tailwind CSS](https://tailwindcss.com/)** - CSS framework
- **[Vercel](https://vercel.com/)** - Hosting platform

## 📞 Support & Contact

### Need Help?

**GitHub Issues**: [Open an issue](https://github.com/Shubhamdas27/Fizz-Drink-it-Feel-it/issues)

**Common Issues:**

- Stripe payments not working? Check your API keys
- 3D models not loading? Ensure all assets are uploaded
- Build errors? Verify Node.js version compatibility

### Developer

**👨‍💻 Shubham Das**

- GitHub: [@Shubhamdas27](https://github.com/Shubhamdas27)
- Email: [Your email here]
- LinkedIn: [Your LinkedIn here]

---

<div align="center">

**⭐ Star this repository if you found it helpful!**

**🔗 [Live Demo](https://your-deployed-url.com) | 🛒 [Shop Now](https://your-deployed-url.com/shop) | 📚 [Documentation](https://github.com/Shubhamdas27/Fizz-Drink-it-Feel-it)**

_Made with ❤️ by Shubham Das_

</div>

---

## 🔄 Changelog

### v1.0.0 (Latest)

- ✅ Initial release with complete e-commerce functionality
- ✅ Stripe payment integration with Indian Rupees
- ✅ 3D animated product showcase
- ✅ Responsive design for all devices
- ✅ Demo mode for testing without Stripe keys
- ✅ Comprehensive documentation

### Upcoming Features

- 🔄 User authentication and accounts
- 🔄 Shopping cart persistence
- 🔄 Order history tracking
- 🔄 Email notifications
- 🔄 Admin dashboard
- 🔄 Analytics integration

---

_Last updated: September 25, 2025_
