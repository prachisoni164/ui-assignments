"use client";

import React, { useState, useEffect } from "react";
import { get } from "../../src/app/HttpClient";
import { PRODUCT_ROUTES } from "../../src/app/AppRoutes";
import Image from "next/image";
import { Box, Typography, CircularProgress, Alert } from "@mui/material";

const ProductById = ({ id }) => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchProductById = async (productId) => {
    try {
      const response = await get(`${PRODUCT_ROUTES.GET_PRODUCT}${productId}`);
      setProduct(response.data);
    } catch (err) {
      setError(err.response.data.message || "Failed to fetch product."); // Improved error message handling
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProductById(id);
  }, [id]);

  if (loading) {
    return (
      <Box
        className="full-container"
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100vh"
      >
        <CircularProgress />
      </Box>
    ); // Show loading spinner
  }

  if (error) {
    return (
      <Box className="full-container">
        <Alert severity="error">{error}</Alert> // Use Material-UI Alert for
        error messages
      </Box>
    );
  }

  return (
    <Box
      height={"75vh"}
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      sx={{ padding: 2 }}
    >
      {product ? (
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          textAlign="center"
        >
          <Image
            src={product.thumbnail}
            alt={product.name || "Product Image"}
            width={150}
            height={150}
            style={{ objectFit: "cover" }} // Ensures the image fits well
          />
          <Typography variant="h5" sx={{ marginTop: 2 }}>
            {product.title}
          </Typography>
          <Typography variant="body2" sx={{ marginTop: 1 }}>
            {product.description}
          </Typography>
        </Box>
      ) : (
        <Typography variant="h6">Product not found.</Typography>
      )}
    </Box>
  );
};

export default ProductById;
