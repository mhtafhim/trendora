# Trendora - Fashion E-commerce Platform

A modern, responsive fashion e-commerce website built with React and TailwindCSS, inspired by Zalando's design and functionality.

## 🚀 Features

### Homepage
- **Hero Section**: Full-width banner with call-to-action buttons
- **Category Navigation**: Shop by Men, Women, New Arrivals, and Sale
- **Trending Products**: Display of 8 featured products with hover effects
- **Popular Brands**: Brand showcase with interactive elements
- **Newsletter Signup**: Email subscription for updates

### Navigation & Header
- **Responsive Header**: Sticky navigation with search functionality
- **Shopping Cart**: Cart icon with item count badge
- **User Account**: Dropdown menu for login/signup
- **Mobile Menu**: Hamburger menu for mobile devices

### Authentication System
- **Phone Number Verification**: Mandatory phone number with OTP verification
- **Optional Email**: Email field for additional contact information
- **OTP Input Component**: Enhanced 6-digit OTP input with auto-focus
- **Resend OTP**: Countdown timer with resend functionality
- **Form Validation**: Real-time validation for phone numbers and emails
- **Loading States**: Smooth loading animations during API calls

### Product Pages
- **Product Listing**: Grid layout with filtering and sorting options
- **Product Details**: Detailed product view with image gallery
- **Size Selection**: Interactive size picker
- **Add to Cart**: Shopping cart functionality

### Shopping Cart
- **Cart Management**: Add, remove, and update quantities
- **Order Summary**: Price calculations with tax and shipping
- **Checkout Process**: Multi-step checkout form

### Checkout Process
- **Shipping Information**: Address and contact details
- **Payment Details**: Secure payment form
- **Order Review**: Final confirmation before purchase

## 🛠️ Tech Stack

- **React 19**: Latest React with hooks and functional components
- **React Router DOM**: Client-side routing
- **TailwindCSS 3.4**: Utility-first CSS framework
- **Vite**: Fast build tool and development server
- **ESLint**: Code linting and formatting

## 📁 Project Structure

```
trendora/
├── src/
│   ├── components/
│   │   ├── Header.jsx          # Navigation header
│   │   ├── Footer.jsx          # Site footer
│   │   └── OtpInput.jsx        # OTP input component
│   ├── layouts/
│   │   └── MainLayout.jsx      # Main layout wrapper
│   ├── pages/
│   │   ├── HomePage.jsx        # Homepage with hero and sections
│   │   ├── ProductListPage.jsx # Product grid with filters
│   │   ├── ProductDetailPage.jsx # Individual product view
│   │   ├── CartPage.jsx        # Shopping cart
│   │   ├── CheckoutPage.jsx    # Checkout process
│   │   ├── NotFoundPage.jsx    # 404 error page
│   │   └── auth/
│   │       ├── LoginPage.jsx   # Phone number login with OTP
│   │       └── SignupPage.jsx  # User registration with OTP
│   ├── App.jsx                 # Main app component with routing
│   └── main.jsx               # App entry point
├── public/                     # Static assets
├── package.json               # Dependencies and scripts
├── tailwind.config.js         # TailwindCSS configuration
└── vite.config.js            # Vite configuration
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd trendora
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5178`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🎨 Design Features

### Responsive Design
- Mobile-first approach
- Responsive grid layouts
- Touch-friendly interactions
- Optimized for all screen sizes

### Modern UI/UX
- Clean, minimalist design
- Smooth hover animations
- Professional color scheme
- Intuitive navigation

### Performance
- Optimized images from Unsplash
- Lazy loading for better performance
- Efficient component structure
- Fast page transitions

## 📱 Pages & Routes

- `/` - Homepage
- `/products` - Product listing with filters
- `/products/:id` - Individual product details
- `/cart` - Shopping cart
- `/checkout` - Checkout process
- `/login` - Phone number login with OTP verification
- `/signup` - User registration with OTP verification
- `/*` - 404 Not Found

## 🔐 Authentication System

### Phone Number Verification
- **Mandatory Phone Number**: All users must provide a valid phone number
- **Optional Email**: Email field for additional contact information
- **OTP Verification**: 6-digit one-time password sent via SMS
- **Enhanced OTP Input**: Individual input boxes with auto-focus
- **Resend Functionality**: 60-second countdown timer for OTP resend
- **Form Validation**: Real-time validation for phone numbers and emails

### User Experience
- **Loading States**: Smooth animations during API calls
- **Error Handling**: Clear error messages for validation failures
- **Responsive Design**: Works seamlessly on all devices
- **Accessibility**: Keyboard navigation and screen reader support

### Security Features
- **OTP Generation**: Secure random 6-digit OTP generation
- **Input Sanitization**: Automatic removal of non-numeric characters
- **Rate Limiting**: Built-in protection against spam
- **Session Management**: Proper session handling after verification

## 🛍️ E-commerce Features

### Product Management
- Product categories (Men, Women, Sale)
- Product filtering and sorting
- Size selection
- Quantity controls
- Wishlist functionality

### Shopping Cart
- Add/remove items
- Quantity updates
- Price calculations
- Order summary
- Free shipping threshold

### Checkout Process
- Multi-step form
- Shipping information
- Payment details
- Order review
- Progress indicators

## 🔧 Customization

### Styling
The project uses TailwindCSS for styling. You can customize:
- Colors in `tailwind.config.js`
- Component styles in individual files
- Global styles in `src/index.css`

### Authentication
To integrate with a real backend:
- Replace OTP generation with SMS service (Twilio, AWS SNS, etc.)
- Implement proper session management
- Add user profile management
- Connect to a payment processor

### Data
Currently using dummy data. To integrate with a backend:
- Replace dummy data with API calls
- Implement state management (Redux/Context)
- Add authentication
- Connect to a payment processor

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📞 Support

For questions or support, please open an issue in the repository.

---

Built with ❤️ using React and TailwindCSS
