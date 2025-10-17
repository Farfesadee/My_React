import { useState } from 'react'
// react logo removed
import './App.css'
import ProductCard from './ProductCard'
import './product.css'

function App() {
  const [count, setCount] = useState(0)

  const products = [
    {
      name: 'Laptop Computer',
      price: 450000,
      image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800&q=60&auto=format&fit=crop',
      inStock: true,
    },
    {
      name: 'Wireless Headphones',
      price: 65000,
      image: 'https://images.unsplash.com/photo-1518441902114-6f8b5d14d8b4?w=800&q=60&auto=format&fit=crop',
      inStock: false,
    },
    {
      name: 'Smartphone',
      price: 220000,
      image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&q=60&auto=format&fit=crop',
      inStock: true,
    },
  ]

  return (
    <div className="products-page">
      <div className="inner">
        <h1>Product Showcase</h1>

        <div className="products-grid">
          {products.map((p) => (
            <ProductCard key={p.name} {...p} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default App
