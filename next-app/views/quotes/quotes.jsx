import React from "react";
import { get } from "../../src/app/HttpClient";
import { QUOTES_ROUTES } from "../../src/app/AppRoutes";
import QuoteCard from "../../sections/quotes/quote-card";
import { Box, Typography } from "@mui/material";

// Works in Page Router
// This component will be pre-rendered at build time

// export async function getStaticProps() {

//     try {
//         // Call an external API endpoint to get quotes
//         const response = await get(`${QUOTES_ROUTES.GET_ALL_QUOTES}?limit=12&skip=0`)
//         const quotes = response.data.quotes || [] // Fallback to an empty array if quotes is undefined
//         console.log('API Response:', response); // Log the entire response

//          // Returning { props: { quotes } } will pass quotes data to the Quotes component at build time
//         return {
//             props: {
//                 quotes
//             }
//         }
//     }
//     catch(err) {
//         return {
//             props: {
//                 quotes: [], // Return an empty array if there’s an error
//             },
//         };
//     }
// }

// Works in App Router
// In App Router SSR, getServerSideProps is not used. Instead, you can directly fetch data in the component that is server-side.
const Quotes = async () => {
  let quotes = []; // Initialize quotes as an empty array
  let isError = false; // Initialize error state

  try {
    const response = await get(
      `${QUOTES_ROUTES.GET_ALL_QUOTES}?limit=8&skip=0`
    );
    quotes = response.data?.quotes || []; // Fallback to an empty array if quotes is undefined
  } catch (err) {
    console.error("Error fetching quotes:", err);
    isError = true;
  }

  if (isError) {
    return (
      <div className="full-container">
        An error occurred while fetching quotes. Please try again later.
      </div>
    ); // Handle error state
  }

  if (!quotes || quotes.length === 0) {
    return <div className="full-container">No quotes available.</div>;
  }

  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h4" sx={{ my: 3, textAlign: "center" }} gutterBottom>
        Quotes
      </Typography>
      <Box
        display="flex"
        flexWrap="wrap"
        gap={2}
        justifyContent="center"
        sx={{ p: 2 }}
      >
        {quotes.map((quote) => {
          return <QuoteCard key={quote.id} quote={quote} />;
        })}
      </Box>
    </Box>
  );
};

export default Quotes;
