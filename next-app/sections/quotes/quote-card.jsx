"use client";

import React from "react";
import { Card, CardContent, Typography, Box, Button } from "@mui/material";
import { useRouter } from "next/navigation";

const QuoteCard = ({ quote }) => {
  const router = useRouter();

  const handleCardClick = () => {
    router.push(`/quotes/${quote.id}`);
  };

  return (
    <Card
      onClick={handleCardClick}
      sx={{
        cursor: "pointer",
        transition: "0.3s",
        "&:hover": { boxShadow: 3 },
        width: 250,
        margin: 1,
      }}
      role="button"
      tabIndex={0}
      aria-label={`View quote by ${quote.author}`}
    >
      <CardContent>
        <Typography variant="h6" component="h2" gutterBottom>
          {quote.author}
        </Typography>
        <Typography variant="body2" sx={{ height: "70px" }}>
          {quote.quote}
        </Typography>
      </CardContent>
      <Box display="flex" justifyContent="flex-end" mt={2}>
        <Button
          onClick={handleCardClick}
          size="small"
          color="primary"
          sx={{
            marginRight: "10px",
            marginBottom: "10px",
            "&:hover": {
              backgroundColor: "transparent",
            },
          }}
        >
          View Details
        </Button>
      </Box>
    </Card>
  );
};

export default QuoteCard;
