import React from "react";
import { Typography, Box } from "@mui/material";

const QuoteById = ({ quote }) => {
  return (
    <Box
      sx={{
        padding: 2,
        textAlign: "center",
        height: "75vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography variant="h4" component="h2" gutterBottom>
        {quote.author}
      </Typography>
      <Typography
        variant="body1"
        sx={{ fontStyle: "italic" }}
        color="text.secondary"
      >
        {quote.quote}
      </Typography>
    </Box>
  );
};

export default QuoteById;
