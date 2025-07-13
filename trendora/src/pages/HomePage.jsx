import React from 'react';

const HomePage = () => {
  // Enhanced dummy data for trending products with realistic fashion items
  const trendingProducts = [
    { 
      id: 1, 
      name: 'Nike Air Max 270', 
      price: '$129.99', 
      originalPrice: '$159.99',
      image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop',
      brand: 'Nike',
      isNew: true
    },
    { 
      id: 2, 
      name: 'Levi\'s 501 Original Jeans', 
      price: '$89.99', 
      originalPrice: '$109.99',
      image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&h=400&fit=crop',
      brand: 'Levi\'s',
      isSale: true
    },
    { 
      id: 3, 
      name: 'Adidas Ultraboost 21', 
      price: '$179.99', 
      originalPrice: '$199.99',
      image: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=400&h=400&fit=crop',
      brand: 'Adidas',
      isSale: true
    },
    { 
      id: 4, 
      name: 'Zara Oversized Blazer', 
      price: '$129.99', 
      originalPrice: '$159.99',
      image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=400&fit=crop',
      brand: 'Zara',
      isNew: true
    },
    { 
      id: 5, 
      name: 'H&M Cotton T-Shirt', 
      price: '$24.99', 
      originalPrice: '$29.99',
      image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop',
      brand: 'H&M',
      isSale: true
    },
    { 
      id: 6, 
      name: 'Converse Chuck Taylor', 
      price: '$69.99', 
      originalPrice: '$79.99',
      image: 'https://images.unsplash.com/photo-1607522370275-f14206abe5d3?w=400&h=400&fit=crop',
      brand: 'Converse',
      isSale: true
    },
    { 
      id: 7, 
      name: 'Uniqlo Slim Fit Shirt', 
      price: '$39.99', 
      originalPrice: '$49.99',
      image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&h=400&fit=crop',
      brand: 'Uniqlo',
      isNew: true
    },
    { 
      id: 8, 
      name: 'Vans Old Skool', 
      price: '$64.99', 
      originalPrice: '$74.99',
      image: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=400&h=400&fit=crop',
      brand: 'Vans',
      isSale: true
    },
  ];

  // Enhanced popular brands with realistic logos
  const popularBrands = [
    { id: 1, name: 'Nike', logo: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=150&h=50&fit=crop' },
    { id: 2, name: 'Adidas', logo: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=150&h=50&fit=crop' },
    { id: 3, name: 'Zara', logo: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=150&h=50&fit=crop' },
    { id: 4, name: 'H&M', logo: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=150&h=50&fit=crop' },
    { id: 5, name: 'Levi\'s', logo: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=150&h=50&fit=crop' },
    { id: 6, name: 'Uniqlo', logo: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=150&h=50&fit=crop' },
  ];

  // Categories with better images
  const categories = [
    {
      id: 1,
      name: 'Men',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&fit=crop',
      description: 'Discover men\'s fashion'
    },
    {
      id: 2,
      name: 'Women',
      image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=400&h=300&fit=crop',
      description: 'Explore women\'s style'
    },
    {
      id: 3,
      name: 'New Arrivals',
      image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=400&h=300&fit=crop',
      description: 'Latest trends'
    },
    {
      id: 4,
      name: 'Sale',
      image: 'https://images.unsplash.com/photo-1607083206869-4c7672e72a8a?w=400&h=300&fit=crop',
      description: 'Up to 70% off'
    }
  ];

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[600px] bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1920&h=600&fit=crop')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
          <div className="text-center text-white max-w-4xl mx-auto px-4">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">Shop the New Drop</h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-100">Discover the latest trends in fashion. Up to 70% off selected items.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/products" className="bg-white text-black font-bold py-4 px-8 rounded-full hover:bg-gray-100 transition duration-300 text-lg">
                Shop Now
              </a>
              <a href="/products?category=sale" className="border-2 border-white text-white font-bold py-4 px-8 rounded-full hover:bg-white hover:text-black transition duration-300 text-lg">
                View Sale
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Shop by Category</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category) => (
              <div key={category.id} className="group relative rounded-lg overflow-hidden h-80 bg-cover bg-center shadow-lg hover:shadow-xl transition duration-300" 
                   style={{ backgroundImage: `url('${category.image}')` }}>
                <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition duration-300"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                  <h3 className="text-3xl font-bold mb-2">{category.name}</h3>
                  <p className="text-lg opacity-90">{category.description}</p>
                  <div className="mt-4 opacity-0 group-hover:opacity-100 transition duration-300">
                    <a href={`/products?category=${category.name.toLowerCase().replace(' ', '-')}`} 
                       className="bg-white text-black font-bold py-2 px-6 rounded-full hover:bg-gray-100 transition duration-300">
                      Shop Now
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trending Products Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Trending Products</h2>
            <p className="text-gray-600 text-lg">Discover what's hot right now</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {trendingProducts.map((product) => (
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
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-lg text-gray-800">{product.price}</span>
                    {product.originalPrice && (
                      <span className="text-gray-500 line-through text-sm">{product.originalPrice}</span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <a href="/products" className="bg-gray-800 text-white font-bold py-3 px-8 rounded-full hover:bg-gray-700 transition duration-300">
              View All Products
            </a>
          </div>
        </div>
      </section>

      {/* Popular Brands Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Popular Brands</h2>
            <p className="text-gray-600 text-lg">Shop your favorite brands</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {popularBrands.map((brand) => (
              <div key={brand.id} className="flex items-center justify-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition duration-300 cursor-pointer">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gray-200 rounded-full mb-2 flex items-center justify-center">
                    <span className="font-bold text-gray-600">{brand.name.charAt(0)}</span>
                  </div>
                  <p className="font-semibold text-gray-800">{brand.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-gray-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-gray-300 text-lg mb-8">Subscribe to our newsletter for exclusive offers and the latest trends</p>
          <div className="max-w-md mx-auto">
            <form className="flex flex-col sm:flex-row gap-4">
              <input 
                type="email" 
                className="flex-1 px-4 py-3 rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500" 
                placeholder="Enter your email address" 
              />
              <button 
                type="submit" 
                className="bg-white text-gray-800 font-bold px-8 py-3 rounded-full hover:bg-gray-100 transition duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
