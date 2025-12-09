# Justin & Norris Store

A modern e-commerce web application built with React, featuring product browsing, filtering, shopping cart functionality, and an admin dashboard for data visualization.

##  Features

- **Product Catalog**: Browse through a diverse collection of clothing items across multiple categories
- **Advanced Filtering**: Filter products by gender, category, size, and color
- **Shopping Cart**: Add items to cart with size and color selection, manage quantities
- **Product Details**: View detailed information about individual products with similar item recommendations
- **Responsive Design**: Fully responsive UI built with Tailwind CSS and HeroUI components
- **Admin Dashboard**: Visualize sales data, profits, and product analytics with interactive charts
- **Featured Products**: Highlight top-selling items on the home page

##  Tech Stack

- **Frontend Framework**: React 19
- **Build Tool**: Vite
- **Routing**: React Router DOM
- **Styling**: Tailwind CSS 4 + HeroUI Components
- **Charts**: Recharts
- **Icons**: Font Awesome
- **Animations**: Framer Motion

##  Installation

1. Clone the repository:
```bash
git clone https://github.com/nalhe627/comp-4513-project-2.git
cd comp-4513-project-2
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

##  Build

To create a production build:

```bash
npm run build
```

To preview the production build:

```bash
npm run preview
```

##  Project Structure

```
src/
├── assets/          # Images and static assets
├── components/      # Reusable React components
│   ├── CartContext.jsx
│   ├── LoginContext.jsx
│   ├── Navigation.jsx
│   ├── ProductCard.jsx
│   ├── ProductList.jsx
│   └── ...
├── constants/       # App constants and filters
├── views/           # Page components
│   ├── Home.jsx
│   ├── Browse.jsx
│   ├── SingleProduct.jsx
│   ├── ShoppingCart.jsx
│   ├── Dashboard.jsx
│   └── ...
├── App.jsx          # Main application component
└── main.jsx         # Application entry point
```

## 🎨 Key Components

- **Home**: Landing page with hero section and featured products
- **Browse**: Product catalog with advanced filtering options
- **SingleProduct**: Detailed product view with size/color selection
- **ShoppingCart**: Cart management with country and shipping options
- **Dashboard**: Admin analytics with sales and profit visualization
- **ProductCard**: Reusable product display component
- **Navigation**: Dynamic navigation bar with cart badge

## 🌐 Deployment

The project is configured for deployment to GitHub Pages with the base URL set in `vite.config.js`.

For production deployment:
```bash
npm run build
```

The built files will be in the `dist/` directory.

## 👥 Authors

- Justin
- Norris


---

Built with using React and Vite