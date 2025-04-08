import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ShoppingCart, Check, Award, BarChart, Droplet } from 'lucide-react';
import { toast } from 'sonner';
import ProductCard from '@/components/ProductCard';
import { useCart } from '@/contexts/CartContext';

// Import the Product type
import { Product } from '@/components/ProductCard';

// Mock product data (same as in other components)
const allProducts: Product[] = [
  {
    id: 1,
    name: "Smart Soil Moisture Sensor Pro",
    description: "Advanced soil moisture monitoring with wireless connectivity and real-time alerts. Ideal for precision irrigation management.",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1621902779002-51d996854922?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80",
    category: "Soil Sensors"
  },
  {
    id: 2,
    name: "Weather Station Plus",
    description: "Complete weather monitoring system with temperature, humidity, rainfall, wind speed, and solar radiation sensors.",
    price: 299.99,
    image: "https://images.unsplash.com/photo-1520383976554-9af6b5242fa9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80",
    category: "Weather Monitoring"
  },
  {
    id: 3,
    name: "Crop Health Monitor",
    description: "Multispectral imaging system for early detection of crop stress, disease, and nutrient deficiencies.",
    price: 349.99,
    image: "https://images.unsplash.com/photo-1492496913980-501348b61469?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80",
    category: "Crop Monitoring"
  },
  {
    id: 4,
    name: "Irrigation Controller",
    description: "Smart irrigation system with automated scheduling based on soil moisture, weather forecasts, and crop water needs.",
    price: 179.99,
    image: "https://images.unsplash.com/photo-1622383563227-04401ab4e5ea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80",
    category: "Water Management"
  },
  {
    id: 5,
    name: "Soil Nutrient Analyzer",
    description: "Portable device for quick analysis of soil NPK levels, pH, and organic matter content to optimize fertilization.",
    price: 199.99,
    image: "https://images.unsplash.com/photo-1591985666643-1eae7969bfcd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80",
    category: "Soil Sensors"
  },
  {
    id: 6,
    name: "Water Flow Meter",
    description: "Accurate measurement of water usage with leak detection and consumption analytics for irrigation systems.",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1559825481-12a05cc00344?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80",
    category: "Water Management"
  },
  {
    id: 7,
    name: "Drone Field Scanner",
    description: "Autonomous drone system for aerial field monitoring, with camera and multispectral sensors for comprehensive crop analysis.",
    price: 899.99,
    image: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80",
    category: "Crop Monitoring"
  },
  {
    id: 8,
    name: "Temperature & Humidity Sensor",
    description: "Precise monitoring of ambient conditions for greenhouses, storage facilities, and sensitive growing environments.",
    price: 69.99,
    image: "https://images.unsplash.com/photo-1597423498219-04418210827d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80",
    category: "Weather Monitoring"
  }
];

// Extended product details (would normally come from an API)
const productDetails: Record<number, any> = {
  1: {
    fullDescription: "The Smart Soil Moisture Sensor Pro is a cutting-edge solution for modern agriculture. It provides real-time monitoring of soil moisture levels at multiple depths, ensuring optimal water management for your crops. With wireless connectivity and a user-friendly mobile app, you can access data and receive alerts anywhere, anytime. The long-lasting battery and weather-resistant design make it perfect for season-long deployment in any field condition.",
    specifications: [
      { label: "Measurement Range", value: "0-100% volumetric water content" },
      { label: "Accuracy", value: "±2%" },
      { label: "Depth Options", value: "10cm, 20cm, 30cm, 40cm" },
      { label: "Connectivity", value: "4G LTE / WiFi / Bluetooth" },
      { label: "Battery Life", value: "Up to 12 months" },
      { label: "Weather Resistance", value: "IP67 rated" },
      { label: "Data Storage", value: "Cloud-based with offline backup" },
      { label: "Weight", value: "350g" },
      { label: "Dimensions", value: "15cm x 5cm x 3cm" }
    ],
    features: [
      "Real-time soil moisture monitoring",
      "Multiple depth measurements",
      "Wireless connectivity",
      "Mobile app with alerts and notifications",
      "Weather-resistant design",
      "Long battery life",
      "Easy installation",
      "Cloud data storage with analytics",
      "Irrigation automation integration"
    ],
    relatedProducts: [5, 4, 6]
  },
  2: {
    fullDescription: "The Weather Station Plus is a comprehensive weather monitoring system designed specifically for agricultural applications. It combines precision sensors for temperature, humidity, rainfall, wind speed and direction, solar radiation, and barometric pressure in one integrated unit. The system provides accurate local weather data to help farmers make informed decisions about planting, irrigation, pest management, and harvesting.",
    specifications: [
      { label: "Temperature Range", value: "-40°C to +65°C (±0.3°C accuracy)" },
      { label: "Humidity Range", value: "0-100% RH (±2% accuracy)" },
      { label: "Rainfall Measurement", value: "0.2mm resolution tipping bucket" },
      { label: "Wind Speed", value: "0-200 km/h (±3% accuracy)" },
      { label: "Wind Direction", value: "16-point compass (±3° accuracy)" },
      { label: "Solar Radiation", value: "0-1800 W/m² pyranometer" },
      { label: "Barometric Pressure", value: "300-1100 hPa (±0.5 hPa accuracy)" },
      { label: "Power Source", value: "Solar panel with battery backup" },
      { label: "Data Transmission", value: "4G/WiFi/LoRaWAN" }
    ],
    features: [
      "All-in-one weather monitoring",
      "Solar powered with battery backup",
      "Real-time data transmission",
      "Historical data analysis",
      "Weather forecasting capabilities",
      "Frost and heat alerts",
      "Evapotranspiration calculation",
      "Disease risk modeling",
      "API integration with farm management software"
    ],
    relatedProducts: [8, 3, 1]
  }
};

