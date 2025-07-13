import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SalePage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('discount');

  const saleProducts = [
    {
      id: 1,
      name: 'Nike Air Max 270',
      originalPrice: 150,
      salePrice: 89,
      discount: 41,
      image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop&crop=center',
      category: 'shoes',
      brand: 'Nike',
      rating: 4.5,
      reviews: 128,
      inStock: true,
      featured: true
    },
    {
      id: 2,
      name: 'Adidas Ultraboost 21',
      originalPrice: 180,
      salePrice: 119,
      discount: 34,
      image: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=400&h=400&fit=crop&crop=center',
      category: 'shoes',
      brand: 'Adidas',
      rating: 4.7,
      reviews: 95,
      inStock: true,
      featured: true
    },
    {
      id: 3,
      name: 'Zara Summer Dress',
      originalPrice: 89,
      salePrice: 45,
      discount: 49,
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=400&fit=crop&crop=center',
      category: 'clothing',
      brand: 'Zara',
      rating: 4.3,
      reviews: 67,
      inStock: true,
      featured: true
    },
    {
      id: 4,
      name: 'H&M Denim Jacket',
      originalPrice: 75,
      salePrice: 39,
      discount: 48,
      image: 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=400&h=400&fit=crop&crop=center',
      category: 'clothing',
      brand: 'H&M',
      rating: 4.1,
      reviews: 42,
      inStock: true,
      featured: true
    },
    {
      id: 5,
      name: 'Puma RS-X Sneakers',
      originalPrice: 110,
      salePrice: 69,
      discount: 37,
      image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&h=400&fit=crop&crop=center',
      category: 'shoes',
      brand: 'Puma',
      rating: 4.4,
      reviews: 83,
      inStock: false,
      featured: false
    },
    {
      id: 6,
      name: 'Uniqlo Cotton T-Shirt',
      originalPrice: 25,
      salePrice: 12,
      discount: 52,
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=400&fit=crop&crop=center',
      category: 'clothing',
      brand: 'Uniqlo',
      rating: 4.2,
      reviews: 156,
      inStock: true,
      featured: false
    },
    {
      id: 7,
      name: 'Under Armour Training Shorts',
      originalPrice: 45,
      salePrice: 28,
      discount: 38,
      image: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=400&h=400&fit=crop&crop=center',
      category: 'sports',
      brand: 'Under Armour',
      rating: 4.6,
      reviews: 71,
      inStock: true,
      featured: false
    },
    {
      id: 8,
      name: 'Gap Hooded Sweatshirt',
      originalPrice: 65,
      salePrice: 35,
      discount: 46,
      image: 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=400&h=400&fit=crop&crop=center',
      category: 'clothing',
      brand: 'Gap',
      rating: 4.0,
      reviews: 89,
      inStock: true,
      featured: false
    },
    {
      id: 9,
      name: 'New Balance 574',
      originalPrice: 95,
      salePrice: 59,
      discount: 38,
      image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop&crop=center',
      category: 'shoes',
      brand: 'New Balance',
      rating: 4.5,
      reviews: 112,
      inStock: true,
      featured: false
    },
    {
      id: 10,
      name: 'Mango Blazer',
      originalPrice: 120,
      salePrice: 72,
      discount: 40,
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=400&fit=crop&crop=center',
      category: 'clothing',
      brand: 'Mango',
      rating: 4.3,
      reviews: 54,
      inStock: true,
      featured: false
    },
    {
      id: 11,
      name: 'Reebok Classic Leather',
      originalPrice: 85,
      salePrice: 51,
      discount: 40,
      image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&h=400&fit=crop&crop=center',
      category: 'shoes',
      brand: 'Reebok',
      rating: 4.2,
      reviews: 76,
      inStock: true,
      featured: false
    },
    {
      id: 12,
      name: 'Forever 21 Jeans',
      originalPrice: 55,
      salePrice: 28,
      discount: 49,
      image: 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=400&h=400&fit=crop&crop=center',
      category: 'clothing',
      brand: 'Forever 21',
      rating: 3.9,
      reviews: 203,
      inStock: true,
      featured: false
    }
  ];

  const categories = [
    { id: 'all', name: 'All Items', count: saleProducts.length },
    { id: 'clothing', name: 'Clothing', count: saleProducts.filter(p => p.category === 'clothing').length },
    { id: 'shoes', name: 'Shoes', count: saleProducts.filter(p => p.category === 'shoes').length },
    { id: 'sports', name: 'Sports', count: saleProducts.filter(p => p.category === 'sports').length }
  ];

  const sortOptions = [
    { value: 'discount', label: 'Highest Discount' },
    { value: 'price-low', label: 'Price: Low to High' },
    { value: 'price-high', label: 'Price: High to Low' },
    { value: 'rating', label: 'Highest Rated' }
  ];

  const filteredProducts = selectedCategory === 'all' 
    ? saleProducts 
    : saleProducts.filter(product => product.category === selectedCategory);

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'discount':
        return b.discount - a.discount;
      case 'price-low':
        return a.salePrice - b.salePrice;
      case 'price-high':
        return b.salePrice - a.salePrice;
      case 'rating':
        return b.rating - a.rating;
      default:
        return 0;
    }
  });

  const featuredProducts = saleProducts.filter(product => product.featured);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-red-600 to-pink-600 text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <div className="inline-block bg-white bg-opacity-20 rounded-full px-6 py-2 mb-4">
              <span className="text-sm font-medium">🔥 FLASH SALE</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Up to 70% OFF</h1>
            <p className="text-xl md:text-2xl mb-8">Limited time offers on premium fashion and sports items</p>
            <div className="flex justify-center space-x-4">
              <div className="bg-white bg-opacity-20 rounded-lg px-6 py-3">
                <span className="text-2xl font-bold">{saleProducts.length}</span>
                <p className="text-sm">Items on Sale</p>
              </div>
              <div className="bg-white bg-opacity-20 rounded-lg px-6 py-3">
                <span className="text-2xl font-bold">70%</span>
                <p className="text-sm">Max Discount</p>
              </div>
              <div className="bg-white bg-opacity-20 rounded-lg px-6 py-3">
                <span className="text-2xl font-bold">24h</span>
                <p className="text-sm">Left</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Products */}
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Featured Deals</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {featuredProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
              <div className="relative">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-2 left-2 bg-red-600 text-white px-2 py-1 rounded text-sm font-bold">
                  -{product.discount}%
                </div>
                {!product.inStock && (
                  <div className="absolute top-2 right-2 bg-gray-800 text-white px-2 py-1 rounded text-sm">
                    Out of Stock
                  </div>
                )}
              </div>
              <div className="p-4">
                <div className="flex items-center mb-2">
                  <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">{product.brand}</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{product.name}</h3>
                <div className="flex items-center mb-2">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                    <span className="text-sm text-gray-600 ml-1">({product.reviews})</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="text-lg font-bold text-gray-900">${product.salePrice}</span>
                    <span className="text-sm text-gray-500 line-through">${product.originalPrice}</span>
                  </div>
                  <Link 
                    to={`/products/${product.id}`}
                    className="text-blue-600 hover:text-blue-700 font-medium text-sm"
                  >
                    View →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Filters and Sort */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="flex flex-wrap gap-4 mb-4 md:mb-0">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-full font-medium transition-colors duration-200 ${
                  selectedCategory === category.id
                    ? 'bg-red-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
          <div className="flex items-center space-x-4">
            <label className="text-sm font-medium text-gray-700">Sort by:</label>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
            >
              {sortOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* All Sale Products */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {sortedProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 overflow-hidden">
              <div className="relative">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-2 left-2 bg-red-600 text-white px-2 py-1 rounded text-sm font-bold">
                  -{product.discount}%
                </div>
                {!product.inStock && (
                  <div className="absolute top-2 right-2 bg-gray-800 text-white px-2 py-1 rounded text-sm">
                    Out of Stock
                  </div>
                )}
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">{product.brand}</span>
                  <span className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded-full">{product.category}</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">{product.name}</h3>
                <div className="flex items-center mb-2">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                    <span className="text-sm text-gray-600 ml-1">({product.reviews})</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="text-lg font-bold text-gray-900">${product.salePrice}</span>
                    <span className="text-sm text-gray-500 line-through">${product.originalPrice}</span>
                  </div>
                  <Link 
                    to={`/products/${product.id}`}
                    className="text-blue-600 hover:text-blue-700 font-medium text-sm flex items-center"
                  >
                    View
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="bg-gray-900 text-white py-16 mt-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Don't Miss Out on Deals!</h2>
          <p className="text-gray-300 mb-8">Subscribe to get early access to sales and exclusive offers</p>
          <div className="max-w-md mx-auto flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-l-lg border-0 focus:outline-none focus:ring-2 focus:ring-red-500 text-gray-900"
            />
            <button className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-r-lg font-medium transition-colors duration-200">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalePage; 