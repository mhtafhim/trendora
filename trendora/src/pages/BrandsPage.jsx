import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const BrandsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const brands = [
    {
      id: 1,
      name: 'Nike',
      logo: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=200&h=200&fit=crop&crop=center',
      category: 'sports',
      description: 'Just Do It. Leading sports and lifestyle brand.',
      featured: true,
      products: 156
    },
    {
      id: 2,
      name: 'Adidas',
      logo: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=200&h=200&fit=crop&crop=center',
      category: 'sports',
      description: 'Impossible is nothing. Premium athletic wear.',
      featured: true,
      products: 142
    },
    {
      id: 3,
      name: 'Zara',
      logo: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=200&h=200&fit=crop&crop=center',
      category: 'fashion',
      description: 'Fast fashion for the modern lifestyle.',
      featured: true,
      products: 89
    },
    {
      id: 4,
      name: 'H&M',
      logo: 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=200&h=200&fit=crop&crop=center',
      category: 'fashion',
      description: 'Fashion and quality at the best price.',
      featured: true,
      products: 203
    },
    {
      id: 5,
      name: 'Puma',
      logo: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=200&h=200&fit=crop&crop=center',
      category: 'sports',
      description: 'Forever Faster. Performance and style.',
      featured: false,
      products: 78
    },
    {
      id: 6,
      name: 'Uniqlo',
      logo: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=200&h=200&fit=crop&crop=center',
      category: 'fashion',
      description: 'LifeWear. Simple, high-quality clothing.',
      featured: false,
      products: 95
    },
    {
      id: 7,
      name: 'Under Armour',
      logo: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=200&h=200&fit=crop&crop=center',
      category: 'sports',
      description: 'The Only Way Is Through. Performance gear.',
      featured: false,
      products: 67
    },
    {
      id: 8,
      name: 'Gap',
      logo: 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=200&h=200&fit=crop&crop=center',
      category: 'fashion',
      description: 'Dress Normal. Casual, comfortable clothing.',
      featured: false,
      products: 134
    },
    {
      id: 9,
      name: 'New Balance',
      logo: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=200&h=200&fit=crop&crop=center',
      category: 'sports',
      description: 'Fearlessly Independent. Quality athletic footwear.',
      featured: false,
      products: 45
    },
    {
      id: 10,
      name: 'Mango',
      logo: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=200&h=200&fit=crop&crop=center',
      category: 'fashion',
      description: 'Urban fashion for the contemporary woman.',
      featured: false,
      products: 112
    },
    {
      id: 11,
      name: 'Reebok',
      logo: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=200&h=200&fit=crop&crop=center',
      category: 'sports',
      description: 'Be More Human. Fitness and lifestyle.',
      featured: false,
      products: 58
    },
    {
      id: 12,
      name: 'Forever 21',
      logo: 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=200&h=200&fit=crop&crop=center',
      category: 'fashion',
      description: 'Fast fashion for young trendsetters.',
      featured: false,
      products: 167
    }
  ];

  const categories = [
    { id: 'all', name: 'All Brands', count: brands.length },
    { id: 'fashion', name: 'Fashion', count: brands.filter(b => b.category === 'fashion').length },
    { id: 'sports', name: 'Sports', count: brands.filter(b => b.category === 'sports').length }
  ];

  const filteredBrands = selectedCategory === 'all' 
    ? brands 
    : brands.filter(brand => brand.category === selectedCategory);

  const featuredBrands = brands.filter(brand => brand.featured);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Discover Top Brands</h1>
            <p className="text-xl md:text-2xl mb-8">Shop from the world's most popular fashion and sports brands</p>
            <div className="flex justify-center space-x-4">
              <div className="bg-white bg-opacity-20 rounded-lg px-6 py-3">
                <span className="text-2xl font-bold">{brands.length}</span>
                <p className="text-sm">Brands</p>
              </div>
              <div className="bg-white bg-opacity-20 rounded-lg px-6 py-3">
                <span className="text-2xl font-bold">10K+</span>
                <p className="text-sm">Products</p>
              </div>
              <div className="bg-white bg-opacity-20 rounded-lg px-6 py-3">
                <span className="text-2xl font-bold">24/7</span>
                <p className="text-sm">Support</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Brands */}
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Featured Brands</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {featuredBrands.map((brand) => (
            <div key={brand.id} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="p-6 text-center">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden bg-gray-100 flex items-center justify-center">
                  <img 
                    src={brand.logo} 
                    alt={brand.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{brand.name}</h3>
                <p className="text-gray-600 text-sm mb-3">{brand.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">{brand.products} products</span>
                  <Link 
                    to={`/products?brand=${brand.name.toLowerCase()}`}
                    className="text-blue-600 hover:text-blue-700 font-medium text-sm"
                  >
                    Shop Now →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Category Filter */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-colors duration-200 ${
                selectedCategory === category.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {category.name} ({category.count})
            </button>
          ))}
        </div>
      </div>

      {/* All Brands Grid */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredBrands.map((brand) => (
            <div key={brand.id} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-100 flex items-center justify-center mr-4">
                    <img 
                      src={brand.logo} 
                      alt={brand.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{brand.name}</h3>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      brand.category === 'sports' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-purple-100 text-purple-800'
                    }`}>
                      {brand.category}
                    </span>
                  </div>
                </div>
                <p className="text-gray-600 text-sm mb-4">{brand.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">{brand.products} products</span>
                  <Link 
                    to={`/products?brand=${brand.name.toLowerCase()}`}
                    className="text-blue-600 hover:text-blue-700 font-medium text-sm flex items-center"
                  >
                    View Products
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
          <h2 className="text-3xl font-bold mb-4">Stay Updated with New Brands</h2>
          <p className="text-gray-300 mb-8">Get notified when new brands and products are added to our collection</p>
          <div className="max-w-md mx-auto flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-l-lg border-0 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
            />
            <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-r-lg font-medium transition-colors duration-200">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandsPage; 