// Default details object for fallback
const defaultDetails = {
  fullDescription: "This advanced agricultural sensor is designed to help farmers optimize their operations through precise data collection and analysis. With state-of-the-art technology and rugged construction suitable for field conditions, this sensor provides reliable measurements and insights for improved decision-making.",
  specifications: [
    { label: "Connectivity", value: "Wireless (4G/WiFi/Bluetooth)" },
    { label: "Power Source", value: "Rechargeable battery/Solar" },
    { label: "Weather Resistance", value: "IP65 or higher" },
    { label: "Data Storage", value: "Cloud-based with local backup" },
    { label: "Warranty", value: "2 years" }
  ],
  features: [
    "Real-time monitoring",
    "Wireless connectivity",
    "Mobile app integration",
    "Weather-resistant design",
    "Long battery life",
    "Easy installation",
    "Cloud data storage",
    "Comprehensive analytics"
  ],
  relatedProducts: [1, 2, 3, 4]
};

const ProductDetail = () => {
  const { id } = useParams();
  const productId = parseInt(id || '1');
  const { addToCart } = useCart();
  
  const product = allProducts.find(p => p.id === productId);
  
  if (!product) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Product Not Found</h1>
        <p className="mb-6">The product you're looking for doesn't exist or has been removed.</p>
        <Link to="/products">
          <Button className="bg-violet-600 hover:bg-violet-700">
            <ChevronLeft className="mr-2 h-4 w-4" /> Back to Products
          </Button>
        </Link>
      </div>
    );
  }
  
  // Get product details or use default if not available
  const details = productDetails[productId] || defaultDetails;
  
  // Get related products
  const relatedProductsList = details.relatedProducts
    .map((id: number) => allProducts.find(p => p.id === id))
    .filter(Boolean);

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Breadcrumb */}
      <div className="mb-6">
        <Link to="/products" className="text-violet-600 hover:text-violet-900 flex items-center">
          <ChevronLeft className="h-4 w-4 mr-1" /> Back to Products
        </Link>
      </div>
      
      {/* Product Overview */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
        <div className="md:flex">
          <div className="md:w-1/2">
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-full object-cover"
              style={{ maxHeight: '500px' }}
            />
          </div>
          <div className="md:w-1/2 p-6 md:p-8">
            <span className="inline-block bg-violet-100 text-violet-800 text-xs font-semibold px-3 py-1 rounded-full mb-3">
              {product.category}
            </span>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
            <div className="flex items-center mb-4">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
              </div>
              <span className="text-gray-600 ml-2">5.0 (24 reviews)</span>
            </div>
            <p className="text-gray-600 mb-6">{details.fullDescription}</p>
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Key Features</h3>
              <ul className="space-y-2">
                {details.features.slice(0, 4).map((feature: string, index: number) => (
                  <li key={index} className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex items-center justify-between mb-6">
              <span className="text-3xl font-bold text-violet-900">${product.price.toFixed(2)}</span>
              <span className="text-sm text-green-600 bg-green-100 px-2 py-1 rounded">In Stock</span>
            </div>
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3">
              <Button 
                className="bg-violet-700 hover:bg-violet-800 flex-1 flex items-center justify-center"
                onClick={handleAddToCart}
              >
                <ShoppingCart className="mr-2 h-5 w-5" /> Add to Cart
              </Button>
              <Button 
                variant="outline" 
                className="border-violet-600 text-violet-600 hover:bg-violet-50 flex-1"
              >
                Contact Sales
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Product Details Tabs */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
        <div className="p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Technical Specifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {details.specifications.map((spec: any, index: number) => (
              <div key={index} className="flex items-center">
                <div className="min-w-[180px] font-medium text-gray-700">{spec.label}:</div>
                <div className="text-gray-600">{spec.value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Benefits */}
      <div className="bg-violet-50 rounded-lg overflow-hidden mb-8 p-6">
        <h2 className="text-2xl font-bold text-violet-900 mb-6">Why Choose This Product?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-5 rounded-lg shadow-sm">
            <div className="w-12 h-12 bg-violet-100 text-violet-600 rounded-full flex items-center justify-center mb-4">
              <Award className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Premium Quality</h3>
            <p className="text-gray-600">Built with durable materials and components to withstand harsh field conditions for years.</p>
          </div>
          <div className="bg-white p-5 rounded-lg shadow-sm">
            <div className="w-12 h-12 bg-violet-100 text-violet-600 rounded-full flex items-center justify-center mb-4">
              <BarChart className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Data-Driven Insights</h3>
            <p className="text-gray-600">Advanced analytics help you make better decisions and optimize your agricultural operations.</p>
          </div>
          <div className="bg-white p-5 rounded-lg shadow-sm">
            <div className="w-12 h-12 bg-violet-100 text-violet-600 rounded-full flex items-center justify-center mb-4">
              <Droplet className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Resource Efficiency</h3>
            <p className="text-gray-600">Helps reduce water and resource usage while improving crop yield and quality.</p>
          </div>
        </div>
      </div>
      
      {/* Related Products */}
      {relatedProductsList.length > 0 && (
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedProductsList.map((relatedProduct: any) => (
              <ProductCard key={relatedProduct.id} product={relatedProduct} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
