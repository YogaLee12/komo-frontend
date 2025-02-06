'use client'
import { useEffect, useState } from 'react';
import api from '@/src/lib/api';

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    api.get('/product')
      .then(res => setProducts(res.data))
      .catch(err => console.error('Error fetching products:', err));
  }, []);

  return (
    <div>
      <h1>Product List</h1>
      <ul>
        {products.map((product: any) => (
          <li key={product.id}>{product.p_name} - ${product.price}</li>
        ))}
      </ul>
    </div>
  );
}
