import React from "react";
import { get } from "../../../../app/HttpClient";
import { QUOTES_ROUTES } from "../../../../app/AppRoutes";
import QuoteById from "../../../../../views/quotes/quote-by-id";
import { Box, Typography, Alert } from "@mui/material";

// Works in AppRouter
// Implementing Static Site Generation (SSG) using generateStaticParams()
// Generate static paths for dynamic route /quotes/[id]
export async function generateStaticParams() {
  // Fetch quotes from the API to generate the list of static paths
  const response = await get(`${QUOTES_ROUTES.GET_ALL_QUOTES}?limit=12&skip=0`);
  const quotes = response.data?.quotes || [];

  // Return an array of objects with the id property
  return quotes.map((quote) => ({
    id: quote.id.toString(), // Convert id to string
  }));
}

// Fetch data for each individual quote at build time
const Quote = async ({ params }) => {
  const { id } = params;

  let quote = null; // Initialize quote to null
  let isError = false; // Track error state

  try {
    const response = await get(`${QUOTES_ROUTES.GET_QUOTE}${id}`);
    quote = response.data || null; // Assign the fetched quote data
  } catch (err) {
    isError = true; // Set error state if fetching fails
  }

  // Check if an error occurred while fetching the quote
  if (isError) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="75vh"
      >
        <Alert severity="error">Error fetching quote.</Alert>
      </Box>
    );
  }

  // Check if the quote was found
  if (!quote) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="75vh"
      >
        <Typography variant="h6">Quote not found.</Typography>
      </Box>
    );
  }

  return <QuoteById quote={quote} />;
};

export default Quote;
