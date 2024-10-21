"use client";

import React, { useState } from "react";
import ProductCard from "../../sections/products/product-card";
import "../../src/app/globals.css";
import { useQuery } from "@tanstack/react-query";
import { fetchAllProducts } from "../../src/api/product-api";
import { useRouter } from "next/navigation";
import { Box, CircularProgress, Typography, Pagination } from "@mui/material";

const Products = () => {
  const limit = 8;
  const router = useRouter();

  // Get the current page from the query parameter or default to 1
  const pageFromQuery = new URLSearchParams(window.location.search).get("page");
  const [page, setPage] = useState(pageFromQuery ? Number(pageFromQuery) : 1);

  // Use the query to fetch products
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["products", page], // Unique identifier for the query; page is a dependency, when it changes, the query will be re-run
    queryFn: () => fetchAllProducts(page - 1, limit), // Function to fetch data
    keepPreviousData: true, // Keeps the previous data while fetching new data
  });

  const { products = [], total = 0 } = data || {}; // Default to empty array and 0
  const totalPages = Math.ceil(total / limit); // Calculate total pages

  // Function to handle page changes
  const handlePageChange = (event, newPage) => {
    setPage(newPage);
    router.push(`/products?page=${newPage}`); // Update the URL with the new page
  };

  // Handle loading state
  if (isLoading) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100vh"
      >
        <CircularProgress />
      </Box>
    );
  }

  // Handle error state
  if (isError) {
    return (
      <Box>
        <Typography variant="h6" color="error">
          {error.message}
        </Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h4" sx={{ my: 3, textAlign: "center" }} gutterBottom>
        Our Products
      </Typography>
      <Box display="flex" flexWrap="wrap" gap={2} justifyContent="center">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Box>
      <Pagination
        count={totalPages}
        page={page}
        onChange={handlePageChange}
        variant="outlined"
        shape="rounded"
        disabled={isLoading}
        sx={{ mt: 3, display: "flex", justifyContent: "center" }}
      />
    </Box>
  );
};

export default Products;
