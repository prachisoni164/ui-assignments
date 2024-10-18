"use client"

import React, { useState } from 'react';
import ProductCard from "../../sections/products/product-card";
import "../../src/app/globals.css"
import { useQuery } from '@tanstack/react-query';
import { fetchAllProducts } from '../../src/api/product-api';
import { useRouter } from 'next/navigation';


const Products = () => {

  const limit = 8;
  const router = useRouter();

  // Get the current page from the query parameter or default to 1
  const pageFromQuery = new URLSearchParams(window.location.search).get('page');
  const [page, setPage] = useState(pageFromQuery ? Number(pageFromQuery) : 1);

  // This can also be stored as hook for reusability (if applies)
  const { data, isLoading, isError, error} = useQuery({
    queryKey: ['products', page],                       // Unique identifier for the query; page is a dependency, when it changes, the query will be re-run
    queryFn: () => fetchAllProducts(page - 1, limit),   // Function to fetch data
    keepPreviousData: true,                             // Keeps the previous data while fetching new data
    // There are other options like staleTime, cacheTime, and refetching mechanisms
  })

  const { products = [], total = 0 } = data || {};      // Default to empty array and 0

  const totalPages = Math.ceil(total / limit);          // Calculate total pages

  // Function to handle page changes
  const handlePageChange = (newPage) => {
    setPage(newPage);     
    router.push(`/products?page=${newPage}`);           // Update the URL with the new page
  };

  // Handle loading state
  if (isLoading) return <div className="full-container"><p className='text-center'>Loading...</p></div>; 
  
  // Handle error state
  if (isError) return <div className='full-container'>{error}</div>; 

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
      <ul className='pagination'>
        {Array.from({ length: totalPages }, (_, index) => (
          <li key={index}>
            <button 
              onClick={() => handlePageChange(index + 1)} 
              className={index+1 === page ? 'active' : ''}
              disabled={isLoading} // Disable page buttons while loading
              >
              {index + 1}
            </button>
          </li>
        ))}
      </ul>
  </div>
)};

export default Products