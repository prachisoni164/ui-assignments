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
      setError(err.response.data.message || "Failed to fetch product.");
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
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="75vh"
      >
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box
        height={"75vh"}
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        sx={{ padding: 2 }}
      >
        <Alert severity="error">{error}</Alert>
      </Box>
    );
  }

  return (
    <Box
      height={"75vh"}
      display="flex"
      flexDirection="row"
      alignItems="center"
      justifyContent="center"
      sx={{ padding: 2 }}
    >
      {product ? (
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          width="50%"
          sx={{
            flexDirection: {
              xs: "column",
              sm: "column",
              md: "row",
            },
          }}
        >
          {/* Left Section: Image */}
          <Box>
            <Image
              src={product.thumbnail}
              alt={product.name || "Product Image"}
              width={200}
              height={200}
              style={{ objectFit: "cover" }}
            />
          </Box>

          {/* Right Section: Text */}
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            sx={{ maxWidth: "400px" }}
          >
            <Typography variant="h5" sx={{ marginBottom: 2 }}>
              {product.title}
            </Typography>
            <Typography variant="body2" sx={{ marginBottom: 2 }}>
              {product.description}
            </Typography>
          </Box>
        </Box>
      ) : (
        <Typography variant="h6">Product not found.</Typography>
      )}
    </Box>
  );
};

export default ProductById;
