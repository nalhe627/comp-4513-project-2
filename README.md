# NJ Store

A modern e-commerce web application built with React, featuring product browsing, filtering, shopping cart functionality, and an admin dashboard for data visualization.

This project was completed as part of the 2nd assignment for COMP 4513 at Mount Royal University.

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

## Main Views

- **Home**: Landing page with hero section and featured products
- **Browse**: Product catalog with advanced filtering options
- **Single Product**: Detailed product view with size/color selection
- **Shopping Cart**: Cart management with country and shipping options
- **Dashboard**: Admin analytics with sales and profit visualization
- **Mens/Womens**: View that shows the different categories and navigates the user to the browser view with the selected gender and category
- **Admin Login**: The page to login as an admin (note: authentication has not been implemented)

## Deployment

The project was deployed using Github Pages. You can view the site here: https://nalhe627.github.io/comp-4513-project-2-production/

## Group Members

- Justin Nunez
- Norris Alhejji
