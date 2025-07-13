import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const ProductListPage = () => {
  const [searchParams] = useSearchParams();
  const category = searchParams.get('category');
  const [sortBy, setSortBy] = useState('featured');

  // Dummy product data
  const products = [
    { 
      id: 1, 
      name: 'Nike Air Max 270', 
      price: '$129.99', 
      originalPrice: '$159.99',
      image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop',
      brand: 'Nike',
      isNew: true,
      rating: 4.5
    },
    { 
      id: 2, 
      name: 'Levi\'s 501 Original Jeans', 
      price: '$89.99', 
      originalPrice: '$109.99',
      image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&h=400&fit=crop',
      brand: 'Levi\'s',
      isSale: true,
      rating: 4.2
    },
    { 
      id: 3, 
      name: 'Adidas Ultraboost 21', 
      price: '$179.99', 
      originalPrice: '$199.99',
      image: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=400&h=400&fit=crop',
      brand: 'Adidas',
      isSale: true,
      rating: 4.7
    },
    { 
      id: 4, 
      name: 'Zara Oversized Blazer', 
      price: '$129.99', 
      originalPrice: '$159.99',
      image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=400&fit=crop',
      brand: 'Zara',
      isNew: true,
      rating: 4.3
    },
    { 
      id: 5, 
      name: 'H&M Cotton T-Shirt', 
      price: '$24.99', 
      originalPrice: '$29.99',
      image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop',
      brand: 'H&M',
      isSale: true,
      rating: 4.0
    },
    { 
      id: 6, 
      name: 'Converse Chuck Taylor', 
      price: '$69.99', 
      originalPrice: '$79.99',
      image: 'https://images.unsplash.com/photo-1607522370275-f14206abe5d3?w=400&h=400&fit=crop',
      brand: 'Converse',
      isSale: true,
      rating: 4.4
    },
    { 
      id: 7, 
      name: 'Uniqlo Slim Fit Shirt', 
      price: '$39.99', 
      originalPrice: '$49.99',
      image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&h=400&fit=crop',
      brand: 'Uniqlo',
      isNew: true,
      rating: 4.1
    },
    { 
      id: 8, 
      name: 'Vans Old Skool', 
      price: '$64.99', 
      originalPrice: '$74.99',
      image: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=400&h=400&fit=crop',
      brand: 'Vans',
      isSale: true,
      rating: 4.6
    },
  ];

  const getCategoryTitle = () => {
    switch(category) {
      case 'men': return 'Men\'s Clothing';
      case 'women': return 'Women\'s Clothing';
      case 'sale': return 'Sale Items';
      default: return 'All Products';
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">{getCategoryTitle()}</h1>
          <p className="text-gray-600">{products.length} products found</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="lg:w-64">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="font-semibold text-lg mb-4">Filters</h3>
              
              {/* Sort By */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Sort By</label>
                <select 
                  value={sortBy} 
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="newest">Newest</option>
                  <option value="rating">Highest Rated</option>
                </select>
              </div>

              {/* Price Range */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Price Range</label>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span className="text-sm">Under $50</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span className="text-sm">$50 - $100</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span className="text-sm">$100 - $200</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span className="text-sm">Over $200</span>
                  </label>
                </div>
              </div>

              {/* Brands */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Brands</label>
                <div className="space-y-2">
                  {['Nike', 'Adidas', 'Zara', 'H&M', 'Levi\'s', 'Uniqlo', 'Converse', 'Vans'].map((brand) => (
                    <label key={brand} className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      <span className="text-sm">{brand}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Clear Filters */}
              <button className="w-full bg-gray-200 text-gray-800 py-2 px-4 rounded-md hover:bg-gray-300 transition duration-300">
                Clear Filters
              </button>
            </div>
          </div>

          {/* Products Grid */}
          <div className="flex-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {products.map((product) => (
                <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden group hover:shadow-xl transition duration-300">
                  <div className="relative">
                    <img src={product.image} alt={product.name} className="w-full h-64 object-cover group-hover:scale-105 transition duration-300" />
                    {product.isNew && (
                      <span className="absolute top-2 left-2 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-bold">NEW</span>
                    )}
                    {product.isSale && (
                      <span className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold">SALE</span>
                    )}
                    <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition duration-300">
                      <button className="bg-white text-gray-800 p-2 rounded-full shadow-md hover:bg-gray-100">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div className="p-4">
                    <p className="text-sm text-gray-500 mb-1">{product.brand}</p>
                    <h3 className="font-semibold text-lg mb-2 text-gray-800">{product.name}</h3>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-lg text-gray-800">{product.price}</span>
                        {product.originalPrice && (
                          <span className="text-gray-500 line-through text-sm">{product.originalPrice}</span>
                        )}
                      </div>
                      <div className="flex items-center">
                        <span className="text-yellow-400">★</span>
                        <span className="text-sm text-gray-600 ml-1">{product.rating}</span>
                      </div>
                    </div>
                    <button className="w-full bg-gray-800 text-white py-2 px-4 rounded-md hover:bg-gray-700 transition duration-300">
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Load More */}
            <div className="text-center mt-12">
              <button className="bg-gray-800 text-white font-bold py-3 px-8 rounded-full hover:bg-gray-700 transition duration-300">
                Load More Products
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductListPage;
