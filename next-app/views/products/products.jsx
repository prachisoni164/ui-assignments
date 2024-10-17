"use client"

import React, { useState, useEffect } from 'react';
import ProductCard from "../../sections/products/product-card";
import { get } from "../../src/app/HttpClient"
import { PRODUCT_ROUTES } from '../../src/app/AppRoutes'
import "../../src/app/globals.css"

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchProducts();
  },[]);

  const fetchProducts = async () => {
    try {
      const response = await get(`${PRODUCT_ROUTES.GET_ALL_PRODUCTS}?limit=12&skip=0`)
      setProducts(response.data.products);
    }
    catch (err) {
      setError('Failed to fetch products'); // Handle any error that occurs
    } 
    finally {
      setLoading(false); // Set loading to false after fetching is complete
    }
  }

  if (loading) return <div className="full-container"><p className='text-center'>Loading...</p></div>; // Show loading state
  if (error) return <div className='full-container'>{error}</div>; // Show error message

  return (
    <div className="full-container">
      <h1 className='mt-5'>our products</h1>
      <div className='flex flex-wrap gap-2 justify-center'>
        {products.map((product) => {
          return (
            <ProductCard key={product.id} product={product} />
          )
        })}
      </div>
  </div>
)};

export default Products